import { BaseTask, toggleBottomSheet, toggleOverlay } from '@shared/hooks/use-overlay';
import { isMobile } from '@shared/hooks/use-window-size';
import { IBaseComponentProps, IBaseOverlay } from '@shared/interfaces/base-component.interface';
import { IBottomSheetProps } from '@shared/components/BottomSheet';
import { JSXElement, createEffect, on } from 'solid-js';
import { OverlayType } from '@shared/enums';

interface IToggleContainerProps
  extends Omit<IBaseComponentProps, 'testId'>,
    Required<Pick<IBaseComponentProps, 'testId'>> {
  /**
   * 彈窗內容
   * @description pc only
   */
  modalSlot: (type: IBaseOverlay) => JSXElement;
  /**
   * 彈窗任務設定
   */
  modalTaskConfig?: Partial<BaseTask>;
  /**
   * bottom sheet內容
   * @description mobile only
   */
  bottomSheetProps: IBottomSheetProps;
  bottomSheetTaskConfig?: Partial<BaseTask>;
}

/**
 * 觸發元件
 * @description 桌面版呼叫彈窗，手機版呼叫bottom sheet
 */
const ToggleContainer = (props: IToggleContainerProps) => {
  let taskId: string | undefined;
  const handleOnClick = () => {
    taskId = isMobile()
      ? toggleBottomSheet({ ...props.bottomSheetProps }, props.bottomSheetTaskConfig)
      : toggleOverlay({
          type: OverlayType.Custom,
          action: 'open',
          config: {
            component: props.modalSlot,
          },
          ...props.modalTaskConfig,
        });
  };

  createEffect(
    on(
      () => isMobile(),
      () => {
        if (taskId) {
          toggleOverlay({ action: 'close', taskId });
          handleOnClick();
        }
      },
    ),
  );

  return (
    <button type="button" class={props.classes} onClick={() => handleOnClick()} data-testid={props.testId}>
      {props.children}
    </button>
  );
};
export default ToggleContainer;
