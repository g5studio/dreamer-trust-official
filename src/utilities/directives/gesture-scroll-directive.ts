import { createEffect, on, onCleanup } from 'solid-js';
import { swipe } from './swipe-directive';
import { pan } from './pan-directive';

export interface IGestureScrollProps {
  isHorizontal?: boolean;
  threshold?: number;
  swipeDistance?: 'auto' | number;
  swipeOptions?: RecognizerOptions;
  panOptions?: RecognizerOptions;
  /**
   * default: true
   */
  allowPan?: boolean;
  /**
   * @default false
   */
  disabled?: boolean;
}

declare module 'solid-js' {
  namespace JSX {
    interface Directives {
      gestureScroll: IGestureScrollProps;
    }
  }
}

function gestureScroll(node: HTMLElement, accessor: () => IGestureScrollProps) {
  const isHorizontal = () => accessor().isHorizontal ?? true;
  const swipeDistance = () => accessor().swipeDistance ?? 'auto';
  const direction = () => (isHorizontal() ? Hammer.DIRECTION_HORIZONTAL : Hammer.DIRECTION_VERTICAL);
  const allowPan = () => accessor().allowPan ?? true;
  const onSwipe = (e: HammerInput) => {
    const distanceSetting = swipeDistance();
    let offset: number;
    if (distanceSetting === 'auto') {
      offset = isHorizontal() ? -e.velocityX * 100 : -e.velocityY * 100;
    } else {
      offset = isHorizontal() ? -Math.sign(e.deltaX) * distanceSetting : -Math.sign(e.deltaY) * distanceSetting;
    }
    if (isHorizontal()) {
      node.scrollTo({
        left: node.scrollLeft + offset,
        behavior: 'smooth',
      });
    } else {
      node.scrollTo({
        top: node.scrollTop + offset,
        behavior: 'smooth',
      });
    }
  };
  let scrollStartPoint: number;
  const onPanStart = () => {
    scrollStartPoint = isHorizontal() ? node.scrollLeft : node.scrollTop;
  };
  const onPan = (e: HammerInput) => {
    // 如果不允許 pan，就不要做任何事
    if (!allowPan()) {
      return;
    }
    const distance = isHorizontal() ? e.deltaX : e.deltaY;
    const scrollDistance = scrollStartPoint - distance;
    if (isHorizontal()) {
      node.scrollTo({
        left: scrollDistance,
        behavior: 'auto',
      });
    } else {
      node.scrollTo({
        top: scrollDistance,
        behavior: 'auto',
      });
    }
  };
  const panHammer = pan(node, () => {
    return {
      ...accessor().panOptions,
      direction: direction(),
    };
  });
  const swipeHammer = swipe(node, () => {
    return {
      ...accessor().swipeOptions,
      direction: direction(),
    };
  });

  createEffect(
    on(
      () => accessor().disabled,
      (disabled: boolean) => {
        if (!disabled) {
          swipeHammer.on('swipe', onSwipe);
          // we still need to listen to pan event even if we don't allow pan
          // it is because allowPan is a dynamic value
          // instead, we detect allowPan in onPan
          panHammer.on('panstart', onPanStart);
          panHammer.on('pan', onPan);
          onCleanup(() => {
            swipeHammer.off('swipe', onSwipe);
            panHammer.off('panstart', onPanStart);
            panHammer.off('pan', onPan);
          });
        }
      },
    ),
  );
}

export { gestureScroll };
