import { translation } from '@shared/hooks/use-translation';
import { fetchEventList, fetchPastEventList } from '../http/endpoint/event-api.endpoint';
import { IApiEventSearchParams } from '../http/schema/event-api.schema';
import { fetchBlogList } from '../http/endpoint/blog-api.endpoint';
import { IApiBlogListSearchParams } from '../http/schema/blog.schema';

enum Query {
  FetchEventList = 'fetchEventList',
  FetchPastEventList = 'fetchPastEventList',
  FetchBlogList = 'fetchBlogList',
}

export const queryConfigs = {
  [Query.FetchEventList]: (params: IApiEventSearchParams) => ({
    queryKey: ['event', 'list', translation.language],
    queryFn: () => fetchEventList(params),
  }),
  [Query.FetchPastEventList]: (params: IApiEventSearchParams) => ({
    queryKey: ['event', 'past', 'list', translation.language],
    queryFn: () => fetchPastEventList(params),
  }),
  [Query.FetchBlogList]: (params: IApiBlogListSearchParams) => ({
    queryKey: ['event', 'past', 'list', translation.language],
    queryFn: () => fetchBlogList(params),
  }),
};
