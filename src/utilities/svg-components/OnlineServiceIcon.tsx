import { ISvgBaseComponentProps } from '@shared/interfaces';
import { customTwMerge } from '@utilities/helpers/format.helper';

interface IOnlineServiceIconProps extends ISvgBaseComponentProps {}

export const OnlineServiceIcon = (props: IOnlineServiceIconProps) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class={props.classes}>
      <path
        d="M19 16V9.526C19 4.818 14.97 1 10 1S1 4.818 1 9.526v6.632C1 17.73 2.34 19 4 19h3v-7.579H3V9.526c0-3.666 3.13-6.631 7-6.631s7 2.965 7 6.631v1.895h-4V19h3a3 3 0 003-3z"
        class={customTwMerge('fill-black-1', props.fillClasses)}
        fill-rule="evenodd"
      />
    </svg>
  );
};

export default OnlineServiceIcon;
