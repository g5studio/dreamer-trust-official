import { ISvgBaseComponentProps } from '@shared/interfaces';
import { formatClasses } from '@utilities/helpers/format.helper';

interface IToBeConfirmedIconProps extends ISvgBaseComponentProps {
  secondaryFillClasses?: string;
}

export const ToBeConfirmedIcon = (props: IToBeConfirmedIconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" class={props.classes}>
      <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
        <g>
          <circle cx="15" cy="15" r="12" class={formatClasses('fill-black-3', props.secondaryFillClasses)} />
          <circle cx="15" cy="15" r="15" fill="#333" fill-rule="nonzero" opacity="0.1" />
          <path
            fill="#FFF"
            fill-rule="nonzero"
            d="M15.208 9c-.694 0-1.245.583-1.206 1.277l.374 6.578a.833.833 0 001.664 0l.374-6.578A1.208 1.208 0 0015.208 9zm0 10.144c-.65 0-1.181.531-1.181 1.18 0 .65.531 1.182 1.18 1.182.65 0 1.182-.532 1.182-1.181 0-.65-.532-1.181-1.181-1.181z"
          />
        </g>
      </g>
    </svg>
  );
};

export default ToBeConfirmedIcon;
