import Picture from '@shared/components/Picture';
import { Page } from '@shared/enums';
import { usePageCheck } from '@shared/hooks/use-page-check';
import { translate, translation } from '@shared/hooks/use-translation';
import { isMobile } from '@shared/hooks/use-window-size';
import { formatClasses } from '@utilities/helpers/format.helper';
import { getRouteConfigByKey } from '@utilities/helpers/routes.helper';
import { For } from 'solid-js';

type MenuItem = {
  key: Page;
  handleOnClick: ArrowFn<void, void>;
  isActive: CheckFn;
};

const Header = () => {
  const { isAboutPage, isSolutionsPage, isInsightsUpdatesPage, isSeminarPage, isContactUsPage } = usePageCheck();
  const menuItems = (): MenuItem[] => [
    {
      key: Page.AboutUs,
      handleOnClick: isAboutPage,
      isActive: isAboutPage,
    },
    {
      key: Page.Solutions,
      handleOnClick: isSolutionsPage,
      isActive: isSolutionsPage,
    },
    {
      key: Page.InsightsUpdates,
      handleOnClick: isInsightsUpdatesPage,
      isActive: isInsightsUpdatesPage,
    },
    {
      key: Page.Seminar,
      handleOnClick: isSeminarPage,
      isActive: isSeminarPage,
    },
    {
      key: Page.ContactUs,
      handleOnClick: isContactUsPage,
      isActive: isContactUsPage,
    },
  ];
  return (
    <header
      data-testid="app-header"
      class={formatClasses('shadow-header flex h-20 flex-row space-x-18 px-12 py-4', {
        'h-15': isMobile(),
      })}>
      <Picture classes="max-h-12_5" src={`common/logo_${translation.language}.png`} />
      <ul class="flex flex-row items-center space-x-8">
        <For each={menuItems()}>
          {({ key, handleOnClick, isActive }) => (
            <li>
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
    </header>
  );
};
export default Header;
