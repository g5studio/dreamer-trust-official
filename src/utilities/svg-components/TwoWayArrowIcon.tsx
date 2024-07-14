import { ISvgBaseComponentProps } from '@shared/interfaces';
import { customTwMerge } from '@utilities/helpers/format.helper';

interface ITwoWayArrowIconProps extends ISvgBaseComponentProps {
  secondaryFillClasses?: string;
}

// arrow.svg
export const TwoWayArrowIcon = (props: ITwoWayArrowIconProps) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class={props.classes}>
      <g fill="none" fill-rule="evenodd">
        <path
          d="M4.001 10.975h11.982a.5.5 0 01.448.3.68.68 0 01-.13.78l-4.129 3.761a.453.453 0 01-.707-.113.694.694 0 01-.1-.446.625.625 0 01.193-.4l2.944-2.682H4.015a.554.554 0 01-.513-.546.682.682 0 01.131-.46.473.473 0 01.371-.2l-.003.006z"
          class={customTwMerge('fill-primary', props.fillClasses)}
        />
        <path
          d="M15.993 8.964H4.016a.5.5 0 01-.448-.3.68.68 0 01.132-.779l4.127-3.763a.453.453 0 01.707.113c.083.134.118.29.1.446a.625.625 0 01-.193.4l-2.94 2.68h10.482c.289.02.514.257.517.546a.682.682 0 01-.13.461.473.473 0 01-.372.2l-.005-.004z"
          class={customTwMerge('fill-black-3', props.secondaryFillClasses)}
        />
      </g>
    </svg>
  );
};
