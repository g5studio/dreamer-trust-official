import { createSignal, onCleanup } from 'solid-js';
import { oneSecondWithMileSeconds } from '@shared/constants/time.constants';
import { useRaf } from './use-raf';

export interface IAnimationConfig {
  duration: number;
  delay?: number;
  ease?: (t: number) => number;
  start: number;
  end: number;
  repeat?: number;
  yoyo?: boolean;
  startTime?: number;
}

function normalizeProgress(progress: number, repeat?: number, yoyo?: boolean) {
  let t = repeat ? progress % 1 : progress;
  if (repeat !== undefined && repeat > 0 && t > repeat) {
    t = 1;
  }
  if (yoyo && Math.floor(progress) % 2 === 1) {
    t = 1 - t;
  }
  return Math.min(Math.max(t, 0), 1);
}

export function getCurrentValue(start: number, end: number, t: number) {
  return start + (end - start) * t;
}

export function useAnimation(accessor: () => IAnimationConfig) {
  const [value, setValue] = createSignal(0);
  const update = () => {
    const { duration, delay = 0, ease, start, end, repeat, yoyo, startTime } = accessor();
    if (startTime !== undefined) {
      const now = Date.now();
      const elapsed = now - startTime;
      const time = Math.min(Math.max(elapsed - delay, 0), duration);
      // handle repeat and loop to generate t
      const progress = time / duration;
      const normalizedT = normalizeProgress(progress, repeat, yoyo);
      const tAfterEase = ease ? ease(normalizedT) : normalizedT;
      const newValue = getCurrentValue(start, end, tAfterEase);
      setValue(newValue);
    } else {
      setValue(start);
    }
  };
  useRaf(() => update);
  return value;
}

type Props = {
  length: number;
  /**
   * @default 0.3s
   */
  interval?: number;
  /**
   * @description 每次推進數量
   * @default 1
   */
  batchNumbers?: number;
};

export const use1By1FadeInAnimation = ({
  length,
  interval = 0.3 * oneSecondWithMileSeconds,
  batchNumbers = 1,
}: Props) => {
  const [animationStartList, setAnimationStartList] = createSignal<boolean[]>(Array.from({ length }).map(() => false));

  let timer: NodeJS.Timeout | undefined;

  const setNextStart = () => {
    const currentIndex = animationStartList().findLastIndex((e) => !!e) + 1;
    setAnimationStartList((pre) => {
      const temp = [...pre];
      for (let i = 0; i < batchNumbers; i++) {
        temp[currentIndex + i] = true;
      }
      return temp;
    });
  };

  const start = () => {
    if (timer) {
      clearTimeout(timer);
    }
    setNextStart();
    timer = setTimeout(() => {
      start();
    }, interval);
  };

  onCleanup(() => {
    if (timer) {
      clearTimeout(timer);
    }
  });

  return {
    start,
    animationStartList,
  };
};
