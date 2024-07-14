import { ISvgBaseComponentProps } from '@shared/interfaces';
import { formatClasses } from '@utilities/helpers/format.helper';

// right.svg
export const ArrowRightIcon = (props: ISvgBaseComponentProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class={props.classes}>
      <g id="Arrow/right_square">
        <path
          id="arrow_back_app"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.00021 3.11655L6.20212 2L14.1431 9.9977L6.20212 18L5.00021 16.8823L11.8333 9.99885L5.00021 3.11655Z"
          class={formatClasses('fill-primary', props.fillClasses)}
        />
      </g>
    </svg>
  );
};
