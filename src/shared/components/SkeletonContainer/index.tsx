import Skeleton, { SkeletonType } from '@shared/components/Skeleton';
import { IBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { Show } from 'solid-js';
import { Slot } from '@shared/interfaces';

export interface ISkeletonContainerProps extends IBaseComponentProps {
  /**
   * 為true時將內容替換為骨架元件
   */
  showSkeleton: boolean;
  skeletonSlot?: Slot;
  /**
   * @default SkeletonType.Rect
   */
  type?: SkeletonType;
}

const SkeletonContainer = (props: ISkeletonContainerProps) => (
  <>
    <Show
      when={!props.showSkeleton}
      fallback={
        props.skeletonSlot?.() || (
          <Skeleton classes={props.classes} testId={props.testId} type={props.type ?? SkeletonType.Rect} />
        )
      }>
      {props.children}
    </Show>
  </>
);

export default SkeletonContainer;
