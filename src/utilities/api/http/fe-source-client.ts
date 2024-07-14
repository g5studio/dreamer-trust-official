import { HttpClientType, generateHttpClient } from './http-client';

export const feSrcClient = generateHttpClient({ type: HttpClientType.FeSrc, guestMode: true });
