import { ISvgBaseComponentProps } from '@shared/interfaces';
import { customTwMerge } from '@utilities/helpers/format.helper';

// DoubleArrow.svg
export const DoubleArrow = (props: ISvgBaseComponentProps) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 16 16"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      class={props.classes}>
      <g fill="none" class={customTwMerge('fill-primary', props.fillClasses)}>
        <path d="M12.1288163,7.6 L12.8,8.27978991 L7.9850992,12.72 L3.2,8.27978991 L3.87377514,7.60375229 L7.98769065,11.4204568 L12.1288163,7.6 Z M12.1288163,3.2 L12.8,3.87978991 L7.9850992,8.32 L3.2,3.87978991 L3.87377514,3.20375229 L7.98769065,7.02045682 L12.1288163,3.2 Z" />
      </g>
    </svg>
  );
};
