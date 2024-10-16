import { translate } from '@shared/hooks/use-translation';
import { isMobile } from '@shared/hooks/use-window-size';
import { formatClasses } from '@utilities/helpers/format.helper';
import { getRouteConfigByKey } from '@utilities/helpers/routes.helper';
import { For } from 'solid-js';
import { IBaseComponentProps } from '@shared/interfaces';
import { useMenu } from '@shared/hooks/use-menu';
import LanguageDropdown from '../LanguageDropdown';
import PrimaryLogo from '../PrimaryLogo';

const Header = (props: IBaseComponentProps) => {
  const { menuItems } = useMenu();
  return (
    <header
      data-testid="app-header"
      class={formatClasses(
        'h-20 bg-black-8 px-12 py-4 text-lg shadow-header',
        {
          'h-15': isMobile(),
        },
        props.classes,
      )}>
      <section class="main-container flex h-full w-full flex-row justify-between space-x-18">
        <div class="flex h-full flex-row">
          <PrimaryLogo classes="h-12_5" />
          <ul class="flex flex-row items-center space-x-8">
            <For each={menuItems()}>
              {({ key, handleOnClick, isActive }) => (
                <li class="text-nowrap">
                  <button
                    class={formatClasses('text-black-4', {
                      'font-bold text-black-1': isActive(),
                    })}
                    type="button"
                    data-testid={`header-item-${key}`}
                    onClick={() => handleOnClick()}>
                    {translate(getRouteConfigByKey(key)?.i18n)}
                  </button>
                </li>
              )}
            </For>
          </ul>
        </div>
        <div class="flex h-full flex-row">
          <LanguageDropdown />
        </div>
      </section>
    </header>
  );
};
export default Header;
