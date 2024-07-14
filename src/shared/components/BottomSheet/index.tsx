import {
  IBaseOverlay,
  IBaseOverlayProps,
  ICustomEventWithHammerInput,
} from '@shared/interfaces/base-component.interface';
import { customTwMerge, formatClasses } from '@utilities/helpers/format.helper';
import { registerDirective } from '@utilities/helpers/directive.helper';
import { batch, createSignal, onCleanup, JSX, Show } from 'solid-js';
import { easeOutBack } from '@utilities/helpers/animation.helper';
import { IAnimationConfig, useAnimation } from '@shared/hooks/use-animation';
import { pan } from '@utilities/directives/pan-directive';
import style from './index.module.scss';

registerDirective(pan);

export interface IBottomSheetProps extends IBaseOverlayProps {
  contentSlot: (params: { onClose: () => void }) => JSX.Element;
  headerSlot?: (params: { onClose: () => void }) => JSX.Element;
  disableHeader?: boolean;
  headerClasses?: string;
  contentClasses?: string;
  backgroundClose?: boolean;
}

enum BottomSheetState {
  Original = 0,
  Dragging,
  BounceBack,
  Close,
  Expand,
}

const setAnimationByStartEnd = ({
  setAnimationConfig,
  start,
  end,
}: {
  setAnimationConfig: (config: IAnimationConfig) => void;
  start: number;
  end: number;
}) => {
  const velocity = 0.8;
  const duration = Math.abs(end - start) / velocity;
  setAnimationConfig({
    startTime: Date.now(),
    start,
    end,
    duration,
    ease: easeOutBack,
  });
  return duration;
};

const BottomSheet = (props: IBottomSheetProps & IBaseOverlay) => {
  const [state, setState] = createSignal<BottomSheetState>(BottomSheetState.Original);
  const [dragY, setDragY] = createSignal(0);
  const [animationConfig, setAnimationConfig] = createSignal<IAnimationConfig>({
    duration: 300,
    start: 0,
    end: 0,
  });
  const timeline = useAnimation(animationConfig);
  let ref: HTMLDivElement | undefined;
  let originalHeight = 0;
  let animationTimer: NodeJS.Timeout | undefined;
  let freezedHeight = 0;
  let dragStartHeight = 0;
  const onPanStart = () => {
    if (state() !== BottomSheetState.Close) {
      if (animationTimer) {
        clearTimeout(animationTimer);
      }
      dragStartHeight = ref?.clientHeight ?? 0;
      if (state() === BottomSheetState.Original) {
        originalHeight = dragStartHeight;
      }
      setDragY(0);
      setState(BottomSheetState.Dragging);
    }
  };

  const onPanMove = (e: ICustomEventWithHammerInput) => {
    if (state() === BottomSheetState.Dragging) {
      setDragY(e.detail.deltaY);
    }
  };

  const onPanEnd = () => {
    if (animationTimer) {
      clearTimeout(animationTimer);
    }
    if (state() === BottomSheetState.Dragging) {
      batch(() => {
        // if over 1/3 of the height, close the bottom sheet
        const fullHeight = window.innerHeight ?? 0;
        const currentHeight = dragStartHeight - dragY();
        // the close threshold is different between expand and original
        // if the bottom sheet is expanded, the close threshold is 1/2 of the original height
        // if the bottom sheet is original, the close threshold is 1/3 of the original height
        const isClose = dragStartHeight > originalHeight ? dragY() > dragStartHeight / 2 : dragY() > originalHeight / 3;
        // the expand threshold is 1/2 of the gap between original height and full height
        // if the bottom sheet is expanded, exceed the threshold, it will bounce back to original height
        // if the bottom sheet is original, exceed the threshold, it will expand to full height
        const isExpand =
          dragStartHeight > originalHeight
            ? dragY() < (dragStartHeight - originalHeight) / 2
            : // negative drag y means the bottom sheet is dragged up
              -dragY() > (fullHeight - originalHeight) / 2;
        if (isClose) {
          // freeze the height before animation out
          freezedHeight = currentHeight;
          props.onClose();
        } else if (isExpand) {
          // expand to full height or recover to full height
          setAnimationByStartEnd({
            setAnimationConfig,
            start: currentHeight,
            end: fullHeight,
          });
          setState(BottomSheetState.Expand);
        } else {
          // recover to original height
          const duration = setAnimationByStartEnd({
            setAnimationConfig,
            start: currentHeight,
            end: originalHeight,
          });
          setState(BottomSheetState.BounceBack);
          animationTimer = setTimeout(
            () => {
              if (state() === BottomSheetState.BounceBack) {
                setState(BottomSheetState.Original);
              }
            },
            Math.max(duration, 0),
          );
        }
      });
    }
  };

  const height = () => {
    if (state() === BottomSheetState.Dragging) {
      return `${dragStartHeight - dragY()}px`;
    }
    if (state() === BottomSheetState.BounceBack || state() === BottomSheetState.Expand) {
      return `${timeline()}px`;
    }
    if (state() === BottomSheetState.Close) {
      return `${freezedHeight}px`;
    }
    return undefined;
  };

  onCleanup(() => {
    if (animationTimer) {
      clearTimeout(animationTimer);
    }
  });

  return (
    <div
      ref={ref}
      data-testid={props.testId}
      class={formatClasses(
        'ml-safe-area-inset-left mr-safe-area-inset-right box-border flex w-full flex-grow touch-none select-none flex-col items-start justify-start rounded-t-2xl bg-layer-3',
        style['component-bottom-sheet'],
        {
          'max-h-[80vh]': state() === BottomSheetState.Original,
        },
        props.classes,
      )}
      style={{
        height: height(),
      }}>
      {/* handle */}
      <div
        class={formatClasses('w-full text-center', props.headerClasses)}
        use:pan={{
          direction: Hammer.DIRECTION_VERTICAL,
          enable: state() !== BottomSheetState.Close,
        }}
        on:panstart={onPanStart}
        on:pan={onPanMove}
        on:pancancel={onPanEnd}
        on:panend={onPanEnd}>
        <Show when={!props.disableHeader}>
          <Show when={props.headerSlot} fallback={<div class="m-2 mx-auto h-1 w-20 rounded-full bg-gray-200" />}>
            {props.headerSlot!({
              onClose: props.onClose,
            })}
          </Show>
        </Show>
      </div>
      {/* content */}
      <div
        class={customTwMerge(
          'w-full shrink grow select-auto overflow-auto overscroll-contain',
          props.contentClasses,
          style['component-bottom-sheet__content'],
        )}>
        {props.contentSlot({
          onClose: props.onClose,
        })}
      </div>
    </div>
  );
};

export default BottomSheet;
