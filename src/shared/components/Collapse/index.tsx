import { IBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { JSXElement, Show, createEffect, createSignal } from 'solid-js';
import { customTwMerge, formatClasses } from '@utilities/helpers/format.helper';
import { ArrowUpThinIcon } from '@utilities/svg-components/ArrowUpThinIcon';
import style from './index.module.scss';

interface ICollapseProps extends IBaseComponentProps {
  isExpand?: boolean;
  defaultExpand: boolean;
  headerSlot?: () => JSXElement;
  arrowIconSlot?: () => JSXElement;
  headerClass?: string;
  arrowIcon?: boolean;
  arrowIconClass?: string;
  onToggle?: (isExpand: boolean) => void;
}

const Collapse = (props: ICollapseProps) => {
  const [isExpand, setIsExpand] = createSignal<boolean>(props?.defaultExpand);

  createEffect(() => {
    if (props?.isExpand !== undefined) {
      setIsExpand(props.isExpand);
    }
  });

  const toggleExpand = (e: Event) => {
    e.stopPropagation();
    setIsExpand((pre) => !pre);
    props?.onToggle?.(isExpand());
  };

  return (
    <div data-testid={props.testId} class={customTwMerge('w-full h-full', props?.classes)}>
      {/** Header */}
      <div
        class={customTwMerge('w-full h-10 flex items-center cursor-pointer select-none', props?.headerClass)}
        onClick={(e) => toggleExpand(e)}>
        <Show when={props?.arrowIcon}>
          <div class={formatClasses('w-5 h-5', props?.arrowIconClass, style[`arrow__${isExpand() ? 'up' : 'down'}`])}>
            {props.arrowIconSlot?.() || <ArrowUpThinIcon classes={props?.arrowIconClass} fillClasses="fill-black-1" />}
          </div>
        </Show>
        {props.headerSlot?.()}
      </div>
      {/** Content */}
      <Show when={isExpand()}>{props?.children}</Show>
    </div>
  );
};
export default Collapse;
