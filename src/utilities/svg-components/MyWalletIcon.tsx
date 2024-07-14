import { ISvgBaseComponentProps } from '@shared/interfaces';
import { customTwMerge } from '@utilities/helpers/format.helper';

interface IMyWalletIconProps extends ISvgBaseComponentProps {}

export const MyWalletIcon = (props: IMyWalletIconProps) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class={props.classes}>
      <path
        d="M17.494 2.402l.006.098-.001 2.083h1.668c.425 0 .775.318.827.73l.006.104v12.5c0 .46-.373.833-.833.833H3.333A3.333 3.333 0 010 15.417v-7.5a3.333 3.333 0 013.333-3.334h.322l12.828-2.896a.834.834 0 011.011.715zm.84 3.848h-15c-.88 0-1.6.68-1.663 1.542l-.004.125v7.5c0 .92.746 1.666 1.666 1.666h15v-4.166H15a.833.833 0 01-.097-1.661L15 11.25h3.333v-5zm-2.5-2.708L11.22 4.583h4.613V3.542z"
        class={customTwMerge('fill-black-1', props.fillClasses)}
        fill-rule="evenodd"
      />
    </svg>
  );
};

export default MyWalletIcon;
