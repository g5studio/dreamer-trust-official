import { ISvgBaseComponentProps } from '@shared/interfaces';
import { customTwMerge } from '@utilities/helpers/format.helper';

interface ILiveScoreIconProps extends ISvgBaseComponentProps {
  fillClasses?: string;
  secondaryFillClasses?: string;
  strokeClasses?: string;
}

// sscore.svg
export const LiveScoreIcon = (props: ILiveScoreIconProps) => {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      class={props.classes}>
      <path
        d="M6.36,11.7346931 L3.48,11.7346931 C2.868,11.7346931 2.4,12.1644029 2.4,12.7263311 L2.4,19.3372509 C2.4,19.8991791 2.868,20.3288889 3.48,20.3288889 L6.36,20.3288889 C6.972,20.3288889 7.44,19.8991791 7.44,19.3372509 L7.44,12.7263311 C7.44,12.1644029 6.972,11.7346931 6.36,11.7346931 Z M13.44,3.52888889 C14.052,3.52888889 14.52,3.93323941 14.52,4.46200548 L14.52,4.46200548 L14.52,19.3296631 C14.52,19.8584292 14.052,20.2627797 13.44,20.2627797 L13.44,20.2627797 L10.56,20.2627797 C9.948,20.2627797 9.48,19.8584292 9.48,19.3296631 L9.48,19.3296631 L9.48,4.46200548 C9.48,3.93323941 9.948,3.52888889 10.56,3.52888889 L10.56,3.52888889 Z M13.44,4.46200548 L10.56,4.46200548 L10.56,19.3918709 L13.44,19.3918709 L13.44,4.46200548 Z M6.36,12.7263311 L6.36,19.3372509 L3.48,19.3372509 L3.48,12.7263311 L6.36,12.7263311 Z"
        class={customTwMerge('fill-black-3', props.secondaryFillClasses)}
      />
      <path
        d="M20.52,7.60704924 L21.1,19.3041963 L17.64,19.7958343 L17.06,8.09868722 L20.52,7.60704924 Z"
        class={customTwMerge('fill-black-7 stroke-primary', props.fillClasses, props.strokeClasses)}
      />
    </svg>
  );
};

export default LiveScoreIcon;
