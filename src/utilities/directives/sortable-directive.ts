declare module 'solid-js' {
  namespace JSX {
    interface Directives {
      sortable: boolean;
    }
  }
}

/**
 * 此 directive 檔案僅用於定義 solid-dnd 的型別
 * 無其他作用，請勿 import 使用
 */
export const sortable = () => {};
