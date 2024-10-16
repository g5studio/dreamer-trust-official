import { IBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { onMount, Show } from 'solid-js';
import { Log } from '@utilities/helpers/log.helper';
import { formatClasses } from '@utilities/helpers/format.helper';
import { useNavigateHandler } from '@shared/hooks/use-navigate-handler';
import { closeAllOverlay } from '@shared/hooks/use-overlay';
import { usePageCheck } from '@shared/hooks/use-page-check';
import { isPC } from '@shared/hooks/use-window-size';
import navigator from '@shared/hooks/use-navigator';
import Picture from '../Picture';

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
        'relative w-full grow',
        {
          'px-12': !props.hidePadding && isPC(),
          'min-h-full': !isPC(),
        },
        props.classes,
      )}>
      {props.children}
      <Show when={isPC()}>
        <Picture classes="z-bg absolute left-[50%] top-[646px] translate-x-[-50%]" src="shared/bg-1.png" />
      </Show>
      <Show when={isPC()}>
        <Picture classes="z-bg absolute right-0 top-[1887px]" src="shared/bg-2.png" />
      </Show>
    </section>
  );
};

export default ContentLayout;
