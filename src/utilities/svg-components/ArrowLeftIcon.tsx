import { ISvgBaseComponentProps } from '@shared/interfaces';
import { customTwMerge } from '@utilities/helpers/format.helper';

// left.svg
export const ArrowLeftIcon = (props: ISvgBaseComponentProps) => {
  return (
    <svg
      width="0.6em"
      height="1em"
      viewBox="0 0 12 20"
      xmlns="http://www.w3.org/2000/svg"
      class={customTwMerge('fill-black-1', props.classes)}>
      <path d="M9.95 3.255L8.643 2 0 11l8.643 9 1.307-1.256L2.513 11z" fill-rule="evenodd" />
    </svg>
  );
};
