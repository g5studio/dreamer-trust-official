import { HttpClientType, generateHttpClient } from './http-client';

export const imClient = generateHttpClient({ type: HttpClientType.Im, guestMode: false });
export const imGuestClient = generateHttpClient({ type: HttpClientType.Im, guestMode: true });
