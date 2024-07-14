import { createEffect, createSignal, onCleanup } from 'solid-js';

export type TDomPropertyCallback = (values: unknown[]) => void;

export enum IDomPropertyUpdateMode {
  /**
   * 以 requestAnimationFrame 更新
   * 因為 requestAnimationFrame 會在下一次瀏覽器繪製前執行，所以可以避免過度更新
   * 但是因為 requestAnimationFrame 會在瀏覽器繪製前執行，所以會有一點點延遲
   * 如果畫面上有太多requestAnimationFrame，會造成resume時很多動畫同時執行
   */
  RAF = 'raf',
  /**
   * 以 setTimeout 更新
   * 因為 setTimeout 會在每個時間點執行，所以可以避免過度更新
   * 太密集的 setTimeout 會造成瀏覽器負擔過重
   * 太短的 setTimeout 會造成畫面更新不夠順暢
   * 一般來說 16ms 會是一個比較好的間隔
   */
  Timeout = 'timeout',
}

type DomRectKey =
  | 'domRectX'
  | 'domRectY'
  | 'domRectWidth'
  | 'domRectHeight'
  | 'domRectLeft'
  | 'domRectRight'
  | 'domRectTop'
  | 'domRectBottom'
  | 'offsetLeft'
  | 'offsetTop';

type TypeMapper = {
  [K in DomRectKey]: number;
} & {
  offsetWidth: number;
  offsetHeight: number;
} & Element;

type MapKeysToTypes<T extends (keyof TypeMapper)[]> = {
  [K in keyof T]: TypeMapper[T[K]];
};

export type DomPropertyCbParams<T extends (keyof TypeMapper)[]> = MapKeysToTypes<T>;

export interface IDomPropertyOptions {
  /**
   * domRect property需使用前綴 'domRect'
   * 範例：domRectx
   */
  keyList: (keyof Element | DomRectKey | 'offsetWidth' | 'offsetHeight')[];
  /**
   * domProperty只處理value變化
   * 如果擔心更新過於頻繁，應該在callback裡面自行處理
   */
  cb?: TDomPropertyCallback;
  /**
   * 更新模式
   * default: IDomPropertyUpdateMode.RAF
   */
  updateMode?: IDomPropertyUpdateMode;
  /**
   * updateMode 為 timeout 時，可以設定更新間隔
   * 單位為 ms
   * default: 16ms
   */
  interval?: number;

  enabled?: boolean;
}

declare module 'solid-js' {
  namespace JSX {
    interface Directives {
      domProperty: IDomPropertyOptions;
    }
  }
}

/**
 * domProperty directive
 * 用於監聽 HTMLElement 的 property 變化
 * 監聽的方式主要是使用 requestAnimationFrame 或 setTimeout
 * 如果是一些可以用 event listener 監聽的 property，應該使用 event listener
 */
function domProperty(node: HTMLElement, accessor: () => IDomPropertyOptions) {
  const [values, setValues] = createSignal<unknown[]>([], {
    // most HTML properties are primitive values, so we can use shallow equal
    equals: (a, b) => a.length === b.length && a.every((item, index) => item === b[index]),
  });
  const updateMode = () => accessor().updateMode ?? IDomPropertyUpdateMode.RAF;
  const interval = () => accessor().interval ?? 16;
  const enabled = () => accessor().enabled ?? true;
  let rafId: number;
  // in order to sync with rAF logic, we use setTimeout instead of setInterval
  let timeoutId: NodeJS.Timeout;
  let setNextDetectUpdate: () => void;
  const detectUpdate = () => {
    const options = accessor();
    const { keyList } = options;
    const rect = node.getBoundingClientRect();
    const newValues = keyList.map((key) => {
      return (/^domRect/.test(key) ? rect[key.replace(/^domRect/, '').toLowerCase()] : node[key]) as unknown;
    });

    setValues(newValues);
    setNextDetectUpdate();
  };

  // setNextDetectUpdate 在這裡define，因為和detectUpdate有circular dependency
  setNextDetectUpdate = () => {
    if (rafId) {
      cancelAnimationFrame(rafId);
    }
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    // dynamic detect options for mode switching
    if (updateMode() === IDomPropertyUpdateMode.RAF) {
      rafId = requestAnimationFrame(detectUpdate);
    } else {
      timeoutId = setTimeout(detectUpdate, interval());
    }
  };

  // initial detect
  // 不用放到onMount，因為directive會在onMount之後執行
  createEffect(() => {
    if (enabled()) {
      detectUpdate();
    } else {
      clearTimeout(timeoutId);
    }
  });

  createEffect(() => {
    const options = accessor();
    const { cb } = options;
    cb?.(values());
  });

  onCleanup(() => {
    clearTimeout(timeoutId);
  });
}

export { domProperty };
