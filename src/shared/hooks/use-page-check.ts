import { getCurrentRouteModule, getOutsideRoutesConfig, getRouteConfig } from '@utilities/helpers/routes.helper';
import { C2CWithdrawStep, Page, RouteModule } from '@shared/enums';
import { FlatRouterConfig, RouteConfig } from '@shared/interfaces/route.interface';
import { startsWith } from '@utilities/helpers/utilities.helper';
import { Accessor } from 'solid-js';
import { useLocation } from '@solidjs/router';
import { isMobile } from './use-window-size';

export type SportGameCategoryPage = Extract<
  Page,
  Page.SportEarly | Page.SportInplay | Page.SportParlay | Page.SportIncoming | Page.SportOutright
>;

interface IPageCheckHook {
  /** 當前路由配置 */
  currentRoute: () => RouteConfig | undefined;
  /** 是否為體育相關頁面 */
  isSportPage: CheckFn;
  /** 是否為賽果頁(包含詳情) */
  isGameResultPage: CheckFn;
  /** 是否為賽事搜尋頁(包含帶關鍵字) */
  isSearchPage: CheckFn;
  /** 是否為賽事詳情頁 */
  isSportExhaustivePage: CheckFn;
  /** 是否為歐國杯頁 */
  isSportEuroPage: CheckFn;
  /** 是否為歐國杯首頁 */
  isSportEuroMainPage: CheckFn;
  /** 是否為歐國杯國家專頁 */
  isSportEuroCountryPage: CheckFn;
  /** 是否為收藏頁(包含冠軍賽收藏) */
  isFavoritePage: CheckFn;
  /** 是否為體育首頁 */
  isSportMainPage: CheckFn;
  /** 是否為娛樂城入口頁 */
  isCasinoPage: CheckFn;
  /** 是否為體育滾球頁 */
  isSportInplayPage: CheckFn;
  /** 是否為體育即將頁 */
  isSportIncomingPage: CheckFn;
  /** 是否為體育早盤頁 */
  isSportEarlyPage: CheckFn;
  /** 是否為體育串場頁 */
  isSportParlayPage: CheckFn;
  /** 是否為體育冠軍頁 */
  isSportOutrightPage: CheckFn;
  /** 是否為賽事分類頁 */
  isSportGameCategoryPage: CheckFn;
  /** 是否為維護頁 */
  isPlatformMaintenancePage: CheckFn;
  /** 是否為體育維護頁 */
  isSportMaintenancePage: CheckFn;
  /** 是否為註冊頁 */
  isRegisterPage: CheckFn;
  /** 是否為登入頁 */
  isLoginPage: CheckFn;
  /** 是否為第三方账号管理 */
  isMineInfoEditThirdPartyAccountPage: CheckFn;
  /** 是否為IM專家頁面 */
  isImExpertPage: CheckFn;
  /**
   * 是否首頁
   * PC: 是否主頁
   * non-PC: 是否體育相關頁面
   */
  isHomePage: CheckFn;
  /**
   * 是否存款頁
   */
  isDepositPage: CheckFn;
  /**
   * 是否提款頁
   */
  isWithdrawPage: CheckFn;
  /**
   * 是否C2C提款審核步驟頁
   */
  isC2CAuditingStepPage: CheckFn;
  /** 是否為彩票頁面 */
  isLotteryPage: CheckFn;
  /** 是否為記錄頁 */
  isBetRecordPage: CheckFn;
  /**
   * 是否為IM模組頁面
   */
  isImPage: CheckFn;
  /**
   * 是否為娛樂城模組頁面
   */
  isCasinoModulePage: CheckFn;
  /**
   * 是否為贊助頁(包括贊助內頁)
   */
  isSponsorPage: CheckFn;
}

function useSportPageCheck({
  currentRoute,
  currentPage,
}: {
  currentRoute: () => FlatRouterConfig | undefined;
  currentPage: () => Page | undefined;
}) {
  const isSportPage = (): boolean =>
    !!currentRoute() && getCurrentRouteModule(currentRoute()!.path) === RouteModule.Sport;
  const isSportMainPage = () => currentPage() === Page.SportMain;
  const isSportInplayPage = () => currentPage() === Page.SportInplay;
  const isSportIncomingPage = () => currentPage() === Page.SportIncoming;
  const isSportEarlyPage = () => currentPage() === Page.SportEarly;
  const isSportParlayPage = () => currentPage() === Page.SportParlay;
  const isSportOutrightPage = () => currentPage() === Page.SportOutright;
  const isSportExhaustivePage = () => currentPage() === Page.SportExhaustive;
  const isSportEuroPage = () =>
    !!(
      currentPage() &&
      [Page.EuroMain, Page.EuroMatch, Page.EuroOutright, Page.EuroEliminate, Page.EuroScore, Page.EuroCountry].includes(
        currentPage()!,
      )
    );
  const isSportEuroCountryPage = () => currentPage() === Page.EuroCountry;

  const isSportGameCategoryPage = () =>
    (isSportMainPage() && !isMobile()) ||
    isSportIncomingPage() ||
    isSportEarlyPage() ||
    isSportParlayPage() ||
    isSportOutrightPage() ||
    isSportInplayPage();
  const isSportMaintenancePage = () =>
    currentPage() === Page.Maintenance && getCurrentRouteModule(currentRoute()!.path) === RouteModule.Sport;
  const isFavoritePage = () => currentPage() === Page.FavoriteGame || currentPage() === Page.FavoriteOutRightGame;
  const isSearchPage = () => currentPage() === Page.Search;
  return {
    isSportPage,
    isSportMainPage,
    isSportInplayPage,
    isSportIncomingPage,
    isSportEarlyPage,
    isSportParlayPage,
    isSportOutrightPage,
    isSportExhaustivePage,
    isSportEuroPage,
    isSportEuroMainPage: () => currentPage() === Page.EuroMain,
    isSportEuroCountryPage,
    isSportGameCategoryPage,
    isSportMaintenancePage,
    isFavoritePage,
    isSearchPage,
    isGameResultPage: () => currentPage() === Page.GameResult,
  };
}

const expert = [Page.ExpertHome, Page.ExpertAll, Page.ExpertDetail, Page.PlanDetail];

const usePlatformPageCheck = ({
  currentRoute,
  currentPage,
}: {
  currentRoute: () => FlatRouterConfig | undefined;
  currentPage: () => Page | undefined;
}) => {
  const isPlatformMaintenancePage = () =>
    currentPage() === Page.Maintenance && getCurrentRouteModule(currentRoute()!.path) !== RouteModule.Sport;
  const isRegisterPage = () => currentPage() === Page.Registered;
  // !娛樂城
  const isCasinoPage = () => currentPage() === Page.Casino;
  const isLotteryPage = () => currentPage() === Page.LotteryTicket;
  const isFishingPage = () => currentPage() === Page.Fishing;
  const isSlotPage = () => currentPage() === Page.SlotGame;
  const isCasinoModulePage = () => isCasinoPage() || isLotteryPage() || isFishingPage() || isSlotPage();
  // !IM
  const isImExpertPage = () => !!currentPage() && expert.includes(currentPage()!);
  const isImPage = () => isImExpertPage() || currentPage() === Page.ImSquare || currentPage() === Page.AnchorAll;
  // !記錄頁
  const isBetRecordPage = () => currentPage() === Page.BetRecord;
  // !金流
  const isDepositPage = () => currentPage() === Page.Deposit || startsWith(location.pathname, 'deposit/');
  const isWithdrawPage = () =>
    !!(
      currentPage() &&
      [
        Page.Withdrawal,
        Page.WithdrawalCompleteInfo,
        Page.WithdrawalDetail,
        Page.WithdrawalEntryValidatePage,
        Page.WithdrawalSecuredBankCard,
        Page.WithdrawalSecuredBankCardAuditStep,
      ].includes(currentPage()!)
    );
  const isC2CAuditingStepPage = () => isWithdrawPage() && location.pathname.includes(C2CWithdrawStep.AuditingStep);
  // !贊助
  const isSponsorPage = () => currentPage() === Page.Sponsor || currentPage() === Page.Sponsorship;
  return {
    isCasinoPage,
    isCasinoModulePage,
    isRegisterPage,
    isImPage,
    isBetRecordPage,
    isPlatformMaintenancePage,
    isDepositPage,
    isWithdrawPage,
    isC2CAuditingStepPage,
    isLotteryPage,
    isImExpertPage,
    isSponsorPage,
    isLoginPage: () => currentPage() === Page.Login,
    isMineInfoEditThirdPartyAccountPage: () => currentPage() === Page.MineInfoEditThirdPartyAccount,
  };
};

type PageCheckHookArgs = {
  /**
   * @description 使用時需注意參考路徑更新時機點，預設跟隨路由更新
   */
  pathname?: Accessor<string>;
};

export const usePageCheck = (args?: PageCheckHookArgs): IPageCheckHook => {
  const location = useLocation();
  /**
   * 檢查所有路由是否有頁面匹配當前路徑
   * @returns 當前路由設置
   */
  const currentRoute = () =>
    getRouteConfig(args?.pathname?.() ?? location.pathname) ??
    getRouteConfig(args?.pathname?.() ?? location.pathname, getOutsideRoutesConfig());
  const currentPage = (): Page | undefined => currentRoute()?.key;
  // !平台
  const {
    isCasinoPage,
    isDepositPage,
    isWithdrawPage,
    isC2CAuditingStepPage,
    isPlatformMaintenancePage,
    isRegisterPage,
    isImExpertPage,
    isLotteryPage,
    isBetRecordPage,
    isImPage,
    isCasinoModulePage,
    isSponsorPage,
    isLoginPage,
    isMineInfoEditThirdPartyAccountPage,
  } = usePlatformPageCheck({ currentRoute, currentPage });
  // !體育
  const {
    isSportPage,
    isSportMainPage,
    isSportInplayPage,
    isSportIncomingPage,
    isSportEarlyPage,
    isSportParlayPage,
    isSportOutrightPage,
    isSportExhaustivePage,
    isSportEuroPage,
    isSportEuroMainPage,
    isSportEuroCountryPage,
    isSportGameCategoryPage,
    isSportMaintenancePage,
    isFavoritePage,
    isSearchPage,
    isGameResultPage,
  } = useSportPageCheck({ currentRoute, currentPage });
  const isHomePage = () => isSportMainPage();

  return {
    currentRoute,
    isSportPage,
    isSearchPage,
    isGameResultPage,
    isSportExhaustivePage,
    isSportEuroPage,
    isSportEuroMainPage,
    isSportEuroCountryPage,
    isFavoritePage,
    isSportMainPage,
    isSportInplayPage,
    isSportIncomingPage,
    isSportEarlyPage,
    isSportParlayPage,
    isSportGameCategoryPage,
    isSportOutrightPage,
    isSportMaintenancePage,
    isHomePage,
    isCasinoPage,
    isDepositPage,
    isWithdrawPage,
    isC2CAuditingStepPage,
    isPlatformMaintenancePage,
    isRegisterPage,
    isImExpertPage,
    isLotteryPage,
    isBetRecordPage,
    isImPage,
    isCasinoModulePage,
    isSponsorPage,
    isLoginPage,
    isMineInfoEditThirdPartyAccountPage,
  };
};
