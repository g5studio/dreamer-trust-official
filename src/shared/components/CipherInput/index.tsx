import Input from '@shared/components/Input';
import { IBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { formatClasses } from '@utilities/helpers/format.helper';
import { onlyNumber } from '@utilities/helpers/validator.helper';
import { on, createEffect, createSignal, onCleanup } from 'solid-js';

export interface ICipherInputProps extends IBaseComponentProps {
  index: number;
  focusIndex: number;
  removeIndex: number;
  setFocusIndex: (index: number) => void;
  setRemoveIndex: (index: number) => void;
  onEmit: (value: string) => void;
  isLastInput: boolean;
  isHideMode: boolean;
  resetValue?: string;
  inputClasses?: string;
  hideByAsterisk?: boolean;
  isDelayHideMode?: boolean;
  isDisabled?: boolean;
}

const CipherInput = (props: ICipherInputProps) => {
  const [value, setValue] = createSignal<string>('');
  const [delayDisplayedValue, setDelayDisplayedValue] = createSignal<string>();
  let inputRef: HTMLInputElement | undefined;

  const valueDisplay = () => {
    if (props.isHideMode) {
      if (props.isDelayHideMode) {
        return delayDisplayedValue();
      }
      return value() ? (props.hideByAsterisk ? '*' : '•') : '';
    }
    return value();
  };

  let hideValueTimeoutId: NodeJS.Timeout;
  createEffect(() => {
    if (!props.isDelayHideMode) return;
    // When value() changes, immediately set the displayed value
    setDelayDisplayedValue(value());

    // Clear any existing timeout
    clearTimeout(hideValueTimeoutId);

    // Also start a timeout to change the displayed value after 0.3 second
    hideValueTimeoutId = setTimeout(() => {
      setDelayDisplayedValue(value() ? (props.hideByAsterisk ? '*' : '•') : '');
    }, 300);
  });

  onCleanup(() => {
    clearTimeout(hideValueTimeoutId);
  });

  createEffect(
    on(
      () => props.resetValue,
      () => {
        if (props.focusIndex !== -1) {
          setValue('');
          if (props.index === 0) {
            inputRef?.focus();
          }
        }
      },
    ),
  );

  const handleOnChanged = (targetValue: string) => {
    setValue(targetValue);
    if (onlyNumber(targetValue)) {
      const nextIndex = props.isLastInput ? props.index : props.index + 1;
      props.setFocusIndex(nextIndex);
      props.onEmit(targetValue);
    } else {
      props.onEmit('');
      setValue('');
    }
  };

  // backspace must be handled by keydown event, because it deletes the value in keydown not keyup
  // otherwise, we can't get the value of the input in the event
  const handleOnKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Backspace') {
      const prevIndex = props.index > 0 ? props.index - 1 : 0;
      if (value()) {
        props.setRemoveIndex(props.focusIndex);
      } else {
        props.setRemoveIndex(prevIndex);
        props.setFocusIndex(prevIndex);
      }
    }
  };

  createEffect(
    on(
      () => props.removeIndex,
      () => {
        if (props.removeIndex === props.index) {
          setValue('');
          props.onEmit('');
        }
      },
    ),
  );

  createEffect(() => {
    if (props.index === props.focusIndex) {
      inputRef?.focus();
    }
  });

  return (
    <Input
      nativeProps={{
        maxLength: 1,
        onKeyDown: (e) => handleOnKeyDown(e),
        autocomplete: 'off',
        style: { 'caret-color': 'transparent' },
        value: valueDisplay(),
        type: 'tel',
      }}
      inputHandler={(e) => handleOnChanged(e)}
      focusHandler={() => props.setFocusIndex(props.index)}
      ref={(element: HTMLInputElement) => {
        inputRef = element;
      }}
      variant="CipherInput"
      legendI18nKey=""
      classes={formatClasses('h-15 w-[20%] bg-black-6 px-0', props.classes)}
      inputClasses={formatClasses(
        'text-4 rounded-2_5 bg-black-6 text-center text-gray-800 outline-none focus:outline-none lg:rounded-10',
        props.inputClasses,
      )}
      isHideInput={props.isDisabled}
    />
  );
};
export default CipherInput;
