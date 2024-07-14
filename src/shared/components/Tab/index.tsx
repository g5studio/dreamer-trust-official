import { translate } from '@shared/hooks/use-translation';
import { IBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { For } from 'solid-js';
import { customTwMerge, formatClasses } from '@utilities/helpers/format.helper';
import { registerDirective } from '@utilities/helpers/directive.helper';
import { createStore } from 'solid-js/store';
import { DomPropertyCbParams, domProperty } from '@utilities/directives/dom-property-directive';
import { I18nKey } from '@shared/models/translation.model';
import { IRippleEffectOptions, rippleEffect } from '@utilities/directives/ripple-directive';

registerDirective(domProperty);
registerDirective(rippleEffect);

interface ITabData {
  /** 名稱 */
  labelI18nKey: I18nKey;
  /** Focus Type */
  value: string | number;
}
interface ITabPosition {
  width: number;
  left: number;
}

export interface ITabProps extends IBaseComponentProps {
  tabList: ITabData[];
  /** selected value */
  selectedValue: string | number;
  /** Tab class */
  tabClasses?: string;
  /** 名稱 class */
  labelClasses?: string;
  /** 底線 class */
  underlineClasses?: string;
  /** 取消動畫 */
  disableAnimation?: boolean;
  /** callback */
  callback?: (value: string | number) => void;
  /** ripple effect */
  rippleEffect?: IRippleEffectOptions;
}

const Tab = (props: ITabProps) => {
  const [tabPosition, setTabPosition] = createStore<ITabPosition[]>([]);

  const activeIndex = (selectedValue: string | number) => {
    return props.tabList.findIndex((item) => item.value === selectedValue);
  };

  const onCallback = (value: string | number) => {
    props?.callback?.(value);
  };

  return (
    <div data-testid={props.testId} class={formatClasses('w-full flex justify-between relative', props.classes)}>
      <For each={props?.tabList}>
        {(item: ITabData, index: () => number) => (
          <div
            use:domProperty={{
              keyList: ['offsetWidth', 'offsetLeft'],
              cb: (values: DomPropertyCbParams<['offsetWidth', 'offsetLeft']>) => {
                const [width, left] = values;
                setTabPosition(index(), { width, left });
              },
            }}
            use:rippleEffect={props.rippleEffect}
            class={customTwMerge('h-11 flex items-center cursor-pointer select-none text-sm', props.tabClasses)}
            onClick={() => onCallback(item.value)}>
            <span
              class={formatClasses(
                {
                  'text-black-1': props.selectedValue !== item.value,
                },
                props.labelClasses,
                {
                  'text-primary font-semibold': props.selectedValue === item.value,
                },
              )}>
              {translate(item.labelI18nKey)}
            </span>
          </div>
        )}
      </For>
      <div
        class={formatClasses('absolute h-0_5 bg-primary left-0 bottom-0', {
          'transition-all': !props?.disableAnimation,
        })}
        style={{
          // show a line under the selected tab
          width: `${tabPosition[activeIndex(props.selectedValue)]?.width ?? 0}px`,
          transform: `translateX(${tabPosition[activeIndex(props.selectedValue)]?.left ?? 0}px)`,
        }}
      />
    </div>
  );
};
export default Tab;
