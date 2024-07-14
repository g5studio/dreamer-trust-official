import { isMobile } from '@shared/hooks/use-window-size';
import { Slot } from '@shared/interfaces';
import { IBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { I18nKey } from '@shared/models/translation.model';
import { DomPropertyCbParams, IDomPropertyOptions, domProperty } from '@utilities/directives/dom-property-directive';
import { mouseScroll } from '@utilities/directives/mouse-scroll-directive';
import { IRippleEffectOptions, rippleEffect } from '@utilities/directives/ripple-directive';
import { registerDirective } from '@utilities/helpers/directive.helper';
import { formatClasses } from '@utilities/helpers/format.helper';

import { For, JSXElement, Setter, Show, createSignal, onMount } from 'solid-js';

registerDirective(domProperty);
registerDirective(rippleEffect);
registerDirective(mouseScroll);

export type Tab<T> = {
  /**
   * 頁籤文字
   */
  labelI18nKey: I18nKey;
  /**
   * 不可重複
   */
  value: T;
};

interface ITabContainerProps<TabValue = string>
  extends Required<Pick<IBaseComponentProps, 'testId'>>,
    Omit<IBaseComponentProps, 'testId' | 'children' | 'ref'> {
  tabContainerClasses?: string;
  /**
   * 自定義頁籤內容
   * @param tab 頁籤資訊
   * @param isActive 是否為當前頁籤
   */
  tabSlot: (tab: Tab<TabValue>, isActive: boolean) => JSXElement;
  /**
   * 自定義顯示區域
   * @description 須由外部根據當前頁籤切換內容
   * @param activeTab 當前選擇頁籤
   */
  children: (activeTab: Tab<TabValue>) => JSXElement;
  tabs: Tab<TabValue>[];
  defaultValue?: TabValue;
  onTabChange?: (activeTab: Tab<TabValue>) => void;
  /**
   * 自定義無內容區域
   * @description defaultValue 不存在tabs內時的fallback內容
   */
  emptySlot?: Slot;
  ref?: Setter<ITabContainer<TabValue> | undefined>;
  domPropertyOptions?: IDomPropertyOptions;
  /**
   * 是否滾動至預設標籤
   * @default false
   */
  scrollToDefaultTab?: boolean;
  /** ripple effect */
  rippleEffect?: IRippleEffectOptions;
  /**
   * 滾動移動限制
   * @default 10
   */
  mouseScrollMoveLimit?: number;
}

export interface ITabContainer<T> {
  switchTab: (value: T) => void;
  scrollToTab: (value: T, left: number) => void;
}

/**
 * 提供頁籤行為封裝
 * @param props
 */
const TabContainer = <T extends string | number>(props: ITabContainerProps<T>) => {
  const [activeTabValue, setActiveTabValue] = createSignal<T | undefined>(props.defaultValue);
  // eslint-disable-next-line solid/reactivity
  const [scrollToDefaultTab, setScrollToDefaultTab] = createSignal<boolean>(props.scrollToDefaultTab ?? false);
  const tabs = () => [...props.tabs];
  const activeTab = () => tabs().find(({ value }) => value === activeTabValue());
  const switchTab = (value: T) => setActiveTabValue(() => value);
  const [ref, setRef] = createSignal<HTMLUListElement | undefined>();
  const scrollToTab = (value: T, left: number) => {
    switchTab(value);
    ref()?.scrollTo({ left, behavior: 'smooth' });
  };

  onMount(() => {
    props.ref?.({
      switchTab,
      scrollToTab,
    });
  });

  return (
    <>
      <ul
        ref={setRef}
        data-testid={props.testId}
        class={formatClasses('flex flex-row items-center overflow-x-auto', props.classes)}
        use:domProperty={
          props.domPropertyOptions ?? {
            keyList: [],
            enabled: false,
          }
        }
        use:mouseScroll={{ disabled: isMobile(), moveLimit: props.mouseScrollMoveLimit ?? 10 }}>
        <For each={props.tabs}>
          {(tab) => (
            <li
              use:domProperty={{
                keyList: ['domRectLeft'],
                cb: (args: DomPropertyCbParams<['domRectLeft']>) => {
                  if (scrollToDefaultTab() && args[0]) {
                    ref()?.scrollTo({ left: args[0] ?? 0, behavior: 'smooth' });
                    setScrollToDefaultTab(false);
                  }
                },
                enabled: props.defaultValue === tab.value && scrollToDefaultTab(),
              }}
              use:rippleEffect={props.rippleEffect}
              class={formatClasses('cursor-pointer', props.tabContainerClasses)}
              onClick={() => {
                setActiveTabValue(() => tab.value);
                props.onTabChange?.(tab);
              }}
              data-testid={`${props.testId}-${tab.value}`}>
              {props.tabSlot(tab, activeTab()?.value === tab.value)}
            </li>
          )}
        </For>
      </ul>
      <Show when={activeTab()} fallback={props.emptySlot?.()}>
        {props.children(activeTab()!)}
      </Show>
    </>
  );
};
export default TabContainer;
