import { ISvgBaseComponentProps } from '@shared/interfaces';
import { customTwMerge } from '@utilities/helpers/format.helper';

interface ICheckBoxIconProps extends ISvgBaseComponentProps {
  secondaryFillClasses?: string;
}

// checkbox.svg
export const CheckBoxIcon = (props: ICheckBoxIconProps) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class={props.classes}>
      <g fill="none" fill-rule="evenodd">
        <circle class={customTwMerge('fill-primary', props.fillClasses)} cx={10} cy={10} r={7} />
        <path
          class={customTwMerge('fill-white', props.secondaryFillClasses)}
          d="M8.037 12.266L5.655 9.915l-.8.784 3.182 3.134 6.818-6.716-.8-.784z"
        />
      </g>
    </svg>
  );
};
