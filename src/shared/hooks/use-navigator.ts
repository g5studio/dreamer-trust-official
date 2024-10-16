import { CustomEventType, ErrorType, Page } from '@shared/enums';
import { NavigateOptions } from '@solidjs/router';
import {
  formatAbsolutePathname,
  formatPurePathname,
  formatQueryString,
  formatRelativePathname,
} from '@utilities/helpers/format.helper';
import { Log } from '@utilities/helpers/log.helper';
import { getRelativePathByKey } from '@utilities/helpers/routes.helper';
import { batch } from 'solid-js';
import { createStore } from 'solid-js/store';

export type NavigateOption<NavigatorState extends object = object> = {
  to: string;
  options?: Partial<
    Omit<NavigateOptions<NavigatorState>, 'replace'> & {
      /**
       * 跳轉帶入query string
       */
      search: PartialRecord<string, string | number | boolean | string[] | number[] | undefined>;
      /**
       * 是否取代最後一筆路由紀錄
       * @description history [A,B] -> navigate(C, {replace: true}) ->  history [A,C]
       * @default false
       */
      replace?: boolean;
      /**
       * 是否為相對路徑
       * @default false
       */
      relative?: boolean;
    }
  >;
  stable: boolean;
};

type Navigator = {
  /**
   * 指定跳轉選項
   */
  navigateOption?: NavigateOption;
  /**
   * 歷史路由紀錄
   * @description
   * 1. 只紀錄透過navigator跳轉的路由
   * 2. 格式為absolutePathname
   */
  history: string[];
  /**
   * 當前路由
   */
  pathname: string;
  /**
   * 用原生navigate options中帶入state會導致uncaught DOMException
   * 因此改為在此處加入state供導轉時傳遞
   */
  state: unknown;
};

export interface IRouteChangedEvent {
  pathname: string;
  history: string[];
  options?: NavigateOption['options'];
}

const initialPathname = `${formatAbsolutePathname(window.location.pathname).replace(/\/$/, '')}${
  window.location.search
}`;

const [navigator, setNavigator] = createStore<Navigator>({
  navigateOption: undefined,
  history: [initialPathname],
  pathname: initialPathname,
  state: undefined,
});

window.addEventListener('popstate', ({ target }) => {
  const { location } = target as Window;
  const pathname = formatAbsolutePathname(location.pathname.replace(/\/$/, ''));
  batch(() => {
    setNavigator('history', (history) => {
      if (history[history.length - 1] !== pathname) {
        return [...history, pathname];
      }
      return history;
    });
    setNavigator('pathname', pathname);
  });
});

window.addEventListener(
  CustomEventType.RouterChanged,
  ({ detail: { pathname, history: routeHistory, options } }: CustomEvent<IRouteChangedEvent>) => {
    const incomingPath = formatAbsolutePathname(pathname);
    Log.system({
      msg: `Router changed , current route: ${incomingPath}`,
      params: { history: routeHistory.map((history) => formatAbsolutePathname(history)) },
    });
    batch(() => {
      setNavigator('history', (history) => {
        const historyTemp = [...history];
        if (options?.replace) {
          historyTemp.pop();
        }
        if (historyTemp[historyTemp.length - 1] !== incomingPath) {
          historyTemp.push(incomingPath);
        }
        return historyTemp;
      });
      setNavigator('navigateOption', 'stable', true);
      setNavigator('pathname', incomingPath);
    });
  },
);

export { navigator };
export default navigator;

/**
 * 取得當前路由狀態
 * @param defaultValue
 * @param reset 取用後是否清空路由state，預設為false
 */
export const getNavigatorState = <T extends object>(defaultValue?: Partial<T>, reset = false) => {
  const state: Partial<T> | undefined = navigator.state as Partial<T> | undefined;
  if (reset) {
    setNavigator('state', undefined);
  }
  return state ?? defaultValue ?? ({} as Partial<T>);
};

export const setNavigatorState = <T>(value: T) => setNavigator('state', value);

/**
 * @description 支援路由歷史紀錄、solid router外部跳轉等客製化功能
 * @param to 前往路徑名稱
 * @param options solid navigate options
 */
export const navigate = <NavigatorState extends object = object>(
  pathname: NavigateOption['to'],
  options?: NavigateOption<NavigatorState>['options'],
) => {
  const rootPath: string = options?.relative ? formatAbsolutePathname(pathname) : formatRelativePathname(pathname);
  const to: string = options?.search ? `${rootPath}?${formatQueryString(options.search)}` : rootPath;
  const isEqualPreviousRoute = formatAbsolutePathname(to) === formatAbsolutePathname(navigator.pathname);
  const { state, ...option } = options ?? {};
  if (!isEqualPreviousRoute) {
    // blur input when navigate to prevent keyboard cause window size issue
    const activeElement = document.activeElement as HTMLElement;
    if (activeElement) {
      activeElement.blur();
    }
    batch(() => {
      setNavigator('state', (previous) => ({ ...(previous ?? {}), ...(state ?? {}) }));
      setNavigator('navigateOption', { to, options: option, stable: false });
    });
  }
};

/**
 * 取得歷史路徑紀錄
 * @param index
 */
export const getForwardPath = (index: number): string | undefined =>
  navigator.history[navigator.history.length - 1 - index];

/**
 * 回退路由
 * @description 此方法會刪除路由歷史紀錄
 * @param to 退回數量
 * @param replace 是否取代當前路由
 * @param redirect 退回路由不存在時自動跳轉路徑，預設為主頁
 */
export const back = (to: number, replace = false, redirect = getRelativePathByKey(Page.Home)) => {
  const target = getForwardPath(to);
  if (typeof target === 'string') {
    batch(() => {
      setNavigator('history', (pre) => {
        const historyTemp = [...pre];
        Array.from({ length: to }).forEach(() => {
          historyTemp.pop();
        });
        return historyTemp;
      });
      setNavigator('navigateOption', (pre) => ({
        to: formatRelativePathname(target),
        stable: false,
        options: { ...(pre?.options ?? {}), replace },
      }));
    });
  } else {
    Log.error(
      {
        msg: `route not found in system and browser both, will redirect to ${redirect}`,
      },
      ErrorType.Navigate,
    );
    navigate(redirect, { replace: true });
  }
};

/**
 * 前往主頁
 */
export const toMainPage = <NavigatorState extends object = object>(
  options?: NavigateOption<NavigatorState>['options'],
) => navigate(getRelativePathByKey(Page.Home), options);

export const goBack = () => {
  if (navigator.history.length > 1) {
    back(1);
  } else {
    toMainPage();
  }
};

/**
 * 刪除當前頁面路由紀錄
 * @description 只能刪除當前頁面路由
 */
export const deleteCurrentRouteRecord = () => {
  setNavigator((pre) => {
    if (pre.history[pre.history.length - 1] === pre.pathname) {
      const historyTemp = [...pre.history];
      historyTemp.pop();
      Log.system({
        msg: 'Current route record has been removed',
        params: { history: historyTemp.map((history) => formatAbsolutePathname(history)) },
      });
      return { ...pre, history: historyTemp };
    }
    return pre;
  });
};

/**
 * 回到前一頁，且不會記錄當前路由
 * @description 用於內頁導轉至其他頁面後，於其他頁面返回時。若前頁不存在，將導轉至rootPath(首頁)
 * @param state 由路由攜帶的state
 */
export const navigateBack = <T extends object = object>(args?: Pick<NavigateOptions<T>, 'state'>) => {
  const previousPath = getForwardPath(1);
  if (previousPath) {
    navigate<T>(previousPath, { state: args?.state, replace: true });
  } else {
    back(1);
  }
};

/**
 * 刪除指定頁面路由紀錄
 */
export const deleteRouteRecord = (deleteRecord: string[]) => {
  setNavigator((pre) => {
    if (deleteRecord.length > 0) {
      const historyTemp = [...pre.history].filter((path) => !deleteRecord.includes(path));
      Log.system({
        msg: `${pre.history.length - historyTemp.length} route record has been removed`,
        params: { history: historyTemp.map((history) => formatAbsolutePathname(history)) },
      });
      return { ...pre, history: historyTemp };
    }
    return pre;
  });
};

/**
 * 透過substring matching刪除指定頁面路由紀錄
 * @example deleteRoutes(getRelativePathByKey(Page.EuroMain));
 */
export const deleteRoutes = (substring: string) => {
  setNavigator((pre) => {
    const historyTemp = [...pre.history].filter((path) => !path.includes(substring));
    Log.system({
      msg: `${pre.history.length - historyTemp.length} route record has been removed`,
      params: { history: historyTemp.map((history) => formatAbsolutePathname(history)) },
    });
    return { ...pre, history: historyTemp };
  });
};

/**
 * 在路徑上加入search keyword
 * @param searchKeyword
 */
export const appendSearchQueryString = (searchKeyword: string | undefined) => {
  if (searchKeyword) {
    navigate(formatPurePathname(navigator.pathname), { search: { q: searchKeyword }, replace: true, scroll: false });
  }
};
