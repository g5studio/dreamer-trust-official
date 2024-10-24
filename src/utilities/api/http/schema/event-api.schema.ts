import { Language } from '@shared/enums';

export enum PreferredContactMethod {
  Email = 'Email',
  SMS = 'SMS',
  PhoneCall = 'PhoneCall',
}

export interface IApiEventInput {
  eventId: string;
  name: string;
  email: string;
  mobileCountryCode: string;
  mobileNumber: string;
  landline: string;
  preferredContactMethods: PreferredContactMethod[];
  comments: string;
}

export interface IApiEventSearchParams {
  language: Language;
}

export interface IApiEvent {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  startTime: string;
  endTime: string;
}
