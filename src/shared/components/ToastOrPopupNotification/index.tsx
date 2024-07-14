import { isMobile } from '@shared/hooks/use-window-size';
import { toggleHintPopup } from '@shared/hooks/use-overlay';
import { createEffect, on, Show } from 'solid-js';
import ToastNotification, { IToastNotificationProps } from '../ToastNotification';

interface IToastOrPopupNotificationProps extends IToastNotificationProps {}

const ToastOrPopupNotification = (props: IToastOrPopupNotificationProps) => {
  createEffect(
    // use on to prevent infinite loop when toggleHintPopup executes the render function
    on(
      () => props.show && !isMobile(),
      (isShow) => {
        if (isShow) {
          toggleHintPopup({
            type: 'success',
            i18nKeys: {
              title: props.messageI18nKey,
            },
            primaryButton: {
              variant: 'primary',
              testId: 'verify-success-confirm-btn',
              children: 'common.confirm',
              onClick: () => {
                props.onClose?.();
              },
            },
          });
        }
      },
    ),
  );

  return (
    <>
      <Show when={isMobile() && props.show}>
        <ToastNotification
          classes={props.classes}
          messageI18nKey={props.messageI18nKey}
          messageClasses={props.messageClasses}
          iconSrc={props.iconSrc}
          iconClasses={props.iconClasses}
          defaultTimeout={props.defaultTimeout}
          show={props.show}
          onClose={props.onClose}
        />
      </Show>
    </>
  );
};

export default ToastOrPopupNotification;
