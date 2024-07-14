import { ISvgBaseComponentProps } from '@shared/interfaces';
import { formatClasses } from '@utilities/helpers/format.helper';

export const LiveIcon = (props: ISvgBaseComponentProps) => {
  return (
    <svg
      class={formatClasses('stroke-primary fill-primary', props.classes)}
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg">
      <title>live@0.5x</title>
      <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="live" fill="#999999" transform="translate(-0, 0)">
          <path
            d="M15,0 C17.7625,0 20,2.2375 20,5 L20,15 C20,17.7625 17.7625,20 15,20 L5,20 C2.2375,20 0,17.7625 0,15 L0,5 C0,2.2375 2.2375,0 5,0 L15,0 Z M15,1.25 L5,1.25 C2.9375,1.25 1.25,2.9375 1.25,5 L1.25,15 C1.25,17.0625 2.9375,18.75 5,18.75 L15,18.75 C17.0625,18.75 18.75,17.0625 18.75,15 L18.75,5 C18.75,2.9375 17.0625,1.25 15,1.25 Z M7.60327827,6.39713289 C7.80983482,6.01705234 8.26989258,5.88702479 8.62667208,6.10707142 L8.68300568,6.13707778 L13.189694,9.34775821 C13.3868616,9.49779001 13.4995288,9.747843 13.4995288,10.0078981 C13.5089177,10.2879575 13.3774727,10.5480126 13.1521382,10.6880423 L8.67361674,13.8587142 C8.5515606,13.9587354 8.40133766,14.008746 8.25111472,13.9987439 C7.84739056,13.9887418 7.51877787,13.6486697 7.5,13.2185785 L7.5,6.79721768 C7.5,6.65718801 7.53755574,6.51715833 7.60327827,6.39713289 Z"
            id="Combined-Shape"
          />
        </g>
      </g>
    </svg>
  );
};
