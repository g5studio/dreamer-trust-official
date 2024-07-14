import { IBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { formatClasses } from '@utilities/helpers/format.helper';
import { MoreIcon } from '@utilities/svg-components/MoreIcon';
import { Show, mergeProps } from 'solid-js';

interface IMoreContainerProps extends IBaseComponentProps {
  onToggle?: () => void;
  hideIcon?: boolean;
}

const MoreContainer = (props: IMoreContainerProps) => {
  const mergedProps = mergeProps(
    {
      hideIcon: false,
    },
    props,
  );

  return (
    <div
      data-testid={mergedProps.testId}
      class={formatClasses(
        'h-full flex items-center px-2_5 rounded-full gap-x-2_5 cursor-pointer select-none border border-black-5',
        mergedProps.classes,
      )}
      onClick={() => mergedProps?.onToggle?.()}>
      {mergedProps.children}
      <Show when={!mergedProps.hideIcon}>
        <MoreIcon classes="cursor-pointer w-5 h-5" />
      </Show>
    </div>
  );
};
export default MoreContainer;
