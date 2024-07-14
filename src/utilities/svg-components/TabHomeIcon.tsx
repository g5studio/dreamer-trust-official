import { ISvgBaseComponentProps } from '@shared/interfaces';
import { formatClasses } from '@utilities/helpers/format.helper';

// TabHome.svg
export const TabHomeIcon = (props: ISvgBaseComponentProps) => {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" class={props.classes}>
      <path
        class={formatClasses('fill-primary', props.fillClasses)}
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M29.154 10.212L16.2975 0.4365C15.531 -0.1455 14.4705 -0.1455 13.704 0.4365L0.8475 10.212C0.3135 10.617 0 11.2485 0 11.9175V17.1765V18.951V27C0 28.656 1.344 30 3 30H9.75C10.5795 30 11.25 29.328 11.25 28.5V22.593V22.5C11.25 21.6705 11.9235 21 12.75 21H17.25C18.0795 21 18.75 21.6705 18.75 22.5V22.593V28.5C18.75 29.328 19.4235 30 20.25 30H27C28.6575 30 30 28.656 30 27V18.951V17.1765V11.9175C30 11.2485 29.6865 10.617 29.154 10.212"
      />
    </svg>
  );
};
