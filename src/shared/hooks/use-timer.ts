import { TimeStamp } from '@shared/interfaces';
import { createEffect, createSignal, on, onCleanup } from 'solid-js';

export function useTimer(accessor: () => TimeStamp) {
  const [time, setTime] = createSignal(Date.now());
  createEffect(
    on(accessor, (endTime) => {
      const offsetTime = endTime % 1000;
      let intervalTime: NodeJS.Timeout;
      // we create first time to make sure the time will be updated when it reach the endTime
      const offsetTimer = setTimeout(() => {
        setTime(Date.now());
        intervalTime = setInterval(() => {
          setTime(Date.now());
        }, 1000);
      }, offsetTime);

      onCleanup(() => {
        clearTimeout(offsetTimer);
        clearInterval(intervalTime);
      });
    }),
  );

  const remainingTime = () => {
    return Math.max(accessor() - time(), 0);
  };

  return remainingTime;
}
