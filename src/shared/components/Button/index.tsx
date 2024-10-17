import { Show, type JSX, Accessor } from 'solid-js';
import { customTwMerge } from '@utilities/helpers/format.helper';
import { IBaseComponentProps } from '@shared/interfaces/base-component.interface';
import Loading from '@shared/components/Loading';
import { translate } from '@shared/hooks/use-translation';
import { registerDirective } from '@utilities/helpers/directive.helper';
import { rippleEffect } from '@utilities/directives/ripple-directive';

registerDirective(rippleEffect);

export enum ButtonVariants {
  'primary' = 'primary',
  'primary-flat' = 'primary-flat',
  'outline' = 'outline',
  'icon' = 'icon',
  'block' = 'block',
  'active-outline' = 'active-outline',
  'custom' = 'custom',
}
type ButtonVariantType = keyof typeof ButtonVariants;
export interface IButton
  extends Omit<IBaseComponentProps, 'testId'>,
    Required<Pick<IBaseComponentProps, 'testId'>>,
    Omit<JSX.ButtonHTMLAttributes<HTMLButtonElement>, 'ref' | 'disabled'> {
  /**
   * 各種 Button 基礎樣式，若有新樣式需求請在 variant 中新增
   */
  variant: ButtonVariantType;
  /**
   * 是否顯示轉圈圈 Icon
   */
  loading?: boolean | Accessor<boolean>;
  /**
   * 是否 Disable Button
   */
  disabled?: boolean | Accessor<boolean>;
  /**
   * 是否顯示 ripple effect
   */
  disableRipple?: boolean;
  /**
   * Loading Css
   */
  outerLayerClasses?: string;
  /**
   * Button onclick handler
   * @param event MouseEvent
   */
  onClick: (event: MouseEvent) => void;
}

type InitAttr = {
  className: string;
  rippleTailwindColorClass?: string;
};

const defaultStyle = 'relative overflow-hidden disabled:cursor-not-allowed';
const common = 'px-12 py-3 rounded-[99px]';
const primary = 'bg-primary-2 text-black-6 disabled:bg-black-5';

const variants: Record<ButtonVariantType, InitAttr> = {
  primary: {
    className: customTwMerge(defaultStyle, common, primary),
    rippleTailwindColorClass: 'bg-layer-3',
  },
  'primary-flat': {
    className: customTwMerge(
      defaultStyle,
      common,
      primary,
      'shadow-[2px_2px_6px_-0_rgba(76,158,234,0.3)] disabled:shadow',
    ),
    rippleTailwindColorClass: 'bg-layer-3',
  },
  outline: {
    className: customTwMerge(
      defaultStyle,
      common,
      'active:border-primary active:text-primary',
      'bg-layer-3 border border-black-5 text-black-3 opacity-50 disabled:text-black-5',
    ),
    rippleTailwindColorClass: 'bg-primary',
  },
  icon: {
    className: customTwMerge(defaultStyle, 'h-11 w-11 rounded-full bg-transparent'),
    rippleTailwindColorClass: 'bg-black-5',
  },
  block: {
    className: customTwMerge(defaultStyle, 'bg-layer-3 rounded-10 text-black-1 shadow'),
    rippleTailwindColorClass: 'bg-primary-btn-ripple-block',
  },
  'active-outline': {
    className: customTwMerge(defaultStyle, common, 'border-primary bg-layer-3 text-primary border'),
    rippleTailwindColorClass: 'bg-layer-3',
  },
  custom: {
    className: defaultStyle,
  },
};

const Button = (props: IButton) => {
  const isDisabled = () => (typeof props.disabled === 'boolean' ? props.disabled : props.disabled?.());
  const isLoading = () => (typeof props.loading === 'boolean' ? props.loading : props.loading?.());
  return (
    <button
      use:rippleEffect={{
        rippleTailwindColorClass: variants[props.variant].rippleTailwindColorClass,
        disabled: props.disableRipple ?? true,
      }}
      data-testid={props.testId}
      type={props.type}
      disabled={isLoading() || isDisabled()}
      class={customTwMerge(variants[props.variant].className, props.classes)}
      onClick={(e) => {
        props.onClick(e);
      }}>
      <Show when={!isLoading()} fallback={<Loading outerLayerClasses={props.outerLayerClasses} />}>
        {typeof props.children === 'string' ? translate(props.children) : props.children}
      </Show>
    </button>
  );
};

export default Button;
