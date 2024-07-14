import { IBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { customTwMerge, formatClasses } from '@utilities/helpers/format.helper';
import { translate } from '@shared/hooks/use-translation';
import { mergeProps, JSX } from 'solid-js';
import { ArrowDownIcon } from '@utilities/svg-components/ArrowDownIcon';
import DropdownContainer, {
  IDropdownContainerItemRenderProps,
  IDropdownContainerOption,
  IDropdownContainerRenderProps,
} from '../DropdownContainer';

export interface IDropdownSelectedSlotRenderProps {
  selectedValue: () => string | number;
  itemList: IDropdownContainerOption[];
}

export interface IDropdownSlotRenderProps extends IDropdownContainerRenderProps {
  selectedValue: () => string | number;
  itemList: IDropdownContainerOption[];
}

export interface IDropdownLabelRenderProps {
  selectedValue: () => string | number;
  itemList: IDropdownContainerOption[];
  item: IDropdownContainerOption;
}

export interface IDropdownItemSlotRenderProps extends IDropdownContainerItemRenderProps<IDropdownContainerOption> {
  selectedValue: () => string | number;
  itemContainerClasses?: string;
  onChange: (value: string | number) => void;
  itemLabelSlot: (props: IDropdownLabelRenderProps) => JSX.Element;
}

export interface IDropdownTriggerSlotRenderProps {
  openDropdown: () => void;
  isOpen: () => boolean;
  closeDropdown: () => void;
  toggleDropdown: () => void;
  selectedValue: () => string | number;
  itemList: IDropdownContainerOption[];
  selectedSlot: (props: IDropdownSelectedSlotRenderProps) => JSX.Element;
  triggerClasses?: string;
}

export interface IDropdownProps extends IBaseComponentProps {
  triggerClasses?: string;
  itemList: IDropdownContainerOption[];
  selectedValue: () => string | number;
  childrenContainerClasses?: string;
  align?: 'left' | 'right';
  outsideBehavior?: 'close' | 'none';
  outsideClickThrough?: boolean;
  /**
   * slot for display selected value
   */
  selectedSlot?: (props: IDropdownSelectedSlotRenderProps) => JSX.Element;
  /**
   * slot for display the click area
   */
  triggerSlot?: (props: IDropdownTriggerSlotRenderProps) => JSX.Element;
  /**
   * slot for display the header
   */
  headerSlot?: (props: IDropdownSlotRenderProps) => JSX.Element;
  /**
   * slot for display the footer
   */
  footerSlot?: (props: IDropdownSlotRenderProps) => JSX.Element;
  /**
   * slot for display the item
   */
  itemSlot?: (props: IDropdownItemSlotRenderProps) => JSX.Element;
  /**
   * slot for display the item label
   */
  itemLabelSlot?: (item: IDropdownLabelRenderProps) => string;
  /**
   * classes for the item container
   */
  itemContainerClasses?: string;
  onChange: (value: string | number) => void;
}

const Dropdown = (props: IDropdownProps) => {
  const mergedProps = mergeProps(
    {
      align: 'right',
      classes: 'w-28',
      outsideBehavior: 'none',
      outsideClickThrough: false,
      childrenContainerClasses: 'bg-layer-3 shadow rounded-10 mt-1 h-48 overflow-y-auto',
      selectedSlot: ({ selectedValue, itemList }: IDropdownSelectedSlotRenderProps) => {
        const selectedOption = itemList.find((item) => item.value === selectedValue());
        return <span class="mx-1 text-xs">{translate(selectedOption?.label ?? '')}</span>;
      },
      triggerSlot: ({
        openDropdown,
        isOpen,
        triggerClasses,
        selectedSlot,
        selectedValue,
        itemList,
      }: IDropdownTriggerSlotRenderProps) => (
        <div
          class={customTwMerge(
            'flex h-8_5 w-27 cursor-pointer justify-between rounded-10 border border-black-6 bg-layer-3 p-2',
            triggerClasses,
          )}
          onClick={openDropdown}>
          <div class="flex items-center leading-8_5">{selectedSlot({ selectedValue, itemList })}</div>
          <ArrowDownIcon
            classes={formatClasses('h-4 w-4 transition-transform duration-300', {
              'rotate-180 transform': isOpen(),
            })}
          />
        </div>
      ),
      itemSlot: ({
        item,
        selectedValue,
        itemContainerClasses,
        closeDropdown,
        onChange,
      }: IDropdownItemSlotRenderProps) => (
        <div
          class={customTwMerge(
            'mb-0 flex h-8 w-full min-w-27 cursor-pointer items-center rounded-none px-2_5 shadow-none',
            itemContainerClasses,
            selectedValue() === item.value ? 'text-primary' : 'hover:bg-primary hover:bg-opacity-5',
          )}
          onClick={() => {
            onChange(item.value);
            closeDropdown();
          }}>
          <span class="text-xs">{translate(item.label)}</span>
        </div>
      ),
      itemLabelSlot: (itemLabelProps: IDropdownLabelRenderProps) => (
        <span class="text-xs">{translate(itemLabelProps.item.label)}</span>
      ),
    },
    props,
  ) as typeof props & {
    align: 'left' | 'right';
    outsideBehavior: 'close' | 'none';
    classes: string;
    outsideClickThrough: boolean;
    childrenContainerClasses: string;
    selectedSlot: (props: IDropdownSelectedSlotRenderProps) => JSX.Element;
    triggerSlot: (props: IDropdownTriggerSlotRenderProps) => JSX.Element;
    itemSlot: (props: IDropdownItemSlotRenderProps) => JSX.Element;
    itemLabelSlot: (item: IDropdownLabelRenderProps) => string;
  };
  return (
    <DropdownContainer
      {...mergedProps}
      triggerSlot={(triggerSlotProps) =>
        mergedProps.triggerSlot({
          ...triggerSlotProps,
          selectedValue: mergedProps.selectedValue,
          itemList: mergedProps.itemList,
          selectedSlot: mergedProps.selectedSlot,
          triggerClasses: mergedProps.triggerClasses,
        })
      }
      headerSlot={(headerSlotProps) =>
        mergedProps.headerSlot?.({
          ...headerSlotProps,
          selectedValue: mergedProps.selectedValue,
          itemList: mergedProps.itemList,
        })
      }
      footerSlot={(footerSlotProps) =>
        mergedProps.footerSlot?.({
          ...footerSlotProps,
          selectedValue: mergedProps.selectedValue,
          itemList: mergedProps.itemList,
        })
      }
      itemSlot={(itemProps) =>
        mergedProps.itemSlot({
          ...itemProps,
          selectedValue: mergedProps.selectedValue,
          onChange: mergedProps.onChange,
          itemContainerClasses: mergedProps.itemContainerClasses,
          itemLabelSlot: mergedProps.itemLabelSlot,
        })
      }
      outsideBehavior="close"
    />
  );
};
export default Dropdown;
