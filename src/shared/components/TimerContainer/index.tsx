import { TimeUnit } from '@shared/interfaces';
import { IBaseComponentProps } from '@shared/interfaces/base-component.interface';
import Dayjs from 'dayjs';
import { Accessor, JSXElement, Setter, createEffect, createSignal, mergeProps, onCleanup, onMount } from 'solid-js';

type TimerUnit = Extract<TimeUnit, 'millisecond' | 'second' | 'minute' | 'hour'>;

export interface ITimerContainer {
  reset: () => void;
  pause: () => void;
  start: () => void;
  /**
   * 校正時間
   * @param time 時間
   * @param unit 時間單位，預設毫秒
   */
  correctTime: (time: number, unit?: TimerUnit) => void;
}

type BaseCounterProps = {
  /**
   * 計時器顯示單位
   * @default 'second'
   */
  countUnit?: TimerUnit;
  /**
   * @description millisecond
   */
  max?: number;
  /**
   * @description millisecond
   */
  min?: number;
  /**
   * 數值碰到邊界時是否重來
   * @default false
   */
  loop?: boolean;
};

type CounterDownProps = BaseCounterProps &
  Required<Pick<BaseCounterProps, 'max'>> & {
    countMode: 'down';
  };

type CounterUpProps = BaseCounterProps &
  Required<Pick<BaseCounterProps, 'min'>> & {
    countMode: 'up';
  };

interface ITimerContainerProps extends Omit<IBaseComponentProps, 'testId' | 'children' | 'ref'> {
  children: (props: { current: Accessor<number>; unit: Dayjs.ManipulateType }) => JSXElement;
  ref?: Setter<ITimerContainer | undefined>;
  onTimeout?: () => void;
}

type CounterProps = CounterDownProps | CounterUpProps;

/**
 * 倒數計時器
 */
const TimerContainer = (props: ITimerContainerProps & CounterProps) => {
  const defaultValue = () => (props.countMode === 'down' ? props.max : props.min);
  // eslint-disable-next-line solid/reactivity
  const [current, setCurrent] = createSignal<number>(defaultValue());
  const [isPause, setIsPause] = createSignal<boolean>(false);
  const mergedProps: Required<CounterProps> = mergeProps<[Required<Omit<CounterProps, 'countMode'>>, CounterProps]>(
    {
      countUnit: 'second',
      loop: false,
      max: Infinity,
      min: 0,
    },
    props,
  );

  /**
   * @param unit
   * @default 1000
   */
  const getMillisecond = (unit: TimerUnit): number =>
    ({
      millisecond: 1,
      second: 1000,
      minute: 60000,
      hour: 3600000,
    })[unit] ?? 1000;

  let timer: NodeJS.Timeout | undefined;

  const next = () => (mergedProps.countMode === 'down' ? current() - 1 : current() + 1);
  const pause = () => setIsPause(true);
  const start = () => setIsPause(false);
  onMount(() => {
    props.ref?.(() => ({
      pause,
      start,
      reset: () => {
        pause();
        setCurrent(defaultValue());
        start();
      },
      correctTime: (time, unit = 'millisecond') => {
        pause();
        setCurrent((time * getMillisecond(unit)) / getMillisecond(mergedProps.countUnit));
        start();
      },
    }));
  });

  createEffect(() => {
    setCurrent(defaultValue());
  });

  createEffect(() => {
    switch (mergedProps.countMode) {
      case 'down':
        if (current() === mergedProps.min) {
          props.onTimeout?.();
        }
        break;
      case 'up':
        if (current() === mergedProps.max) {
          props.onTimeout?.();
        }
        break;
      default:
        break;
    }
  });

  createEffect(() => {
    if (!isPause()) {
      timer = setInterval(() => {
        switch (mergedProps.countMode) {
          case 'down':
            if (mergedProps.loop) {
              setCurrent(next() < mergedProps.min ? mergedProps.max : next());
            } else if (next() >= mergedProps.min) {
              setCurrent(next());
            }
            break;
          case 'up':
            if (mergedProps.loop) {
              setCurrent(next() > mergedProps.max ? mergedProps.min : next());
            } else if (next() <= mergedProps.max) {
              setCurrent(next());
            }
            break;
          default:
            break;
        }
      }, getMillisecond(mergedProps.countUnit));
    }

    onCleanup(() => {
      clearInterval(timer);
    });
  });

  return <>{props.children({ current, unit: mergedProps.countUnit })}</>;
};
export default TimerContainer;
