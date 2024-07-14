import { ISvgBaseComponentProps } from '@shared/interfaces';
import { formatClasses } from '@utilities/helpers/format.helper';

// TabHistory.svg
export const TabHistoryIcon = (props: ISvgBaseComponentProps) => {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" class={props.classes}>
      <path
        class={formatClasses('fill-primary', props.fillClasses)}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21 28.5H9C4.0305 28.5 0 24.4695 0 19.5V10.5C0 5.529 4.0305 1.5 9 1.5H21C25.971 1.5 30 5.529 30 10.5V19.5C30 24.4695 25.971 28.5 21 28.5M7.5 12.75H22.5C23.3265 12.75 24 12.075 24 11.25C24 10.425 23.3265 9.75 22.5 9.75H7.5C6.675 9.75 6 10.425 6 11.25C6 12.075 6.675 12.75 7.5 12.75ZM7.998 20.3605H13.998C14.823 20.3605 15.498 19.6855 15.498 18.8605C15.498 18.0356 14.823 17.3605 13.998 17.3605H7.998C7.173 17.3605 6.498 18.0356 6.498 18.8605C6.498 19.6855 7.173 20.3605 7.998 20.3605Z"
      />
    </svg>
  );
};
