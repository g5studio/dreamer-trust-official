import { IBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { onMount } from 'solid-js';
import { Log } from '@utilities/helpers/log.helper';
import { formatClasses } from '@utilities/helpers/format.helper';
import { useNavigateHandler } from '@shared/hooks/use-navigate-handler';
import { closeAllOverlay } from '@shared/hooks/use-overlay';
import { usePageCheck } from '@shared/hooks/use-page-check';
import { isPC } from '@shared/hooks/use-window-size';
import navigator from '@shared/hooks/use-navigator';

interface IContentLayoutProps extends IBaseComponentProps {
  hidePadding?: boolean;
  isSimplePage?: boolean;
}

const ContentLayout = (props: IContentLayoutProps) => {
  useNavigateHandler();
  closeAllOverlay();
  const staticPathname = navigator.pathname;
  usePageCheck({ pathname: () => staticPathname });

  onMount(() => {
    Log.info({
      msg: `${props.testId} mounted`,
    });
  });

  return (
    <section
      data-testid={props.testId}
      class={formatClasses(
        'w-full grow',
        {
          'pt-2': !props.hidePadding,
          'lg:p-5': !props.hidePadding,
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
