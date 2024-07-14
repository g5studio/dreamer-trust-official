import { ISvgBaseComponentProps } from '@shared/interfaces';
import { formatClasses } from '@utilities/helpers/format.helper';

interface IWarnIconProps extends ISvgBaseComponentProps {
  classes?: string;
  fillClasses?: string;
}

export const WarnIcon = (props: IWarnIconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" class={props.classes}>
      <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
        <g class={formatClasses('fill-primary', props.fillClasses)} transform="translate(-12 -100)">
          <g transform="translate(12 100)">
            <path d="M13.06 2.939a7.158 7.158 0 01.304 9.802l-.075.06c.271.584.738 1.303 1.475 1.667a.278.278 0 01-.08.522c-.807.126-1.955-.009-3.033-.821l-.023.005a7.16 7.16 0 01-8.685-1.111c-2.8-2.8-2.8-7.333-.005-10.124a7.157 7.157 0 0110.123 0zm-4.22 3.63H6.333a1.188 1.188 0 00-.194.017c-.183.027-.27.108-.284.229-.016.112.06.224.223.278.133.04.275.05.417.067.326.04.433.144.433.435 0 .045 0 .09-.01.135-.138.699-.285 1.398-.417 2.098-.077.403-.148.807-.209 1.21-.092.592.554 1.148 1.063 1.21.305.041.616.05.926.046.666-.01 1.216-.256 1.678-.668a.575.575 0 00.178-.27c.051-.17-.101-.277-.295-.206-.122.045-.234.121-.356.162a2.41 2.41 0 01-.473.116c-.193.018-.33-.076-.381-.242a.991.991 0 01-.04-.385c.035-.27.096-.534.152-.798.168-.798.335-1.596.498-2.399.046-.215.087-.435.082-.65-.01-.26-.189-.386-.484-.386zm-.473-2.864a1.068 1.068 0 00-1.083 1.063 1.08 1.08 0 001.078 1.085 1.074 1.074 0 00.005-2.148z" />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default WarnIcon;
