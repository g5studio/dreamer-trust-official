import { ISvgBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { customTwMerge } from '@utilities/helpers/format.helper';

const NeutralInplay = (props: ISvgBaseComponentProps) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" class={props.classes}>
      <g fill="none" fill-rule="evenodd">
        <rect class={customTwMerge('fill-green-1', props.fillClasses)} width={14} height={14} rx={1.92} />
        <path
          class={customTwMerge('fill-black-7', props.fillClasses)}
          d="M4.9 4.2h.918l2.768 4.039h.032V4.2h.925v5.6H8.65l-2.8-4.094h-.031V9.8H4.9z"
        />
      </g>
    </svg>
  );
};

export default NeutralInplay;
