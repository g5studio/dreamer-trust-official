import { IBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { Size } from '@shared/enums';
import Skeleton, { SkeletonType } from '@shared/components/Skeleton';

import { Show, JSX, mergeProps } from 'solid-js';
import { registerDirective } from '@utilities/helpers/directive.helper';
import { formatClasses } from '@utilities/helpers/format.helper';
import {
  IDomPropertyUpdateMode,
  TDomPropertyCallback,
  domProperty,
} from '@utilities/directives/dom-property-directive';
import { IRippleEffectOptions, rippleEffect } from '@utilities/directives/ripple-directive';
import style from './index.module.scss';

registerDirective(domProperty);
registerDirective(rippleEffect);

export interface ICardProps extends IBaseComponentProps {
  isLoading?: boolean;
  /**
   * 卡片內間距
   * @description sm: 8px ,md: 12px
   */
  paddingSize?: Size;
  fallback?: () => JSX.Element;
  onClick?: () => void;
  cb?: TDomPropertyCallback;
  rippleEffect?: IRippleEffectOptions;
  /**
   * 是否只有hover時出現陰影
   */
  shadowHoverOnly?: boolean;
}

const defaultProps: ICardProps = {
  paddingSize: Size.Middle,
  fallback: () => (
    <div class="flex flex-col gap-2">
      <Skeleton type={SkeletonType.Circle} classes="h-8 w-8 self-start" />
      <Skeleton type={SkeletonType.Text} classes="w-1/2 self-start" />
    </div>
  ),
};

const Card = (props: ICardProps) => {
  const mergedProps = mergeProps(defaultProps, props);
  return (
    <div
      ref={mergedProps.ref as HTMLDivElement}
      use:rippleEffect={mergedProps.rippleEffect}
      use:domProperty={{
        keyList: ['offsetWidth', 'domRectX', 'domRectY'],
        cb: mergedProps.cb,
        updateMode: IDomPropertyUpdateMode.Timeout,
        interval: 100,
        enabled: !!mergedProps.cb,
      }}
      data-testid={mergedProps.testId}
      class={`${formatClasses(
        'w-full rounded-12 bg-layer-3',
        style['component-card__backdrop--hover'],
        {
          'h-full': !/h-/.test(mergedProps.classes ?? ''),
          'p-2': (mergedProps.paddingSize ?? defaultProps.paddingSize) === Size.Small,
          'p-3': (mergedProps.paddingSize ?? defaultProps.paddingSize) === Size.Middle,
          'cursor-pointer': !!mergedProps.onClick,
          [style['component-card__backdrop--active']]: !mergedProps.shadowHoverOnly,
        },
        mergedProps.classes,
      )}`}
      onClick={() => mergedProps.onClick?.()}>
      <Show when={!mergedProps.isLoading} fallback={mergedProps.fallback?.() ?? defaultProps.fallback?.()}>
        {mergedProps.children}
      </Show>
    </div>
  );
};

export default Card;
