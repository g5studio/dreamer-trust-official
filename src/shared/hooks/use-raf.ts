import { onCleanup, onMount } from 'solid-js';

function useRaf(accessor: () => (delta: number) => void) {
  let rafId: number | null = null;
  let delta = 0;
  let last = 0;

  const raf = () => {
    const now = performance ? performance.now() : Date.now();
    delta = now - last;
    last = now;
    accessor()(delta);
    rafId = window.requestAnimationFrame(raf);
  };

  const start = () => {
    if (rafId === null) {
      raf();
    }
  };

  const stop = () => {
    if (rafId !== null) {
      window.cancelAnimationFrame(rafId);
      rafId = null;
    }
  };

  onMount(start);
  onCleanup(stop);
}

export { useRaf };
