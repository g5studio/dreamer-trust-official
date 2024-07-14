import { ISvgBaseComponentProps } from '@shared/interfaces';
import { customTwMerge } from '@utilities/helpers/format.helper';

interface IEditIconProps extends ISvgBaseComponentProps {
  secondaryFillClasses?: string;
}

export const EditIcon = (props: IEditIconProps) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      class={customTwMerge('fill-black-2', props.fillClasses, props.classes)}>
      <path
        d="M11.6 2.931l-8 8V13h2.069l8-8L11.6 2.931zM17.2 17a.8.8 0 110 1.6H2.8a.8.8 0 110-1.6zM12.166 1.234l3.2 3.2a.8.8 0 010 1.132l-8.8 8.8A.8.8 0 016 14.6H2.8a.8.8 0 01-.8-.8v-3.2a.8.8 0 01.234-.566l8.8-8.8a.8.8 0 011.132 0z"
        class={customTwMerge('fill-black-1', props.secondaryFillClasses)}
        fill-rule="evenodd"
      />
    </svg>
  );
};
