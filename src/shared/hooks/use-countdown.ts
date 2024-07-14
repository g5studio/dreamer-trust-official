import { Millisecond } from '@shared/interfaces';
import { createSignal, onCleanup } from 'solid-js';

export function useCountdown(accessor: () => Millisecond) {
  const [time, setTime] = createSignal(accessor());
  const [isStarted, setIsStarted] = createSignal(false);
  const [isCounting, setIsCounting] = createSignal(false);

  let intervalTime: NodeJS.Timeout;

  const start = () => {
    setIsStarted(true);
    setIsCounting(true);
    setTime(accessor());
    intervalTime = setInterval(() => {
      setTime((prev) => {
        const remainingTime = prev - 1000;
        if (remainingTime <= 0) {
          setIsCounting(false);
          clearInterval(intervalTime);
          return 0;
        }
        return remainingTime;
      });
    }, 1000);
    return () => {
      clearInterval(intervalTime);
    };
  };

  onCleanup(() => {
    clearInterval(intervalTime);
  });

  return { time, start, isStarted, isCounting };
}
