import { TimeStamp } from '@shared/interfaces';
import { IBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { formatClasses } from '@utilities/helpers/format.helper';
import { JSX, Show, createEffect, createSignal, mergeProps, on, onCleanup } from 'solid-js';
import ProgressBar from '../ProgressBar';
import Picture from '../Picture';

//! original code use seconds, but it is better to simplify the logic by using ms
interface ICountdownBlockProps extends IBaseComponentProps {
  startTime: TimeStamp;
  endTime: TimeStamp;
  /**
   * buffer time in ms
   */
  bufferTime?: number;
  showProgressBar?: boolean;
  isPaused?: boolean;
  iconPath?: string;
  /**
   * elapsedTime in ms
   */
  textSlot?: (elapsedTime: () => number) => JSX.Element;
  onComplete?: () => void;
}

const CountdownBlock = (props: ICountdownBlockProps) => {
  const mergedProps = mergeProps(
    {
      showProgressBar: true,
      startTime: 0,
      endTime: 1,
      isPaused: false,
      bufferTime: 0,
    },
    props,
  );
  const [hasCompleted, setHasCompleted] = createSignal(false);
  const [currentTime, setCurrentTime] = createSignal(Date.now());
  const timer = setInterval(() => {
    if (!mergedProps.isPaused) {
      const now = Date.now();
      setCurrentTime(now);
      if (now >= mergedProps.endTime && !hasCompleted()) {
        // we don't clear timer here to prevent endTime from being updated
        setHasCompleted(true);
        mergedProps.onComplete?.();
      }
    }
  }, 1000);

  createEffect(
    on(
      () => mergedProps.endTime,
      () => {
        // reset hasCompleted when endTime is updated
        setHasCompleted(false);
      },
    ),
  );

  const duration = () => {
    return Math.max(mergedProps.endTime - mergedProps.startTime, 1);
  };

  const progress = () => {
    const elapsed = currentTime() - mergedProps.startTime;
    return 1 - Math.min(Math.max(elapsed / duration(), 0), 1);
  };

  const bufferProgress = () => {
    return Math.min(Math.max(mergedProps.bufferTime / duration(), 0), 1);
  };

  const elapsedTime = () => {
    return Math.max(mergedProps.endTime - currentTime(), 0);
  };

  onCleanup(() => {
    clearInterval(timer);
  });
  return (
    <div data-testid={props.testId} class={formatClasses('bg-layer-3', props.classes)}>
      <Show when={mergedProps.showProgressBar}>
        <ProgressBar
          progress={progress()}
          bufferProgress={bufferProgress()}
          barClasses={mergedProps.isPaused ? 'bg-black-5' : ''}
          barGradient={mergedProps.isPaused ? '' : undefined}
        />
        <div class="flex items-center gap-1_5 px-2 py-2">
          <div class="align-center flex h-12 w-12 shrink-0">
            <Show when={mergedProps.iconPath}>
              <Picture classes="h-full w-full" src={mergedProps.iconPath ?? ''} />
            </Show>
          </div>
          <div class="mx-1 w-full">{mergedProps.textSlot?.(elapsedTime) ?? ''}</div>
        </div>
      </Show>
    </div>
  );
};
export default CountdownBlock;
