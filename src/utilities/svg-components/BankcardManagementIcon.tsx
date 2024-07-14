import { ISvgBaseComponentProps } from '@shared/interfaces';
import { customTwMerge } from '@utilities/helpers/format.helper';

interface IBankcardManagementIconProps extends ISvgBaseComponentProps {
  secondaryFillClasses?: string;
}

export const BankcardManagementIcon = (props: IBankcardManagementIconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class={props.classes}>
      <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
        <g transform="translate(-220 -283)">
          <g transform="translate(30 279)">
            <g transform="translate(180)">
              <g transform="translate(10 4)">
                <path
                  class={customTwMerge('fill-black-1', props.secondaryFillClasses)}
                  d="M21 3a3 3 0 013 3v13.2a3 3 0 01-3 3H3a3 3 0 01-3-3V6a3 3 0 013-3h18zm0 1.7H3a1.3 1.3 0 00-1.293 1.167L1.7 6v13.2a1.3 1.3 0 001.167 1.293L3 20.5h18a1.3 1.3 0 001.293-1.167l.007-.133V6a1.3 1.3 0 00-1.167-1.293L21 4.7z"
                />
                <path class={customTwMerge('fill-black-1', props.secondaryFillClasses)} d="M0 10L0 8.8 24 8.8 24 10z" />
                <path
                  fill="none"
                  class={customTwMerge('fill-primary', props.fillClasses)}
                  d="M3.6 15L3.6 13.8 7.2 13.8 7.2 15z"
                />
                <path
                  fill="none"
                  class={customTwMerge('fill-primary', props.fillClasses)}
                  d="M3.6 13L3.6 11.8 11.6 11.8 11.6 13z"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default BankcardManagementIcon;
