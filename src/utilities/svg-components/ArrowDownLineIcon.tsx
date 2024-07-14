import { ISvgBaseComponentProps } from '@shared/interfaces';

// arrow_down.svg
export const ArrowDownLineIcon = (props: ISvgBaseComponentProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width ?? '20px'}
      height={props.height ?? '20px'}
      viewBox="0 0 20 20"
      class={props.classes}>
      <g fill="none" stroke="none">
        <g fill="#333" transform="translate(-310 -538)">
          <g transform="translate(25 520)">
            <path
              d="M4 12.5502626L10.018626 7 16 12.5502626 15.1577811 13.3953096 10.0153867 8.62442897 4.83897962 13.4z"
              transform="translate(285 18) rotate(-180 10 10.2)"
              class={props.fillClasses}
            />
          </g>
        </g>
      </g>
    </svg>
  );
};
