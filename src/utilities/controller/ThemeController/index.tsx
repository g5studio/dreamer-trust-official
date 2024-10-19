import { LocalStorageItem, SystemTheme } from '@shared/enums';
import { useSystemTheme } from '@shared/hooks/use-system-theme';
import { overrideVendorColorSetting } from '@utilities/config/vendor-colors';
import { getLocalStorage, setLocalStorage } from '@utilities/helpers/storage.helper';
import { createEffect, on, onCleanup } from 'solid-js';

/**
 * 網頁主題控制
 * @description 動態調整系統主題相關設定
 * @external https://innotech.atlassian.net/browse/IN-7496 特定頁面導航列背景色
 * @external https://innotech.atlassian.net/browse/PRF-1112 夜間模式設定
 */
const ThemeController = () => {
  const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  const { theme, setTheme, defaultTheme } = useSystemTheme({
    onThemeChanged: (currentTheme: SystemTheme, rootElement) => {
      switch (currentTheme) {
        case SystemTheme.Auto:
          setTheme(darkModeMediaQuery.matches ? SystemTheme.Dark : SystemTheme.Light);
          break;
        default:
          overrideVendorColorSetting(currentTheme, rootElement);
          break;
      }
    },
  });

  createEffect(
    on(
      () => theme(),
      (currentTheme) => {
        const handleDarkModeChanged = ({ matches }: MediaQueryListEvent | MediaQueryList) => {
          setTheme(matches ? SystemTheme.Dark : SystemTheme.Light);
        };

        if (!getLocalStorage(LocalStorageItem.SystemTheme)) {
          setTheme(currentTheme);
          setLocalStorage(LocalStorageItem.SystemTheme, currentTheme);
        }
        if (defaultTheme() === SystemTheme.Auto) {
          darkModeMediaQuery.addEventListener('change', handleDarkModeChanged);
          onCleanup(() => {
            darkModeMediaQuery.removeEventListener('change', handleDarkModeChanged);
          });
        }
      },
    ),
  );

  return <></>;
};
export default ThemeController;
