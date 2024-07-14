import { IBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { formatClasses } from '@utilities/helpers/format.helper';
import { CheckBoxIcon } from '@utilities/svg-components/CheckBoxIcon';
import { Show } from 'solid-js';

interface ICheckBoxProps extends IBaseComponentProps {
  checked?: boolean;
  checkBoxClass?: string;
}

const CheckBox = (props: ICheckBoxProps) => (
  <div data-testid={props.testId} class={formatClasses('w-5', props.classes)}>
    <Show
      when={props.checked}
      fallback={
        <div class="rounded-full">
          <div class={formatClasses('w-3_5 h-3_5 ring-1 ring-black-5 m-0_75 rounded-full', props.checkBoxClass, {})} />
        </div>
      }>
      <CheckBoxIcon classes="w-full h-full" />
    </Show>
  </div>
);
export default CheckBox;
