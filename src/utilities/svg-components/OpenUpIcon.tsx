import { ISvgBaseComponentProps } from '@shared/interfaces';
import { customTwMerge } from '@utilities/helpers/format.helper';

// openup.svg
export const OpenUpIcon = (props: ISvgBaseComponentProps) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" class={props.classes}>
      <path
        d="M7 .7a6.3 6.3 0 110 12.6A6.3 6.3 0 017 .7zm0 2.561a.534.534 0 00-.534.535v2.67h-2.67l-.067.004a.534.534 0 00.067 1.064h2.67v2.67l.004.067a.534.534 0 001.064-.067v-2.67h2.67l.067-.004a.534.534 0 00-.067-1.064h-2.67v-2.67l-.004-.067A.534.534 0 007 3.26z"
        class={customTwMerge('fill-primary', props.fillClasses)}
        fill-rule="evenodd"
      />
    </svg>
  );
};
