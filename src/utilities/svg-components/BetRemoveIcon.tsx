import { ISvgBaseComponentProps } from '@shared/interfaces';
import { customTwMerge } from '@utilities/helpers/format.helper';

export const BetRemove = (props: ISvgBaseComponentProps) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class={props.classes}>
      <path
        d="M2.001 10.001a8 8 0 1116 0 8 8 0 01-16 0zm.842 0A7.161 7.161 0 0010 17.163a7.16 7.16 0 10-7.158-7.162h.001zm3.674.462a.43.43 0 01-.387-.462.429.429 0 01.387-.458h6.971a.427.427 0 01.387.458.428.428 0 01-.387.462H6.517z"
        class={customTwMerge('fill-black-3', props.fillClasses)}
        fill-rule="evenodd"
      />
    </svg>
  );
};
