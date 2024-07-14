import { JSX } from 'solid-js';
import { Slot } from './common.interface';

type Style = JSX.CSSProperties | string | undefined;

export interface IBaseComponentProps {
  /**
   * forward reference
   */
  ref?: HTMLElement | ((element: HTMLElement) => void);
  /**
   * children component (static)
   */
  children?: JSX.Element;
  /**
   * children component (reactive)
   */
  childrenSlot?: Slot;
  /**
   * custom class
   */
  classes?: string;
  /**
   * for unit test
   */
  testId?: string;
  /**
   * @description 防禦線路無法使用gzip，會導致tailwind safelist設置讓css file過大，因此動態生成的樣式需透過inline-style設定
   */
  style?: Style;
}

export interface ISvgBaseComponentProps extends IBaseComponentProps {
  fillClasses?: string;
  width?: string;
  height?: string;
}

export interface IBaseOverlay {
  onClose: () => void;
}

/**
 * 覆蓋元件通用設定
 */
export interface IBaseOverlayProps extends IBaseComponentProps {
  handleOnClose?: () => void;
}

export interface ICustomEventWithHammerInput {
  detail: HammerInput;
}
