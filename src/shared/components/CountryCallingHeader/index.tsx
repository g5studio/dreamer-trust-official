import { Setter, Show } from 'solid-js';
import { IBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { formatClasses } from '@utilities/helpers/format.helper';
import { isPC } from '@shared/hooks/use-window-size';
import { translate } from '@shared/hooks/use-translation';
import Input from '@shared/components/Input';
import SearchIcon from '@utilities/svg-components/SearchIcon';
import Button from '@shared/components/Button';
import Picture from '@shared/components/Picture';
import { debounce } from '@utilities/helpers/utilities.helper';

interface ICountryCallingHeaderProps extends IBaseComponentProps {
  onClose: () => void;
  searchText: string;
  setSearchText: Setter<string>;
}

const CountryCallingHeader = (props: ICountryCallingHeaderProps) => {
  // this is a callback function and don't need reactivity
  // eslint-disable-next-line solid/reactivity
  const inputHandler = debounce((value: string) => {
    props.setSearchText(value);
  }, 300);

  return (
    <div data-testid={props.testId} class={formatClasses('mt-2 flex flex-col items-stretch xl:mt-0', props.classes)}>
      <Show when={!isPC()}>
        <div class="mx-auto h-1 w-20 rounded-2 bg-black-4" />
      </Show>
      <div class="relative flex h-14_5 w-full items-center justify-center text-black-1">
        <div> {translate('sendOtpSms.placeholder.countryCallingCode')} </div>
        <div
          class="absolute left-3_75 top-1/2 -translate-y-1/2 transform cursor-pointer"
          onClick={() => {
            props.onClose();
            props.setSearchText('');
          }}>
          {translate('common.cancel')}
        </div>
      </div>
      <div class="mb-3 flex h-12_5 flex-1 justify-center px-6">
        <Input
          variant="normal"
          classes="w-full"
          prepend={() => (
            <div class="mr-2 items-center justify-center text-2">
              <SearchIcon classes="h-5 w-5 fill-black-3" width="20px" height="20px" />
            </div>
          )}
          placeholderI18nKey={translate('searchBar.filter.cityOrState')}
          inputHandler={inputHandler}
          append={() => (
            <Show when={props.searchText.length > 0}>
              <div class="flex items-center justify-center">
                <Button testId="country-code-clear-search-icon" variant="icon" onClick={() => props.setSearchText('')}>
                  <Picture src="/icon/clear.svg" classes="h-5 w-5" />
                </Button>
              </div>
            </Show>
          )}
          nativeProps={{ value: props.searchText }}
        />
      </div>
    </div>
  );
};
export default CountryCallingHeader;
