import { ISvgBaseComponentProps } from '@shared/interfaces';
import { customTwMerge } from '@utilities/helpers/format.helper';

interface IImIconProps extends ISvgBaseComponentProps {}

export const ImIcon = (props: IImIconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      class={props.classes}>
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-116.000000, -615.000000)" class={customTwMerge('fill-black-1', props.fillClasses)}>
          <g transform="translate(100.000000, 0.000000)">
            <g transform="translate(0.000000, 300.000000)">
              <g transform="translate(0.000000, 300.000000)">
                <g transform="translate(16.000000, 15.000000)">
                  <path d="M9.1791129,9.17875 C8.72548387,9.63237903 8.72548387,10.367621 9.1791129,10.8208871 C9.63237903,11.2745161 10.3679839,11.2745161 10.82125,10.8208871 C11.274879,10.3672581 11.274879,9.63201613 10.82125,9.17875 C10.367621,8.72548387 9.63237903,8.72548387 9.1791129,9.17875 Z M10,1 C5.02931452,1 1,5.02931452 1,10 C1,14.9706855 5.02931452,19 10,19 C14.9706855,19 19,14.9706855 19,10 C19,5.02931452 14.9706855,1 10,1 Z M14.5776613,6.37278226 L12.1835887,11.6112903 C12.0677897,11.8646282 11.8646282,12.0677897 11.6112903,12.1835887 L6.37314516,14.5776613 C5.76891129,14.8538306 5.14616935,14.2310887 5.42233871,13.6268548 L7.81677419,8.38834677 C7.93257321,8.1350089 8.13573471,7.9318474 8.38907258,7.81604839 L13.6272177,5.42197581 C14.2314516,5.14616935 14.8538306,5.76854839 14.5776613,6.37278226 L14.5776613,6.37278226 Z" />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default ImIcon;
