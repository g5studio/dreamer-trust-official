import axios from 'axios';
import { requestInterceptor, responseInterceptor } from '@utilities/api/http/interceptors';
import { ApplicationType, HttpClientHeaderItem } from '@shared/enums';

export enum HttpClientType {
  Sport = 'sport',
  Platform = 'platform',
  I18n = 'i18n',
  Im = 'im',
  BeSrc = 'beSrc',
  FeSrc = 'feSrc',
  CtcPreSignPicUrl = 'ctcPreSignPicUrl',
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

interface ISportClientConfig extends Omit<IClientConfig, 'header'> {
  type: HttpClientType.Sport;
  header?: Partial<BaseHttpHeader> & {
    [HttpClientHeaderItem.Timezone]?: string;
  };
}

interface IPlatformClientConfig extends IClientConfig {
  type: HttpClientType.Platform;
}

interface Ii18nClientConfig extends IClientConfig {
  type: HttpClientType.I18n;
}

interface IImClientConfig extends IClientConfig {
  type: HttpClientType.Im;
}
interface IBeSourceClientConfig extends IClientConfig {
  type: HttpClientType.BeSrc;
}

interface IFeSourceClientConfig extends IClientConfig {
  type: HttpClientType.FeSrc;
}

interface ICtcPreSignPicUrlClientConfig extends IClientConfig {
  type: HttpClientType.CtcPreSignPicUrl;
}

export type HttpClientConfig =
  | ISportClientConfig
  | IPlatformClientConfig
  | Ii18nClientConfig
  | IImClientConfig
  | IBeSourceClientConfig
  | IFeSourceClientConfig
  | ICtcPreSignPicUrlClientConfig;

export const generateHttpClient = (config: HttpClientConfig) => {
  const defaultHeader: BaseHttpHeader = {
    device: 'mobile',
    appType: ApplicationType.Mobile,
  };
  const { sportUrl, platformUrl, i18nUrl, imUrl, beSourceUrl, feSourceUrl, ctcPreSignPicUrl } = {
    sportUrl: '',
    platformUrl: '',
    i18nUrl: '',
    imUrl: '',
    beSourceUrl: '',
    feSourceUrl: '',
    ctcPreSignPicUrl: '',
  };
  let baseURL: string;
  let header: HttpClientConfig['header'] = {};
  switch (config.type) {
    case HttpClientType.Sport:
      baseURL = sportUrl;
      header = defaultHeader;
      break;
    case HttpClientType.BeSrc:
      baseURL = beSourceUrl;
      break;
    case HttpClientType.FeSrc:
      baseURL = feSourceUrl;
      break;
    case HttpClientType.I18n:
      baseURL = `${i18nUrl}/api/v2`;
      break;
    case HttpClientType.Im:
      baseURL = `${imUrl}/api-gateway`;
      header = {
        ...defaultHeader,
      };
      break;
    case HttpClientType.CtcPreSignPicUrl:
      baseURL = ctcPreSignPicUrl ?? '';
      break;
    default:
      baseURL = platformUrl;
      header = defaultHeader;
      break;
  }
  const client = axios.create({ baseURL });
  responseInterceptor(client);
  requestInterceptor(client, { ...config, ...{ header: { ...header, ...(config.header ?? {}) } } });
  return client;
};
