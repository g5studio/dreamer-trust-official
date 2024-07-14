import { isPC } from '@shared/hooks/use-window-size';
import { IBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { DomPropertyCbParams, domProperty } from '@utilities/directives/dom-property-directive';
import { registerDirective } from '@utilities/helpers/directive.helper';
import { formatClasses } from '@utilities/helpers/format.helper';
import { createSignal } from 'solid-js';

registerDirective(domProperty);

interface IFixedButtonPcContainerProps
  extends Omit<IBaseComponentProps, 'testId'>,
    Required<Pick<IBaseComponentProps, 'testId'>> {
  handleOnClick?: () => void;
}

/**
 * 粘人精按鈕pc容器
 * @description 除購物車外粘人精按鈕在pc版型需做額外處理
 */
const FixedButtonPcContainer = (props: IFixedButtonPcContainerProps) => {
  const [offsetY, setOffsetY] = createSignal<number>();
  return (
    <button
      class={formatClasses(
        {
          [`fixed top-[${offsetY()}px] right-0`]: isPC(),
        },
        props.classes,
      )}
      use:domProperty={{
        keyList: ['domRectTop'],
        cb: (value: DomPropertyCbParams<['domRectTop']>) => {
          const [domRectTop] = value;
          setOffsetY(domRectTop);
        },
        enabled: isPC(),
      }}
      onClick={() => props.handleOnClick?.()}
      data-testId={props.testId}>
      {props.children}
    </button>
  );
};
export default FixedButtonPcContainer;
