import { IBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { formatClasses } from '@utilities/helpers/format.helper';
import {
  Accessor,
  For,
  JSXElement,
  Match,
  Setter,
  Show,
  Switch,
  children,
  createEffect,
  createMemo,
  createSignal,
  mergeProps,
  onCleanup,
  onMount,
} from 'solid-js';

import { Direction } from '@shared/enums';
import { registerDirective } from '@utilities/helpers/directive.helper';
import { domProperty } from '@utilities/directives/dom-property-directive';
import OutViewContainer from '../OutViewContainer';

registerDirective(domProperty);

type Animation = 'slide' | 'fade';

type LoopProps = {
  replayMode: 'loop';
  outViewClasses?: string;
  outViewContainerClasses?: string;
};

type NoReplayProps = {
  replayMode: 'no-replay';
};

type ForwardProps = {
  replayMode: 'forward';
};

type ReplayModeProps = LoopProps | NoReplayProps | ForwardProps;

interface ICarouselContainerProps
  extends Required<Pick<IBaseComponentProps, 'testId'>>,
    Omit<IBaseComponentProps, 'testId' | 'children' | 'ref'> {
  sliderSlot?: (currentIndex: Accessor<number>, changeIndex: (index: number) => void) => JSXElement;
  children: () => JSXElement;
  /**
   * 最大播放長度
   */
  maxLength: number;
  direction: Extract<Direction, Direction.Horizontal | Direction.Vertical>;
  containerClasses?: string;
  contentClasses?: string;
  defaultIndex?: number;
  /**
   * 幻燈片位移距離
   * @default '100%'
   */
  offset?: string;
  /**
   * loop 模式下，每個畫面顯示的數量
   * 預設 Buffer 為 3，如果未完整顯示才需調整
   * @default 3
   */
  countPerView?: number;
  /**
   * 播放時間
   * @description（單位/ms），為InFinite時不自動輪播
   * @default 3000
   */
  playTime?: number;
  /**
   * 過場動畫
   * @default 'slide'
   */
  animation?: Animation;
  /**
   * 移動時間
   * @description（單位/ms），為0時無移動特效
   * @default 500
   */
  transition?: number;
  ref?: Setter<ICarouselContainer | undefined>;
  onChange?: (index: number) => void;
  ratio?: number;
}

type Props = ICarouselContainerProps & ReplayModeProps;

export interface ICarouselContainer {
  switchTo: (index: number) => void;
  next: () => void;
  previous: () => void;
  current: () => number;
}

/**
 * 計算卡片偏移量
 */
const getOffset = (props: Props, current: Accessor<number>): string => {
  if (props.replayMode === 'loop') {
    return `1*${props.offset}*${props.maxLength} - ${props.offset}*${current()}`;
  }

  /**
   * 當最後偏移量不滿 100% 時，需調整偏移量
   */
  if (props.ratio && current() === props.maxLength - 1 && props.ratio < 1 && props.ratio > 0) {
    return `${props.offset}*${current() - 1 + props.ratio}`;
  }

  return `${props.offset}*${current()}`;
};

function useAnimation({
  currentIndex,
  setCurrentIndex,
  replayMode,
  maxLength,
  playTime,
  countPerView,
  next,
}: {
  currentIndex: Accessor<number>;
  setCurrentIndex: Setter<number>;
  replayMode: () => 'loop' | 'no-replay' | 'forward';
  maxLength: () => number;
  playTime: () => number | undefined;
  countPerView: () => number;
  next: () => void;
}) {
  const [isFreezeAnimation, setIsFreezeAnimation] = createSignal<boolean>(false);
  // ! loop mode 前後須預留與children同等大小片段
  const [loopTimes, setLoopTimes] = createSignal<number>(3);
  let timer: NodeJS.Timeout;

  const autoPlay = () => {
    if (Number.isFinite(+playTime()!)) {
      timer = setTimeout(() => {
        next();
        autoPlay();
      }, playTime());
    }
  };

  createEffect(() => {
    switch (replayMode()) {
      case 'forward':
        if (currentIndex() >= maxLength()) {
          setCurrentIndex(0);
        }
        if (currentIndex() === -1) {
          setCurrentIndex(maxLength() - 1);
        }
        break;
      case 'loop':
        if (currentIndex() + countPerView() + 1 * maxLength() >= maxLength() * loopTimes()) {
          setLoopTimes((pre) => pre + 1);
        }
        break;
      default:
        break;
    }
  });

  createEffect(() => {
    let freezeTimer: NodeJS.Timeout;
    if (isFreezeAnimation()) {
      freezeTimer = setTimeout(() => {
        setIsFreezeAnimation(false);
      }, 0);
      setCurrentIndex(0);
    }
    onCleanup(() => {
      clearTimeout(freezeTimer);
    });
  });

  const clearAutoPlay = () => {
    clearTimeout(timer);
  };

  createEffect(() => {
    autoPlay();
    onCleanup(() => {
      clearAutoPlay();
    });
  });

  return {
    setIsFreezeAnimation,
    autoPlay,
    isFreezeAnimation,
    loopTimes,
    clearAutoPlay,
  };
}

/**
 * 輪播器外部事件
 */
const useCarouselAction = ({ props, setCurrentIndex }: { props: Props; setCurrentIndex: Setter<number> }) => {
  const [transitioning, setTransitioning] = createSignal(false);

  const freezeAction = () => props.replayMode === 'loop' && transitioning();

  const switchTo = (index: number) => setCurrentIndex(index);

  const next = () => {
    if (!freezeAction()) {
      setTransitioning(true);
      setCurrentIndex((pre) => {
        if (props.replayMode === 'no-replay') {
          return pre + 1 >= props.maxLength ? pre : pre + 1;
        }
        return pre + 1;
      });
    }
  };

  const previous = () => {
    if (!freezeAction()) {
      setTransitioning(true);
      setCurrentIndex((pre) => {
        if (props.replayMode === 'no-replay') {
          return pre - 1 < 0 ? pre : pre - 1;
        }
        return pre - 1;
      });
    }
  };

  return {
    next,
    previous,
    switchTo,
    setTransitioning,
  };
};

/**
 * 封裝輪播行為
 */
const CarouselContainer = (props: Props) => {
  const [currentIndex, setCurrentIndex] = createSignal<number>(props.defaultIndex ?? 0);

  const mergedProps: Props = mergeProps(
    {
      playTime: 3000,
      offset: '100%',
      countPerView: 3,
      transition: 500,
      replayMode: 'forward',
      animation: 'slide',
    } as Partial<Props>,
    props,
  );

  const { previous, next, switchTo, setTransitioning } = useCarouselAction({ props: mergedProps, setCurrentIndex });
  const { setIsFreezeAnimation, autoPlay, isFreezeAnimation, loopTimes, clearAutoPlay } = useAnimation({
    currentIndex,
    setCurrentIndex,
    replayMode: () => mergedProps.replayMode,
    maxLength: () => mergedProps.maxLength,
    playTime: () => mergedProps.playTime,
    countPerView: () => mergedProps.countPerView!,
    next,
  });

  const current = () => currentIndex();
  const childrenSnapshot = createMemo(() => children(() => mergedProps.children()).toArray() ?? []);
  const offset = () => getOffset(mergedProps, current);

  const isFirst = () =>
    mergedProps.replayMode === 'loop' &&
    offset()
      .split(' - ')
      .map((_) => +_.replace(/[\w|\W]+\*/, ''))
      .reduce((total, _) => total + _, 0) === 0;

  const handleOnIndexChanged = (index: number) => {
    clearAutoPlay();
    autoPlay();
    setCurrentIndex(index);
  };

  const handleTransitionEnd = () => {
    if (isFirst()) {
      setIsFreezeAnimation(true);
    }
    setTransitioning(false);
  };

  onMount(() => {
    mergedProps.ref?.(() => ({
      next,
      previous,
      switchTo,
      current,
    }));
  });

  createEffect(() => {
    props.onChange?.(current());
  });

  return (
    <div data-testid={mergedProps.testId} class={formatClasses(mergedProps.classes)}>
      <div
        class={formatClasses(
          {
            'overflow-hidden': mergedProps.animation === 'slide',
          },
          mergedProps.containerClasses,
        )}>
        <section
          class={formatClasses('relative h-full w-full', mergedProps.contentClasses)}
          data-testid={`${mergedProps.testId}-contents`}
          style={
            mergedProps.animation === 'slide'
              ? {
                  transition: `${isFreezeAnimation() ? 0 : mergedProps.transition! / 1000}s`,
                  transform: `translate${
                    mergedProps.direction === Direction.Horizontal ? 'X' : 'Y'
                  }(calc(-${offset()}))`,
                }
              : {}
          }
          onTransitionEnd={handleTransitionEnd}>
          <Switch>
            <Match when={mergedProps.animation === 'slide'}>
              <Show when={mergedProps.replayMode === 'loop'} fallback={mergedProps.children()}>
                <div
                  class={formatClasses(
                    'flex w-full flex-row items-center',
                    {
                      'flex-row': mergedProps.direction === Direction.Horizontal,
                      'flex-col': mergedProps.direction === Direction.Vertical,
                    },
                    mergedProps.replayMode === 'loop' ? mergedProps.outViewContainerClasses : '',
                  )}>
                  <For
                    each={Array.from({ length: loopTimes() }).map(() =>
                      children(() => mergedProps.children())
                        .toArray()
                        .map((child) => (
                          <OutViewContainer
                            classes={formatClasses(
                              mergedProps.replayMode === 'loop' ? mergedProps.outViewClasses : '',
                            )}>
                            {child}
                          </OutViewContainer>
                        )),
                    )}>
                    {(e) => e}
                  </For>
                </div>
              </Show>
            </Match>
            <Match when={mergedProps.animation === 'fade'}>
              <>
                <div class="invisible">{children(() => mergedProps.children()).toArray()[0]}</div>
                <For<HTMLElement[], JSXElement> each={childrenSnapshot() as HTMLElement[]}>
                  {(e, index) => (
                    <div
                      class={formatClasses('absolute left-0 top-0 z-cover', {
                        'z-canvas opacity-100': index() === current(),
                        'opacity-0': index() !== current(),
                      })}
                      style={{
                        transition: `${mergedProps.transition! / 1000}s`,
                      }}>
                      {e}
                    </div>
                  )}
                </For>
              </>
            </Match>
          </Switch>
        </section>
      </div>
      {props.sliderSlot?.(current, handleOnIndexChanged)}
    </div>
  );
};
export default CarouselContainer;
