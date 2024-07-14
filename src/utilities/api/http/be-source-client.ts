import { HttpClientType, generateHttpClient } from './http-client';

export const beSrcClient = generateHttpClient({ type: HttpClientType.BeSrc, guestMode: true });
