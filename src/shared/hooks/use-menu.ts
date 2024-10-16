import { Page } from '@shared/enums';
import { NavigateHookFn, useNavigate } from './use-navigate';
import { usePageCheck } from './use-page-check';

type MenuItem = {
  key: Page;
  handleOnClick: NavigateHookFn;
  isActive: CheckFn;
};

export const useMenu = () => {
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

  return {
    menuItems,
  };
};
