import { Page } from '@shared/enums';
import { getRelativePathByKey } from '@utilities/helpers/routes.helper';
import { Accessor, createMemo } from 'solid-js';
import { navigate, NavigateOption } from './use-navigator';

type AvailablePage = Exclude<
  Page,
  | Page.GuidelineI18nUsage
  | Page.GuidelineIndexedDBUsage
  | Page.GuidelineLogUsage
  | Page.GuidelineOverlayUsage
  | Page.GuidelineOverview
  | Page.GuidelinePlatformWSUsage
  | Page.GuidelineSportWSUsage
  | Page.GuidelineStyleUsage
  | Page.GuidelineTimeHelperUsage
>;

type NavigateHookFnArgs = { [key: string]: string } & Pick<NavigateOption, 'options'>;

export type NavigateHookFn = (args?: Nullable<NavigateHookFnArgs>) => void;

type NavigateHook = Record<AvailablePage, NavigateHookFn>;

const availablePageList: AvailablePage[] = [
  Page.AboutUs,
  Page.ContactUs,
  Page.Home,
  Page.InsightsUpdates,
  Page.Login,
  Page.Registered,
  Page.Seminar,
  Page.Solutions,
  Page.BlogDetail,
  Page.Terms,
  Page.Policy,
];

export const useNavigate = (): Accessor<NavigateHook> => {
  const to =
    (key: Page) =>
    ({ options, ...variables }: NavigateHookFnArgs = {}) => {
      navigate(getRelativePathByKey(key, variables), options);
    };

  const returnValue: Accessor<NavigateHook> = createMemo(() =>
    availablePageList.reduce((value, key) => ({ ...value, [key]: to(key) }), {} as NavigateHook),
  );

  return returnValue;
};
