import { ISvgBaseComponentProps } from '@shared/interfaces';
import { formatClasses } from '@utilities/helpers/format.helper';

// TabMine.svg
export const TabMineIcon = (props: ISvgBaseComponentProps) => {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" class={props.classes}>
      <path
        class={formatClasses('fill-primary', props.fillClasses)}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M30 15C30 23.283 23.2845 30 15 30C6.717 30 0 23.283 0 15C0 6.7155 6.717 0 15 0C23.2845 0 30 6.7155 30 15M15.0145 23.625C11.947 23.625 9.08355 21.9735 7.54455 19.314C7.23405 18.777 7.41705 18.0885 7.95405 17.778C8.48955 17.463 9.17955 17.649 9.49155 18.1875C10.6301 20.154 12.7465 21.375 15.0145 21.375C17.3545 21.375 19.3751 20.274 20.4926 18.216C20.7896 17.67 21.4705 17.469 22.0195 17.7645C22.564 18.0615 22.7665 18.744 22.471 19.29C20.959 22.074 18.1795 23.625 15.0145 23.625"
      />
    </svg>
  );
};
