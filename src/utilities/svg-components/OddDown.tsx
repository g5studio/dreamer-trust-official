import { ISvgBaseComponentProps } from '@shared/interfaces';

export const OddDown = (props: ISvgBaseComponentProps) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class={props.classes}>
      <path d="M10 12L7 8h6z" fill="#999" fill-rule="evenodd" />
    </svg>
  );
};
