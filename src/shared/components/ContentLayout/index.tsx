import { IBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { onCleanup, onMount } from 'solid-js';
import { Log } from '@utilities/helpers/log.helper';
import { formatClasses } from '@utilities/helpers/format.helper';
import { useNavigateHandler } from '@shared/hooks/use-navigate-handler';
import { closeAllOverlay } from '@shared/hooks/use-overlay';
import { usePageCheck } from '@shared/hooks/use-page-check';
import { isPC } from '@shared/hooks/use-window-size';
import navigator from '@shared/hooks/use-navigator';
import { removeSessionStorage } from '@utilities/helpers/storage.helper';
import { SessionStorageItem } from '@shared/enums';

interface IContentLayoutProps extends IBaseComponentProps {
  hidePadding?: boolean;
  isSimplePage?: boolean;
}

const ContentLayout = (props: IContentLayoutProps) => {
  useNavigateHandler();
  closeAllOverlay();
  const staticPathname = navigator.pathname;
  const { isSportPage, isSportExhaustivePage, isSportMainPage } = usePageCheck({ pathname: () => staticPathname });

  onMount(() => {
    Log.info({
      msg: `${props.testId} mounted`,
    });
  });

  onCleanup(() => {
    // !離開非總盤頁面時需清除當前檢視賽事id暫存
    if (!isSportExhaustivePage()) {
      if (!isSportMainPage()) {
        removeSessionStorage(SessionStorageItem.HomeViewingPosition);
      }
      if (!props.isSimplePage) {
        removeSessionStorage(SessionStorageItem.SimpleViewingPosition);
      }
    }
  });

  return (
    <section
      data-testid={props.testId}
      class={formatClasses(
        'w-full grow',
        {
          'pt-2': !props.hidePadding,
          'lg:p-5': !props.hidePadding,
          'xl:pr-2': isSportPage(),
          'lg:pb-0': !props.hidePadding,
          'min-h-full': !isPC(),
        },
        props.classes,
      )}>
      {props.children}
    </section>
  );
};

export default ContentLayout;
