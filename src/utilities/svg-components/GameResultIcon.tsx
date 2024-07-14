import { ISvgBaseComponentProps } from '@shared/interfaces';
import { customTwMerge } from '@utilities/helpers/format.helper';

interface IGameResultIconProps extends ISvgBaseComponentProps {}

export const GameResultIcon = (props: IGameResultIconProps) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class={props.classes}>
      <path
        d="M12 0H4C2.9 0 2.01.9 2.01 2L2 18c0 1.1.89 2 1.99 2H16c1.1 0 2-.9 2-2V6l-6-6z"
        class={customTwMerge('fill-black-1', props.fillClasses)}
        fill-rule="evenodd"
      />
    </svg>
  );
};

export default GameResultIcon;
