import { ISvgBaseComponentProps } from '@shared/interfaces';
import { customTwMerge } from '@utilities/helpers/format.helper';

interface ICheckCircleIconProps extends ISvgBaseComponentProps {
  fillClasses?: string;
}

export const CheckCircleIcon = (props: ICheckCircleIconProps) => {
  return (
    <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-139.000000, -659.000000)">
          <g transform="translate(139.000000, 659.000000)">
            <circle class={customTwMerge('fill-black-5', props.fillClasses)} cx="10" cy="10" r="7" />
            <polygon
              fill="#FFFFFF"
              points="8.037 12.266 5.655 9.915 4.855 10.699 8.037 13.833 14.855 7.117 14.055 6.333"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default CheckCircleIcon;
