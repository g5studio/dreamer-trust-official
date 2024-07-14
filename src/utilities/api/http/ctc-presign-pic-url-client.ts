import { HttpClientType, generateHttpClient } from './http-client';

export const CtcPreSignPicUrlClient = generateHttpClient({ type: HttpClientType.CtcPreSignPicUrl, guestMode: true });
