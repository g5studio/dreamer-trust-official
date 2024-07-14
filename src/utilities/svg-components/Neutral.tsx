import { ISvgBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { customTwMerge } from '@utilities/helpers/format.helper';

const NeutralInplay = (props: ISvgBaseComponentProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" class={props.classes} viewBox="0 0 20 20">
      <g fill="none" fill-rule="evenodd" stroke="none">
        <g fill="#999">
          <path
            d="M15 0c2.762 0 5 2.237 5 5v10c0 2.762-2.238 5-5 5H5c-2.763 0-5-2.238-5-5V5c0-2.763 2.237-5 5-5h10zm0 1.25H5A3.761 3.761 0 001.25 5v10A3.761 3.761 0 005 18.75h10A3.761 3.761 0 0018.75 15V5A3.761 3.761 0 0015 1.25zM8.286 5.003L10.6 9.06a30.691 30.691 0 011.643 3.264h.028c-.128-1.274-.185-2.692-.185-4.317V5.003H14v10h-2.114l-2.357-4.135C8.943 9.84 8.3 8.605 7.843 7.513h-.057c.085 1.235.128 2.64.128 4.421v3.069H6v-10h2.286z"
            class={customTwMerge('fill-black-7', props.fillClasses)}
          />
        </g>
      </g>
    </svg>
  );
};

export default NeutralInplay;
