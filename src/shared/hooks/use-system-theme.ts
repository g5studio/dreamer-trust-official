import { LocalStorageItem, SystemTheme } from '@shared/enums';
import { getLocalStorage } from '@utilities/helpers/storage.helper';
import { createEffect, createSignal, onCleanup, onMount } from 'solid-js';

type SystemThemeHookProps = {
  onThemeChanged?: (theme: SystemTheme, rootElement: HTMLElement) => void;
};

/**
 * @description 取得當前系統風格資訊
 */
export const useSystemTheme = ({ onThemeChanged }: SystemThemeHookProps) => {
  const rootElement: HTMLElement = document.querySelector(':root')!;
  const [theme, setTheme] = createSignal<SystemTheme>(SystemTheme.Light);

  const defaultTheme = (): SystemTheme | undefined =>
    Object.values(SystemTheme).includes(getLocalStorage(LocalStorageItem.SystemTheme) as SystemTheme)
      ? (getLocalStorage(LocalStorageItem.SystemTheme) as SystemTheme)
      : undefined;

  const getCurrentTheme = () =>
    Object.values(SystemTheme).find((value) => value === rootElement.getAttribute('theme')) ??
    defaultTheme() ??
    SystemTheme.Light;

  const observer = new MutationObserver((mutations) =>
    mutations.forEach(({ attributeName }) => {
      if (attributeName === 'theme') {
        setTheme(getCurrentTheme());
      }
    }),
  );

  onMount(() => {
    observer.observe(rootElement, { attributes: true });
    setTheme(getCurrentTheme());
  });

  onCleanup(() => {
    observer.disconnect();
  });

  createEffect(() => {
    const currentTheme = theme();
    if (currentTheme) {
      onThemeChanged?.(currentTheme, rootElement);
    }
  });

  return {
    theme,
    isDarkMode: () => theme() === SystemTheme.Dark,
    isLightMode: () => theme() === SystemTheme.Light,
    defaultTheme,
    setTheme: (value: SystemTheme) => {
      document.querySelector(':root')?.setAttribute('theme', value);
    },
  };
};
