import { IInputProps } from '@shared/components/Input';
import { translate } from '@shared/hooks/use-translation';
import { isMobile } from '@shared/hooks/use-window-size';
import { Slot } from '@shared/interfaces';
import { IBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { formatClasses } from '@utilities/helpers/format.helper';
import { createSignal, onMount } from 'solid-js';

interface IFormInputProps
  extends IBaseComponentProps,
    Pick<IInputProps, 'legendClasses' | 'legendI18nKey' | 'placeholderI18nKey' | 'inputmode' | 'type'> {
  register: (el: HTMLInputElement, updateValue: ArrowFn<string, void>) => void;
  pseudoSlot?: Slot;
  inputClasses?: string;
  legendClasses?: string;
}

const FormInput = (props: IFormInputProps) => {
  const [hasValue, setHasValue] = createSignal<boolean>();

  let ref: HTMLInputElement | undefined;

  const updateValue = (value: string) => {
    if (ref) {
      ref.value = value;
    }
  };

  onMount(() => {
    if (ref) {
      if (props.register) {
        props.register(ref, updateValue);
      }
    }
  });

  return (
    <fieldset class="flex w-full flex-col space-y-1">
      <legend
        class={formatClasses(
          'text-lg',
          {
            'text-xs': isMobile(),
          },
          props.legendClasses,
        )}>
        {translate(props.legendI18nKey)}
      </legend>
      <div
        class={formatClasses('flex flex-row items-center justify-start border-b-0_25 border-primary-2 py-2_5', {
          'text-black-4': !hasValue(),
        })}>
        {props.pseudoSlot?.()}
        <input
          onInput={(e) => setHasValue(!!e.target.value)}
          onChange={(e) => setHasValue(!!e.target.value)}
          class={formatClasses(
            'h-5 grow text-sm',
            {
              'text-xs': isMobile(),
            },
            props.inputClasses,
          )}
          ref={(el) => {
            ref = el;
            if (typeof props.ref === 'function') {
              props.ref(el);
            }
          }}
          type={props.type ?? 'text'}
          inputmode={props.inputmode ?? 'text'}
          placeholder={translate(props?.placeholderI18nKey ?? '')}
        />
      </div>
    </fieldset>
  );
};
export default FormInput;
