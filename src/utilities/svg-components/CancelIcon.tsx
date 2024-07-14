import { ISvgBaseComponentProps } from '@shared/interfaces';
import { formatClasses } from '@utilities/helpers/format.helper';

export const CancelIcon = (props: ISvgBaseComponentProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class={formatClasses('h-5 w-5', props.classes)}
      viewBox="0 0 20 20"
      fill="none">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.43369 2.1864C3.08499 1.91527 2.58078 1.93992 2.26035 2.26035C1.91322 2.60748 1.91322 3.1703 2.26035 3.51743L8.74292 10L2.26035 16.4826L2.1864 16.5663C1.91527 16.915 1.93992 17.4192 2.26035 17.7397C2.60748 18.0868 3.1703 18.0868 3.51743 17.7397L10 11.2571L16.4826 17.7397L16.5663 17.8136C16.915 18.0847 17.4192 18.0601 17.7397 17.7397C18.0868 17.3925 18.0868 16.8297 17.7397 16.4826L11.2571 10L17.7397 3.51743L17.8136 3.43369C18.0847 3.08499 18.0601 2.58078 17.7397 2.26035C17.3925 1.91322 16.8297 1.91322 16.4826 2.26035L10 8.74292L3.51743 2.26035L3.43369 2.1864Z"
        class={formatClasses('fill-black-1', props.fillClasses)}
      />
    </svg>
  );
};
