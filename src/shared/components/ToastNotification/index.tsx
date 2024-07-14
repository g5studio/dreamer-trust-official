import { IBaseComponentProps } from '@shared/interfaces';
import { formatClasses } from '@utilities/helpers/format.helper';
import { Show, createEffect, createSignal, onCleanup } from 'solid-js';
import { Portal } from 'solid-js/web';
import { translate } from '@shared/hooks/use-translation';
import { I18nKey } from '@shared/models/translation.model';
import Picture from '../Picture';

export interface IToastNotificationProps extends IBaseComponentProps {
  messageI18nKey?: I18nKey;
  messageClasses?: string;
  iconSrc?: string;
  iconClasses?: string;
  defaultTimeout?: number;
  show?: boolean;
  onClose?: () => void;
}

const DefaultTimeout = 3000;

const ToastNotification = (props: IToastNotificationProps) => {
  // eslint-disable-next-line solid/reactivity
  const [show, setShow] = createSignal<boolean>(!!props.show);

  const startTimer = () => {
    return setTimeout(() => {
      setShow(false);
      if (props.onClose) {
        props.onClose();
      }
    }, props.defaultTimeout || DefaultTimeout);
  };

  let timer = startTimer();

  onCleanup(() => {
    clearInterval(timer);
  });

  createEffect(() => {
    if (props.show) {
      clearInterval(timer);
      setShow(true);
      timer = startTimer();
    }
  });

  return (
    <Portal>
      <Show when={show()}>
        <div
          class={formatClasses(
            'fixed left-0 right-0 top-0 z-overlay flex h-17 items-center rounded-b-12 bg-layer-3 p-4 shadow-4 lg:left-auto lg:w-full',
            props.classes,
          )}
          data-testid={props.testId}>
          <Picture
            src={props.iconSrc || '/icon/update_info_success.png'}
            classes={formatClasses('h-8_5 w-8_5', props.iconClasses)}
          />
          <div class={formatClasses('ml-3', props.messageClasses)}>{translate(props.messageI18nKey)}</div>
        </div>
      </Show>
    </Portal>
  );
};

export default ToastNotification;
