import { ISvgBaseComponentProps } from '@shared/interfaces';
import { customTwMerge } from '@utilities/helpers/format.helper';

interface ICollectCircleIconProps extends ISvgBaseComponentProps {
  secondaryFillClasses?: string;
}

export const CollectCircleIcon = (props: ICollectCircleIconProps) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      class={props.classes}>
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-139.000000, -659.000000)">
          <g transform="translate(139.000000, 659.000000)">
            <circle
              id="Oval"
              fill="#none"
              cx="10"
              cy="10"
              r="7"
              class={customTwMerge('fill-primary', props.fillClasses)}
            />
            <polygon
              id="Mask-2"
              fill="#none"
              points="8.037 12.266 5.655 9.915 4.855 10.699 8.037 13.833 14.855 7.117 14.055 6.333"
              class={customTwMerge('fill-white', props.secondaryFillClasses)}
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default CollectCircleIcon;
