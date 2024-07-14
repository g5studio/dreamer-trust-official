import { ISvgBaseComponentProps } from '@shared/interfaces';
import { customTwMerge } from '@utilities/helpers/format.helper';

interface IVIPIconProps extends ISvgBaseComponentProps {
  secondaryFillClasses?: string;
}

// newVIP.svg
export const VIPIcon = (props: IVIPIconProps) => {
  return (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 20 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      class={props.classes}>
      <path
        d="M10.018184,12.5414954 L8.30326541,11.0146102 C7.93273506,10.6977394 7.38834223,10.6815382 6.99923282,10.9758019 C6.98251445,10.9878897 6.96772512,11.00125 6.9529358,11.0146102 C6.77511844,11.1653326 6.67277151,11.3854261 6.67277151,11.6170937 C6.67277151,11.8487612 6.77511844,12.0688547 6.9529358,12.2195771 L9.34044715,14.3483095 C9.71044493,14.664878 10.2540313,14.6816022 10.6431937,14.3883902 C10.6599121,14.37503 10.6753444,14.3616697 10.6901337,14.3483095 L13.0782881,12.2195771 C13.2556821,12.0687413 13.3577333,11.8488353 13.3577333,11.6174118 C13.3577333,11.3859882 13.2556821,11.1660822 13.0782881,11.0152464 C12.7079123,10.6981845 12.1635153,10.6817175 11.7742555,10.9758019 C11.7575371,10.9885259 11.7427478,11.0018862 11.7279585,11.0152464 L10.016255,12.5421316 L10.018184,12.5414954 Z"
        class={customTwMerge('fill-primary', props.fillClasses)}
      />
      <path
        d="M8.8690709,2.82028554 L5.042,8.235 L2.70760097,6.52659466 C2.3642435,6.28878548 1.96564473,6.18873849 1.57001428,6.23324491 C0.773090665,6.3145167 0.1333604,6.96267458 0.266679638,7.75729435 L1.92932067,17.6172763 L17.8438195,17.7553982 L19.7299374,7.92594677 C19.807019,7.45670069 19.6314714,7.00378533 19.2755013,6.72020917 L19.1510407,6.63157115 C18.5987034,6.27487921 17.8855297,6.27470678 17.3340248,6.64040241 L15.015,8.267 L11.3834841,2.89523757 L11.277167,2.76099151 C11.1649282,2.63441176 11.0353278,2.530998 10.8920005,2.45225394 L10.7666996,2.39139788 C10.1092413,2.09744779 9.33478129,2.27186031 8.8690709,2.82028554 Z M18.1793556,7.87936271 L18.214,7.865 L16.606,16.245 L3.198,16.127 L1.782,7.727 L1.80694792,7.73255641 L1.83808213,7.74869923 L5.38756205,10.3461941 L10.0534178,3.73835393 L10.059047,3.74441353 L10.1177082,3.75015321 C10.1306214,3.75242623 10.1444023,3.75603592 10.158,3.762 L14.6276322,10.3721175 L18.1793556,7.87936271 Z"
        class={customTwMerge('fill-black-2', props.secondaryFillClasses)}
      />
    </svg>
  );
};

export default VIPIcon;
