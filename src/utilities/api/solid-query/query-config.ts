import { fetchEventList } from '../http/endpoint/event-api.endpoint';

enum Query {
  FetchEventList = 'fetchEventList',
}

export const queryConfigs = {
  [Query.FetchEventList]: () => ({
    queryKey: ['event', 'list'],
    queryFn: fetchEventList,
  }),
};
