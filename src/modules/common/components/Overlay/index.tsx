import { OpenTask, toggleOverlay } from '@shared/hooks/use-overlay';
import { Match, Switch, createEffect, createSignal, onCleanup } from 'solid-js';
import { OS, OverlayType } from '@shared/enums';
import Popup from '@shared/components/Popup';
import { formatClasses } from '@utilities/helpers/format.helper';
import { getDeviceOS } from '@shared/hooks/use-device-info';
import styles from './style.module.scss';

type OverlayProp = {
  task: OpenTask<unknown>;
};

/**
 * 覆蓋元件，依照收到的任務內容轉換成對應的元件
 */
const Overlay = ({ task }: OverlayProp) => {
  const [close, setClose] = createSignal<boolean>(false);
  let timer: NodeJS.Timeout;
  createEffect(() => {
    if (close()) {
      if (task.animation) {
        timer = setTimeout(() => {
          if (task.taskId) {
            toggleOverlay({
              action: 'close',
              taskId: task.taskId,
            });
          }
          task?.onAnimationEnd?.();
        }, 600);
      } else if (task.taskId) {
        toggleOverlay({
          action: 'close',
          taskId: task.taskId,
        });
      }
    }
  });

  onCleanup(() => {
    if (task.action === 'open') {
      task.config?.props?.handleOnClose?.();
    }
    if (timer) {
      clearTimeout(timer);
    }
  });

  return (
    <div
      data-testid={`overlay-${task.type}-${task.taskId}-backdrop`}
      class={formatClasses(
        'flex h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden',
        typeof task.containerClass === 'string' ? task.containerClass : task.containerClass?.(),
        {
          'bg-black/45': task.backdrop,
          [styles['component-overlay__backdrop']]: task.backdrop,
          [styles['component-overlay__backdrop--hide']]: !task.backdrop,
        },
        {
          'cursor-pointer': getDeviceOS() === OS.iOS,
        },
      )}
      onClick={(e: MouseEvent) => {
        e.stopPropagation();
        task?.onBackdropClick?.(e);
        if (task.backgroundClose) {
          setClose(true);
        }
      }}>
      <section
        class={formatClasses('pointer-events-auto', task.sectionClass, {
          [`animation-${task.animation?.enter}`]: !!task.animation?.enter,
          [`animation-${task.animation?.leave}`]: !!task.animation?.leave && close(),
        })}
        data-testid={`overlay-${task.type}-${task.taskId}-content`}
        onClick={(e) => e.stopPropagation()}>
        <Switch>
          <Match when={task.type === OverlayType.Modal}>
            {/* TODO add shared modal component */}
            <>modal</>
          </Match>
          <Match when={task.type === OverlayType.Popup}>
            {task.type === OverlayType.Popup && (
              <Popup
                onClose={() => {
                  setClose(true);
                }}
                testId={task.taskId}
                {...task.config.props}
              />
            )}
          </Match>
          <Match when={task.type === OverlayType.Custom}>
            {task.type === OverlayType.Custom &&
              task.config.component({
                testId: task.taskId,
                onClose: () => {
                  setClose(true);
                },
                ...task.config.props,
              })}
          </Match>
        </Switch>
      </section>
    </div>
  );
};

export default Overlay;
