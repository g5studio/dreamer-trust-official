import { HttpClientType, generateHttpClient } from './http-client';
import { getHeaderWithPCidentifier } from './interceptors';

export const platformClient = generateHttpClient({ type: HttpClientType.Platform, guestMode: false });
export const platformGuestClient = generateHttpClient({ type: HttpClientType.Platform, guestMode: true });
/**
 * @description token相關api需使用此client辨識用戶設備
 * @external https://innotech.atlassian.net/browse/IN-37135
 */
export const platformIdentityClient = generateHttpClient({
  type: HttpClientType.Platform,
  guestMode: false,
  ...getHeaderWithPCidentifier(),
});

/**
 * @description token相關api需使用此client辨識用戶設備
 * @external https://innotech.atlassian.net/browse/IN-37135
 */
export const platformIdentityGuestClient = generateHttpClient({
  type: HttpClientType.Platform,
  guestMode: true,
  ...getHeaderWithPCidentifier(),
});
