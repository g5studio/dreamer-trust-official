import { ISvgBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { formatClasses } from '@utilities/helpers/format.helper';

const BinIcon = (props: ISvgBaseComponentProps) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      class={formatClasses('fill-black-3', props.fillClasses)}>
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-339.000000, -104.000000)">
          <g transform="translate(339.000000, 104.000000)">
            <path d="M6.6265,2.12490626 L13.3765,2.12490626 L13.3765,1 L6.6265,1 L6.6265,2.12490626 Z M1,4.37471877 L19,4.37471877 L19,3.24981252 L1,3.24981252 L1,4.37471877 Z M11.128,14.500375 L12.253,14.500375 L12.253,6.62603116 L11.128,6.62603116 L11.128,14.500375 Z M7.7515,14.500375 L8.8765,14.500375 L8.8765,6.62603116 L7.7515,6.62603116 L7.7515,14.500375 Z M15.6265,16.7501875 C15.6268982,17.0483932 15.5087056,17.3345215 15.2979653,17.5455255 C15.087225,17.7565296 14.8012308,17.875094 14.503,17.8750937 L5.503,17.8750937 C4.88167966,17.8750937 4.378,17.3714561 4.378,16.7501875 L4.378,5.50112491 L3.253,5.50112491 L3.253,16.7501875 C3.253,17.9927246 4.26035931,19 5.503,19 L14.503,19 C15.7456407,19 16.753,17.9927246 16.753,16.7501875 L16.753,5.50112491 L15.628,5.50112491 L15.628,16.7501875 L15.6265,16.7501875 Z" />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default BinIcon;
