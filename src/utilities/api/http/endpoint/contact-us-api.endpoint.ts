import { AxiosResponse } from 'axios';
import { platformClient } from '../platform-client';
import { IApiContactUsInput } from '../schema/contact-us-api.schema';

const root = 'contactus';

/**
 * @description 報名研討會
 */
export const contactUs = async (params: IApiContactUsInput): Promise<AxiosResponse<object>> => {
  return platformClient.post<object>(`${root}`, params);
};
