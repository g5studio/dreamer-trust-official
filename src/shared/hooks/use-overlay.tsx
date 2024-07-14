import BottomSheet, { IBottomSheetProps } from '@shared/components/BottomSheet';
import Button, { IButton } from '@shared/components/Button';
import ImageModal, { IImageModalProps } from '@shared/components/ImageModal';
import { IPopupProps } from '@shared/components/Popup';
import PopupPicker, { IPopupPickerProps } from '@shared/components/PopupPicker';
import { OverlayType } from '@shared/enums';
import { AnimationType } from '@shared/enums/animation.enum';
import { IBaseOverlay, IBaseOverlayProps } from '@shared/interfaces/base-component.interface';
import { generateRandomString } from '@utilities/helpers/encode.helper';
import { formatClasses } from '@utilities/helpers/format.helper';
import { deleteEmptyField } from '@utilities/helpers/utilities.helper';
import { JSXElement, Show, createSignal } from 'solid-js';
import { isMobile } from './use-window-size';

type BaseOverlayProp<OverlayProps> = {
  props?: IBaseOverlayProps & OverlayProps;
};

type ModalOverlay<OverlayProps> = {
  type: OverlayType.Modal;
  config?: BaseOverlayProp<OverlayProps>;
};

type PopupOverlay = {
  type: OverlayType.Popup;
  config: Required<BaseOverlayProp<IPopupProps>>;
};

type CustomOverlay<OverlayProps> = {
  type: OverlayType.Custom;
  config: BaseOverlayProp<OverlayProps> & {
    component: (props: IBaseOverlay) => JSXElement;
  };
};

export type BaseTask = {
  taskId: string;
  /**
   * 是否呈現背景遮罩
   * @default true
   */
  backdrop?: boolean;
  /**
   * 背景遮罩樣式
   */
  backdropClass?: string | (() => string);
  /**
   * 是否允許主結構滾動，開啟此設定後不論backgroundClose是否設置皆無法點擊背景關閉
   * @default false
   */
  mainLayerEnabled?: boolean;
  /**
   * 是否允許背景關閉
   * @default false
   */
  backgroundClose?: boolean;
  /**
   * 容器樣式
   * @description 容器為flex box，可透過override容器樣式調整彈窗位置
   */
  containerClass?: string | (() => string);
  /**
   * 動畫container class
   */
  sectionClass?: string;
  /**
   * 動畫設定
   */
  animation?: {
    enter?: AnimationType;
    leave?: AnimationType;
  };
  /**
   * 點擊背景時觸發
   */
  onBackdropClick?: (e: MouseEvent) => void;
  /**
   * Animation完結時觸發
   */
  onAnimationEnd?: () => void;
  /**
   * 路由切換後不自動關閉
   */
  disableCloseAfterRouteChanged?: boolean;
};

type CloseTask = { action: 'close'; onClose?: () => void } & Pick<BaseTask, 'taskId'>;

export type OpenTask<OverlayProps> = { action: 'open' } & (
  | ModalOverlay<OverlayProps>
  | PopupOverlay
  | CustomOverlay<OverlayProps>
) &
  Omit<BaseTask, 'taskId'> &
  Partial<Pick<BaseTask, 'taskId'>>;

type OverlayTask<OverlayProps = unknown> = OpenTask<OverlayProps> | CloseTask;

const [overlay, setOverlay] = createSignal<OverlayTask[]>([]);
const [cache, setCache] = createSignal<string[]>([]);

export default overlay;

/**
 * 封存特定覆蓋物
 * @description 封存後任務無法重複觸發
 * @param taskId 可傳入單筆或多筆任務id
 */
export const cacheOverlay = (taskId: string | string[]) => {
  setCache((pre) => [...pre, ...(typeof taskId === 'string' ? [taskId] : taskId)]);
};

/**
 * 關閉所有覆蓋物
 */
export const closeAllOverlay = () => {
  setOverlay((pre) => pre.filter((task) => task.action === 'open' && task.disableCloseAfterRouteChanged));
};

export const isOverlayTaskExisted = (id: string): boolean => overlay().some(({ taskId }) => taskId === id);

/**
 * 觸發彈窗
 * @param task 彈窗任務內容
 * @returns {string} 任務id
 */
export const toggleOverlay = <Props,>(task: OverlayTask<Props>): string => {
  const taskExist: boolean = overlay().some(({ taskId }) => taskId === task.taskId);
  const id = task.taskId ?? window.btoa(generateRandomString(16));
  switch (task.action) {
    case 'open': {
      const isCache: boolean = cache().includes(id);
      if (!taskExist && !isCache) {
        const defaultTask: Partial<OverlayTask> = {
          backdrop: true,
          backgroundClose: false,
          mainLayerEnabled: false,
          taskId: id,
        };
        setOverlay((pre) => [...pre, { ...defaultTask, ...(deleteEmptyField<OverlayTask>(task) as OverlayTask) }]);
      }
      break;
    }
    default:
      if (taskExist) {
        setOverlay((pre) => pre.filter(({ taskId }) => taskId !== task.taskId));
        if (task.onClose) {
          task.onClose();
        }
      }
      break;
  }
  return id;
};

export type HintPopup = {
  primaryButton?: IButton;
  cancelButton?: IButton;
  footerSlot?: () => JSXElement;
} & Omit<IPopupProps, 'children'>;

/**
 * 開啟系統提示彈窗
 * @returns overlay id
 */
export const toggleHintPopup = (
  { primaryButton, cancelButton, ...props }: HintPopup,
  task?: Omit<BaseTask, 'taskId'> & Partial<Pick<BaseTask, 'taskId'>>,
) =>
  toggleOverlay<IPopupProps>({
    ...task,
    type: OverlayType.Popup,
    action: 'open',
    config: {
      props: {
        ...props,
        render: ({ onClose, ...args }) => (
          <>
            {props.render?.({ onClose, ...args })}
            <Show when={primaryButton}>
              {(buttonProps) => (
                <Button
                  {...buttonProps()}
                  onClick={(e) => {
                    onClose();
                    buttonProps()?.onClick(e);
                  }}
                />
              )}
            </Show>
            <Show when={cancelButton}>
              {(buttonProps) => (
                <Button
                  {...buttonProps()}
                  onClick={(e) => {
                    onClose();
                    buttonProps()?.onClick(e);
                  }}
                />
              )}
            </Show>
            {props.footerSlot?.()}
          </>
        ),
      },
    },
  });

export const togglePopupPicker = (props: IPopupPickerProps, handleOnClose?: () => void) =>
  toggleOverlay({
    type: OverlayType.Custom,
    action: 'open',
    animation: {
      enter: AnimationType.FadeInBottom,
      leave: AnimationType.FadeOutBottom,
    },
    containerClass: 'w-full items-end overflow-y-hidden',
    sectionClass: 'w-full',
    config: {
      component: PopupPicker,
      props: {
        ...props,
        handleOnClose,
      },
    },
    backdrop: true,
    backgroundClose: true,
    mainLayerEnabled: false,
  });

export const toggleBottomSheet = (props: IBottomSheetProps, task?: Partial<BaseTask>) =>
  toggleOverlay({
    type: OverlayType.Custom,
    action: 'open',
    animation: {
      enter: AnimationType.FadeInBottom,
      leave: AnimationType.FadeOutBottom,
    },
    containerClass: 'w-full items-end',
    sectionClass: 'w-full',
    config: {
      component: BottomSheet,
      props,
    },
    backdrop: true,
    backgroundClose: props.backgroundClose ?? true,
    mainLayerEnabled: false,
    ...task,
  });

interface ICoverPageProps {
  pageSlot: (props: IBaseOverlay) => JSXElement;
}

export const toggleCoverPage = (props: ICoverPageProps, handleOnClose?: () => void) =>
  toggleOverlay({
    type: OverlayType.Custom,
    action: 'open',
    containerClass: () =>
      formatClasses('h-full w-full bg-layer-1 lg:absolute lg:bottom-0 lg:top-[76px] lg:h-auto', {
        'pl-13 pt-2': !isMobile(),
      }),
    backdropClass: 'z-cover-page',
    sectionClass: 'w-full h-full',
    config: {
      component: props.pageSlot,
      props: {
        handleOnClose,
      },
    },
    backdrop: false,
    backgroundClose: false,
    mainLayerEnabled: false,
  });

type ToastMessage = {
  message: string;
  /**
   * 顯示時長 (ms)
   * @defaultValue `3000`
   */
  duration?: number;
  /**
   * 訊息位置
   * @defaultValue `center`
   */
  position?: 'center' | 'top' | 'bottom';
};

export const toggleMessage = ({ message, duration = 3000, position = 'center' }: ToastMessage) => {
  if (!overlay().some(({ taskId }) => taskId === message)) {
    const toastMsgId = toggleOverlay({
      type: OverlayType.Custom,
      taskId: message,
      action: 'open',
      containerClass: formatClasses({
        'items-start pt-12_5': position === 'top',
        'items-end pb-12_5': position === 'bottom',
      }),
      config: {
        component: () => (
          <h4 class="flex min-h-14_5 w-[80vw] items-center justify-center break-all rounded-10 bg-black-1 bg-opacity-60 p-3 font-normal text-white">
            {message}
          </h4>
        ),
      },
      backdrop: false,
      mainLayerEnabled: true,
    });

    setTimeout(() => {
      toggleOverlay({
        action: 'close',
        taskId: toastMsgId,
      });
    }, duration);
  }

  return message;
};

export const toggleImageModal = (props: IImageModalProps) =>
  toggleOverlay({
    type: OverlayType.Custom,
    action: 'open',
    containerClass: 'w-full h-full cursor-pointer',
    sectionClass: 'w-full h-full pointer-events-none',
    config: {
      component: ImageModal,
      props,
    },
    backdrop: true,
    backgroundClose: true,
    mainLayerEnabled: false,
  });
