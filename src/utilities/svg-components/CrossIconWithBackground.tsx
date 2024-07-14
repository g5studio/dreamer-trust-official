import { ISvgBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { customTwMerge } from '@utilities/helpers/format.helper';

const CrossIconWithBackground = (props: ISvgBaseComponentProps) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class={props.classes}>
      <path
        d="M10.204 18.474c4.632 0 8.467-3.835 8.467-8.467 0-4.624-3.843-8.467-8.475-8.467-4.624 0-8.459 3.843-8.459 8.467 0 4.632 3.843 8.467 8.467 8.467zm2.972-4.782a.702.702 0 01-.498-.207l-2.482-2.49-2.474 2.49a.67.67 0 01-.498.207.703.703 0 01-.697-.705c0-.191.074-.357.207-.482l2.482-2.49-2.482-2.49a.633.633 0 01-.207-.482c0-.381.315-.689.697-.689.2 0 .357.075.481.208l2.49 2.482 2.508-2.49a.633.633 0 01.481-.216c.39 0 .697.315.697.697 0 .191-.058.349-.207.482l-2.49 2.498 2.481 2.474a.683.683 0 01.208.498c0 .39-.307.705-.697.705z"
        class={customTwMerge('fill-black-3', props.fillClasses)}
        fill-rule="nonzero"
      />
    </svg>
  );
};

export default CrossIconWithBackground;
