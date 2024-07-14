import { ISvgBaseComponentProps } from '@shared/interfaces';
import { customTwMerge } from '@utilities/helpers/format.helper';

interface IBetRecordIconProps extends ISvgBaseComponentProps {}

export const BetRecordIcon = (props: IBetRecordIconProps) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class={props.classes}>
      <path
        d="M10 1a9 9 0 110 18 9 9 0 010-18zm.75 5h-1.5v5.217l3.624 2.408.83-1.25-2.954-1.962V6z"
        class={customTwMerge('fill-black-1', props.fillClasses)}
        fill-rule="evenodd"
      />
    </svg>
  );
};

export default BetRecordIcon;
