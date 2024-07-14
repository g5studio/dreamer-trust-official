import { ISvgBaseComponentProps } from '@shared/interfaces';
import { customTwMerge } from '@utilities/helpers/format.helper';

// info01.svg
export const ExclamationMark = (props: ISvgBaseComponentProps) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" class={props.classes}>
      <path
        d="M5.947 6.983c.444 0 .804.363.804.811 0 .448-.36.81-.804.81a.807.807 0 01-.804-.81c0-.448.36-.81.804-.81zm.573-3.521c.027 0 .047.033.047.095 0 .075-.18 2.88-.183 2.933-.006.137-.039.172-.06.172h-.758c-.035 0-.05-.047-.053-.136L5.43 5.268l-.026-.392-.037-.558-.02-.316a27 27 0 01-.026-.409c0-.095.027-.13.056-.13l1.143-.001z"
        fill="#none"
        fill-rule="evenodd"
        class={customTwMerge('fill-primary', props.fillClasses)}
      />
    </svg>
  );
};
