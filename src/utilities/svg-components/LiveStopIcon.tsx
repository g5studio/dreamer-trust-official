import { ISvgBaseComponentProps } from '@shared/interfaces';
import { customTwMerge } from '@utilities/helpers/format.helper';

export const LiveStopIcon = (props: ISvgBaseComponentProps) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" class={props.classes}>
      <g fill="none" fill-rule="evenodd">
        <rect class={customTwMerge('fill-primary', props.fillClasses)} width={60} height={60} rx={30} />
        <path d="M27 18v24h-5V18h5zm11 0v24h-5V18h5z" fill="#FFF" />
      </g>
    </svg>
  );
};
