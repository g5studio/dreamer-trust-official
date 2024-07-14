import { HttpClientHeaderItem } from '@shared/enums';
import { estGmt } from '@shared/constants/time.constants';
import { HttpClientType, generateHttpClient } from './http-client';

export const sportClient = generateHttpClient({ type: HttpClientType.Sport, guestMode: false });
/**
 * sport http client which always set timezone as GMT-4
 * @description part of sport api need to set timezone as server timezone (UTC-4) , so need add a new http client for these apis
 * @external https://innotech.atlassian.net/browse/PRF-617
 */
export const sportServerClient = generateHttpClient({
  type: HttpClientType.Sport,
  guestMode: false,
  header: { [HttpClientHeaderItem.Timezone]: estGmt },
});
export const sportServerGuestClient = generateHttpClient({
  type: HttpClientType.Sport,
  guestMode: true,
  header: { [HttpClientHeaderItem.Timezone]: estGmt },
});
export const sportGuestClient = generateHttpClient({ type: HttpClientType.Sport, guestMode: true });
