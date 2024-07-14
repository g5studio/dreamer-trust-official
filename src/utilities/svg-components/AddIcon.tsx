import { ISvgBaseComponentProps } from '@shared/interfaces';
import { customTwMerge } from '@utilities/helpers/format.helper';

interface IAddIconProps extends ISvgBaseComponentProps {
  secondaryFillClasses?: string;
}

export const AddIcon = (props: IAddIconProps) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      class={customTwMerge('fill-primary', props.fillClasses, props.classes)}>
      <path
        d="M10 2a.75.75 0 01.75.75v6.5h6.5a.75.75 0 110 1.5h-6.5v6.5a.75.75 0 11-1.5 0v-6.501l-6.5.001a.75.75 0 110-1.5l6.5-.001V2.75A.75.75 0 0110 2z"
        fill-rule="evenodd"
        class={customTwMerge('fill-primary', props.secondaryFillClasses)}
      />
    </svg>
  );
};
