import { ISvgBaseComponentProps } from '@shared/interfaces';
import { customTwMerge } from '@utilities/helpers/format.helper';

// check.svg
export const CheckIcon = (props: ISvgBaseComponentProps) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class={props.classes}>
      <path
        d="M3.923 10.244a.833.833 0 10-1.179 1.179l4.167 4.166a.833.833 0 001.178 0l9.167-9.166a.833.833 0 00-1.179-1.179L7.5 13.821l-3.577-3.577z"
        class={customTwMerge('fill-primary', props.fillClasses)}
        fill-rule="evenodd"
      />
    </svg>
  );
};
