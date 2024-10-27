import { ISvgBaseComponentProps } from '@shared/interfaces';
import { formatClasses } from '@utilities/helpers/format.helper';

// arrow_down.svg
export const ArrowDownLineIcon = (props: ISvgBaseComponentProps) => {
  return (
    <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 1.66907L7 7.66907L13 1.66907"
        class={formatClasses('stroke-black-1', props.fillClasses)}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
