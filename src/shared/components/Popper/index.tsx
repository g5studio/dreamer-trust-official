import { IBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { formatClasses } from '@utilities/helpers/format.helper';
import { Show, mergeProps } from 'solid-js';
import { I18nKey } from '@shared/models/translation.model';
import { translate } from '@shared/hooks/use-translation';
import style from './index.module.scss';

export interface IPopperProps extends IBaseComponentProps {
  text: I18nKey;
  position?: 'top' | 'bottom';
  direction?: 'topBottom' | 'bottomTop';
  zIndex?: number;
  pointSize?: number;
  indicatorLength?: number;
  offsetY?: number;
  directionPathClasses?: string;
  dotClasses?: string;
  stickClasses?: string;
  textBoxClasses?: string;
}

const Popper = (props: IPopperProps) => {
  const mergedProps = mergeProps(
    {
      indicatorLength: 20,
      pointSize: 8,
      position: 'bottom',
      direction: 'bottomTop',
      offsetY: 0,
    },
    props,
  );
  const totalHeight = () => mergedProps.indicatorLength + mergedProps.pointSize / 2 + 40 + mergedProps.offsetY;
  return (
    <div
      data-testid={mergedProps.testId}
      class={formatClasses('absolute left-0 right-0 flex justify-center', mergedProps.classes)}
      style={{
        top: mergedProps.position === 'top' ? `${-totalHeight()}px` : undefined,
        bottom: mergedProps.position === 'bottom' ? `${-totalHeight()}px` : undefined,
      }}>
      <Show
        when={mergedProps.direction === 'topBottom'}
        fallback={
          <div class={formatClasses('flex flex-col items-center', mergedProps.directionPathClasses)}>
            <div
              class={formatClasses(
                'rounded-full bg-primary',
                mergedProps.dotClasses,
                style['component-popper__point-scale-up'],
              )}
              style={{ width: `${mergedProps.pointSize}px`, height: `${mergedProps.pointSize}px` }}
            />
            <div
              class={formatClasses(
                'w-0_5 bg-primary',
                mergedProps.stickClasses,
                style['component-popper__indicator-upward'],
              )}
              style={{ height: `${mergedProps.indicatorLength}px` }}
            />
            <div
              class={formatClasses(
                'inline-block self-start rounded-md bg-primary p-3 text-xs text-white',
                mergedProps.textBoxClasses,
                style['component-popper__text-open'],
              )}>
              <div class={formatClasses('w-max', style['component-popper__text-delay'])}>
                {translate(mergedProps.text)}
              </div>
            </div>
          </div>
        }>
        <div class={formatClasses('flex flex-col items-center', mergedProps.directionPathClasses)}>
          <div
            class={formatClasses(
              'inline-block self-start overflow-hidden whitespace-nowrap rounded-md bg-primary p-3 text-xs text-white',
              mergedProps.textBoxClasses,
              style['component-popper__text-open'],
            )}>
            <div class={formatClasses('w-max', style['component-popper__text-delay'])}>
              {translate(mergedProps.text)}
            </div>
          </div>
          <div
            class={formatClasses(
              'w-0_5 bg-primary',
              mergedProps.stickClasses,
              style['component-popper__indicator-downward'],
            )}
            style={{ height: `${mergedProps.indicatorLength}px` }}
          />
          <div
            class={formatClasses(
              'rounded-full bg-primary',
              mergedProps.dotClasses,
              style['component-popper__point-scale-up'],
            )}
            style={{ width: `${mergedProps.pointSize}px`, height: `${mergedProps.pointSize}px` }}
          />
        </div>
      </Show>
    </div>
  );
};
export default Popper;
