import { Breakpoint } from '@shared/enums';
import { getBreakpointByWindowSize } from '@utilities/helpers/window.helper';
import { createStore } from 'solid-js/store';

type WindowSize = {
  breakpoint: Breakpoint;
} & Pick<DOMRect, 'width' | 'height'>;

const [windowSize, setWindowSize] = createStore<WindowSize>({
  breakpoint: getBreakpointByWindowSize(),
  width: window.innerWidth,
  height: window.innerHeight,
});

const onWindowResize = () => {
  setWindowSize({
    breakpoint: getBreakpointByWindowSize(),
    width: window.innerWidth,
    height: window.innerHeight,
  });
};

window.addEventListener('resize', onWindowResize);

export default windowSize;

/**
 * @description <= 393px
 */
export const isSmallMobile = () => windowSize.width <= 393;

/**
 * @description <= 768px
 */
export const isMobile = () => windowSize.breakpoint === Breakpoint.Middle;
/**
 * @description > 768x, <= 1024px
 */
export const isTablet = () => windowSize.breakpoint === Breakpoint.Large;
/**
 * @description > 900px
 */
export const isPad = () => isTablet() && windowSize.width >= 900;
/**
 * @description > 1024px
 */
export const isPC = () => windowSize.breakpoint === Breakpoint.XLarge;

export const isLargePC = () => windowSize.width >= 1344;
