import { AxiosResponse } from 'axios';
import { formatQueryString } from '@utilities/helpers/format.helper';
import { IApiEvent, IApiEventSearchParams } from '../schema/event-api.schema';
import { platformClient } from '../platform-client';

const root = 'event';

/**
 * @description 取得研討會資料
 */
export const fetchEventList = async ({ language }: IApiEventSearchParams): Promise<AxiosResponse<IApiEvent>> => {
  return platformClient.get<IApiEvent>(`${root}?${formatQueryString({ language })}`);
};

/**
 * @description 取得過去研討會資料
 */
export const fetchPastEventList = async ({ language }: IApiEventSearchParams): Promise<AxiosResponse<IApiEvent>> => {
  return platformClient.get<IApiEvent>(`${root}/past?${formatQueryString({ language })}`);
};
