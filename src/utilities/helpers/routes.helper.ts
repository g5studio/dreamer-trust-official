import { Page, RouteModule, TabNavigationType } from '@shared/enums';
import { formatAbsolutePathname, formatPurePathname } from '@utilities/helpers/format.helper';
import { FlatRouterConfig, RouteConfig } from '@shared/interfaces/route.interface';
import { toggleMessage } from '@shared/hooks/use-overlay';
import { translate } from '@shared/hooks/use-translation';
import { isNullOrUndefined, memo } from './utilities.helper';

type RoutesMap = Partial<Record<RouteModule, RouteConfig>>;

let routesConfig: Partial<Record<RouteModule, RouteConfig>> = {};
let outsideRoutesConfig: Partial<Record<RouteModule, RouteConfig>> = {};

export function setRoutesConfig(config: Partial<Record<RouteModule, RouteConfig>>): void {
  routesConfig = config;
}

export function setOutsideRoutesConfig(config: Partial<Record<RouteModule, RouteConfig>>): void {
  outsideRoutesConfig = config;
}

export function getRoutesConfig(): Partial<Record<RouteModule, RouteConfig>> {
  return routesConfig;
}

export function getOutsideRoutesConfig(): Partial<Record<RouteModule, RouteConfig>> {
  return outsideRoutesConfig;
}

/**
 * 取得單一路由模組攤平後路由設置
 */
const getFlatRouterConfigs = (
  {
    i18n,
    path,
    children,
    allowGuest = true,
    key,
    innerLinkType,
    disableMainContainer,
    disableMobileHeader,
    tabNavigationType,
  }: RouteConfig,
  rootPath: string,
): FlatRouterConfig[] => {
  const currentConfig = {
    path: formatAbsolutePathname(path ? `${rootPath}/${formatAbsolutePathname(path)}` : rootPath),
    i18n,
    allowGuest,
    key,
    innerLinkType,
    disableMainContainer,
    disableMobileHeader,
    tabNavigationType,
  };
  if (children && children.length > 0) {
    return [
      currentConfig,
      ...children
        .map((config) => getFlatRouterConfigs(config, currentConfig.path))
        .reduce((configs, current) => [...configs, ...current], []),
    ];
  }
  return [currentConfig];
};

/**
 * 路徑替換參數
 * @param path 路徑註冊內容
 * @param variables 替換參數
 * @returns 替換後的實體路徑
 */
export const replacePathWithParams = (path: string, variables: { [key: string]: string }): string => {
  let temp: string = path;
  const params = path.match(/:[a-zA-Z]+/g) as string[];
  params?.forEach((param) => {
    const key = param.replace(/:/, '');
    if (variables[key]) {
      temp = temp.replace(param, variables[key]);
    }
  });
  return temp;
};

/**
 * 取得指定位置絕對路徑
 * @param layer 查詢層次
 * @param variables 路徑參數
 * @returns 完整路徑
 */
const getNestPath = (
  { path, children }: Omit<RouteConfig, 'key'>,
  layer: Page[],
  variables?: { [key: string]: string },
): string => {
  let temp = path;
  if (variables) {
    temp = replacePathWithParams(path, variables);
  }
  if (layer.length && children?.length) {
    const [currentLayerRouteKey, ...nextLayer] = layer;
    const nextRoute = children.find(({ key }) => key === currentLayerRouteKey);
    if (nextRoute) {
      return `${temp}/${getNestPath(nextRoute, nextLayer, variables)}`.replace(/^\/|\/$/g, '');
    }
  }
  return formatAbsolutePathname(temp);
};

/**
 * 取得所有路由模組攤平後路由設置
 * @param routesMap 路由來源，預設主路由
 */
export const getAllFlatRouterConfigsByRoutesMap = memo((routesMap: RoutesMap = routesConfig): FlatRouterConfig[] => {
  return Object.values(RouteModule)
    .filter((module) => routesMap[module])
    .flatMap((module) => getFlatRouterConfigs(routesMap[module]!, module))
    .filter(({ key }) => !!key);
});

/**
 * 取得路徑所屬模組
 * @param pathname 完整路徑
 * @returns 當前模組
 */
export const getCurrentRouteModule = (pathname: string): RouteModule => {
  const purePathname: string = formatPurePathname(pathname);
  const [module] = formatAbsolutePathname(purePathname).split('/');
  switch (module as RouteModule) {
    case RouteModule.Guideline:
      return RouteModule.Guideline;
    case RouteModule.Sport:
      return RouteModule.Sport;
    default:
      return RouteModule.Platform;
  }
};

/**
 * 取得指定路徑路由來源
 * @param pathname 指定路徑
 */
export const getRoutesMap = (pathname: string): RoutesMap | undefined => {
  const purePathname: string = formatPurePathname(pathname);
  const outsideRoutes = getAllFlatRouterConfigsByRoutesMap(outsideRoutesConfig);
  const routes = getAllFlatRouterConfigsByRoutesMap();
  if (outsideRoutes.some(({ path }) => path === purePathname)) {
    return outsideRoutesConfig;
  }
  if (routes.some(({ path }) => path === purePathname)) {
    return routesConfig;
  }
  return undefined;
};

/**
 * 取得主路由指定路徑設置
 * @description 只匹配具備實體頁面的路由
 * @param pathname 指定路徑
 * @param routesMap 路由來源，預設主路由
 */
export const getRouteConfig = memo(
  (pathname: string, routesMap: RoutesMap = routesConfig): FlatRouterConfig | undefined => {
    const purePathname: string = formatPurePathname(pathname);
    const currentRouteModule = getCurrentRouteModule(purePathname);
    const rootRoutesConfig = routesMap[currentRouteModule];
    if (Object.values(RouteModule).includes(currentRouteModule) && rootRoutesConfig) {
      const currentRouterConfig = getFlatRouterConfigs(rootRoutesConfig, currentRouteModule).find(({ path, key }) => {
        const absolutePathname = formatAbsolutePathname(purePathname);
        const routeParams = path.split('/').filter((_) => /^:/.test(_));
        if (routeParams.length > 0) {
          const reg = new RegExp(
            `${path.replace(/:[\w]+/g, '[\\w]+')}$`.replace(/\//g, '\\/').split('\\w').join('\\w|\\-|\\%|\\,|\\@'),
          );
          return reg.test(absolutePathname) && key;
        }
        return path === absolutePathname && key;
      });
      return currentRouterConfig;
    }
    return undefined;
  },
);

export const getRouteConfigWithAllRoutes = (pathname: string): FlatRouterConfig | undefined =>
  getRouteConfig(pathname, routesConfig) ?? getRouteConfig(pathname, outsideRoutesConfig);

/**
 * 取得特定頁面路由設置
 * @description 只匹配具備實體頁面的路由
 * @param key 頁面代碼
 * @param routesMap 路由來源，預設主路由
 */
export const getRouteConfigByKey = (pageKey: Page, routesMap?: RoutesMap): FlatRouterConfig | undefined => {
  return getAllFlatRouterConfigsByRoutesMap(routesMap).find(({ key }) => key === pageKey);
};

/**
 * 取得指定位置路徑
 * @param module 路由模組
 * @param layer 查詢路由子層資訊，[layer1, layer2, ...]
 * @param variables 路徑參數
 * @param routesMap 路由來源，預設主路由
 * @returns 完整路徑
 */
export const getRelativePathByRouteModule = (
  module: RouteModule,
  layer: Page[],
  variables?: { [key: string]: string },
  routesMap: RoutesMap = routesConfig,
): string => {
  const currentRouteConfig = routesMap[module];
  if (currentRouteConfig) {
    return `${module}/${getNestPath(currentRouteConfig, layer, variables)}`.replace(/\/$/, '');
  }
  return '';
};

/**
 * 透過頁面代碼取得路徑，查無路徑則回傳首頁路徑
 * @param variables 路徑參數
 * @param routesMap 路由來源，預設主路由
 */
export const getRelativePathByKey = (
  key: Page,
  variables?: { [key: string]: string },
  routesMap?: RoutesMap,
): string => {
  const routeConfig = getRouteConfigByKey(key, routesMap);
  return (
    (variables && routeConfig?.path ? replacePathWithParams(routeConfig.path, variables) : routeConfig?.path) ??
    getRelativePathByRouteModule(RouteModule.Sport, [Page.SportMain])
  );
};

export const gotoSScore = () => {
  toggleMessage({ message: translate('downloadSscore') });
};

/**
 * 透過頁面路徑取得Active tab navigation type
 * @param routesMap 路由來源，預設主路由
 * @example home => TabNavigationType.HOME
 */
export const getTabNavigationTypeByPathname = (
  pathname: string,
  routesMap?: RoutesMap,
): TabNavigationType | undefined => {
  const purePathname: string = formatPurePathname(pathname);
  const routeWithNavigate = getAllFlatRouterConfigsByRoutesMap(routesMap).filter(
    (route) => !isNullOrUndefined(route.tabNavigationType),
  );
  // if the path is match with the route pattern, return the tabNavigationType
  const targetRouterConfig = routeWithNavigate.find(({ path, tabNavigationType }) => {
    if (tabNavigationType !== TabNavigationType.Home) {
      // tab navigation type is only for the root path
      // if the path is not root path, we need to check if the path is match with the route pattern
      return purePathname.includes(path);
    }
    return path === purePathname;
  });
  return targetRouterConfig?.tabNavigationType;
};

/**
 * 透過路徑取得路由參數
 * @param pathname 完整路徑
 * @param params 要搜尋的參數
 * @param routesMap 路由來源，預設主路由
 * @example getParamsByPathname('test/123', ['type']) => {type: '123'}
 */
export const getParamsByPathname = <T extends PartialRecord<string, string>>(
  pathname: string,
  params: (keyof T)[],
  routesMap?: RoutesMap,
): T => {
  const absolutePathname = formatAbsolutePathname(pathname);
  const targetRouterConfig = getRouteConfig(absolutePathname, routesMap);
  if (targetRouterConfig) {
    return params.reduce(
      (previous, param: string) => ({
        ...previous,
        [param]: absolutePathname.replace(/\?[\W\w]+/, '').split('/')[
          targetRouterConfig.path.split('/').findIndex((_) => new RegExp(`^:${param}`).test(_))
        ],
      }),
      {},
    ) as T;
  }
  return {} as T;
};
