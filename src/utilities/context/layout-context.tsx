import { SystemTheme } from '@shared/enums';
import { IBaseComponentProps } from '@shared/interfaces';
import { DomPropertyCbParams } from '@utilities/directives/dom-property-directive';
import { Accessor, Setter, createContext, createSignal, useContext } from 'solid-js';

export type LayoutScrollRef = HTMLElement | Window | undefined;

export type LayoutSizeDomPropertyCbParams = DomPropertyCbParams<
  ['domRectWidth', 'domRectHeight', 'domRectTop', 'domRectLeft']
>;

export type Theme = Extract<SystemTheme, SystemTheme.Dark | SystemTheme.Light>;

export type LayoutContextValue = {
  /**
   * 頁面實際內容之外的header高度
   */
  headerAreaHeight: Accessor<number>;
  footerAreaHeight: Accessor<number>;
  /**
   * 主要滾動軸
   */
  mainScrollRef: Accessor<LayoutScrollRef>;
  /**
   * 頁面實際內容
   */
  contentLayoutSize: Accessor<DomSize>;
  contentLayoutRef: Accessor<HTMLElement | undefined>;
  /**
   * 頁面可視區域
   */
  containerSize: Accessor<DomSize>;
  /**
   * 取得當前系統風格資訊
   */
  theme: Accessor<Theme>;
  /**
   * 主要滾動軸區域
   * @description 頁面實際內容 + 賽事分類快速切換選單 + 熱門賽事服務
   */
  mainContentAreaSize: Accessor<DomSize>;
};

export type LayoutContextSetter = {
  setHeaderAreaHeight: Setter<number>;
  setMainScrollRef: Setter<LayoutScrollRef>;
  setContentLayoutSize: Setter<DomSize>;
  setContainerSize: Setter<DomSize>;
  setContentLayoutRef: Setter<HTMLElement | undefined>;
  setTheme: Setter<Theme>;
  setMainContentAreaSize: Setter<DomSize>;
  setFooterAreaHeight: Setter<number>;
};

type ContextType = [LayoutContextValue, LayoutContextSetter];

const LoginContext = createContext<ContextType>();

const useContentLayout = (): Pick<LayoutContextSetter, 'setContentLayoutRef' | 'setContentLayoutSize'> &
  Pick<LayoutContextValue, 'contentLayoutRef' | 'contentLayoutSize'> => {
  const [contentLayoutSize, setContentLayoutSize] = createSignal<DomSize>({
    height: 0,
    width: 0,
    top: 0,
    left: 0,
  });
  const [contentLayoutRef, setContentLayoutRef] = createSignal<HTMLElement>();

  return {
    contentLayoutSize,
    setContentLayoutSize,
    contentLayoutRef,
    setContentLayoutRef,
  };
};

export const LayoutProvider = (props: IBaseComponentProps) => {
  const [theme, setTheme] = createSignal<Theme>(SystemTheme.Light);
  const [headerAreaHeight, setHeaderAreaHeight] = createSignal(0);
  const [footerAreaHeight, setFooterAreaHeight] = createSignal(0);
  const [mainScrollRef, setMainScrollRef] = createSignal<LayoutScrollRef>();
  const [containerSize, setContainerSize] = createSignal<DomSize>({
    height: 0,
    width: 0,
    top: 0,
    left: 0,
  });
  const [mainContentAreaSize, setMainContentAreaSize] = createSignal<DomSize>({
    height: 0,
    width: 0,
    top: 0,
    left: 0,
  });

  const { contentLayoutSize, setContentLayoutSize, contentLayoutRef, setContentLayoutRef } = useContentLayout();

  const context: ContextType = [
    {
      headerAreaHeight,
      mainScrollRef,
      containerSize,
      contentLayoutSize,
      contentLayoutRef,
      theme,
      mainContentAreaSize,
      footerAreaHeight,
    },
    {
      setHeaderAreaHeight,
      setMainScrollRef,
      setContentLayoutSize,
      setContainerSize,
      setContentLayoutRef,
      setTheme,
      setMainContentAreaSize,
      setFooterAreaHeight,
    },
  ];

  return <LoginContext.Provider value={context}>{props.children}</LoginContext.Provider>;
};

export function useLayoutContext() {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error('useLayoutContext must be used within a LoginContext');
  }
  return context;
}
