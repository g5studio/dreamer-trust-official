import { contactUs } from '../http/endpoint/contact-us-api.endpoint';
import { postEvent } from '../http/endpoint/event-api.endpoint';
import { IApiContactUsInput } from '../http/schema/contact-us-api.schema';
import { IApiEventInput } from '../http/schema/event-api.schema';

enum Mutation {
  PostEvent = 'postEvent',
  ContactUs = 'contactUs',
}

export const mutationConfigs = {
  [Mutation.PostEvent]: () => ({ mutationFn: (request: IApiEventInput) => postEvent(request) }),
  [Mutation.ContactUs]: () => ({ mutationFn: (request: IApiContactUsInput) => contactUs(request) }),
};
