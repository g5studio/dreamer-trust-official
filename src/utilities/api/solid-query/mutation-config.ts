import { postEvent } from '../http/endpoint/event-api.endpoint';
import { IApiEventInput } from '../http/schema/event-api.schema';

enum Mutation {
  PostEvent = 'postEvent',
}

export const mutationConfigs = {
  [Mutation.PostEvent]: () => ({ mutationFn: (request: IApiEventInput) => postEvent(request) }),
};
