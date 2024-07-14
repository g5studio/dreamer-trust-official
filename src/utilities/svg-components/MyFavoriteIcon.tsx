import { ISvgBaseComponentProps } from '@shared/interfaces';
import { customTwMerge } from '@utilities/helpers/format.helper';

interface IMyFavoriteIconProps extends ISvgBaseComponentProps {
  secondaryFillClasses?: string;
}

// favorite.svg
export const MyFavoriteIcon = (props: IMyFavoriteIconProps) => {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      class={props.classes}>
      <path
        d="M19.9959273,1.19997046 C21.4812997,1.18604409 22.7156773,2.34131402 22.8,3.82433817 L22.8,22.7997047 L12,16.8656686 L1.2,22.797741 L1.2,3.82433817 C1.28433942,2.34093117 2.51930399,1.1855165 4.00505455,1.19997046 L19.9959273,1.19997046 Z M19.9949455,2.45864588 L4.00603636,2.45864588 C3.19220802,2.44658056 2.51238403,3.07583138 2.46163636,3.88815556 L2.46163636,20.6770399 L11.5925455,15.6609925 C11.8485444,15.5335567 12.1494919,15.5335567 12.4054909,15.6609925 L12.4594909,15.683574 L21.5403273,20.6721308 L21.5403273,3.88324653 C21.487061,3.07248017 20.8073698,2.44591106 19.9949455,2.45864588 Z"
        class={customTwMerge('fill-black-3', props.secondaryFillClasses)}
      />
      <rect class={customTwMerge('fill-primary', props.fillClasses)} x="6" y="6" width="12" height="1.8" rx="0.9" />
    </svg>
  );
};

export default MyFavoriteIcon;
