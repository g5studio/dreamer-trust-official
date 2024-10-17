import axios from 'axios';
import { requestInterceptor, responseInterceptor } from '@utilities/api/http/interceptors';
import { ApplicationType } from '@shared/enums';

export enum HttpClientType {
  Platform = 'platform',
}

export interface IClientConfig {
  /**
   * 連線種類
   */
  type: HttpClientType;
  /**
   * 訪客模式訪問不帶入驗證資訊
   */
  guestMode: boolean;
  header?: Partial<BaseHttpHeader>;
}

export type BaseHttpHeader = {
  device: 'mobile';
  appType: ApplicationType.Mobile;
};

interface IPlatformClientConfig extends IClientConfig {
  type: HttpClientType.Platform;
}

export type HttpClientConfig = IPlatformClientConfig;

export const generateHttpClient = (config: HttpClientConfig) => {
  const defaultHeader: BaseHttpHeader = {
    device: 'mobile',
    appType: ApplicationType.Mobile,
  };
  let baseURL: string;
  let header: HttpClientConfig['header'] = {};
  switch (config.type) {
    default:
      baseURL = `${window.$env.apiUrl}/api`;
      header = defaultHeader;
      break;
  }
  const client = axios.create({ baseURL });
  responseInterceptor(client);
  requestInterceptor(client, { ...config, ...{ header: { ...header, ...(config.header ?? {}) } } });
  return client;
};
