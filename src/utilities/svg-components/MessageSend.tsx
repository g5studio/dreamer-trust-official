import { ISvgBaseComponentProps } from '@shared/interfaces';
import { customTwMerge } from '@utilities/helpers/format.helper';

// MessageSend.svg
export const MessageSend = (props: ISvgBaseComponentProps) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 18 18"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      class={props.classes}>
      <g fill="none" class={customTwMerge('fill-primary', props.fillClasses)}>
        <path d="M17.9222727,1.15690909 C17.9892213,0.782751775 17.8341924,0.403566578 17.5242904,0.183483593 C17.2143883,-0.0365993924 16.8052968,-0.0580352395 16.4740909,0.128454545 L0.500727273,9.11372727 C0.167418428,9.30137581 -0.0265695527,9.66551476 0.00363984678,10.0468206 C0.0338492462,10.4281265 0.282755936,10.7571766 0.641454545,10.89 L4.93118182,12.4780909 L14.6061818,3.40363636 L7.24254545,13.3363636 L7.24827273,13.3363636 L7.24090909,13.3363636 L7.24090909,17.4207273 C7.24089328,17.6262707 7.36893048,17.8100623 7.56174457,17.881272 C7.75455866,17.9524818 7.97132168,17.8960312 8.10490909,17.7398182 L10.7623636,14.6389091 L14.1169091,15.8825455 C14.3897629,15.9841129 14.6936217,15.9593451 14.9464254,15.814931 C15.199229,15.6705169 15.3749013,15.4213525 15.426,15.1347273 L17.9222727,1.15690909 Z" />
      </g>
    </svg>
  );
};
