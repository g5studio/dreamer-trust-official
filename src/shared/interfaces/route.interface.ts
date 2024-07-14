import { InnerLinkType, Page, SportCategory, TabNavigationType } from '@shared/enums';
import { Component } from 'solid-js';

type MenuItemConfig = {
  icon: string;
  /**
   * 選單項目排列順序
   */
  order: number;
};

export type RouteConfig = {
  path: string;
  /**
   * 頁面代碼
   * @description 具備實體頁面的路由需要添加key值確保路徑能正確mapping
   */
  key?: Page;
  /**
   * 該頁面是否允許訪客訪問
   * @default true
   */
  allowGuest?: boolean;
  /**
   * 該頁面為桌面版選單項目才需要設置
   * @deprecated 新版layout pc header menu不再使用此配置，只剩體育、娛樂城、廣場
   * @description pc側邊欄需配置於use-menu hook
   * @external https://innotech.atlassian.net/wiki/spaces/30H52023/pages/2811101191/PCWeb+Layout
   */
  menuConfig?: MenuItemConfig;
  /**
   * 該頁面為手機版選單項目才須需要設置
   */
  mobileMenuConfig?: MenuItemConfig;
  i18n?: string;
  children?: RouteConfig[];
  component?: Component;
  /**
   * api指定內站連結代碼
   */
  innerLinkType?: InnerLinkType;
  /**
   * 取消頁面容器限制
   */
  disableMainContainer?: boolean;
  /**
   * 手機版隱藏header
   */
  disableMobileHeader?: boolean;
  /**
   * 路由守衛
   */
  guard?: Component;
  tabNavigationType?: TabNavigationType;
};

/**
 * @description path為完整路徑
 */
export type FlatRouterConfig = Pick<
  RouteConfig,
  | 'i18n'
  | 'path'
  | 'allowGuest'
  | 'key'
  | 'innerLinkType'
  | 'disableMainContainer'
  | 'disableMobileHeader'
  | 'tabNavigationType'
>;

export type OutsideRouteConfig = Pick<RouteConfig, 'path' | 'component' | 'key' | 'children' | 'allowGuest' | 'guard'>;

export interface ISportNavigatorRouteParams extends Record<string, string> {
  category: SportCategory;
  date: string;
  tids: string;
  iid: string;
  filter: string;
  match: string;
  tid: string;
}
