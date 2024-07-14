import { Breakpoint } from '@shared/enums';
import { getBreakpointByWindowSize } from '@utilities/helpers/window.helper';
import { createStore } from 'solid-js/store';

type WindowSize = {
  breakpoint: Breakpoint;
} & Pick<DOMRect, 'width'>;

const [windowSize, setWindowSize] = createStore<WindowSize>({
  breakpoint: getBreakpointByWindowSize(),
  width: window.innerWidth,
});

const onWindowResize = () => {
  setWindowSize({
    breakpoint: getBreakpointByWindowSize(),
    width: window.innerWidth,
  });
};

window.addEventListener('resize', onWindowResize);

export default windowSize;

/**
 * @description < 600px
 */
export const isMobile = () => windowSize.breakpoint === Breakpoint.Middle;
/**
 * @description > 600px, < 1024px
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
/**
 * @description > 1200px
 */
export const isLargePC = () => windowSize.width >= 1200;
/**
 * @description > 1440px
 */
export const isXLargePC = () => windowSize.width >= 1440;
