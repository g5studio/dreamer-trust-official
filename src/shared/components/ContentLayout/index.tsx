import { IBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { onMount, Show } from 'solid-js';
import { Log } from '@utilities/helpers/log.helper';
import { formatClasses } from '@utilities/helpers/format.helper';
import { useNavigateHandler } from '@shared/hooks/use-navigate-handler';
import { closeAllOverlay } from '@shared/hooks/use-overlay';
import { usePageCheck } from '@shared/hooks/use-page-check';
import { isPC } from '@shared/hooks/use-window-size';
import navigator from '@shared/hooks/use-navigator';
import { useLayoutContext } from '@utilities/context/layout-context';
import Picture from '@components/Picture';

interface IContentLayoutProps extends IBaseComponentProps {
  hidePadding?: boolean;
  isSimplePage?: boolean;
}

const ContentLayout = (props: IContentLayoutProps) => {
  useNavigateHandler();
  closeAllOverlay();
  const staticPathname = navigator.pathname;
  usePageCheck({ pathname: () => staticPathname });

  const [{ mainContentAreaSize, headerAreaHeight, footerAreaHeight }] = useLayoutContext();

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
          'min-h-full': !isPC(),
        },
        props.classes,
      )}>
      {props.children}
      <Show when={isPC() && !props.isSimplePage}>
        <Picture classes="absolute left-[50%] top-[646px] z-bg min-w-screen translate-x-[-50%]" src="shared/bg-1.png" />
      </Show>
      <Show
        when={
          isPC() &&
          !props.isSimplePage &&
          headerAreaHeight() + mainContentAreaSize().height + footerAreaHeight() >= 2446
        }>
        <Picture
          style={{
            right: `-${mainContentAreaSize().left}px`,
          }}
          classes="absolute top-[1887px]  z-bg"
          src="shared/bg-2.png"
        />
      </Show>
    </section>
  );
};

export default ContentLayout;
