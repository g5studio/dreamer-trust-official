import { FbEvent } from '@shared/enums/fb.enum';

interface IAction {
  type: FbEvent;
  payload?: unknown;
  /**
   * doesn't has any effect for now
   */
  isProxy?: boolean;
}

export const fbPixelInit = (name: string) => {
  const url = window.location.href;
  const normalizedName = name.replace(/[[\]]/g, '\\$&');
  const regex = new RegExp(`[?&]${normalizedName}(=([^&#]*)|&|#|$)`);
  const results = regex.exec(url);
  if (!results) {
    return null;
  }
  if (!results[2]) {
    return '';
  }
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};

/**
 * https://docs.google.com/spreadsheets/d/1GbuxYRkHfPv8Mk1PmWPV0yEhobNI3LdRv7dMLYAt1t4/edit#gid=1976540555
 */
export const fbEvent = (action: IAction) => {
  if (window.fbq) {
    window.fbq('track', action.type, action.payload);
  }
};
