import { useRaf } from '@shared/hooks/use-raf';
import { createEffect, createSignal, on, onCleanup } from 'solid-js';
import { TabNavigationType } from '@shared/enums';
import { usePageCheck } from '@shared/hooks/use-page-check';

function getScrollY(element: HTMLElement | Window | undefined) {
  return element instanceof Window ? element.scrollY : element?.scrollTop ?? 0;
}

export function useNavigationVisibilityDetection(accessor: () => HTMLElement | Window | undefined) {
  const [isVisible, setIsVisible] = createSignal(true);

  const { currentRoute } = usePageCheck();
  const isImExpertPage = () => currentRoute()?.tabNavigationType === TabNavigationType.ExpertHome;

  let lastScrollY: number = getScrollY(accessor());
  const positiveThreshold = 20;
  const negativeThreshold = -5;
  let checkOnNextTick = false;

  createEffect(
    on(accessor, (element) => {
      setIsVisible(true);
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
    }),
  );

  useRaf(() => () => {
    if (checkOnNextTick) {
      checkOnNextTick = false;
      const scrollY = getScrollY(accessor());
      // >= 10 for avoid ios rubber band effect.
      if (scrollY >= 10 && !isImExpertPage()) {
        // only detect the scroll different between two frames to make sure the user velocity is fast enough.
        const diff = scrollY - lastScrollY;
        if (diff > positiveThreshold) {
          setIsVisible(false);
        } else if (diff < negativeThreshold) {
          setIsVisible(true);
        }
        lastScrollY = scrollY;
      } else {
        setIsVisible(true);
      }
    }
  });

  return isVisible;
}
