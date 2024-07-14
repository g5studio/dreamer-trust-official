import { useRaf } from '@shared/hooks/use-raf';
import { batch, createEffect, createSignal, on, onCleanup } from 'solid-js';

const initialIsScrollingUp = true;
const initialScrollYPos = 0;

function getScrollY(element: HTMLElement | Window | undefined) {
  return element instanceof Window ? element.scrollY : element?.scrollTop ?? 0;
}

const useScrollDetection = (accessor: () => HTMLElement | Window | undefined) => {
  const [isScrollingUp, setIsScrollingUp] = createSignal(initialIsScrollingUp);
  const [scrollYPos, setScrollYPos] = createSignal(initialScrollYPos);
  let lastScrollY: number = getScrollY(accessor());

  let checkOnNextTick = false;

  createEffect(
    on(accessor, (element) => {
      lastScrollY = getScrollY(element);
      if (element) {
        const handleScroll = () => {
          checkOnNextTick = true;
        };

        element.addEventListener('scroll', handleScroll);

        onCleanup(() => {
          element.removeEventListener('scroll', handleScroll);
        });
      }
      // when accessor is changed, reset the scroll position
      batch(() => {
        setIsScrollingUp(initialIsScrollingUp);
        setScrollYPos(initialScrollYPos);
      });
    }),
  );

  useRaf(() => () => {
    if (checkOnNextTick) {
      checkOnNextTick = false;
      const scrollY = getScrollY(accessor());

      batch(() => {
        // >= 10 for avoid ios rubber band effect.
        if (scrollY >= 10) {
          // only detect the scroll different between two frames to make sure the user velocity is fast enough.
          const diff = scrollY - lastScrollY;
          setIsScrollingUp(diff <= 0);

          lastScrollY = scrollY;
        } else {
          setIsScrollingUp(true);
        }
        setScrollYPos(scrollY);
      });
    }
  });

  return {
    isScrollingUp,
    scrollYPos,
  };
};

export default useScrollDetection;
