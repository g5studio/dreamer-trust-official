import { ISvgBaseComponentProps } from '@shared/interfaces';
import { customTwMerge } from '@utilities/helpers/format.helper';

interface IDepositIconProps extends ISvgBaseComponentProps {
  secondaryFillClasses?: string;
}

export const DepositIcon = (props: IDepositIconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class={props.classes}>
      <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
        <g transform="translate(-40 -283)">
          <g transform="translate(30 279)">
            <g transform="translate(10 4)">
              <path
                class={customTwMerge('fill-black-1', props.secondaryFillClasses)}
                d="M18 18h1.8v-4.8h2.4V18H24l-3 4.8-3-4.8zM3.07 21.6A3.045 3.045 0 010 18.583V5.418A3.045 3.045 0 013.07 2.4h17.86A3.044 3.044 0 0124 5.418v6.745h-1.68V9H1.674v9.583a1.385 1.385 0 001.396 1.372h12.24V21.6H3.07zM22.32 7.8V5.418a1.384 1.384 0 00-1.396-1.372H3.07a1.384 1.384 0 00-1.396 1.372V7.8H22.32zM13.2 12v-1.2h3.6V12h-3.6zm-4.8 0v-1.2H12V12H8.4zm-4.8 0v-1.2h3.6V12H3.6z"
              />
              <path
                fill="none"
                class={customTwMerge('fill-primary', props.fillClasses)}
                d="M18 18L19.8 18 19.8 13.2 22.2 13.2 22.2 18 24 18 21 22.8z"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default DepositIcon;
