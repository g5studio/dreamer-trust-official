import { ISvgBaseComponentProps } from '@shared/interfaces';
import { customTwMerge } from '@utilities/helpers/format.helper';

export const BetFailIcon = (props: ISvgBaseComponentProps) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class={props.classes}>
      <path
        d="M10.87 18.474c4.633 0 8.467-3.835 8.467-8.467 0-4.624-3.843-8.467-8.475-8.467-4.623 0-8.458 3.843-8.458 8.467 0 4.632 3.843 8.467 8.467 8.467zm2.972-4.782a.702.702 0 01-.498-.207l-2.482-2.49-2.473 2.49a.67.67 0 01-.498.207.703.703 0 01-.698-.705c0-.191.075-.357.208-.482l2.482-2.49L7.4 7.525a.633.633 0 01-.208-.482c0-.381.316-.689.698-.689.199 0 .357.075.481.208l2.49 2.482 2.507-2.49a.633.633 0 01.482-.216c.39 0 .697.315.697.697 0 .191-.058.349-.208.482l-2.49 2.498 2.482 2.474a.683.683 0 01.208.498c0 .39-.308.705-.698.705z"
        fill="#FFF"
        fill-rule="nonzero"
        class={customTwMerge('fill-primary', props.fillClasses)}
      />
    </svg>
  );
};
