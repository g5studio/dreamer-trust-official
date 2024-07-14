import { ISvgBaseComponentProps } from '@shared/interfaces';
import { customTwMerge } from '@utilities/helpers/format.helper';

// up.svg
export const TrimArrowUpIcon = (props: ISvgBaseComponentProps) => {
  return (
    <svg width="8px" height="6px" viewBox="0 0 8 6" xmlns="http://www.w3.org/2000/svg" class={props.classes}>
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-343.000000, -85.000000)" class={customTwMerge('fill-black-1', props.fillClasses)}>
          <g transform="translate(0.000000, 44.000000)">
            <g transform="translate(331.000000, 14.000000)">
              <g transform="translate(12.800000, 27.733333)">
                <polygon
                  id="drop2"
                  transform="translate(3.200000, 2.133333) scale(1, -1) rotate(180.000000) translate(-3.200000, -2.133333) "
                  points="3.2 3.55271368e-15 6.4 4.26666667 0 4.26666667"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};
