import { ISvgBaseComponentProps } from '@shared/interfaces';
import { formatClasses } from '@utilities/helpers/format.helper';
// collect-active.svg
export const CollectActive = (props: ISvgBaseComponentProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" class={props.classes}>
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-10.000000, -259.000000)" class={formatClasses('fill-primary', props.fillClasses)}>
          <g transform="translate(0.000000, 244.000000)">
            <g transform="translate(10.000000, 15.000000)">
              <path d="M15.1458883,1.00135134 L5.0139364,1.00108386 C3.67444336,0.961552702 2.55686352,2.0082631 2.51105904,3.34026766 L2.5,19 L10.0002513,16.0041912 L17.5,18.9997993 L17.5,3.35697151 C17.4503091,2.05889765 16.4151201,1.04425911 15.1458883,1.00135134 Z" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};
