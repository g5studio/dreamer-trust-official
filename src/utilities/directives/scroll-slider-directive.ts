import { createEffect, onCleanup } from 'solid-js';

export interface IScrollSliderOptions {
  /**
   * Smooth Target
   */
  target: HTMLElement | undefined;
  /**
   * 位移量
   */
  offset: number;
}

declare module 'solid-js' {
  namespace JSX {
    interface Directives {
      scrollSlider: IScrollSliderOptions;
    }
  }
}

export function scrollSlider(el: HTMLElement, accessor: () => IScrollSliderOptions) {
  createEffect(() => {
    const { target } = accessor();
    const hasOverflowClass = target?.classList.contains('overflow-hidden');
    const hasNoScrollbarClass = target?.classList.contains('no-scrollbar');
    target?.classList.add('overflow-hidden', 'no-scrollbar');
    onCleanup(() => {
      // if original classList doesn't contain overflow-hidden, remove it
      if (!hasOverflowClass) {
        target?.classList.remove('overflow-hidden');
      }
      // if original classList doesn't contain no-scrollbar, remove it
      if (!hasNoScrollbarClass) {
        target?.classList.remove('no-scrollbar');
      }
    });
  });

  const onClick: EventListener = () => {
    accessor().target?.scrollTo({
      left: accessor().offset,
      behavior: 'smooth',
    });
  };
  el.addEventListener('click', onClick);

  onCleanup(() => {
    el.removeEventListener('click', onClick);
  });
}
