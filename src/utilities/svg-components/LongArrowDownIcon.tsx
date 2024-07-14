import { ISvgBaseComponentProps } from '@shared/interfaces';
import { customTwMerge } from '@utilities/helpers/format.helper';

// down.svg
export const LongArrowDownIcon = (props: ISvgBaseComponentProps) => {
  return (
    <svg
      width="21px"
      height="20px"
      viewBox="0 0 21 20"
      xmlns="http://www.w3.org/2000/svg"
      class={customTwMerge('fill-primary', props.classes)}>
      <g stroke="none" stroke-width="1" class={customTwMerge('fill-primary', props.fillClasses)} fill-rule="evenodd">
        <g transform="translate(-177.000000, -644.000000)">
          <g transform="translate(10.000000, 409.000000)">
            <g transform="translate(167.500000, 235.000000)">
              <polygon
                transform="translate(10.000000, 10.200000) rotate(-180.000000) translate(-10.000000, -10.200000) "
                points="4 12.5502626 10.018626 7 16 12.5502626 15.1577811 13.3953096 10.0153867 8.62442897 4.83897962 13.4"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};
