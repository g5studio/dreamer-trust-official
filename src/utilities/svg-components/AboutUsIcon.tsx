import { ISvgBaseComponentProps } from '@shared/interfaces';
import { customTwMerge } from '@utilities/helpers/format.helper';

interface IAboutUsIconProps extends ISvgBaseComponentProps {
  secondaryFillClasses?: string;
}

// about_us.svg
export const AboutUsIcon = (props: IAboutUsIconProps) => {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      class={props.classes}>
      <path
        d="M11.9851257,22.7999887 C6.43975381,22.7926903 1.80127105,18.5861545 1.25342719,13.067641 C0.705583327,7.54912745 4.42647645,2.51264496 9.86216961,1.41512125 C15.2978628,0.317597553 20.6812712,3.51582567 22.317345,8.8146141 C23.9534188,14.1134025 21.3102882,19.7901727 16.2021383,21.948518 C14.8678613,22.5125143 13.4336946,22.8020876 11.9851257,22.7999887 Z M11.9851257,2.54911306 C6.785725,2.54911306 2.57077791,6.76426234 2.57077791,11.9639125 C2.57077791,17.1635626 6.785725,21.3787119 11.9851257,21.3787119 C17.1845264,21.3787119 21.3994735,17.1635626 21.3994735,11.9639125 C21.3940999,6.7664899 17.182299,2.55448693 11.9851257,2.54911306 Z"
        class={customTwMerge('fill-black-3', props.secondaryFillClasses)}
      />
      <path
        d="M11.8,9.6 L12.2,9.6 C12.7522847,9.6 13.2,10.0477153 13.2,10.6 L13.2,17 C13.2,17.5522847 12.7522847,18 12.2,18 L11.8,18 C11.2477153,18 10.8,17.5522847 10.8,17 L10.8,10.6 C10.8,10.0477153 11.2477153,9.6 11.8,9.6 Z M11.8,6 L12.2,6 C12.7522847,6 13.2,6.44771525 13.2,7 L13.2,7.4 C13.2,7.95228475 12.7522847,8.4 12.2,8.4 L11.8,8.4 C11.2477153,8.4 10.8,7.95228475 10.8,7.4 L10.8,7 C10.8,6.44771525 11.2477153,6 11.8,6 Z"
        class={customTwMerge('fill-primary', props.fillClasses)}
      />
    </svg>
  );
};

export default AboutUsIcon;
