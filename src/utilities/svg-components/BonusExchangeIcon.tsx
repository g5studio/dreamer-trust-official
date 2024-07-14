import { ISvgBaseComponentProps } from '@shared/interfaces';
import { customTwMerge } from '@utilities/helpers/format.helper';

interface IBonusExchangeIconProps extends ISvgBaseComponentProps {
  secondaryFillClasses?: string;
}

export const BonusExchangeIcon = (props: IBonusExchangeIconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class={props.classes}>
      <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
        <g transform="translate(-310 -283)">
          <g transform="translate(30 279)">
            <g transform="translate(270)">
              <g transform="translate(10 4)">
                <path
                  class={customTwMerge('fill-black-1', props.secondaryFillClasses)}
                  d="M12 1.2c5.965 0 10.8 4.835 10.8 10.8 0 5.965-4.835 10.8-10.8 10.8-5.965 0-10.8-4.835-10.8-10.8C1.2 6.035 6.035 1.2 12 1.2zM12 3a9 9 0 100 18 9 9 0 000-18z"
                />
                <path
                  fill="none"
                  class={customTwMerge('fill-primary', props.fillClasses)}
                  d="M12 14.9153684L14.9664 16.8 14.1792 13.248 16.8 10.8581053 13.3488 10.5498947 12 7.2 10.6512 10.5498947 7.2 10.8581053 9.8208 13.248 9.0336 16.8z"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default BonusExchangeIcon;
