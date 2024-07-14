import { JSXElement, Show, createSignal, mergeProps } from 'solid-js';
import { IBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { formatClasses } from '@utilities/helpers/format.helper';
import { DomPropertyCbParams, domProperty } from '@utilities/directives/dom-property-directive';
import { registerDirective } from '@utilities/helpers/directive.helper';
import { clickOutside } from '@utilities/directives/click-outside-directive';

registerDirective(domProperty);
registerDirective(clickOutside);

interface ITooltipProps extends IBaseComponentProps {
  displayMode?: TooltipDisplayMode;
  position?: TooltipPosition;
  theme?: TooltipTheme;
  contentClasses?: string;
  show?: boolean;
  contentSlot?: () => JSXElement;
  setTooltipHeight?: (value: number) => void;
}

export enum TooltipPosition {
  TOP_LEFT = 'TOP_LEFT',
  TOP_CENTER = 'TOP_CENTER',
  TOP_RIGHT = 'TOP_RIGHT',
  BOTTOM_LEFT = 'BOTTOM_LEFT',
  BOTTOM_CENTER = 'BOTTOM_CENTER',
  BOTTOM_RIGHT = 'BOTTOM_RIGHT',
  LEFT_TOP = 'LEFT_TOP',
  LEFT_CENTER = 'LEFT_CENTER',
  LEFT_BOTTOM = 'LEFT_BOTTOM',
  RIGHT_TOP = 'RIGHT_TOP',
  RIGHT_CENTER = 'RIGHT_CENTER',
  RIGHT_BOTTOM = 'RIGHT_BOTTOM',
}

export enum TooltipDisplayMode {
  Hover = 'HOVER',
  Click = 'CLICK',
}

export enum TooltipTheme {
  Dark = 'DARK',
  Light = 'Light',
}

const defaultDisplayMode = TooltipDisplayMode.Click;
const defaultPosition = TooltipPosition.TOP_LEFT;
const defaultTheme = TooltipTheme.Dark;
const paddingOffset = 0.2;

const Tooltip = (props: ITooltipProps) => {
  const mergedProps = mergeProps(
    { displayMode: defaultDisplayMode, position: defaultPosition, theme: defaultTheme },
    props,
  );

  const [isShowContent, setIsShowContent] = createSignal<boolean>(false);
  const [childrenHeight, setChildrenHeight] = createSignal<number>(0);
  const [childrenWidth, setChildrenWidth] = createSignal<number>(0);
  const [tooltipWidth, setTooltipWidth] = createSignal<number>(0);
  const [tooltipHeight, setTooltipHeight] = createSignal<number>(0);

  const handleClick = () =>
    mergedProps.displayMode === TooltipDisplayMode.Click &&
    (mergedProps.show ?? true) &&
    setIsShowContent(!isShowContent());
  const handleMouseEnter = () => mergedProps.displayMode === TooltipDisplayMode.Hover && setIsShowContent(true);
  const handleMouseLeave = () => mergedProps.displayMode === TooltipDisplayMode.Hover && setIsShowContent(false);
  const position = () => mergedProps.position;

  const positionConditions = {
    isTop: () =>
      position() === TooltipPosition.TOP_LEFT ||
      position() === TooltipPosition.TOP_CENTER ||
      position() === TooltipPosition.TOP_RIGHT,
    isBottom: () =>
      position() === TooltipPosition.BOTTOM_LEFT ||
      position() === TooltipPosition.BOTTOM_CENTER ||
      position() === TooltipPosition.BOTTOM_RIGHT,
    isLeft: () =>
      position() === TooltipPosition.LEFT_TOP ||
      position() === TooltipPosition.LEFT_CENTER ||
      position() === TooltipPosition.LEFT_BOTTOM,
    isRight: () =>
      position() === TooltipPosition.RIGHT_TOP ||
      position() === TooltipPosition.RIGHT_CENTER ||
      position() === TooltipPosition.RIGHT_BOTTOM,
    isVertical: () =>
      position() === TooltipPosition.TOP_LEFT ||
      position() === TooltipPosition.TOP_CENTER ||
      position() === TooltipPosition.TOP_RIGHT ||
      position() === TooltipPosition.BOTTOM_LEFT ||
      position() === TooltipPosition.BOTTOM_CENTER ||
      position() === TooltipPosition.BOTTOM_RIGHT,
    isHorizontal: () =>
      position() === TooltipPosition.LEFT_TOP ||
      position() === TooltipPosition.LEFT_CENTER ||
      position() === TooltipPosition.LEFT_BOTTOM ||
      position() === TooltipPosition.RIGHT_TOP ||
      position() === TooltipPosition.RIGHT_CENTER ||
      position() === TooltipPosition.RIGHT_BOTTOM,
    isJustifyStart: () => position() === TooltipPosition.TOP_LEFT || position() === TooltipPosition.BOTTOM_LEFT,
    isJustifyCenter: () => position() === TooltipPosition.TOP_CENTER || position() === TooltipPosition.BOTTOM_CENTER,
    isJustifyEnd: () => position() === TooltipPosition.TOP_RIGHT || position() === TooltipPosition.BOTTOM_RIGHT,
    isItemsStart: () => position() === TooltipPosition.LEFT_TOP || position() === TooltipPosition.RIGHT_TOP,
    isItemsCenter: () => position() === TooltipPosition.LEFT_CENTER || position() === TooltipPosition.RIGHT_CENTER,
    isItemsEnd: () => position() === TooltipPosition.LEFT_BOTTOM || position() === TooltipPosition.RIGHT_BOTTOM,
  };

  const contentPosition = () => {
    const getPosition = ({ prefix, suffix, offset }: { prefix: string; suffix?: string; offset: number }) => ({
      content: {
        [prefix]: `${offset}px`,
        ...(suffix && { [suffix]: '0' }),
      },
    });

    const getVerticalPosition = (prefix: string, suffix: string) => {
      return getPosition({ prefix, suffix, offset: -tooltipHeight() });
    };

    const getHorizontalPosition = (prefix: string, suffix: string) => {
      return getPosition({ prefix, suffix, offset: -tooltipWidth() });
    };

    const getCenterPosition = (prefix: string) => {
      const direction = positionConditions.isVertical() ? 'left' : 'top';
      const centerOffset = positionConditions.isVertical() ? tooltipWidth() : tooltipHeight();
      const offset = positionConditions.isVertical() ? -tooltipHeight() : -tooltipWidth();

      return {
        content: {
          ...getPosition({ prefix, offset }).content,
          [direction]: `calc(50% - ${centerOffset / 2}px)`,
        },
      };
    };

    const [prefix, suffix] = mergedProps.position.split('_').map((str) => str.toLocaleLowerCase());

    switch (mergedProps.position) {
      case TooltipPosition.TOP_CENTER:
      case TooltipPosition.BOTTOM_CENTER:
      case TooltipPosition.LEFT_CENTER:
      case TooltipPosition.RIGHT_CENTER:
        return getCenterPosition(prefix);
      case TooltipPosition.LEFT_TOP:
      case TooltipPosition.LEFT_BOTTOM:
      case TooltipPosition.RIGHT_TOP:
      case TooltipPosition.RIGHT_BOTTOM:
        return getHorizontalPosition(prefix, suffix);
      default:
        return getVerticalPosition(prefix, suffix);
    }
  };

  const arrowStyle = () => {
    const { isVertical } = positionConditions;
    const value = `${(isVertical() ? childrenWidth() : childrenHeight()) * paddingOffset}px`;
    return {
      'padding-left': isVertical() ? value : undefined,
      'padding-right': isVertical() ? value : undefined,
      'padding-top': !isVertical() ? value : undefined,
      'padding-bottom': !isVertical() ? value : undefined,
    };
  };

  return (
    <div
      data-testid={mergedProps.testId}
      class={formatClasses('relative cursor-pointer', mergedProps.classes)}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      use:clickOutside={() => setIsShowContent(false)}>
      <Show when={isShowContent()}>
        <div
          class={formatClasses('absolute z-normal flex', {
            'flex-col': positionConditions.isVertical(),
            'flex-col-reverse': positionConditions.isBottom(),
            'flex-row-reverse': positionConditions.isRight(),
          })}
          style={contentPosition().content}
          use:domProperty={{
            keyList: ['domRectWidth', 'domRectHeight'],
            cb: (values: DomPropertyCbParams<['domRectWidth', 'domRectHeight']>) => {
              const [width, height] = values;
              mergedProps.setTooltipHeight?.(height);
              setTooltipWidth(width);
              setTooltipHeight(height);
            },
          }}>
          <div
            class={formatClasses(
              'w-max',
              {
                'bg-black-1 ': mergedProps.theme === TooltipTheme.Dark,
                'border-0_25 border-black-1 bg-layer-3': mergedProps.theme === TooltipTheme.Light,
              },
              mergedProps.contentClasses,
            )}>
            {mergedProps.contentSlot?.()}
          </div>

          <div
            class={formatClasses('flex', {
              'justify-start': positionConditions.isJustifyStart(),
              'justify-center': positionConditions.isJustifyCenter(),
              'justify-end': positionConditions.isJustifyEnd(),
              'items-start': positionConditions.isItemsStart(),
              'items-center': positionConditions.isItemsCenter(),
              'items-end': positionConditions.isItemsEnd(),
            })}
            style={arrowStyle()}>
            <div
              class={formatClasses(
                'relative h-0 w-0 border-4 border-transparent',
                'after:absolute after:h-0 after:w-0 after:border-0_75 after:border-transparent after:content-[""]',
                {
                  'rotate-180': positionConditions.isRight() || positionConditions.isBottom(),
                  'border-t-black-1': positionConditions.isVertical(),
                  'border-l-black-1': positionConditions.isHorizontal(),
                  'after:-left-0_75 after:-top-1_25 after:border-t-white':
                    positionConditions.isVertical() && mergedProps.theme === TooltipTheme.Light,
                  'after:-left-1_25 after:-top-0_75 after:border-l-white':
                    positionConditions.isHorizontal() && mergedProps.theme === TooltipTheme.Light,
                },
              )}
            />
          </div>
        </div>
      </Show>
      <Show when={mergedProps.children}>
        <div
          use:domProperty={{
            keyList: ['domRectWidth', 'domRectHeight'],
            cb: (values: DomPropertyCbParams<['domRectWidth', 'domRectHeight']>) => {
              const [width, height] = values;
              setChildrenWidth(width);
              setChildrenHeight(height);
            },
          }}>
          {mergedProps.children}
        </div>
      </Show>
    </div>
  );
};
export default Tooltip;
