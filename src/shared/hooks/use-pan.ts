import { Direction } from '@shared/enums';
import { ICustomEventWithHammerInput } from '@shared/interfaces';
import { mergeProps } from 'solid-js';

interface IUsePan {
  type: Direction;
  onLeft?: () => void;
  onRight?: () => void;
  onUp?: () => void;
  onDown?: () => void;
  delta?: number;
}

const usePan = (props: IUsePan) => {
  const mergedProps = mergeProps({ delta: 10 }, props);
  let currentOffset = 0;

  const onPanStart = (e: ICustomEventWithHammerInput) => {
    currentOffset = props.type === Direction.Vertical ? e.detail.center.y : e.detail.center.x;
  };

  const onPanEnd = (e: ICustomEventWithHammerInput) => {
    switch (props.type) {
      case Direction.Vertical:
        if (e.detail.center.y - currentOffset > mergedProps.delta) {
          props.onDown?.();
        } else if (currentOffset - e.detail.center.y > mergedProps.delta) {
          props.onUp?.();
        }
        break;
      case Direction.Horizontal:
        if (e.detail.center.x - currentOffset > mergedProps.delta) {
          props.onLeft?.();
        } else if (currentOffset - e.detail.center.x > mergedProps.delta) {
          props.onRight?.();
        }
        break;
      default:
    }
  };

  return {
    onPanStart,
    onPanEnd,
  };
};

export default usePan;
