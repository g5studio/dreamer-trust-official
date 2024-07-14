import { IBaseComponentProps } from '@shared/interfaces';
import { I18nKey } from '@shared/models/translation.model';
import { formatClasses } from '@utilities/helpers/format.helper';
import { Accessor, For } from 'solid-js';
import { translate } from '@shared/hooks/use-translation';

export interface ITabButtonGroupOption {
  label: I18nKey;
  value: string | number;
}

interface ITabButtonGroupProps extends IBaseComponentProps {
  optionList: ITabButtonGroupOption[];
  selectedValue: Accessor<string | number>;
  onChange: (value: string | number) => void;
  itemClasses?: string;
}

const TabButtonGroup = (props: ITabButtonGroupProps) => {
  return (
    <div class={formatClasses('flex items-center rounded-full bg-layer-1 px-0_75 py-1 text-xs', props.classes)}>
      <For each={props.optionList}>
        {(option) => (
          <div
            class={formatClasses(
              'cursor-pointer text-nowrap rounded-full px-2 py-1',
              {
                'bg-primary text-black-7': option.value === props.selectedValue(),
              },
              props.itemClasses,
            )}
            onClick={() => props.onChange(option.value)}>
            {translate(option.label)}
          </div>
        )}
      </For>
    </div>
  );
};

export default TabButtonGroup;
