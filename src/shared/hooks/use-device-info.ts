import { createResource } from 'solid-js';
import { getDeviceInfo } from '@utilities/helpers/device.helper';
import { OS } from '@shared/enums';

const [deviceInfo] = createResource(getDeviceInfo);

/**
 * 取得裝置作業系統
 */
const getDeviceOS = () => {
  if (deviceInfo()?.os === OS.iOS) {
    return OS.iOS;
  }
  if (deviceInfo()?.os === OS.Android || deviceInfo()?.os === OS.HarmonyOS) {
    return OS.Android;
  }
  return null;
};

/**
 * 是否為移動裝置
 */
const isHandheldDevice = (): boolean => !!getDeviceOS();

export { deviceInfo, getDeviceOS, isHandheldDevice };
