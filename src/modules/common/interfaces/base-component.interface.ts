import { IBaseComponentProps } from '@shared/interfaces';
import { Accessor } from 'solid-js';

export interface IBaseSideMenuComponentProps extends IBaseComponentProps {
  /**
   * 側選單是否展開
   */
  isExpand: boolean;
  /**
   * 選單動畫是否完成
   */
  isAnimationFinished?: Accessor<boolean>;
}
