import { ISvgBaseComponentProps } from '@shared/interfaces';
import { customTwMerge } from '@utilities/helpers/format.helper';

// up.svg
export const ArrowUpThinIcon = (props: ISvgBaseComponentProps) => {
  return (
    <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class={props.classes}>
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-37.000000, -100.000000)" class={customTwMerge('fill-black-1', props.fillClasses)}>
          <g transform="translate(0.000000, 88.000000)">
            <g transform="translate(17.000000, 12.000000)">
              <g transform="translate(20.000000, 0.000000)">
                <polygon points="5 12.2033712 10.0155217 7 15 12.2033712 14.2981509 12.9956028 10.0128222 8.52290216 5.69914968 13" />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};
