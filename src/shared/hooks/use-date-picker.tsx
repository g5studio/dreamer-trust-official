import { Accessor, onCleanup } from 'solid-js';
import { toggleOverlay } from '@shared/hooks/use-overlay';
import DatePickerModal, { IDatePickerModalProps } from '@shared/components/DatePickerModal';
import { OverlayType } from '@shared/enums';
import { CalendarIcon } from '@utilities/svg-components';

type DatePickerHook = {
  open: () => void;
  close: () => void;
};

const toggleDatePicker = (props: IDatePickerModalProps, handleOnClose?: () => void) =>
  toggleOverlay({
    type: OverlayType.Popup,
    action: 'open',
    config: {
      props: {
        classes: 'w-75 rounded-20',
        contentClasses: 'gap-0',
        icon: () => (
          <div class="w-full h-full flex items-center justify-center">
            <CalendarIcon classes="fill-black-3 w-7 h-7" />
          </div>
        ),
        type: 'information',
        i18nKeys: {},
        render: ({ onClose }) =>
          DatePickerModal({
            ...props,
            onClose,
          }),
        handleOnClose,
        ...props,
      },
    },
    backgroundClose: true,
  });

/**
 * @param props toggle date picker props
 * @param closeEventHandler on date picker close event
 * @returns {DatePickerHook}
 */
export const useDatePicker = (
  props: Accessor<IDatePickerModalProps>,
  closeEventHandler?: Accessor<(() => void) | undefined>,
): DatePickerHook => {
  let taskId: string | undefined;

  const open = () => {
    if (!taskId) {
      taskId = toggleDatePicker(props(), () => {
        closeEventHandler?.();
        taskId = undefined;
      });
    }
  };

  const close = () => {
    if (taskId) {
      toggleOverlay({ action: 'close', taskId });
      taskId = undefined;
    }
  };

  onCleanup(() => {
    close();
  });

  return {
    open,
    close,
  };
};
