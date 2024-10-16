import DropdownContainer from '@shared/components/DropdownContainer';
import { languageList } from '@shared/constants/language.constant';
import { MenuItem, useMenu } from '@shared/hooks/use-menu';
import { changeLanguage, translate } from '@shared/hooks/use-translation';
import windowSize from '@shared/hooks/use-window-size';
import { IBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { formatClasses, formatLocale } from '@utilities/helpers/format.helper';
import { getRouteConfigByKey } from '@utilities/helpers/routes.helper';
import { CancelIcon } from '@utilities/svg-components/CancelIcon';
import LanguageSettingIcon from '@utilities/svg-components/LanguageSettingIcon';
import MobileMenuIcon from '@utilities/svg-components/shared/MobileMenuIcon';
import { For, Show } from 'solid-js';

interface IMobileMenuButtonProps extends IBaseComponentProps {}

const MobileMenuButton = (props: IMobileMenuButtonProps) => {
  const { menuItems } = useMenu();
  return (
    <DropdownContainer<MenuItem>
      classes={formatClasses(props.classes)}
      testId={props.testId}
      onOutsideClick={() => {
        window.document.body.style.overflow = 'auto';
      }}
      triggerSlot={({ toggleDropdown, isOpen }) => (
        <button
          onClick={() => {
            toggleDropdown();
            window.document.body.style.overflow = 'hidden';
          }}
          type="button">
          <Show when={!isOpen()} fallback={<CancelIcon fillClasses="fill-primary-2" />}>
            <MobileMenuIcon />
          </Show>
        </button>
      )}
      align="right"
      itemList={menuItems()}
      childrenContainerStyle={{
        height: `${windowSize.height - 60}px`,
      }}
      childrenContainerClasses={'flex flex-col bg-black-7 mt-4 w-screen translate-x-6 text-md p-6 pt-0'}
      footerSlot={() => (
        <section class="flex grow flex-col justify-end">
          <div class="flex flex-row items-center space-x-2 pt-4">
            <LanguageSettingIcon fillClasses="fill-primary-2" />
            <For each={languageList}>
              {(item) => (
                <button type="button" class="text-primary-2" onClick={() => changeLanguage(item)}>
                  {translate(`setting.lang.${formatLocale(item)}`)}
                </button>
              )}
            </For>
          </div>
        </section>
      )}
      itemSlot={({ item, toggleDropdown }) => (
        <button
          onClick={() => {
            item.handleOnClick();
            toggleDropdown();
          }}
          class={formatClasses('border-grey-3 text-grey-7 border-b-0_25 py-4 text-start', {
            'border-none': menuItems().findIndex(({ key }) => key === item.key) === menuItems().length - 1,
          })}
          type="button">
          {translate(getRouteConfigByKey(item.key)?.i18n)}
        </button>
      )}
    />
  );
};
export default MobileMenuButton;
