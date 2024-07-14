import { createEffect, createSignal, onCleanup } from 'solid-js';
import { createStore } from 'solid-js/store';
import { ResizeObserver } from 'resize-observer';

type ExcludesProp = {
  /**
   * 父容器
   */
  parent?: HTMLElement;
  useWindowParent?: boolean;
  /**
   * 要排除高度的元素
   */
  excludesRef?: HTMLElement[];
  /**
   * 母容器大小變化時觸發
   * @param boxSize 指定母容器當前盒型結構數據
   */
  onResize?: (boxSize: DOMRect) => void;
  method: 'exclude';
};

type IncludesProp = {
  /**
   * 要包含高度的元素，若有指定則忽略母容器
   */
  includesRef: HTMLElement[];
  /**
   * 所有包含容器大小變化時觸發
   * @param boxSize 所有涵蓋容器盒型結構數據
   */
  onResize?: (boxSize: DOMRect[]) => void;
  method: 'include';
};

export type DynamicBoxSizeProps = IncludesProp | ExcludesProp;

export const useDynamicBoxSize = (accessor: () => DynamicBoxSizeProps): Pick<DOMRect, 'height'> => {
  const [observer, setObserver] = createSignal<ResizeObserver>();
  const [box, setBox] = createStore<Pick<DOMRect, 'height'>>({
    height: 0,
  });
  const reduceHeight = (total: number, element: HTMLElement) => total + (element.clientHeight ?? 0);
  const setResize = (resize: () => void) => {
    setObserver((pre) => {
      pre?.disconnect();
      return new ResizeObserver(resize);
    });
  };
  const setHeight = (height: number) => {
    setBox((pre) => ({ ...pre, ...{ height } }));
  };

  createEffect(() => {
    const props = accessor();
    switch (props.method) {
      case 'exclude': {
        const parent = props.useWindowParent ? document.getElementById('root') : props.parent;
        const onResize = () => {
          if (parent) {
            const totalReduceHeight = (props.excludesRef ?? []).reduce(reduceHeight, 0);
            setHeight((props.useWindowParent ? window.innerHeight : parent.clientHeight) - totalReduceHeight);
            props?.onResize?.(parent.getBoundingClientRect());
          }
        };
        setResize(onResize);
        const observeElementList = [parent, ...(props.excludesRef ?? [])].filter((element) => !!element);
        observeElementList.forEach((element) => {
          if (element) {
            observer()?.observe(element);
          }
        });
        break;
      }
      default: {
        const onResize = () => {
          const height = props.includesRef.reduce(reduceHeight, 0);
          setHeight(height);
          props.onResize?.(props.includesRef.map((element) => element.getBoundingClientRect()));
        };
        setResize(onResize);
        props.includesRef.forEach((ref) => observer()?.observe(ref));
        break;
      }
    }
  });

  onCleanup(() => {
    observer()?.disconnect();
  });

  return box;
};
