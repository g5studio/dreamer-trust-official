import { ISvgBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { customTwMerge } from '@utilities/helpers/format.helper';

const CornerKick = (props: ISvgBaseComponentProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" class={props.classes} viewBox="0 0 20 20">
      <g fill="none" fill-rule="evenodd" stroke="none" stroke-Width="1">
        <g fill="#999">
          <path
            d="M9.4 0l7.917 4.017L10.9 7.283c-.183.067-.333.3-.317.55v4.15c0 .134-.016.317.117.467.133.183.333.183.433.2a6.389 6.389 0 013.234 1.6l.383.3.267-.183 4.05-3.384c.1-.05.216-.1.333-.1.333 0 .6.267.6.6a.622.622 0 01-.2.434L10 20 .167 11.967l.016-.017A.605.605 0 010 11.517c0-.317.267-.6.6-.6.117 0 .217.05.3.1l.067.05c.016.016.05.033.066.05L5.25 14.6l.25-.25c.5-.467 1.05-.85 1.667-1.15.6-.3 1.233-.5 1.9-.6l.333-.05V0zm1.195 13.78v4.183l3.233-2.616-.366-.317a5.195 5.195 0 00-2.4-1.15l-.467-.1zm-1.193.007l-.483.084c-.867.183-1.7.566-2.383 1.15l-.134.116v.384l.15.133 2.85 2.3v-4.167zM10.594 1.97v4.116l4.05-2.066-4.05-2.05z"
            class={customTwMerge('fill-black-5', props.fillClasses)}
          />
        </g>
      </g>
    </svg>
  );
};

export default CornerKick;
