import { IBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { For, JSX, Show } from 'solid-js';
import { registerDirective } from '@utilities/helpers/directive.helper';
import { I18nKey } from '@shared/models/translation.model';
import { clickOutside } from '@utilities/directives/click-outside-directive';
import { formatClasses } from '@utilities/helpers/format.helper';
import Popover, { IPopoverProps } from '../Popover';

registerDirective(clickOutside);

export interface IDropdownContainerRenderProps {
  isOpen: () => boolean;
  openDropdown: () => void;
  closeDropdown: () => void;
  toggleDropdown: () => void;
}

export interface IDropdownContainerOption {
  label: I18nKey;
  value: string | number;
}

export interface ICustomizeDropdownContainerOption<T> {
  label: I18nKey;
  value: T;
}

export interface IDropdownContainerItemRenderProps<T = IDropdownContainerOption> {
  isOpen: () => boolean;
  openDropdown: () => void;
  closeDropdown: () => void;
  toggleDropdown: () => void;
  item: T;
}

export interface IDropdownContainerProps<T = IDropdownContainerOption>
  extends Omit<IBaseComponentProps, 'ref'>,
    Pick<
      IPopoverProps,
      | 'childrenContainerStyle'
      | 'childrenContainerClasses'
      | 'outsideClickThrough'
      | 'align'
      | 'outsideBehavior'
      | 'onOutsideClick'
    > {
  triggerSlot: (props: IDropdownContainerRenderProps) => JSX.Element;
  headerSlot?: (props: IDropdownContainerRenderProps) => JSX.Element;
  footerSlot?: (props: IDropdownContainerRenderProps) => JSX.Element;
  itemSlot: (props: IDropdownContainerItemRenderProps<T>) => JSX.Element;
  itemList: T[];
  menuClasses?: string;
}

const DropdownContainer = <T = IDropdownContainerOption,>(props: IDropdownContainerProps<T>) => {
  return (
    <Popover
      {...props}
      triggerSlot={({ openPopover, closePopover, togglePopover, isOpen }) =>
        props.triggerSlot({
          openDropdown: openPopover,
          closeDropdown: closePopover,
          toggleDropdown: togglePopover,
          isOpen,
        })
      }
      popoverSlot={({ openPopover, closePopover, togglePopover, isOpen }) => (
        <div class={formatClasses('h-full w-full', props.menuClasses)}>
          <Show when={props.headerSlot}>
            {props.headerSlot?.({
              openDropdown: openPopover,
              closeDropdown: closePopover,
              toggleDropdown: togglePopover,
              isOpen,
            })}
          </Show>
          <For each={props.itemList}>
            {(item) =>
              props.itemSlot({
                openDropdown: openPopover,
                closeDropdown: closePopover,
                toggleDropdown: togglePopover,
                isOpen,
                item,
              })
            }
          </For>
          <Show when={props.footerSlot}>
            {props.footerSlot?.({
              openDropdown: openPopover,
              closeDropdown: closePopover,
              toggleDropdown: togglePopover,
              isOpen,
            })}
          </Show>
        </div>
      )}
    />
  );
};
export default DropdownContainer;
