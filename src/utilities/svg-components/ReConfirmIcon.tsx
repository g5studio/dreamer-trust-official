import { ISvgBaseComponentProps } from '@shared/interfaces';
import { customTwMerge } from '@utilities/helpers/format.helper';

// confirm.svg
export const ReConfirmIcon = (props: ISvgBaseComponentProps) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" class={props.classes}>
      <path
        d="M11.744 3.71c.177 0 .34.097.424.252a6.007 6.007 0 01-5.164 9.051v-.004a5.983 5.983 0 01-3.157-.9.484.484 0 11.51-.822 5.03 5.03 0 006.978-6.833.484.484 0 01.409-.744zm-1.579-1.802a.484.484 0 01-.511.822 5.031 5.031 0 00-6.96 6.871.484.484 0 01-.829.501 6 6 0 018.3-8.194z"
        fill="none"
        class={customTwMerge('fill-primary', props.fillClasses)}
        fill-rule="evenodd"
      />
    </svg>
  );
};
