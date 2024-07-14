import { ISvgBaseComponentProps } from '@shared/interfaces';
import { customTwMerge } from '@utilities/helpers/format.helper';

// more.svg
export const MoreIcon = (props: ISvgBaseComponentProps) => {
  return (
    <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class={props.classes}>
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-58.000000, -220.000000)" class={customTwMerge('fill-black-1', props.fillClasses)}>
          <g transform="translate(0.000000, 202.000000)">
            <g transform="translate(10.000000, 12.000000)">
              <g transform="translate(48.000000, 6.000000)">
                <path d="M10,9 C10.5522847,9 11,9.44771525 11,10 C11,10.5522847 10.5522847,11 10,11 C9.44771525,11 9,10.5522847 9,10 C9,9.44771525 9.44771525,9 10,9 Z M14,9 C14.5522847,9 15,9.44771525 15,10 C15,10.5522847 14.5522847,11 14,11 C13.4477153,11 13,10.5522847 13,10 C13,9.44771525 13.4477153,9 14,9 Z M6,9 C6.55228475,9 7,9.44771525 7,10 C7,10.5522847 6.55228475,11 6,11 C5.44771525,11 5,10.5522847 5,10 C5,9.44771525 5.44771525,9 6,9 Z" />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};
