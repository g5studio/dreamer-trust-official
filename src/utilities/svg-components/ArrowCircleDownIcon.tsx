import { ISvgBaseComponentProps } from '@shared/interfaces';

// arrow_circle_down.svg
export const ArrowCircleDownIcon = (props: ISvgBaseComponentProps) => {
  return (
    <svg
      width={props.width ?? '32px'}
      height={props.height ?? '32px'}
      class={props.classes}
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg">
      <defs>
        <path
          d="M5.5,4.60827381 L1.34129819,0.241636906 C1.03445767,-0.0805456352 0.536970901,-0.0805456352 0.230130386,0.241636906 C-0.0767101287,0.563819446 -0.0767101287,1.08618055 0.230130386,1.40836309 L4.9444161,6.35836309 C5.25125662,6.68054564 5.74874338,6.68054564 6.0555839,6.35836309 L10.7698696,1.40836309 C11.0767101,1.08618055 11.0767101,0.563819446 10.7698696,0.241636906 C10.4630291,-0.0805456352 9.96554233,-0.0805456352 9.65870181,0.241636906 L5.5,4.60827381 Z"
          id="path-1"
        />
      </defs>
      <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Group">
          <circle id="Oval" fill="#F7F8F9" cx="16" cy="16" r="16" />
          <g id="arrow_down" transform="translate(10.5, 12.7)">
            <mask id="mask-2" fill="white">
              {/* @ts-expect-error:ignore use attribute error  */}
              <use xlink:href="#path-1" />
            </mask>
            {/* @ts-expect-error:ignore use attribute error  */}
            <use fill="#333333" xlink:href="#path-1" />
          </g>
        </g>
      </g>
    </svg>
  );
};
