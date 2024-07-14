import { ISvgBaseComponentProps } from '@shared/interfaces';
import { customTwMerge } from '@utilities/helpers/format.helper';

export const LivePlayIcon = (props: ISvgBaseComponentProps) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg" class={props.classes}>
      <g fill="none" fill-rule="evenodd">
        <rect class={customTwMerge('fill-primary', props.fillClasses)} width={60} height={60} rx={30} />
        <path
          d="M39.967 28.045l-15.041-9.621a.222.222 0 00-.063-.045l-.015-.015-.094-.045a2.615 2.615 0 00-2.503 0A2.384 2.384 0 0021 20.4v19.242c.057 1.294 1.152 2.324 2.503 2.355.499.011.988-.133 1.395-.411l14.944-9.513a2.33 2.33 0 001.157-2.052 2.401 2.401 0 00-1.032-1.977z"
          fill="#FFF"
        />
      </g>
    </svg>
  );
};
