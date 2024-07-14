import { ISvgBaseComponentProps } from '@shared/interfaces';
import { customTwMerge } from '@utilities/helpers/format.helper';

// arrow_back_line.svg
export const ArrowBackLineIcon = (props: ISvgBaseComponentProps) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 34 34"
      xmlns="http://www.w3.org/2000/svg"
      class={customTwMerge('fill-white', props.fillClasses, props.classes)}>
      <path
        d="M6 17.652L18.015 5.154l1.831 1.758-8.888 9.24H28v2.54H10.503l9.352 9.785-1.835 1.753z"
        fill-rule="evenodd"
      />
    </svg>
  );
};
