import { translation } from '@shared/hooks/use-translation';
import { fetchEventList, fetchPastEventList } from '../http/endpoint/event-api.endpoint';
import { IApiEventSearchParams } from '../http/schema/event-api.schema';
import { fetchBlog, fetchBlogList } from '../http/endpoint/blog-api.endpoint';
import { IApiBlogListSearchParams, IApiBlogSearchParams } from '../http/schema/blog.schema';
import { IApiQuestionListSearchParams } from '../http/schema/faq.schema';
import { fetchQuestionList } from '../http/endpoint/faq-api.endpoint';

enum Query {
  FetchEventList = 'fetchEventList',
  FetchPastEventList = 'fetchPastEventList',
  FetchBlogList = 'fetchBlogList',
  FetchBlog = 'fetchBlog',
  FetchQuestionList = 'fetchQuestionList',
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
    queryKey: ['blog', 'list', translation.language],
    queryFn: () => fetchBlogList(params),
  }),
  [Query.FetchBlog]: (params: IApiBlogSearchParams) => ({
    queryKey: ['blog', 'list', params.id, translation.language],
    queryFn: () => fetchBlog(params),
  }),
  [Query.FetchQuestionList]: (params: IApiQuestionListSearchParams) => ({
    queryKey: ['question', 'list', translation.language],
    queryFn: () => fetchQuestionList(params),
  }),
};
