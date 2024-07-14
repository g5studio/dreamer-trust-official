import { ISvgBaseComponentProps } from '@shared/interfaces';
import { formatClasses } from '@utilities/helpers/format.helper';

interface IArrowCircleLeftIconProps extends ISvgBaseComponentProps {
  secondaryFillClasses?: string;
}

export const ArrowCircleLeftIcon = (props: IArrowCircleLeftIconProps) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.7071 4.29289C13.0976 4.68342 13.0976 5.31658 12.7071 5.70711L8.41421 10L12.7071 14.2929C13.0976 14.6834 13.0976 15.3166 12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L6.29289 10.7071C5.90237 10.3166 5.90237 9.68342 6.29289 9.29289L11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289Z"
          class={formatClasses('fill-black-3', props.fillClasses)}
        />
      </g>
    </svg>
  );
};

export default ArrowCircleLeftIcon;
