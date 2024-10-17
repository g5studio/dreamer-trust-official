import { AxiosResponse } from 'axios';
import { IApiEvent } from '../schema/event-api.schema';
import { platformClient } from '../platform-client';

const root = 'event';

/**
 * @description 取得研討會資料
 */
export const fetchEventList = async (): Promise<AxiosResponse<IApiEvent>> => {
  return platformClient.get<IApiEvent>(`${root}`);
};
