import { createSignal } from 'solid-js';
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
