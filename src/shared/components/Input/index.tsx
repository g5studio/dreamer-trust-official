import { createEffect, createSignal, Show, type JSX, onMount, on } from 'solid-js';
import { customTwMerge, formatClasses } from '@utilities/helpers/format.helper';
import { IBaseComponentProps } from '@shared/interfaces/base-component.interface';
import Picture from '@shared/components/Picture';
import { translate } from '@shared/hooks/use-translation';
import { I18nKey } from '@shared/models/translation.model';
import { isNullOrUndefined } from '@utilities/helpers/utilities.helper';
import { Slot } from '@shared/interfaces';
import { domProperty } from '@utilities/directives/dom-property-directive';
import { registerDirective } from '@utilities/helpers/directive.helper';

registerDirective(domProperty);
type InputVariantType = 'normal' | 'number' | 'option' | 'password' | 'CipherInput' | 'phone';
export interface IInputProps extends Omit<IBaseComponentProps, 'ref'>, JSX.InputHTMLAttributes<HTMLInputElement> {
  nativeProps?: JSX.InputHTMLAttributes<HTMLInputElement>;
  /**
   * 類似 Placeholder 但會有動畫轉換為 Legend
   */
  legendI18nKey?: I18nKey;
  /** input default placeholder, Legend可擇一使用 */
  placeholderI18nKey?: I18nKey;
  /** 最大可輸入字數長度 */
  maxLength?: number;
  /**
   * 根據 variant 決定整體 Layout 或樣式。
   * 新樣式需自行新增對應 variant
   */
  variant: InputVariantType;
  /**
   * 錯誤訊息
   */
  error?: string | boolean | null;
  /**
   * 獲得焦點之後呼叫的 callback
   */
  focusHandler?: (e: FocusEvent) => void;
  /**
   * 離開焦點之後呼叫的 callback
   */
  blurHandler?: (e: FocusEvent) => void;
  /**
   * 有進行修改後且離開焦點之後呼叫的 callback（同時也會觸發blur)
   */
  changeHandler?: (inputValue: string) => void;
  /** enter 按下 */
  keyPressHandler?: (e: KeyboardEvent) => void;
  /** 偵測開始中文打字到結束 */
  detectComposition?: (e: CompositionEvent) => void;

  /**
   * input修改值的 callback
   */
  inputHandler?: (inputValue: string) => void;
  /**
   * 針對 input 本體進行樣式微調
   */
  inputClasses?: string;
  /**
   * 針對 Legend 本體進行樣式微調
   */
  legendClasses?: string;
  /**
   * 針對 error 本體進行樣式微調
   */
  errorClasses?: string;
  /**
   * 在 Input 前新增元素。
   * Button, Icon, etc.
   */
  prepend?: Slot;
  /**
   * 在 Input 後新增元素。
   * Button, Icon, etc.
   */
  append?: Slot;
  /**
   * 與 useForm 綁定時需傳入的 callback
   */
  register?: (e: HTMLInputElement) => void;
  /**
   * 錯誤訊息
   */
  errorMsg?: string;
  /**
   * 與 useForm 綁定時需傳入的 callback
   */
  isHideInput?: boolean;
}

type Config = {
  inputAttr: JSX.InputHTMLAttributes<HTMLInputElement>;
  prepend?: Slot;
  append?: Slot;
};
const variants: Record<InputVariantType, Config> = {
  normal: {
    inputAttr: {
      type: 'text',
    },
  },
  number: {
    inputAttr: {
      type: 'number',
      inputMode: 'decimal',
      pattern: '[0-9.]*',
    },
  },
  option: {
    inputAttr: {
      type: 'text',
      readonly: true,
    },
    append: () => (
      <div class="flex items-center justify-center">
        <Picture src="/icon/arrow_down.svg" classes="h-4 w-4" alt="icon-arrow-down" />
      </div>
    ),
  },
  password: {
    inputAttr: {
      type: 'password',
    },
  },
  CipherInput: {
    inputAttr: {
      type: 'tel',
    },
  },
  phone: {
    inputAttr: {
      type: 'tel',
      inputMode: 'tel',
      pattern: '[0-9]*',
    },
  },
};

const handleKeyPress = (e: KeyboardEvent, keyPressHandler?: (e: KeyboardEvent) => void): void => {
  if (keyPressHandler) {
    keyPressHandler(e);
  }
};

const handleComposition = (e: CompositionEvent, detectComposition?: (e: CompositionEvent) => void): void => {
  if (detectComposition) {
    detectComposition(e);
  }
};

const Input = (props: IInputProps) => {
  let ref: HTMLInputElement | undefined;
  let containerRef: HTMLInputElement | undefined;
  const [hasValue, setHasValue] = createSignal(false);
  const [focus, setFocus] = createSignal(false);
  /**
   * 動態調整 Legend 的 top，使其置中
   */
  const [dynamicTop, setDynamicTop] = createSignal(16);

  const handleOnFocus = (e: FocusEvent): void => {
    if (!props.readonly) {
      setHasValue(true);
      setFocus(true);

      if (props?.focusHandler) {
        props.focusHandler(e);
      }
    }
  };

  const handleOnBlur = (e: FocusEvent): void => {
    setFocus(false);
    if (!ref?.value) {
      setHasValue(false);
    }

    if (props.blurHandler) {
      props.blurHandler(e);
    }
  };

  const handleOnInput = (e: InputEvent): void => {
    const target = e?.target as HTMLInputElement;
    if (props?.inputHandler) {
      props?.inputHandler(target?.value);
    }
  };

  const handleOnChange = (e: Event): void => {
    const target = e?.target as HTMLInputElement;

    if (target?.value) {
      setHasValue(true);
    } else {
      setHasValue(false);
    }

    if (props?.changeHandler) {
      props?.changeHandler(target?.value);
    }
  };

  const PseudoElement = ({ children }: Pick<IBaseComponentProps, 'children'>) => (
    <Show when={children}>
      <div class="item-center align-center flex self-center">{children}</div>
    </Show>
  );

  createEffect(
    on(
      () => props.nativeProps?.value,
      (value, previousValue) => {
        if (value !== previousValue) {
          setHasValue(!!value);
        }
      },
    ),
  );
  // special handling for controlled input in SolidJS https://github.com/solidjs/solid/discussions/416
  createEffect(
    on(
      () => props.nativeProps?.value,
      (value) => {
        // if value is provided and ref is not sync with value
        if (!isNullOrUndefined(value) && ref && String(ref.value) !== String(value)) {
          ref.value = String(value);
        }
      },
    ),
  );

  createEffect(() => {
    if (containerRef && ref) {
      setDynamicTop((containerRef.clientHeight - ref.clientHeight) / 2);
    }
  });

  onMount(() => {
    if (ref) {
      if (props.register) {
        props.register(ref);
      }
    }
  });

  return (
    <>
      <div
        ref={containerRef}
        class={formatClasses(
          'flex h-14 rounded-12 border px-4 pr-2_5 text-sm transition',
          {
            'border-black-6': !props.error,
            'border-red-1': !!props.error,
            'bg-black-5': props.disabled,
            'bg-layer-3': !props.disabled,
          },
          { 'border-primary whitespace-nowrap': focus() && !props.error },
          props.classes,
        )}>
        <PseudoElement>{props.prepend?.() ?? variants[props.variant].prepend?.()}</PseudoElement>
        <fieldset class="relative flex flex-1 cursor-pointer items-center" onClick={() => ref?.focus()}>
          <legend
            style={{
              top: `${dynamicTop()}px`,
            }}
            class={formatClasses(
              'pointer-events-none absolute text-black-4 transition-position ease-out',
              {
                '-top-0_25 -translate-x-[14.7%] scale-70': hasValue() && !!ref,
              },
              props.legendClasses,
            )}>
            {translate(props.legendI18nKey)}
          </legend>
          <Show when={props.errorMsg}>
            <span class="text-red-1 block truncate px-3_75 text-4_5 font-semibold">{props.errorMsg}</span>
          </Show>

          <Show when={!props.isHideInput}>
            <input
              ref={(el) => {
                ref = el;
                if (typeof props.ref === 'function') {
                  props.ref(el);
                }
              }}
              class={formatClasses(
                'w-full text-black-1 outline-none',
                {
                  'text-red-1': !!props.error,
                  'bg-black-5': props.disabled,
                },
                props?.inputClasses,
              )}
              maxLength={props.maxLength}
              disabled={props.disabled}
              placeholder={translate(props?.placeholderI18nKey ?? '')}
              onFocus={(e) => handleOnFocus(e)}
              onBlur={(e) => handleOnBlur(e)}
              onChange={(e) => handleOnChange(e)}
              onInput={(e) => handleOnInput(e)}
              {...variants[props.variant]?.inputAttr}
              onKeyPress={(e) => handleKeyPress(e, props.keyPressHandler)}
              onCompositionStart={(e) => handleComposition(e, props.detectComposition)}
              onCompositionUpdate={(e) => handleComposition(e, props.detectComposition)}
              onCompositionEnd={(e) => handleComposition(e, props.detectComposition)}
              {...props.nativeProps}
            />
          </Show>
        </fieldset>
        <PseudoElement>{props.append?.() ?? variants[props.variant].append?.()}</PseudoElement>
      </div>

      <Show when={!!props.error && typeof props.error === 'string'}>
        <div
          class={customTwMerge(
            'text-red-1 pointer-events-none relative h-auto text-xs leading-4_5',
            props?.errorClasses,
          )}>
          <div class='before:bg-red-1 flex items-center p-1_25 before:mr-2_5 before:inline-block before:h-1 before:w-1 before:rounded-10 before:content-[""]'>
            {props?.error}
          </div>
        </div>
      </Show>
    </>
  );
};

export default Input;
