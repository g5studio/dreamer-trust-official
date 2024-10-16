import DropdownContainer from '@shared/components/DropdownContainer';
import { languageList } from '@shared/constants/language.constant';
import { LocaleDash } from '@shared/enums';
import { changeLanguage, translate, translation } from '@shared/hooks/use-translation';
import { IBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { formatClasses, formatLocale } from '@utilities/helpers/format.helper';
import { ArrowDownIcon } from '@utilities/svg-components';
import LanguageSettingIcon from '@utilities/svg-components/LanguageSettingIcon';

interface ILanguageDropdownProps extends IBaseComponentProps {}

/**
 * @external https://www.figma.com/design/Yu8CUgYbtdP8V5GyEvdYSR/01_Website-Exploration?node-id=431-2027&t=07yOjK1cv3rWFOE6-4
 */
const LanguageDropdown = (props: ILanguageDropdownProps) => {
  return (
    <DropdownContainer<LocaleDash>
      testId={props.testId}
      triggerSlot={({ toggleDropdown }) => (
        <button class="flex h-full flex-row items-center space-x-2 text-black-4" type="button" onClick={toggleDropdown}>
          <LanguageSettingIcon fillClasses="fill-black-4" />
          <span>{translate(`setting.lang.${formatLocale(translation.language)}`)}</span>
          <ArrowDownIcon fillClasses="fill-black-4" />
        </button>
      )}
      align="right"
      itemList={languageList}
      childrenContainerClasses={'bg-layer-3 shadow mt-4_25 rounded-md px-6 py-4 space-y-6 bg-black-8'}
      itemSlot={({ item, toggleDropdown }) => (
        <button
          class={formatClasses('w-full text-nowrap text-black-4')}
          type="button"
          onClick={() => {
            changeLanguage(item);
            toggleDropdown();
          }}>
          {translate(`setting.lang.${formatLocale(item)}`)}
        </button>
      )}
    />
  );
};
export default LanguageDropdown;
