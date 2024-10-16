import { ISvgBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { formatClasses } from '@utilities/helpers/format.helper';

const DoubleArrowDownIcon = (props: ISvgBaseComponentProps) => (
  <svg
    width="50"
    height="50"
    viewBox="0 0 50 50"
    fill="none"
    class={formatClasses(props.classes)}
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12.5 25L25 37.5L37.5 25"
      stroke="#D4D4D4"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.5 13L25 25.5L37.5 13"
      stroke="#D4D4D4"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
export default DoubleArrowDownIcon;
