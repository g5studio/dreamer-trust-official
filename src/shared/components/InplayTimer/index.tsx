import { DateFormatType } from '@shared/enums';
import { SimpleTimesInString, TimeStamp } from '@shared/interfaces';
import { IBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { alignStandardTime, formatDate, getTimeStringToTimeStamp } from '@utilities/helpers/time.helper';
import { Show, createEffect, createSignal, onCleanup, onMount } from 'solid-js';
import { customTwMerge } from '@utilities/helpers/format.helper';
import { padStart } from '@utilities/helpers/utilities.helper';

export interface IInplayTimerProps extends IBaseComponentProps {
  displayTime?: SimpleTimesInString;
  receiveTime?: TimeStamp;
  serverTime?: TimeStamp;
  isCountdown?: boolean;
  isSportGameTime?: boolean;
}

function getTime({
  displayTime,
  receiveTime,
  serverTime,
  isCountdown,
}: {
  displayTime?: SimpleTimesInString;
  receiveTime?: TimeStamp;
  serverTime?: TimeStamp;
  isCountdown?: boolean;
}) {
  const initialTime = getTimeStringToTimeStamp(displayTime || '', DateFormatType.SimpleTimes);
  const currentTime = alignStandardTime(serverTime || 0);
  // ts = received time
  const offsetTime = currentTime - (receiveTime || 0);
  if (offsetTime > 0) {
    return initialTime + offsetTime * (isCountdown ? -1 : 1);
  }
  return initialTime;
}

const InplayTimer = (props: IInplayTimerProps) => {
  const [time, setTime] = createSignal(getTime(props));
  let timer: NodeJS.Timeout;
  let nextTime = 0;

  createEffect(() => {
    nextTime = getTime(props);
  });

  const alignTime = (prev: number) => {
    if (nextTime) {
      const next = nextTime;
      nextTime = 0;
      // align time if the difference is more than 3 seconds
      if (Math.abs(prev - next) > 3000) {
        return next;
      }
    }
    return prev;
  };

  onMount(() => {
    timer = setInterval(() => {
      setTime((pre) => {
        // countdown or count up, minimum is 0
        return Math.max(alignTime(pre) + 1000 * (props.isCountdown ? -1 : 1), 0);
      });
    }, 1000);
  });

  onCleanup(() => {
    clearTimeout(timer);
  });

  const getSportGameTime = (timestamp: TimeStamp) => {
    if (!timestamp || timestamp <= 0) {
      return '00:00';
    }

    const minutes = Math.floor(timestamp / (60 * 1000));
    const second = Math.floor((timestamp % (60 * 1000)) / 1000);

    return `${padStart(String(minutes), 2, '0')}:${padStart(String(second), 2, '0')}`;
  };

  return (
    <Show
      when={!props.isSportGameTime}
      fallback={
        <span data-testid={props.testId} class={customTwMerge('text-xs', props.classes)}>
          {getSportGameTime(time())}
        </span>
      }>
      <span data-testid={props.testId} class={customTwMerge('text-xs', props.classes)}>
        {formatDate({
          timestamp: time(),
          formatType: DateFormatType.SimpleTimes,
        })}
      </span>
    </Show>
  );
};
export default InplayTimer;
