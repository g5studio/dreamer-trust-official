import { ISvgBaseComponentProps } from '@shared/interfaces';
import { formatClasses } from '@utilities/helpers/format.helper';

interface IGameLayoutPatternSettingIconProps extends ISvgBaseComponentProps {
  secondaryFillClasses?: string;
}

export const GameLayoutPatternSettingIcon = (props: IGameLayoutPatternSettingIconProps) => {
  return (
    <svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class={formatClasses('h-6 w-6', props.classes)}>
      <rect width="9" height="9" rx="1" fill="#4C9EEA" />
      <rect x="10.5" y="5.5" width="5" height="3" rx="0.5" stroke="#999999" />
      <rect x="0.5" y="10.5" width="15" height="3" rx="0.5" stroke="#999999" />
      <rect x="10.5" y="0.5" width="5" height="3" rx="0.5" stroke="#999999" />
    </svg>
  );
};

export default GameLayoutPatternSettingIcon;
