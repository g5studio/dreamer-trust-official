import { ISvgBaseComponentProps } from '@shared/interfaces';
import { customTwMerge } from '@utilities/helpers/format.helper';

interface ICalculatorBackIconProps extends ISvgBaseComponentProps {
  secondaryFillClasses?: string;
}

export const CalculatorBackIcon = (props: ICalculatorBackIconProps) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      class={customTwMerge('fill-primary', props.fillClasses, props.classes)}>
      <path
        d="M9.376 12.376a.431.431 0 00.624 0l1.871-1.871 1.871 1.871a.431.431 0 00.624 0 .431.431 0 000-.624l-1.871-1.871 1.871-1.871a.441.441 0 10-.624-.624l-1.871 1.871L10 7.386a.441.441 0 00-.624.624l1.871 1.871-1.871 1.871a.535.535 0 000 .624zM6.97 15.718h11.139c.491-.002.89-.4.891-.891V4.891A.894.894 0 0018.109 4H6.97c-.223 0-.446 0-5.837 5.614a.431.431 0 000 .624c5.436 5.48 5.615 5.48 5.837 5.48zm.134-10.827h11v9.936h-11c-.535-.4-2.851-2.718-4.99-4.946 2.139-2.228 4.5-4.589 4.99-4.99z"
        fill="#666"
        fill-rule="evenodd"
        class={customTwMerge('fill-primary', props.secondaryFillClasses)}
      />
    </svg>
  );
};
