import { IBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { inView } from '@utilities/directives/in-view-directive';
import { registerDirective } from '@utilities/helpers/directive.helper';
import { formatClasses } from '@utilities/helpers/format.helper';
import { Show, createEffect, createSignal } from 'solid-js';

registerDirective(inView);

interface IOutViewContainerProps extends IBaseComponentProps {
  onChange?: (inView: boolean) => void;
  destroyOnLeave?: boolean;
  /**
   * The threshold that is used to determine when the element is considered to be in the viewport
   * @see https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/thresholds
   */
  threshold?: number | number[];
  /**
   * Margin around the root. Can have values similar to the CSS margin property, e.g. "10px 20px 30px 40px" (top, right, bottom, left).
   * @see https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/rootMargin
   */
  rootMargin?: string;
  /**
   * The element that is used as the viewport for checking visibility of the target.
   * @see https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/root
   */
  root?: Window | Element | Document | null;
}

function removeWindow(element: IOutViewContainerProps['root']): Exclude<IOutViewContainerProps['root'], Window> {
  if (element === window) {
    return null;
  }
  return element as Exclude<IOutViewContainerProps['root'], Window>;
}

/**
 * 元件離開可視範圍自動隱藏內容
 * @description 功能性元件
 * @param props
 */
const OutViewContainer = (props: IOutViewContainerProps) => {
  const [isShow, setIsShow] = createSignal<boolean>(false);

  createEffect(() => {
    props.onChange?.(isShow());
  });

  return (
    <div
      use:inView={{
        onEnter: () => {
          setIsShow(true);
        },
        onLeave: () => {
          setIsShow(false);
        },
        threshold: props.threshold,
        rootMargin: props.rootMargin,
        root: removeWindow(props.root),
      }}
      data-testid={props.testId}
      style={props.style}
      class={formatClasses(
        {
          'opacity-100': isShow(),
          'opacity-0': !isShow(),
        },
        props.classes,
      )}>
      <Show when={!props.destroyOnLeave || isShow()}>{props.children}</Show>
    </div>
  );
};
export default OutViewContainer;
