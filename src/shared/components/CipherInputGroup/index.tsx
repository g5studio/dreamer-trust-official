import { IBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { batch, createEffect, createSignal, For, on, onCleanup, onMount, Setter } from 'solid-js';
import { onlyNumber } from '@utilities/helpers/validator.helper';
import { formatClasses } from '@utilities/helpers/format.helper';
import { isDeleteOrBackspaceKey } from '@utilities/helpers/keyboard.helper';
import { createStore } from 'solid-js/store';
import Input from '../Input';

export interface ICipherInputGroupProps extends IBaseComponentProps {
  defaultTotalInput: number;
  isHideMode: boolean;
  onFinished?: (finish: boolean, password?: string) => void;
  containerClasses?: string;
  inputClasses?: string;
  hideByAsterisk?: boolean;
  isDelayHideMode?: boolean;
  isDisabled?: boolean;
  ref?: Setter<ICipherInputGroup | undefined>;
}

/**
 * @description use array-like for initial cipher password value
 */
const getInitialPasswordArray = (digit: number) => Array(digit).map(() => '');

/**
 * @description transform password array to string and remove all white spaces
 */
const getTrimmedPassword = (password: string[]) => password.join('').replace(/\s/g, '');

/**
 * @description get display value with mask or not
 */
const getDisplayValue = ({
  pinValue,
  hideByAsterisk,
  isMasked,
}: {
  pinValue: () => string;
  hideByAsterisk: () => boolean;
  isMasked: () => boolean;
}) => {
  const hiddenSymbol = hideByAsterisk() ? '*' : '•';
  // 如果value不是數字，則不顯示任何值
  if (!onlyNumber(pinValue())) return '';
  return isMasked() ? hiddenSymbol : pinValue();
};

const onKeyDown = (e: KeyboardEvent) => {
  if (!isDeleteOrBackspaceKey(e.key) && !onlyNumber(e.key)) {
    e.preventDefault();
  }
};

/**
 * @description 處理delay masking logic
 */
const useDelayMaskValue = (accessor: () => string) => {
  let hideValueTimeoutId: NodeJS.Timeout;
  const [isDelayMasked, setIsDelayMasked] = createSignal(false);
  const delayTime = 300;

  const toggleMask = () => {
    // Clear any existing timeout
    clearTimeout(hideValueTimeoutId);
    // when input changed, show the value without mask
    setIsDelayMasked(false);
    // Also start a timeout to mask value after 0.3 second
    hideValueTimeoutId = setTimeout(() => {
      setIsDelayMasked(true);
    }, delayTime);
  };

  createEffect(on(accessor, toggleMask));

  onCleanup(() => {
    clearTimeout(hideValueTimeoutId);
  });

  return {
    isDelayMasked,
  };
};

export interface ICipherInputGroup {
  /**
   * @description 重新初始化state value
   */
  resetValue: () => void;
}

const CipherInputGroup = (props: ICipherInputGroupProps) => {
  const [pinArrayValue, setPinArrayValue] = createStore<string[]>(getInitialPasswordArray(props.defaultTotalInput));
  const inputRefs: Array<HTMLInputElement | undefined> = [];

  // 同步state value至外部父層元件
  createEffect(() => {
    if (props.onFinished) {
      const passwordVal = getTrimmedPassword(pinArrayValue);
      const isFinished = passwordVal.length === props.defaultTotalInput;
      props.onFinished(isFinished, passwordVal);
    }
  });

  onMount(() => {
    props.ref?.({
      // 提供resetValue讓父層使用, 重新初始化state value
      resetValue: () => {
        setPinArrayValue(getInitialPasswordArray(props.defaultTotalInput));
      },
    });
  });

  // 處理backspace及delete, 清空input value 及 focus當前或上一個input
  const handleOnKeyUp = (e: KeyboardEvent, index: number) => {
    // 檢查當前input是否有值
    if (isDeleteOrBackspaceKey(e.key)) {
      const isCurrentHasValue = onlyNumber(pinArrayValue[index]);
      // 如果當前input沒有值，則focus上一個input 並清空其值
      const isClearPrevInput = index > 0 && !isCurrentHasValue;
      const prevIndex = index - 1;
      if (isClearPrevInput) {
        inputRefs[prevIndex]?.focus();
      }

      setPinArrayValue((prev) => {
        const newArray = [...prev];
        // 清空當前input
        newArray[index] = '';
        // 如果當前input沒有值，則清空上一個input
        if (isClearPrevInput) {
          newArray[prevIndex] = '';
        }
        return newArray;
      });
    }
  };

  /**
   * @description 處理input value change, update state 及 focus下一個input
   */
  const onChange = (value: string, index: number) => {
    const existing = pinArrayValue[index];
    // 只取數字, 防 * 或其他字元
    const numberValue = value.replace(/\D/g, '');
    // 如input值多於一個, 找取第一個非現在state的值, 用以更新state value
    // 這個目的是 focus 當前input 修改時能直接修改當前value
    const targetValue = numberValue.length > 1 ? [...numberValue].find((v) => v !== existing) || '' : numberValue;
    // 只接受數字
    if (onlyNumber(targetValue)) {
      // 更新對應input位置的state value
      setPinArrayValue((prev) => {
        const newArray = [...prev];
        newArray[index] = targetValue;
        return newArray;
      });

      // 如果仍有下一個input，則focus下一個input
      if (index < pinArrayValue.length - 1) {
        inputRefs[index + 1]?.focus();
      }
    }
  };

  /**
   * @description 處理paste事件，將貼上的值填入對應的input
   */
  const onPaste = (e: ClipboardEvent) => {
    e.preventDefault();
    // 拿取copy的值
    const paste = e.clipboardData?.getData('text').split('');
    // 檢查是否為數字
    if (paste?.every((item) => onlyNumber(item))) {
      // 更新對應input位置的state value
      setPinArrayValue((prev) => {
        const newInputValue = [...prev];
        for (let i = 0; i < paste.length; i++) {
          if (i < prev.length) {
            newInputValue[i] = paste[i];
          }
        }
        return newInputValue;
      });
    }
  };

  return (
    <>
      <For each={getInitialPasswordArray(props.defaultTotalInput)} fallback={<></>}>
        {(_, index) => {
          const [refreshFlag, setRefreshFlag] = createSignal(false);
          const displayValAccessor = () => {
            // 檢查refreshFlag, 用以更新getDisplayValue
            refreshFlag();
            return pinArrayValue[index()];
          };
          const { isDelayMasked } = useDelayMaskValue(displayValAccessor);
          return (
            <Input
              nativeProps={{
                onKeyDown,
                onKeyUp: (e) => handleOnKeyUp(e, index()),
                onPaste,
                autocomplete: 'off',
                style: { 'caret-color': 'transparent' },
                value: getDisplayValue({
                  pinValue: displayValAccessor,
                  hideByAsterisk: () => !!props.hideByAsterisk,
                  isMasked: () => props.isHideMode && (!props.isDelayHideMode || isDelayMasked()),
                }),
                type: 'tel',
              }}
              inputHandler={(value) => {
                batch(() => {
                  onChange(value, index());
                  if (value) {
                    // 觸發refreshFlag, 用以更新getDisplayValue
                    setRefreshFlag((prev) => !prev);
                  }
                });
              }}
              ref={(element: HTMLInputElement) => {
                inputRefs[index()] = element;
              }}
              variant="CipherInput"
              legendI18nKey=""
              classes={formatClasses('h-15 w-[20%] bg-black-6 px-0 lg:max-w-11_5', props.containerClasses)}
              inputClasses={formatClasses(
                'text-4 rounded-2_5 bg-black-6 text-center text-gray-800 outline-none focus:outline-none lg:rounded-10',
                props.inputClasses,
              )}
              isHideInput={props.isDisabled}
            />
          );
        }}
      </For>
    </>
  );
};
export default CipherInputGroup;
