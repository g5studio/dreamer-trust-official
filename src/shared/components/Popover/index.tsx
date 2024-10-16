import { IBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { customTwMerge } from '@utilities/helpers/format.helper';
import { JSX, createSignal, Show, mergeProps, Setter, onMount, Accessor } from 'solid-js';
import { registerDirective } from '@utilities/helpers/directive.helper';
import { clickOutside } from '@utilities/directives/click-outside-directive';

registerDirective(clickOutside);

interface IPopoverRenderProps {
  isOpen: () => boolean;
  openPopover: () => void;
  closePopover: () => void;
  togglePopover: () => void;
}

export interface IPopoverProps extends Omit<IBaseComponentProps, 'ref'> {
  triggerSlot?: (props: IPopoverRenderProps) => JSX.Element;
  align?: 'left' | 'right';
  outsideBehavior?: 'close' | 'none';
  outsideClickThrough?: boolean;
  childrenContainerClasses?: string;
  childrenContainerStyle?: JSX.CSSProperties;
  popoverSlot: (props: IPopoverRenderProps) => JSX.Element;
  ref?: Setter<IPopover | undefined>;
  onOutsideClick?: (e: Event) => void;
  top?: number;
  left?: number;
}

export interface IPopover {
  close: () => void;
  open: () => void;
  toggle: () => void;
  isOpen: Accessor<boolean>;
  element: HTMLDivElement;
}

const Popover = (props: IPopoverProps) => {
  let ref: HTMLDivElement | undefined;
  const [isOpen, setIsOpen] = createSignal(false);
  const openPopover = () => {
    setIsOpen(true);
  };
  const closePopover = () => {
    setIsOpen(false);
  };
  const togglePopover = () => {
    setIsOpen(!isOpen());
  };
  const mergedProps = mergeProps(
    {
      align: 'left',
      outsideBehavior: 'close',
      outsideClickThrough: false,
    },
    props,
  );
  const clickOutsideToClose = () => {
    return mergedProps.outsideBehavior === 'close';
  };
  const closePopoverOnOutsideClick = (e: Event) => {
    // if it is ref, then it is inside the popover, so don't close
    if (ref && ref.contains(e.target as Node)) {
      return;
    }
    closePopover();
  };

  onMount(() => {
    props.ref?.(() => ({
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      toggle: () => setIsOpen(!isOpen()),
      isOpen,
      element: ref!,
    }));
  });

  return (
    <div ref={ref} data-testid={mergedProps.testId} class={customTwMerge('relative', mergedProps.classes)}>
      {mergedProps.triggerSlot?.({
        openPopover,
        closePopover,
        togglePopover,
        isOpen,
      })}
      <Show when={isOpen()}>
        <Show when={!mergedProps.outsideClickThrough && clickOutsideToClose()}>
          <div class="fixed bottom-0 left-0 right-0 top-0 cursor-pointer" onClick={closePopover} />
        </Show>
        <div
          class={customTwMerge(
            'absolute z-important mt-1',
            !props.left && mergedProps.align === 'left' ? 'left-0' : 'right-0',
            mergedProps.childrenContainerClasses,
          )}
          style={{
            left: props.left ? `${props.left}px` : undefined,
            top: props.top ? `${props.top}px` : undefined,
            ...props.childrenContainerStyle,
          }}
          use:clickOutside={(e) => {
            if (mergedProps.outsideClickThrough && clickOutsideToClose()) {
              closePopoverOnOutsideClick?.(e);
            }
            props.onOutsideClick?.(e);
          }}>
          {mergedProps.popoverSlot({
            openPopover,
            closePopover,
            togglePopover,
            isOpen,
          })}
        </div>
      </Show>
    </div>
  );
};
export default Popover;
