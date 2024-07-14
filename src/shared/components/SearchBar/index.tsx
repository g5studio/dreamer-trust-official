import { IBaseComponentProps } from '@shared/interfaces';
import SearchIcon from '@utilities/svg-components/SearchIcon';
import { CloseIcon } from '@utilities/svg-components';
import { Show, createSignal, onCleanup } from 'solid-js';
import navigator, { navigate } from '@shared/hooks/use-navigator';
import { formatPurePathname } from '@utilities/helpers/format.helper';
import Input from '../Input';

interface IProps extends IBaseComponentProps {
  defaultValue: string;
  placeholder?: string;
  onChange: (value: string) => void;
  onClear?: () => void;
}

const DEBOUNCE_TIME = 500;

const SearchBar = (props: IProps) => {
  const [showCloseBtn, setShowCloseBtn] = createSignal<boolean>(!!props.defaultValue);

  let inputRef: HTMLInputElement | undefined;
  let timer: NodeJS.Timeout;

  const handleInputDelay = (value: string) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      props.onChange(value);
      if (!value) {
        navigate(formatPurePathname(navigator.pathname), { replace: true });
      }
    }, DEBOUNCE_TIME);
  };

  const handleReset = () => {
    if (inputRef?.value) {
      clearTimeout(timer);
      inputRef.value = '';
      props.onClear?.();
      setShowCloseBtn(false);
      navigate(formatPurePathname(navigator.pathname), { replace: true, scroll: false });
    }
  };

  onCleanup(() => clearTimeout(timer));

  return (
    <div class="flex h-9 w-full rounded-20 bg-layer-1 p-2">
      <SearchIcon width="20" height="20" />
      <Input
        ref={inputRef}
        variant="normal"
        classes="mx-2 flex h-5 flex-1 border-none px-0"
        inputClasses="bg-layer-1 focus:outline-none"
        placeholderI18nKey={props.placeholder}
        nativeProps={{
          value: props.defaultValue,
          onInput: (e) => {
            setShowCloseBtn(!!e.target.value);
            handleInputDelay(e.target.value);
          },
        }}
      />
      <Show when={props.onClear && showCloseBtn()}>
        <button
          onClick={handleReset}
          class="flex h-4_5 w-4_5 cursor-pointer items-center justify-center rounded-full bg-black-4">
          <CloseIcon fillClasses="fill-white" classes="h-2 w-2" />
        </button>
      </Show>
    </div>
  );
};

export default SearchBar;
