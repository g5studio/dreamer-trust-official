import { ISvgBaseComponentProps } from '@shared/interfaces';
import { customTwMerge } from '@utilities/helpers/format.helper';

interface ICornersIconProps extends ISvgBaseComponentProps {
  secondFillClasses?: string;
}

// corner.svg
export const CornerIcon = (props: ICornersIconProps) => {
  return (
    <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="corner kick">
        <path
          id="Union"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1.61304 0C1.95949 0 2.24581 0.26045 2.29113 0.598366L2.29737 0.692308V15.9067L8.95314 10.7577C9.25337 10.5254 9.68286 10.5834 9.91244 10.8871C10.1212 11.1632 10.0928 11.5474 9.86036 11.7895L9.78454 11.8576L8.01588 13.2259C9.34 13.8626 10.2676 15.1374 10.4684 16.6154H14.3872C14.7337 16.6154 15.02 16.8758 15.0653 17.2138L15.0716 17.3077C15.0716 17.6582 14.8141 17.9478 14.4801 17.9937L14.3872 18L9.82484 18L1.61304 18C1.49068 18 1.37583 17.9675 1.27644 17.9106C1.21816 17.8773 1.16403 17.835 1.11623 17.7838C1.02008 17.6812 0.954684 17.5487 0.934958 17.4016L0.934954 17.4016C0.930762 17.3704 0.928691 17.339 0.928711 17.3077V0.692308C0.928711 0.309957 1.2351 0 1.61304 0ZM3.63448 16.6154H9.08071C8.85761 15.5018 8.02896 14.5859 6.91119 14.2843C6.84992 14.2678 6.79281 14.2434 6.74067 14.2124L3.63448 16.6154Z"
          fill="#979797"
        />
        <path
          id="Path"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.928711 0.610075V7.10535C0.928711 7.44166 1.229 7.71429 1.59943 7.71429H10.5424C11.1764 7.71429 11.4565 6.98944 10.9614 6.62986L2.01843 0.134579C1.57926 -0.184386 0.928711 0.0994819 0.928711 0.610075Z"
          fill="none"
          class={customTwMerge('fill-primary', props.fillClasses)}
        />
      </g>
    </svg>
  );
};
