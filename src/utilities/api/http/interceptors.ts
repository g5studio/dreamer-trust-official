import { AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { HttpClientHeaderItem, Language, LocalStorageItem, OS } from '@shared/enums';
import { IDeviceInfoType, getDeviceInfo, getFingerPrintInfo } from '@utilities/helpers/device.helper';
import { formatLanguage } from '@utilities/helpers/format.helper';
import { translation } from '@shared/hooks/use-translation';
import { getLocalStorage, getParsedLocalStorage, setLocalStorage } from '@utilities/helpers/storage.helper';
import { isMobile } from '@shared/hooks/use-window-size';
import { HttpClientConfig, HttpClientType, IClientConfig } from './http-client';

let visitorId = getLocalStorage(LocalStorageItem.VisitorId) || '';
let deviceInfo = getParsedLocalStorage<IDeviceInfoType | undefined>(LocalStorageItem.DeviceInfo);

getFingerPrintInfo()
  .then((fpInfo) => {
    visitorId = fpInfo.visitorId;
    setLocalStorage(LocalStorageItem.VisitorId, visitorId);
  })
  .catch(() => {
    visitorId = '';
  });

getDeviceInfo()
  .then((info) => {
    deviceInfo = info;
    setLocalStorage(LocalStorageItem.DeviceInfo, JSON.stringify(info));
  })
  .catch(() => {
    deviceInfo = undefined;
  });

const setDeviceInfoHeader = (config: InternalAxiosRequestConfig<unknown>) => {
  if (deviceInfo) {
    const {
      screen,
      browser: { name, version },
      device: { model, vendor },
    } = deviceInfo;
    if (!config.headers.has(HttpClientHeaderItem.DeviceMode)) {
      config.headers.set(HttpClientHeaderItem.DeviceMode, model);
    }
    if (!config.headers.has(HttpClientHeaderItem.Browser) && name) {
      config.headers.set(HttpClientHeaderItem.Browser, `${name.replace('Mobile ', '').replace(/\s+/g, '')} ${version}`);
    }
    if (!config.headers.has(HttpClientHeaderItem.PhoneBrand)) {
      config.headers.set(HttpClientHeaderItem.PhoneBrand, vendor);
    }
    if (!config.headers.has(HttpClientHeaderItem.Screen)) {
      config.headers.set(HttpClientHeaderItem.Screen, screen);
    }
  }
};

/**
 * 動態添加請求頭
 */
const setDynamicHeader = (config: InternalAxiosRequestConfig<unknown>, type: HttpClientType) => {
  switch (type) {
    default:
      if (!config.headers.has(HttpClientHeaderItem.Language)) {
        config.headers.set(HttpClientHeaderItem.Language, formatLanguage(translation.language) ?? Language.zh_CN);
      }
      if (!config.headers.has(HttpClientHeaderItem.Timezone)) {
        config.headers.set(HttpClientHeaderItem.Timezone, '');
      }
      setDeviceInfoHeader(config);
      break;
  }
};

/**
 * 取得pc歸類辨識header
 * @description 裝置資訊尚未解析完成前依照當前畫面大小判定是否為pc
 * @external https://innotech.atlassian.net/browse/IN-37135
 */
export const getHeaderWithPCidentifier = (header?: IClientConfig['header']) => ({
  header: {
    [HttpClientHeaderItem.isPC]: deviceInfo?.os ? (deviceInfo?.os === OS.UNKNOWN ? 1 : 0) : isMobile() ? 0 : 1,
    ...(header ?? {}),
  },
});

export const responseInterceptor = (axios: AxiosInstance) => {
  axios.interceptors.response.use();
};

export const requestInterceptor = (axios: AxiosInstance, { type, header, guestMode }: HttpClientConfig) => {
  axios.interceptors.request.use((config) => {
    const JWT: string = '';

    Object.keys(header ?? {}).forEach((headerName) => {
      if (!config.headers.has(headerName)) {
        config.headers.set(headerName, `${header?.[headerName]}`);
      }
    });
    if (JWT && !guestMode && !config.headers.has(HttpClientHeaderItem.Authorization)) {
      config.headers.set(HttpClientHeaderItem.Authorization, `Bearer ${JWT}`);
    }
    setDynamicHeader(config, type);
    return config;
  });
};
