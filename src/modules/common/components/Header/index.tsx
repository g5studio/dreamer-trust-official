import Picture from '@shared/components/Picture';
import { LocaleDash, Page } from '@shared/enums';
import { NavigateHookFn, useNavigate } from '@shared/hooks/use-navigate';
import { usePageCheck } from '@shared/hooks/use-page-check';
import { translate } from '@shared/hooks/use-translation';
import { isMobile } from '@shared/hooks/use-window-size';
import { formatClasses } from '@utilities/helpers/format.helper';
import { getRouteConfigByKey } from '@utilities/helpers/routes.helper';
import { For } from 'solid-js';
import { IBaseComponentProps } from '@shared/interfaces';
import LanguageDropdown from '../LanguageDropdown';

type MenuItem = {
  key: Page;
  handleOnClick: NavigateHookFn;
  isActive: CheckFn;
};

const Header = (props: IBaseComponentProps) => {
  const { isAboutPage, isSolutionsPage, isInsightsUpdatesPage, isSeminarPage, isContactUsPage } = usePageCheck();
  const navigate = useNavigate();
  const menuItems = (): MenuItem[] => [
    {
      key: Page.AboutUs,
      handleOnClick: navigate()[Page.AboutUs],
      isActive: isAboutPage,
    },
    {
      key: Page.Solutions,
      handleOnClick: navigate()[Page.Solutions],
      isActive: isSolutionsPage,
    },
    {
      key: Page.InsightsUpdates,
      handleOnClick: navigate()[Page.InsightsUpdates],
      isActive: isInsightsUpdatesPage,
    },
    {
      key: Page.Seminar,
      handleOnClick: navigate()[Page.Seminar],
      isActive: isSeminarPage,
    },
    {
      key: Page.ContactUs,
      handleOnClick: navigate()[Page.ContactUs],
      isActive: isContactUsPage,
    },
  ];
  return (
    <header
      data-testid="app-header"
      class={formatClasses(
        'h-20 px-12 py-4 text-lg shadow-header',
        {
          'h-15': isMobile(),
        },
        props.classes,
      )}>
      <section class="main-container flex h-full w-full flex-row justify-between space-x-18">
        <div class="flex h-full flex-row">
          <Picture classes="h-12_5" src={`common/logo_${LocaleDash.en_US}.png`} />
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
