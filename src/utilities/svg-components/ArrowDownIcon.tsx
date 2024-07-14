import { ISvgBaseComponentProps } from '@shared/interfaces';
import { customTwMerge } from '@utilities/helpers/format.helper';

// down.svg
export const ArrowDownIcon = (props: ISvgBaseComponentProps) => {
  return (
    <svg
      width={props.width ?? '20px'}
      height={props.height ?? '20px'}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      class={props.classes}>
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-339.000000, -170.000000)" class={customTwMerge('fill-black-1', props.fillClasses)}>
          <g transform="translate(0.000000, 158.000000)">
            <g transform="translate(339.000000, 12.000000)">
              <polygon
                transform="translate(10.000000, 10.000000) rotate(-180.000000) translate(-10.000000, -10.000000) "
                points="10 8 13 12 7 12"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};
