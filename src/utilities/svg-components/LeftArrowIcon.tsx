import { ISvgBaseComponentProps } from '@shared/interfaces';
import { formatClasses } from '@utilities/helpers/format.helper';

interface ILeftArrowIconIconProps extends ISvgBaseComponentProps {
  secondaryFillClasses?: string;
}

/**
 * 日曆元件 < icon
 */
export const LeftArrowIcon = (props: ILeftArrowIconIconProps) => {
  return (
    <svg width="10px" height="10px" viewBox="0 0 120 120">
      <path
        d="M69.490332,3.34314575 C72.6145263,0.218951416 77.6798462,0.218951416 80.8040405,3.34314575 C83.8617626,6.40086786 83.9268205,11.3179931 80.9992143,14.4548388 L80.8040405,14.6568542 L35.461,60 L80.8040405,105.343146 C83.8617626,108.400868 83.9268205,113.317993 80.9992143,116.454839 L80.8040405,116.656854 C77.7463184,119.714576 72.8291931,119.779634 69.6923475,116.852028 L69.490332,116.656854 L18.490332,65.6568542 C15.4326099,62.5991321 15.367552,57.6820069 18.2951583,54.5451612 L18.490332,54.3431458 L69.490332,3.34314575 Z"
        class={formatClasses('fill-black-10', props.fillClasses)}
        fill-rule="nonzero"
      />
    </svg>
  );
};

export default LeftArrowIcon;
