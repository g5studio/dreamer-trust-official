import { createEffect, createSignal } from 'solid-js';

const [loaded, setLoaded] = createSignal<string[]>([]);
const [loading, setLoading] = createSignal<string[]>([]);

function isLoaded(url: string) {
  return loaded().includes(url);
}

function tryLoad(url: string) {
  if (loading().includes(url)) {
    return;
  }
  const image = new Image();
  image.src = url;
  image.onload = () => {
    setLoaded([...loaded(), url]);
  };
  setLoading([...loading(), url]);
}

export function useFallbackImageUrl(url: () => string, fallbackUrl: () => string) {
  const [src, setSrc] = createSignal(fallbackUrl());
  if (!isLoaded(url())) {
    tryLoad(url());
  }
  if (isLoaded(url())) {
    setSrc(url());
  }
  createEffect(() => {
    if (!isLoaded(url())) {
      tryLoad(url());
    } else {
      setSrc(url());
    }
  });
  return src;
}
