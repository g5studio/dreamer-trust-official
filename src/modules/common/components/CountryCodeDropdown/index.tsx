import DropdownContainer from '@shared/components/DropdownContainer';
import { IInputProps } from '@shared/components/Input';
import { CountryCodeConfig, countryCodeList } from '@shared/constants/country-code.constants';
import { LocaleDash } from '@shared/enums';
import { translate, translation } from '@shared/hooks/use-translation';
import { IBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { formatClasses } from '@utilities/helpers/format.helper';
import { ArrowDownLineIcon } from '@utilities/svg-components';
import { createSignal, onMount, Setter } from 'solid-js';

interface ICountryCodeDropdownProps extends IBaseComponentProps, Pick<IInputProps, 'placeholderI18nKey'> {
  defaultOption?: CountryCodeConfig;
  ref?: Setter<ICountryCodeDropdown | undefined>;
  handleOnChange?: ArrowFn<CountryCodeConfig, void>;
}

export interface ICountryCodeDropdown {
  reset: PureFun;
}

/**
 * @external https://www.figma.com/design/Yu8CUgYbtdP8V5GyEvdYSR/01_Website-Exploration?node-id=706-6676&t=M5qrSAkqn5eFOo00-4
 */
const CountryCodeDropdown = (props: ICountryCodeDropdownProps) => {
  const [selectedOption, setSelectedOption] = createSignal<CountryCodeConfig | undefined>(props.defaultOption);
  const isEnglish = () => translation.language !== LocaleDash.zh_HK && translation.language !== LocaleDash.zh_CN;

  onMount(() => {
    props.ref?.({
      reset: () => {
        setSelectedOption(undefined);
      },
    });
  });

  return (
    <div data-testid={props.testId} class={formatClasses('flex flex-row items-center', props.classes)}>
      <DropdownContainer<CountryCodeConfig>
        menuClasses="flex flex-col px-4 h-full overflow-y-auto space-y-2 "
        childrenContainerClasses="mt-5 py-5 h-[216px] border-0_25 border-black-1 bg-black-6 rounded-4"
        itemList={countryCodeList}
        triggerSlot={({ toggleDropdown, isOpen }) => (
          <button
            type="button"
            onClick={toggleDropdown}
            class={formatClasses('flex flex-row items-center space-x-2 text-sm text-black-1', {
              'text-black-4': !selectedOption()?.dialingCode,
            })}>
            <span>{selectedOption()?.dialingCode ?? translate(props.placeholderI18nKey)}</span>
            <ArrowDownLineIcon
              fillClasses="fill-black-4"
              classes={formatClasses('w-4', {
                'rotate-180': isOpen(),
              })}
            />
          </button>
        )}
        itemSlot={({ item, closeDropdown }) => (
          <button
            type="button"
            class={formatClasses('flex h-6 flex-row items-center space-x-2 text-black-1')}
            onClick={() => {
              closeDropdown();
              setSelectedOption(item);
              props.handleOnChange?.(item);
            }}>
            <span class="text-nowrap">{isEnglish() ? item.englishName : item.localizedName}</span>
            <span class="text-black-4">+{item.dialingCode}</span>
          </button>
        )}
      />
    </div>
  );
};
export default CountryCodeDropdown;
