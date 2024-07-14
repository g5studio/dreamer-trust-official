import { ISvgBaseComponentProps } from '@shared/interfaces';
import { customTwMerge } from '@utilities/helpers/format.helper';

interface IListIconProps extends ISvgBaseComponentProps {
  secondaryFillClasses?: string;
}

export const ListIcon = (props: IListIconProps) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      class={customTwMerge('fill-primary', props.fillClasses, props.classes)}>
      <path
        d="M18 16a1 1 0 010 2H2a1 1 0 010-2zm0-7a1 1 0 010 2H2a1 1 0 010-2zm0-7a1 1 0 010 2H2a1 1 0 110-2z"
        class={customTwMerge('fill-black-3', props.secondaryFillClasses)}
        fill-rule="evenodd"
      />
    </svg>
  );
};
