import { ISvgBaseComponentProps } from '@shared/interfaces';
import { customTwMerge } from '@utilities/helpers/format.helper';

// uncheck.svg
export const CheckIconUnCheck = (props: ISvgBaseComponentProps) => {
  return (
    <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <path
        class={customTwMerge('fill-primary', props.classes)}
        d="M10,3 C13.8659932,3 17,6.13400675 17,10 C17,13.8659932 13.8659932,17 10,17 C6.13400675,17 3,13.8659932 3,10 C3,6.13400675 6.13400675,3 10,3 Z M10,4 C6.6862915,4 4,6.6862915 4,10 C4,13.3137085 6.6862915,16 10,16 C13.3137085,16 16,13.3137085 16,10 C16,6.6862915 13.3137085,4 10,4 Z"
      />
    </svg>
  );
};
