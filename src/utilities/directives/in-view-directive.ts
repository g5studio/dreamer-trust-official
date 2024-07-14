import { Accessor, createEffect, onCleanup } from 'solid-js';

interface IInViewProps {
  /**
   * Callback when the element enters the viewport
   */
  onEnter?: () => void;
  /**
   * Callback when the element leaves the viewport
   */
  onLeave?: () => void;
  /**
   * The threshold that is used to determine when the element is considered to be in the viewport
   * @see https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/thresholds
   */
  threshold?: number | number[];
  /**
   * Margin around the root. Can have values similar to the CSS margin property, e.g. "10px 20px 30px 40px" (top, right, bottom, left).
   * @see https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/rootMargin
   */
  rootMargin?: string;
  /**
   * The element that is used as the viewport for checking visibility of the target.
   * @see https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/root
   */
  root?: Element | Document | null;
}

declare module 'solid-js' {
  namespace JSX {
    interface Directives {
      inView: IInViewProps;
    }
  }
}

export function inView(el: HTMLElement, accessor: Accessor<IInViewProps>) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          accessor().onEnter?.();
        } else {
          accessor().onLeave?.();
        }
      });
    },
    {
      threshold: accessor().threshold ?? 0,
      rootMargin: accessor().rootMargin,
      root: accessor().root,
    },
  );

  createEffect(() => {
    observer.observe(el);
  });

  onCleanup(() => {
    observer.disconnect();
  });
}
