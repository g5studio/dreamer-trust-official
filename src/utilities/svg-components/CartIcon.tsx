import { ISvgBaseComponentProps } from '@shared/interfaces';
import { customTwMerge } from '@utilities/helpers/format.helper';

export const CartIcon = (props: ISvgBaseComponentProps) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      class={customTwMerge('fill-white', props.fillClasses, props.classes)}>
      <path
        d="M10.004 0c1.801 0 3.273 1.431 3.37 3.234v.035h2.768c.478 0 .936.193 1.274.536.3.305.483.707.519 1.133l.007.16L19 18.175c0 .958-.727 1.743-1.652 1.819L17.2 20H2.8a1.81 1.81 0 01-1.794-1.675L1 18.175l1.058-13.08c0-.958.728-1.743 1.653-1.819l.147-.006 2.774-.001.002-.035C6.73 1.43 8.202 0 10.004 0zm6.138 4.258h-2.764V6.13a.915.915 0 01.413.767.906.906 0 01-.9.912.906.906 0 01-.9-.912c0-.322.164-.605.412-.767V4.258H7.604v1.874a.92.92 0 01.405.765.906.906 0 01-.9.912.906.906 0 01-.9-.912c0-.325.168-.61.42-.772l-.001-1.867H3.853a.83.83 0 00-.819.732l-.006.105v.08l-1.055 13.03a.833.833 0 00.715.796l.11.007h14.4a.83.83 0 00.812-.693l.012-.11-1.055-13.03v-.08a.832.832 0 00-.825-.837zm-6.138-3.223c-1.253 0-2.285.975-2.391 2.222l-.002.012h4.785v-.012c-.107-1.247-1.139-2.222-2.392-2.222z"
        fill="#FFF"
        fill-rule="evenodd"
      />
    </svg>
  );
};

export default CartIcon;
