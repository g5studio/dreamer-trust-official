import { customTwMerge } from '@utilities/helpers/format.helper';
import { ISvgBaseComponentProps } from '@shared/interfaces';

export const CollectNotFilledIcon = (props: ISvgBaseComponentProps) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class={props.classes}>
      <path
        d="M15.146 1.001H5.014a2.428 2.428 0 00-2.503 2.34L2.5 19l7.5-2.996L17.5 19V3.357a2.44 2.44 0 00-2.354-2.356zM15 1.985l.141.002c.743.047 1.334.64 1.363 1.389l-.001 14.164L10 14.943 3.497 17.54l.01-14.183a1.435 1.435 0 011.477-1.372h10.017z"
        fill="none"
        class={customTwMerge('fill-black-3', props.fillClasses)}
        fill-rule="evenodd"
      />
    </svg>
  );
};
