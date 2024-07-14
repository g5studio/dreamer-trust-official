import { IBaseComponentProps, ICustomEventWithHammerInput } from '@shared/interfaces/base-component.interface';
import { customTwMerge, formatClasses } from '@utilities/helpers/format.helper';
import { For, batch, createEffect, createSignal } from 'solid-js';
import { translate } from '@shared/hooks/use-translation';
import { registerDirective } from '@utilities/helpers/directive.helper';
import { pan } from '@utilities/directives/pan-directive';
import { tap } from '@utilities/directives/tap-directive';
import { I18nKey } from '@shared/models/translation.model';
import style from './index.module.scss';

registerDirective(pan);
registerDirective(tap);

export interface IWheelOption {
  label: I18nKey;
  value: string | number;
}

export interface IWheelProps extends IBaseComponentProps {
  options: IWheelOption[];
  defaultSelectedValue?: string | number;
  selectedValue?: string | number;
  onChange: (value: string | number) => void;
}

/**
 * Wheel is a mobile friendly component that allows the user to select a value from a list of options via a spinning wheel.
 */
const Wheel = (props: IWheelProps) => {
  const offsetY = (index: number) => {
    // space unit to px conversion
    const itemHeight = 8.5 * 4;
    return itemHeight * index;
  };
  const [selectedValue, setSelectedValue] = createSignal<string | number | undefined>(props.defaultSelectedValue);
  const [isDragging, setIsDragging] = createSignal<boolean>(false);
  const [draggingY, setDraggingY] = createSignal<number>(0);
  const selectedIndex = () =>
    Math.max(
      props.options.findIndex((item) => item.value === selectedValue()),
      0,
    );
  const translateY = () => {
    if (isDragging()) {
      return -draggingY();
    }
    return -offsetY(selectedIndex());
  };

  // update to selected value of props, if it is changed
  createEffect(() => {
    if (props.selectedValue !== undefined) {
      setSelectedValue(props.selectedValue);
    }
  });

  let currentOffsetY = 0;

  const onPanStart = () => {
    currentOffsetY = offsetY(selectedIndex());
    batch(() => {
      setIsDragging(true);
      setDraggingY(currentOffsetY);
    });
  };

  const onPanMove = (e: ICustomEventWithHammerInput) => {
    const newOffsetY = currentOffsetY - e.detail.deltaY;
    setDraggingY(newOffsetY);
  };

  const onPanEnd = (e: ICustomEventWithHammerInput) => {
    const { velocityY } = e.detail;
    const finalY = currentOffsetY - e.detail.deltaY - velocityY * 100;
    const newSelectedIndex = Math.max(Math.min(Math.round(finalY / 34), props.options.length - 1), 0);
    const newSelectedValue = props.options[newSelectedIndex].value ?? '';
    batch(() => {
      setIsDragging(false);
      if (newSelectedValue !== selectedValue()) {
        setSelectedValue(newSelectedValue);
        props.onChange(newSelectedValue);
      }
    });
  };

  const onTapOption = (value: string | number) => {
    if (value !== selectedValue()) {
      setSelectedValue(value);
      props.onChange(value);
    }
  };

  return (
    // this element should vertically and horizontally center its children
    <div
      data-testid={props.testId}
      class={customTwMerge(
        'relative h-59_5 w-full cursor-pointer overflow-hidden bg-layer-3 text-center',
        props.classes,
      )}
      use:pan={{
        direction: Hammer.DIRECTION_VERTICAL,
      }}
      on:panstart={onPanStart}
      on:panmove={onPanMove}
      on:pancancel={onPanEnd}
      on:panend={onPanEnd}>
      {/* wheel */}
      <div
        class={formatClasses('absolute w-full text-center text-black-3', {
          'transition-all duration-300': !isDragging(),
        })}
        style={{
          top: 'calc((100% - 2.125rem)/2)',
          transform: `translateY(${translateY()}px)`,
        }}>
        <For each={props.options}>
          {(item) => (
            <div class="h-8_5 leading-8_5" use:tap={{}} on:tap={() => onTapOption(item.value)}>
              {translate(item.label)}
            </div>
          )}
        </For>
      </div>
      {/* mask for blur effect, it use gradient background to do this */}
      <div
        class={customTwMerge(
          'mh-auto pointer-events-none absolute left-0 top-0 h-full w-full',
          style['component-wheel__mask'],
        )}
      />
      {/* indicator showing selected value by using top border and bottom border */}
      <div
        class={'pointer-events-none absolute h-8_5 w-full border-b border-t border-black-5'}
        style={{ top: 'calc((100% - 2.125rem)/2)' }}
      />
    </div>
  );
};
export default Wheel;
