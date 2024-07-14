import { createEffect, createSignal, onCleanup } from 'solid-js';

export function useVh() {
  const [vh, setVh] = createSignal(window.innerHeight * 0.01);

  const handleResize = () => {
    setVh(window.innerHeight * 0.01);
  };

  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', handleResize);
    onCleanup(() => window.visualViewport?.removeEventListener('resize', handleResize));
  } else {
    window.addEventListener('resize', handleResize);
    onCleanup(() => window.removeEventListener('resize', handleResize));
  }

  createEffect(() => {
    document.documentElement.style.setProperty('--vh', `${vh()}px`);
  });

  return vh;
}
