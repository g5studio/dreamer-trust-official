import { LocaleDash } from '@shared/enums';
import { changeLanguage, translate, translation } from '@shared/hooks/use-translation';
import { getBrowserLocale } from '@shared/models/translation.model';
import { createEffect, on, onCleanup, onMount } from 'solid-js';

const MutationObserverController = () => {
  const rootElement: HTMLElement = document.querySelector(':root')!;

  const observer = new MutationObserver((mutations) =>
    mutations.forEach(({ attributeName }) => {
      if (attributeName === 'theme') {
        //  TODO: move theme control here
      }
      if (attributeName === 'lang') {
        const newLanguage = rootElement.getAttribute('lang');
        if (newLanguage) {
          changeLanguage(
            getBrowserLocale(newLanguage === 'zh-hant' ? LocaleDash.zh_HK : newLanguage) ?? LocaleDash.en_US,
          );
        }
      }
    }),
  );

  onMount(() => {
    observer.observe(rootElement, { attributes: true });
  });

  createEffect(
    on(
      () => translation.language,
      () => {
        const titleI18n = translate('title');
        if (titleI18n) {
          document.getElementsByTagName('title')[0].innerText = translate('title');
        }
      },
    ),
  );

  onCleanup(() => {
    observer.disconnect();
  });

  return <></>;
};
export default MutationObserverController;
