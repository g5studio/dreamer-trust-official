import { ISvgBaseComponentProps } from '@shared/interfaces';

export const DataLineMicIcon = (props: ISvgBaseComponentProps) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class={props.classes}>
      <path
        d="M15.833 7.5c.46 0 .834.373.834.833V10c0 3.4-2.545 6.205-5.833 6.615v1.718h2.5c.424 0 .775.318.826.73l.007.104c0 .46-.373.833-.834.833H6.667a.833.833 0 110-1.667h2.5v-1.718a6.668 6.668 0 01-5.83-6.381L3.333 10V8.333a.833.833 0 011.667 0V10a5 5 0 0010 0V8.333c0-.46.373-.833.833-.833zM10 0a3.333 3.333 0 013.333 3.333V10a3.333 3.333 0 11-6.666 0V3.333A3.333 3.333 0 0110 0zm0 1.667c-.92 0-1.667.746-1.667 1.666V10a1.667 1.667 0 103.334 0V3.333c0-.92-.747-1.666-1.667-1.666z"
        fill="#999"
        class={props.fillClasses}
      />
    </svg>
  );
};
