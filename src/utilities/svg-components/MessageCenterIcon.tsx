import { ISvgBaseComponentProps } from '@shared/interfaces';
import { customTwMerge } from '@utilities/helpers/format.helper';

interface IMessageCenterIconProps extends ISvgBaseComponentProps {
  secondaryFillClasses?: string;
}

// message_center.svg
export const MessageCenterIcon = (props: IMessageCenterIconProps) => {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      class={props.classes}>
      <path
        d="M19.2,2.4 C21.1882251,2.4 22.8,4.0117749 22.8,6 L22.8,15.6 C22.8,17.5882251 21.1882251,19.2 19.2,19.2 L4.8,19.2 C2.8117749,19.2 1.2,17.5882251 1.2,15.6 L1.2,6 C1.2,4.0117749 2.8117749,2.4 4.8,2.4 L19.2,2.4 Z M9.453,12.361 L3.50753043,16.8693376 L3.41542268,16.930171 C3.72695485,17.2543644 4.1512564,17.4693874 4.62524086,17.5121536 L4.8,17.52 L19.2,17.52 C19.7354672,17.52 20.2197375,17.3008001 20.5679739,16.9472375 C20.5243796,16.92541 20.4829201,16.899403 20.4432696,16.8693376 L20.4432696,16.8693376 L14.529,12.385 L12.4764085,13.7485027 C12.2302544,13.9119846 11.9193771,13.9325711 11.656907,13.8102012 L11.5477134,13.7490043 L9.453,12.361 Z M21.119,8.008 L16.011,11.4 L21.119,15.273 L21.119,8.008 Z M2.879,8.005 L2.879,15.237 L7.969,11.378 L2.879,8.005 Z M19.2,4.08 L4.8,4.08 C3.79852365,4.08 2.97613226,4.84675382 2.88784641,5.82524086 L2.879,5.99 L12.0108,12.0396 L21.119,5.991 L21.113709,5.84344132 C21.0387026,4.91398967 20.3017469,4.17148563 19.3747591,4.08784641 L19.2,4.08 Z"
        class={customTwMerge('fill-black-1', props.secondaryFillClasses)}
      />
      <rect x="6" y="21" width="12" height="1.8" rx="0.9" class={customTwMerge('fill-primary', props.fillClasses)} />
    </svg>
  );
};

export default MessageCenterIcon;
