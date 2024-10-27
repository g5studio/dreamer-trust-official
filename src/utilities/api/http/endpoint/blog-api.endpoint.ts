import { AxiosResponse } from 'axios';
import { formatQueryString } from '@utilities/helpers/format.helper';
import { platformClient } from '../platform-client';
import { IApiBlog, IApiBlogListSearchParams, IApiBlogSearchParams } from '../schema/blog.schema';

const root = 'blog';

/**
 * @description 取得研討會列表資料
 */
export const fetchBlogList = async ({ language }: IApiBlogListSearchParams): Promise<AxiosResponse<IApiBlog[]>> => {
  return platformClient.get<IApiBlog[]>(`${root}?${formatQueryString({ language })}`);
};

/**
 * @description 取得研討會列表資料
 */
export const fetchBlog = async ({ language, id }: IApiBlogSearchParams): Promise<AxiosResponse<IApiBlog>> => {
  return platformClient.get<IApiBlog>(`${root}/${id}?${formatQueryString({ language })}`);
};
