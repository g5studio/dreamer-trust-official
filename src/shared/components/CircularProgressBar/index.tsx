import { IBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { formatClasses } from '@utilities/helpers/format.helper';
import { Show, createEffect, createSignal, mergeProps } from 'solid-js';
import { registerDirective } from '@utilities/helpers/directive.helper';
import { inView } from '@utilities/directives/in-view-directive';
import style from './index.module.scss';

registerDirective(inView);

type StrokeLinecap = 'butt' | 'round' | 'square';

interface ICircularProgressBarProps extends IBaseComponentProps {
  background?: boolean;
  backgroundPadding?: number;
  circleRatio?: number;
  classesMap?: {
    trail?: string;
    path?: string;
    text?: string;
    background?: string;
  };
  className?: string;
  counterClockwise?: boolean;
  maxValue?: number;
  minValue?: number;
  strokeWidth?: number;
  text?: string;
  value: number;
  disabled?: boolean;
  initialAnimation?: boolean;
  strokeLineCap?: StrokeLinecap;
}

function getDashStyle({
  counterClockwise,
  dashRatio,
  pathRadius,
}: {
  counterClockwise: boolean;
  dashRatio: number;
  pathRadius: number;
}) {
  const diameter = Math.PI * 2 * pathRadius;
  const gapLength = (1 - dashRatio) * diameter;

  return {
    // Have dash be full diameter, and gap be full diameter
    'stroke-dasharray': `${diameter}px ${diameter}px`,
    // Shift dash backward by gapLength, so gap starts appearing at correct distance
    'stroke-dashoffset': `${counterClockwise ? -gapLength : gapLength}px`,
  };
}

// SVG path description specifies how the path should be drawn
function getPathDescription({ pathRadius, counterClockwise }: { pathRadius: number; counterClockwise: boolean }) {
  const radius = pathRadius;
  const rotation = counterClockwise ? 1 : 0;

  // Move to center of canvas
  // Relative move to top canvas
  // Relative arc to bottom of canvas
  // Relative arc to top of canvas
  return `
      M 50,50
      m 0,-${radius}
      a ${radius},${radius} ${rotation} 1 1 0,${2 * radius}
      a ${radius},${radius} ${rotation} 1 1 0,-${2 * radius}
    `;
}

const CircularProgressBar = (props: ICircularProgressBarProps) => {
  const mergedProps = mergeProps(
    {
      background: false,
      backgroundPadding: 0,
      circleRatio: 1,
      classesMap: {
        trail: '',
        path: '',
        text: '',
        background: '',
      },
      counterClockwise: false,
      classes: '',
      maxValue: 100,
      minValue: 0,
      strokeWidth: 8,
      text: '',
      strokeLinecap: 'butt',
    },
    props,
  );

  // this is a valid use case of default value
  // eslint-disable-next-line solid/reactivity
  const [value, setValue] = createSignal(mergedProps.initialAnimation ? mergedProps.minValue : mergedProps.value);
  const [hasInView, setHasInView] = createSignal(false);

  const backgroundPadding = () => {
    if (mergedProps.background) {
      // Don't add padding if not displaying background
      return 0;
    }
    return mergedProps.backgroundPadding;
  };
  const pathRadius = () => {
    // The radius of the path is defined to be in the middle, so in order for the path to
    // fit perfectly inside the 100x100 viewBox, need to subtract half the strokeWidth
    return 50 - mergedProps.strokeWidth / 2 - backgroundPadding();
  };

  const pathRatio = () => {
    const boundedValue = Math.min(Math.max(value(), mergedProps.minValue), mergedProps.maxValue);
    return (boundedValue - mergedProps.minValue) / (mergedProps.maxValue - mergedProps.minValue);
  };

  createEffect(() => {
    if (hasInView() || !mergedProps.initialAnimation) {
      setValue(mergedProps.value);
    }
  });

  return (
    <div
      data-testid={props.testId}
      class={formatClasses(props.classes)}
      use:inView={{
        onEnter: () => setHasInView(true),
      }}>
      <div class="relative w-full h-full">
        <svg class="w-full align-middle" viewBox="0 0 100 100">
          <Show when={mergedProps.background}>
            <circle class={mergedProps.classesMap?.background} cx={50} cy={50} r={50} />
          </Show>
          <path
            class={formatClasses(
              'stroke-black-14',
              style['component-circular-progress-bar__trail'],
              mergedProps.classesMap?.trail,
            )}
            style={getDashStyle({
              pathRadius: pathRadius(),
              dashRatio: mergedProps.circleRatio,
              counterClockwise: mergedProps.counterClockwise,
            })}
            d={getPathDescription({
              pathRadius: pathRadius(),
              counterClockwise: mergedProps.counterClockwise,
            })}
            stroke-linecap={mergedProps.strokeLinecap as StrokeLinecap}
            stroke-width={mergedProps.strokeWidth}
            fill-opacity={0}
          />
          <Show when={!mergedProps.disabled}>
            <path
              class={formatClasses(
                'stroke-primary',
                style['component-circular-progress-bar__path'],
                mergedProps.classesMap?.path,
              )}
              style={getDashStyle({
                pathRadius: pathRadius(),
                dashRatio: pathRatio() * mergedProps.circleRatio,
                counterClockwise: mergedProps.counterClockwise,
              })}
              d={getPathDescription({
                pathRadius: pathRadius(),
                counterClockwise: mergedProps.counterClockwise,
              })}
              stroke-linecap={mergedProps.strokeLinecap as StrokeLinecap}
              stroke-width={mergedProps.strokeWidth}
              fill-opacity={0}
            />
          </Show>
          <Show when={mergedProps.text}>
            <text
              class={formatClasses(
                'text-lgx fill-primary',
                style['component-circular-progress-bar__text'],
                mergedProps.classesMap?.text,
              )}
              x="50"
              y="50">
              {mergedProps.text}
            </text>
          </Show>
        </svg>
        <Show when={props.children}>
          <div class="absolute w-full h-full mt-[-100%] flex flex-col items-center justify-center">
            {props.children}
          </div>
        </Show>
      </div>
    </div>
  );
};
export default CircularProgressBar;
