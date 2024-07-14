import overlay from '@shared/hooks/use-overlay';
import { For, Show, createEffect } from 'solid-js';
import Overlay from '@modules/common/components/Overlay';
import { formatClasses } from '@utilities/helpers/format.helper';
import { getDeviceOS } from '@shared/hooks/use-device-info';
import { OS } from '@shared/enums';

const OverlayContainer = () => {
  let scrollY = 0;
  const isIos = () => getDeviceOS() === OS.iOS;
  createEffect(() => {
    if (overlay().length === 0 || overlay().find((item) => item.action === 'open' && item.mainLayerEnabled)) {
      document.body.style.overflow = 'auto';
      // For isIos, reset body style when overlay is not opened or mainLayerEnabled is true
      if (isIos()) {
        document.body.style.removeProperty('position');
        document.body.style.removeProperty('top');
        // Only restore the window position after top and position are removed if there is any
        if (scrollY > 0) {
          window.scrollTo(0, scrollY);
          scrollY = 0;
        }
      }
    } else {
      // For iOS, add top and position fixed to freeze the screen when overflow is set to hidden
      if (isIos()) {
        scrollY = window.scrollY;
        document.body.style.top = `-${scrollY}px`;
        document.body.style.position = 'fixed';
      }
      document.body.style.overflow = 'hidden';
    }
  });
  return (
    <Show when={overlay().length > 0}>
      <For each={overlay()}>
        {(task) =>
          task.action === 'open' && (
            <section
              class={formatClasses(
                'fixed left-0 top-0 z-supreme h-full w-full',
                typeof task.backdropClass === 'string' ? task.backdropClass : task.backdropClass?.(),
                {
                  'pointer-events-none': task.action === 'open' && task.mainLayerEnabled,
                },
              )}
              data-testid={`overlay-container-${task.taskId}`}>
              <Overlay task={task} />
            </section>
          )
        }
      </For>
    </Show>
  );
};

export default OverlayContainer;
