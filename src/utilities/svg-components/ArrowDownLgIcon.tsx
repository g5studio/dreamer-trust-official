import { ISvgBaseComponentProps } from '@shared/interfaces';
import { formatClasses } from '@utilities/helpers/format.helper';

export const ArrowDownLgIcon = (props: ISvgBaseComponentProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class={formatClasses('h-5 w-5', props.classes)}
      viewBox="0 0 21 20"
      fill="none">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.5 14.6152L16.5 5.38447H4.5L10.5 14.6152Z"
        class={formatClasses('fill-black-1', props.fillClasses)}
      />
    </svg>
  );
};
