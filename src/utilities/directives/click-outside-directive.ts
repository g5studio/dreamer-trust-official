import { onCleanup } from 'solid-js';

declare module 'solid-js' {
  namespace JSX {
    interface Directives {
      clickOutside: ((e: Event) => void) | null | undefined;
    }
  }
}

export function clickOutside(el: HTMLElement, accessor: () => (e: Event) => void) {
  const onClick: EventListener = (e) => {
    if (!(e.target instanceof Node) || !el.contains(e.target)) {
      accessor()?.(e);
    }
  };
  document.body.addEventListener('click', onClick);

  onCleanup(() => document.body.removeEventListener('click', onClick));
}
