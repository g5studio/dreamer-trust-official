import { ISvgBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { customTwMerge } from '@utilities/helpers/format.helper';

const HalfTime = (props: ISvgBaseComponentProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" class={props.classes} viewBox="0 0 20 20">
      <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
        <g fill="#999">
          <path
            d="M10 0c5.517 0 10 4.483 10 10s-4.483 10-10 10S0 15.517 0 10 4.483 0 10 0zm0 1.25A8.749 8.749 0 001.25 10 8.749 8.749 0 0010 18.75 8.749 8.749 0 0018.75 10 8.749 8.749 0 0010 1.25zM4.901 6.218v3.05h3.217v-3.05h1.616v7.567H8.118v-3.117H4.9v3.117H3.284V6.218h1.617zm11.82 0v1.317h-2.166v6.25h-1.617v-6.25h-2.15V6.218h5.934z"
            class={customTwMerge('fill-black-5', props.fillClasses)}
          />
        </g>
      </g>
    </svg>
  );
};

export default HalfTime;
