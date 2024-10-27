import { AxiosResponse } from 'axios';
import { formatQueryString } from '@utilities/helpers/format.helper';
import { platformClient } from '../platform-client';
import { IApiQuestion, IApiQuestionListSearchParams } from '../schema/faq.schema';

const root = 'faq';

/**
 * @description 取得Q&A列表資料
 */
export const fetchQuestionList = async ({
  language,
}: IApiQuestionListSearchParams): Promise<AxiosResponse<IApiQuestion[]>> => {
  return platformClient.get<IApiQuestion[]>(`${root}?${formatQueryString({ language })}`);
};
