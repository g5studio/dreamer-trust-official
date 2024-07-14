import { createEffect, onCleanup } from 'solid-js';

declare module 'solid-js' {
  namespace JSX {
    interface Directives {
      copyToClipboard: {
        text: string;
        onCopy?: () => void;
      };
    }
  }
}

export function copyToClipboard(
  el: HTMLElement,
  accessor: () => {
    text: string;
    onCopy?: () => void;
  },
) {
  const span = document.createElement('span');
  const selection = window.getSelection();
  const range = document.createRange();
  span.style.position = 'fixed';
  span.style.top = '-9999px';
  span.style.left = '-9999px';
  span.style.userSelect = 'text';
  createEffect(() => {
    span.innerHTML = accessor().text;
  });
  span.addEventListener('copy', () => {
    accessor().onCopy?.();
  });
  document.body.appendChild(span);

  const onClick: EventListener = () => {
    try {
      range.selectNodeContents(span);
      selection?.removeAllRanges();
      selection?.addRange(range);
      document.execCommand('copy');
      selection?.removeAllRanges();
    } catch (e) {
      // do nothing
    }
  };
  el.addEventListener('click', onClick);

  onCleanup(() => {
    el.removeEventListener('click', onClick);
    document.body.removeChild(span);
  });
}
