import { Breakpoint, CustomEventType } from '@shared/enums';

export const getBreakpointByWindowSize = (): Breakpoint =>
  window.innerWidth >= 1344 ? Breakpoint.XLarge : window.innerWidth >= 1024 ? Breakpoint.Large : Breakpoint.Middle;

export const openLink = (url: string, target?: '_blank' | '_parent' | '_self' | '_top') => {
  window.open(url, target);
};

export const replaceLink = (url: string) => {
  window.location.replace(url);
};

export const openLinkByCurrentPage = (url: string) => {
  window.location.href = url;
};

export const getWindow = (): Window => window ?? {};

export const scrollMainTo = (detail: ScrollToOptions) =>
  dispatchEvent(new CustomEvent(CustomEventType.ScrollTo, { detail }));

export const scrollToTop = () => scrollMainTo({ top: 0 });
