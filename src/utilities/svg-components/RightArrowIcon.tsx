import { ISvgBaseComponentProps } from '@shared/interfaces';
import { formatClasses } from '@utilities/helpers/format.helper';

interface IRightArrowIconIconProps extends ISvgBaseComponentProps {
  secondaryFillClasses?: string;
}

/**
 * 日曆元件 < icon
 */
export const RightArrowIcon = (props: IRightArrowIconIconProps) => {
  return (
    <svg width="10px" height="10px" viewBox="0 0 120 120">
      <path
        d="M49.8040405,3.34314575 C46.6798462,0.218951416 41.6145263,0.218951416 38.490332,3.34314575 C35.4326099,6.40086786 35.367552,11.3179931 38.2951583,14.4548388 L38.490332,14.6568542 L83.8333725,60 L38.490332,105.343146 C35.4326099,108.400868 35.367552,113.317993 38.2951583,116.454839 L38.490332,116.656854 C41.5480541,119.714576 46.4651794,119.779634 49.602025,116.852028 L49.8040405,116.656854 L100.804041,65.6568542 C103.861763,62.5991321 103.926821,57.6820069 100.999214,54.5451612 L100.804041,54.3431458 L49.8040405,3.34314575 Z"
        class={formatClasses('fill-black-10', props.fillClasses)}
      />
    </svg>
  );
};

export default RightArrowIcon;
