import { IInput } from '@shared/components/Input';
import { translate } from '@shared/hooks/use-translation';
import { isMobile } from '@shared/hooks/use-window-size';
import { IBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { formatClasses } from '@utilities/helpers/format.helper';
import { onMount } from 'solid-js';

interface IFormInputProps
  extends IBaseComponentProps,
    Pick<IInput, 'register' | 'legendClasses' | 'legendI18nKey' | 'placeholderI18nKey'> {}

const FormInput = (props: IFormInputProps) => {
  let ref: HTMLInputElement | undefined;

  onMount(() => {
    if (ref) {
      if (props.register) {
        props.register(ref);
      }
    }
  });

  return (
    <fieldset class="flex w-full flex-col space-y-1">
      <legend
        class={formatClasses('text-lg', {
          'text-xs': isMobile(),
        })}>
        {translate(props.legendI18nKey)}
      </legend>
      <div class="border-b-0_25 border-primary-2 py-2_5">
        <input
          class={formatClasses('h-5 w-full text-sm', {
            'text-xs': isMobile(),
          })}
          ref={(el) => {
            ref = el;
            if (typeof props.ref === 'function') {
              props.ref(el);
            }
          }}
          type="text"
          placeholder={translate(props?.placeholderI18nKey ?? '')}
        />
      </div>
    </fieldset>
  );
};
export default FormInput;
