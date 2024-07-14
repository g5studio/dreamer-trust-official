import { IBaseComponentProps } from '@shared/interfaces';
import { Show } from 'solid-js';
import { customTwMerge } from '@utilities/helpers/format.helper';

interface IDivider extends IBaseComponentProps {
  type?: 'horizontal' | 'vertical';
  isDashed?: boolean;
}

const dividerClasses = {
  base: 'box-border m-0 p-0 text-black-1 text-sm list-none border-t border-solid border-black-5',
  horizontal: 'flex clear-both w-full my-3',
  horizontalText: `
    flex text-sm font-medium whitespace-nowrap text-center border-t-0
    after:relative after:top-1/2 after:w-1/2 after:transform after:translate-y-1/2 after:border-t after:border-solid after:border-black-5
    before:relative before:top-1/2 before:w-1/2 before:transform before:translate-y-1/2 
    before:border-t before:border-solid before:border-black-5
  `,
  vertical: 'relative inline-block align-middle h-full mx-2 border-l border-solid border-black-5',
  verticalText: '',
  dashed: 'border-dashed',
};

const Divider = (props: IDivider) => {
  const defaultType = 'horizontal';

  return (
    <div
      style={props.style}
      class={customTwMerge(
        dividerClasses.base,
        dividerClasses[props.type ?? defaultType],
        props.children && dividerClasses.horizontalText,
        props.isDashed && dividerClasses.dashed,
        props.classes,
      )}
      role="separator">
      <Show when={props.children}>
        <span class="inline-block px-2 py-0">{props.children}</span>
      </Show>
    </div>
  );
};

export default Divider;
