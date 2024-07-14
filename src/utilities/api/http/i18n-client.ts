import { HttpClientType, generateHttpClient } from './http-client';

export const i18nClient = generateHttpClient({ type: HttpClientType.I18n, guestMode: true });
