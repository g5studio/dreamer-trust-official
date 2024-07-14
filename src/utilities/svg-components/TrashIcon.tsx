import { ISvgBaseComponentProps } from '@shared/interfaces';
import { formatClasses } from '@utilities/helpers/format.helper';

// trash.svg
export const TrashIcon = (props: ISvgBaseComponentProps) => {
  return (
    <svg width="15px" height="14px" viewBox="0 0 15 14" xmlns="http://www.w3.org/2000/svg" class={props.classes}>
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-309.000000, -268.000000)" class={formatClasses('fill-primary', props.fillClasses)}>
          <g transform="translate(295.000000, 263.000000)">
            <g transform="translate(14.000000, 5.000000)">
              <path d="M4.63855,1.48743438 L9.36355,1.48743438 L9.36355,0.7 L4.63855,0.7 L4.63855,1.48743438 Z M0.7,3.06230314 L13.3,3.06230314 L13.3,2.27486876 L0.7,2.27486876 L0.7,3.06230314 Z M7.7896,10.1502625 L8.5771,10.1502625 L8.5771,4.63822181 L7.7896,4.63822181 L7.7896,10.1502625 Z M5.42605,10.1502625 L6.21355,10.1502625 L6.21355,4.63822181 L5.42605,4.63822181 L5.42605,10.1502625 Z M10.93855,11.7251312 C10.9388287,11.9338752 10.8560939,12.134165 10.7085757,12.2818679 C10.5610575,12.4295707 10.3608616,12.5125658 10.1521,12.5125656 L3.8521,12.5125656 C3.41717576,12.5125656 3.0646,12.1600192 3.0646,11.7251312 L3.0646,3.85078743 L2.2771,3.85078743 L2.2771,11.7251312 C2.2771,12.5949072 2.98225152,13.3 3.8521,13.3 L10.1521,13.3 C11.0219485,13.3 11.7271,12.5949072 11.7271,11.7251312 L11.7271,3.85078743 L10.9396,3.85078743 L10.9396,11.7251312 L10.93855,11.7251312 Z" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};
