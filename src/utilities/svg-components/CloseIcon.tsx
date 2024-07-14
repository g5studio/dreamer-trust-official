import { ISvgBaseComponentProps } from '@shared/interfaces';
import { customTwMerge } from '@utilities/helpers/format.helper';

// close.svg
export const CloseIcon = (props: ISvgBaseComponentProps) => {
  return (
    <svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class={props.classes}>
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-920.000000, -197.000000)" class={customTwMerge('fill-black-1', props.fillClasses)}>
          <g transform="translate(470.000000, 177.000000)">
            <g transform="translate(214.000000, 16.000000)">
              <g transform="translate(236.000000, 4.000000)">
                <path d="M17.7396505,2.26034953 C18.0600807,2.58077972 18.0847291,3.0849851 17.8135959,3.43368839 L17.7396505,3.51742825 L11.257,10 L17.7396505,16.4825718 C18.0867832,16.8297045 18.0867832,17.3925178 17.7396505,17.7396505 C17.4192203,18.0600807 16.9150149,18.0847291 16.5663116,17.8135959 L16.4825718,17.7396505 L10,11.257 L3.51742825,17.7396505 C3.17029555,18.0867832 2.60748223,18.0867832 2.26034953,17.7396505 C1.93991934,17.4192203 1.91527086,16.9150149 2.1864041,16.5663116 L2.26034953,16.4825718 L8.743,10 L2.26034953,3.51742825 C1.91321682,3.17029555 1.91321682,2.60748223 2.26034953,2.26034953 C2.58077972,1.93991934 3.0849851,1.91527086 3.43368839,2.1864041 L3.51742825,2.26034953 L10,8.743 L16.4825718,2.26034953 C16.8297045,1.91321682 17.3925178,1.91321682 17.7396505,2.26034953 Z" />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};
