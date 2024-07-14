import { customTwMerge } from '@utilities/helpers/format.helper';
import { IBaseComponentProps } from '@shared/interfaces/base-component.interface';

export enum SkeletonType {
  /** 矩形 */
  Rect = 'rect',
  /** 圓形 */
  Circle = 'circle',
  /** 文字 */
  Text = 'text',
}
export interface ISkeletonProps extends IBaseComponentProps {
  /**
   * for skeleton type
   */
  type: SkeletonType;
}

type SkeletonConfig = {
  class: string;
};

const skeletonStyleMap: Map<SkeletonType, SkeletonConfig> = new Map([
  [
    SkeletonType.Rect,
    {
      class: 'rounded',
    },
  ],
  [
    SkeletonType.Circle,
    {
      class: 'rounded-full',
    },
  ],
  [
    SkeletonType.Text,
    {
      class: 'rounded',
    },
  ],
]);

const Skeleton = (props: ISkeletonProps) => {
  return (
    <div
      data-testid={props.testId}
      class={customTwMerge('animate-pulse bg-black-5', skeletonStyleMap.get(props.type)?.class, props.classes)}
    />
  );
};

export default Skeleton;
