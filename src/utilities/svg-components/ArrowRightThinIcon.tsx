import { ISvgBaseComponentProps } from '@shared/interfaces';

// arrow-right.svg
export const ArrowRightThinIcon = (props: ISvgBaseComponentProps) => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 12 20" xmlns="http://www.w3.org/2000/svg" class={props.classes}>
      <g transform="matrix(1,0,0,1,-5.42857,0)">
        <path d="M12,4.837L12.901,4L18.857,9.998L12.901,16L12,15.162L17.125,9.999L12,4.837Z" fill-rule="nonzero" />
      </g>
    </svg>
  );
};
