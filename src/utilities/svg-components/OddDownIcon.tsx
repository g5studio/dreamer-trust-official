import { ISvgBaseComponentProps } from '@shared/interfaces';
import { customTwMerge } from '@utilities/helpers/format.helper';

export const OddDownIcon = (props: ISvgBaseComponentProps) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg" class={props.classes}>
      <path d="M5 7L2 3h6z" fill="#CB0202" fill-rule="evenodd" class={customTwMerge('', props.fillClasses)} />
    </svg>
  );
};
