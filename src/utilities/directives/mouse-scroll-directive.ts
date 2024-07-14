import { createEffect, onCleanup } from 'solid-js';

export interface IMouseScrollProps {
  /**
   * 單次移動上限
   * @default 50
   */
  moveLimit?: number;
  isHorizontal?: boolean;
  disabled?: boolean;
}

declare module 'solid-js' {
  namespace JSX {
    interface Directives {
      mouseScroll: IMouseScrollProps;
    }
  }
}

/**
 * @external https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button
 */
enum MouseButton {
  Main = 0,
  Auxiliary,
  Secondary,
  Fourth,
  Fifth,
}

function mouseScroll(node: HTMLElement, accessor: () => IMouseScrollProps) {
  const isHorizontal = () => accessor().isHorizontal ?? true;
  const moveLimit = () => accessor().moveLimit ?? 50;
  let start: number;
  createEffect(() => {
    const onMouseMove = ({ x, y }: MouseEvent) => {
      const end = isHorizontal() ? x : y;
      const offset = end - start;
      const direction = offset > 0 ? 1 : -1;
      const max = moveLimit() * direction;
      /**
       * 實際位移距離
       * @description 避免滑動幅度過大，預設極限移動50px
       */
      const moveOffset = Math.abs(offset) > max ? (Math.abs(offset / 10) > max ? max : offset / 10) : offset;
      node.scrollTo({
        left: node.scrollLeft - (isHorizontal() ? moveOffset : 0),
        top: node.scrollTop - (isHorizontal() ? 0 : moveOffset),
      });
    };

    const onMouseDown = ({ button, x, y }: MouseEvent) => {
      if ((button as MouseButton) === MouseButton.Main) {
        start = isHorizontal() ? x : y;
        node.addEventListener('mousemove', onMouseMove);
      }
    };

    const onMouseUp = ({ button }: MouseEvent) => {
      if ((button as MouseButton) === MouseButton.Main) {
        start = 0;
        node.removeEventListener('mousemove', onMouseMove);
      }
    };

    if (!accessor().disabled) {
      node.classList.add('select-none');
      node.addEventListener('mousedown', onMouseDown);
      node.addEventListener('mouseup', onMouseUp);
      node.addEventListener('mouseleave', onMouseUp);
    }

    if (!accessor().disabled) {
      onCleanup(() => {
        node.removeEventListener('mousedown', onMouseDown);
        node.removeEventListener('mouseup', onMouseUp);
        node.removeEventListener('mouseleave', onMouseUp);
      });
    }
  });
}

export { mouseScroll };
