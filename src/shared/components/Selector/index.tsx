import { IBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { formatClasses } from '@utilities/helpers/format.helper';
import { JSXElement, Setter, Show, createEffect, createSignal, on } from 'solid-js';
import Popover, { IPopover } from '@shared/components/Popover';
import { isMobile } from '@shared/hooks/use-window-size';

interface ISelectorProps extends Pick<IBaseComponentProps, 'testId' | 'classes' | 'children'> {
  /**
   * 禁用下拉功能
   */
  disableDropdown?: boolean;
  /**
   * 手機選單開啟事件
   */
  onMobileMenuOpen: (onClose: Setter<boolean>) => void;
  /**
   * 手機選單關閉事件
   */
  onMobileMenuClose: () => void;
  /**
   * 桌面版下拉選單
   * @param closePopover popover關閉方法
   */
  popoverSlot?: (closePopover: () => void) => JSXElement;
  /**
   * 圖標內容
   */
  iconSlot?: () => JSXElement;
  /**
   * 圖標樣式
   */
  iconClasses?: {
    /**
     * @default 'transition-transform duration-300'
     */
    container?: string;
    open?: string;
    close?: string;
  };
  triggerClasses?: string;
  /**
   * 下拉選單容器樣式
   */
  popoverClasses?: string;
  /**
   * 下拉選單樣式
   */
  dropdownMenuClasses?: string;
  /**
   * 下拉選單Container樣式
   */
  dropdownMenuContainerClasses?: string;
  /**
   * 手機版容器樣式
   */
  mobileClasses?: string;
}

/**
 * 下拉選擇元件
 * @description 允許手機版自定義觸發事件，自動根據當前版型切換內容
 */
const Selector = (props: ISelectorProps) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = createSignal(false);
  const [popover, ref] = createSignal<IPopover>();

  const containerClass =
    'cursor-pointer border rounded-10 border-black-6 flex flex-row p-2 bg-layer-3 items-center justify-between';

  const triggerSlot = ({ openPopover, isOpen }: { openPopover: () => void; isOpen: () => boolean }) => (
    <div class={formatClasses(containerClass, props.triggerClasses)} onClick={openPopover}>
      {props.children}
      <Show when={props.iconSlot}>
        <em
          class={formatClasses('transition-transform duration-300', props.iconClasses?.container, {
            [props.iconClasses?.open ?? '']: isOpen(),
            [props.iconClasses?.close ?? '']: !isOpen(),
          })}>
          {props.iconSlot!()}
        </em>
      </Show>
    </div>
  );

  // !版型自動切換
  createEffect(
    on(
      () => [isMobile(), popover],
      () => {
        if (popover()) {
          const isOpen = popover()!.isOpen() || isMobileMenuOpen();
          if (isOpen) {
            if (isMobile()) {
              setMobileMenuOpen(true);
              props.onMobileMenuOpen(setMobileMenuOpen);
              popover()!.close();
            }
            if (!isMobile()) {
              setMobileMenuOpen(false);
              props.onMobileMenuClose();
              popover()!.open();
            }
          }
        }
      },
    ),
  );

  return (
    <div data-testid={props.testId}>
      <Show
        when={!props.disableDropdown}
        fallback={
          <div class={formatClasses(containerClass, props.classes)}>
            {props.children}
            <Show when={props.iconSlot}>{props.iconSlot!()}</Show>
          </div>
        }>
        <Popover
          ref={ref}
          triggerSlot={triggerSlot}
          align="right"
          childrenContainerClasses={formatClasses(props.dropdownMenuContainerClasses)}
          classes={formatClasses('hidden lg:block', props.popoverClasses)}
          popoverSlot={({ closePopover }) => (
            <div
              class={formatClasses(
                'mt-1 h-48 overflow-y-auto rounded-10 bg-layer-3 shadow',
                props.dropdownMenuClasses,
              )}>
              {props.popoverSlot?.(closePopover)}
            </div>
          )}
        />
        <div
          class={formatClasses(containerClass, 'lg:hidden', props.mobileClasses)}
          onClick={() => {
            if (isMobileMenuOpen()) {
              setMobileMenuOpen(true);
            }
            props.onMobileMenuOpen(setMobileMenuOpen);
          }}>
          {props.children}
          <Show when={props.iconSlot}>
            <em
              class={formatClasses('transition-transform duration-300', props.iconClasses?.container, {
                [props.iconClasses?.open ?? '']: isMobileMenuOpen(),
                [props.iconClasses?.close ?? '']: !isMobileMenuOpen(),
              })}>
              {props.iconSlot!()}
            </em>
          </Show>
        </div>
      </Show>
    </div>
  );
};

export default Selector;
