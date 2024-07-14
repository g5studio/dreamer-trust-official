import { OtpMode } from '@shared/enums';
import { startsWith } from './utilities.helper';

/**
 * check the input path match with url pattern or not
 * url pattern is a string with format: /path/:param1/:param2
 * @param path - the path to check
 * @param patternStr - the url pattern
 * @returns true if the path match with url pattern
 */
export function isPathMatchWithUrlPattern(path: string, patternStr: string) {
  const pathSegments = path.split('/');
  const patternSegments = patternStr.split('/');
  return (
    pathSegments.length === patternSegments.length &&
    pathSegments.every((pathSegment, index) => {
      const patternSegment = patternSegments[index];
      return startsWith(patternSegment, ':') || pathSegment === patternSegment;
    })
  );
}

/**
 * create a function to check the input path match with url pattern or not
 * @param patternStr - the url pattern
 * @returns a function to check the input path match with url pattern or not
 */
export const urlPatternMatchFactory = (patternStr: string) => (path: string) =>
  isPathMatchWithUrlPattern(path, patternStr);

export const isEmptyObject = (obj: unknown) => {
  return obj && Object.keys(obj).length === 0;
};

export const canUseOtp = (otpMode: OtpMode) => {
  return otpMode === OtpMode.Optional || otpMode === OtpMode.Enable;
};
