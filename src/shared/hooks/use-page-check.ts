import { getOutsideRoutesConfig, getRouteConfig } from '@utilities/helpers/routes.helper';
import { Page } from '@shared/enums';
import { FlatRouterConfig, RouteConfig } from '@shared/interfaces/route.interface';
import { Accessor } from 'solid-js';
import { useLocation } from '@solidjs/router';

interface IPageCheckHook {
  /** 當前路由配置 */
  currentRoute: () => RouteConfig | undefined;
  /** 是否為首頁 */
  isHomePage: CheckFn;
  /** 是否為註冊頁 */
  isRegisterPage: CheckFn;
  /** 是否為登入頁 */
  isLoginPage: CheckFn;
}

const usePlatformPageCheck = ({
  currentPage,
}: {
  currentRoute: () => FlatRouterConfig | undefined;
  currentPage: () => Page | undefined;
}) => {
  const isHomePage = () => currentPage() === Page.Home;
  const isRegisterPage = () => currentPage() === Page.Registered;

  return {
    isRegisterPage,
    isHomePage,
    isLoginPage: () => currentPage() === Page.Login,
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
  const { isRegisterPage, isLoginPage, isHomePage } = usePlatformPageCheck({ currentRoute, currentPage });

  return {
    currentRoute,
    isHomePage,
    isRegisterPage,
    isLoginPage,
  };
};
