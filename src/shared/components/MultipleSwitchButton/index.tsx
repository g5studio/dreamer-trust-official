import { translate } from '@shared/hooks/use-translation';
import { IBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { I18nKey } from '@shared/models/translation.model';
import { formatClasses } from '@utilities/helpers/format.helper';
import { For, JSXElement, Setter, Show, createEffect, createSignal, onMount } from 'solid-js';

export type MultipleSwitchButtonOption<Value = string> = {
  value: Value;
  i18nKey: I18nKey;
  childrenSlot?: (value: Value, isActive: boolean) => JSXElement;
} & Omit<IBaseComponentProps, 'childrenSlot'>;

interface IMultipleSwitchButtonProps<Value> extends Omit<IBaseComponentProps, 'ref'> {
  defaultValue?: Value;
  options: MultipleSwitchButtonOption<Value>[];
  /**
   * @default 48
   */
  optionWidth?: number;
  ref?: Setter<IMultipleSwitchButton<Value> | undefined>;
  onChange?: ArrowFn<Value>;
  onClick?: ArrowFn<Value>;
}

export interface IMultipleSwitchButton<Value> {
  switchTo: ArrowFn<Value>;
}

/**
 * 多選項切換元件
 * @external https://www.figma.com/design/ZFLZvalvGF6zWm5ng6cd70/7.%E6%88%91%E7%9A%84-RWD?node-id=5823-13340&t=E7vfO0dnGafjHfjo-4
 */
const MultipleSwitchButton = <Value extends string>(props: IMultipleSwitchButtonProps<Value>) => {
  const [current, setCurrent] = createSignal<string | undefined>(props.defaultValue);

  onMount(() => {
    props.ref?.({
      switchTo: (value) => {
        setCurrent(value as string);
      },
    } as IMultipleSwitchButton<Value>);
  });

  const isActive = (value: Value): boolean => current() === value;
  const activeIndex = () => props.options.findIndex(({ value }) => value === current());

  const width = () => props.optionWidth ?? 48;
  const translateOffset = () => activeIndex() * width() + 4 * activeIndex();

  createEffect(() => {
    props.onChange?.(current() as Value);
  });

  return (
    <div data-testid={props.testId} class={formatClasses('relative h-8 rounded-20 bg-layer-7 p-1', props.classes)}>
      <div class="flex h-full w-full flex-row items-center space-x-1">
        <For each={props.options}>
          {(option) => (
            <button
              onClick={() => {
                props.onClick?.(option.value);
                setCurrent(option.value as string);
              }}
              style={{
                width: `${width()}px`,
              }}
              class={formatClasses('h-6 overflow-auto text-ellipsis', option.classes)}>
              <Show
                when={!option.childrenSlot}
                fallback={<>{option.childrenSlot!(option.value, isActive(option.value))}</>}>
                <small
                  class={formatClasses(
                    'relative z-cover line-clamp-1 flex h-4 h-full w-full items-center justify-center px-3 py-1',
                    {
                      'font-semibold text-white': isActive(option.value),
                    },
                  )}>
                  {translate(option.i18nKey)}
                </small>
              </Show>
            </button>
          )}
        </For>
      </div>
      <Show when={activeIndex() >= 0}>
        <div
          style={{
            width: `${width()}px`,
            transition: '0.25s',
            transform: `translate(${translateOffset()}px, -50%)`,
          }}
          class={formatClasses(
            'absolute-position-center left-1 z-normal m-0 box-content h-4 rounded-20 bg-primary py-1',
          )}
        />
      </Show>
    </div>
  );
};
export default MultipleSwitchButton;
