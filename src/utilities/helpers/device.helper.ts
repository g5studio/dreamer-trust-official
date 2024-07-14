import { OS, SpecialBrands } from '@shared/enums';
import { GetResult } from '@fingerprintjs/fingerprintjs';
import { getWindow } from './window.helper';

enum DeviceType {
  UNKNOWN = 'unknown',
  DESKTOP = 'pc',
  MOBILE = 'mobile',
  TABLET = 'tablet',
}

/**
 * app類型1：桌面版，2：手機版，4：APP-平台版，8：APP-體育版，16：APP-平台+體育版
 */
enum AppType {
  PC = 1,
  Mobile = 2,
}

export interface IDeviceInfoType {
  browser: UAParser.IBrowser;
  os: OS;
  device: UAParser.IDevice;
  deviceType: DeviceType;
  appType: AppType;
  screen: string;
  osVersion?: string;
}

const specialBrandsList: SpecialBrands[] = [
  SpecialBrands.HUAWEI,
  SpecialBrands.OPPO,
  SpecialBrands.VIVO,
  SpecialBrands.XIAOMI,
  SpecialBrands.SAMSUNG,
];

const isHarmonyOS = ['Harmony'].some((item) => navigator?.userAgent?.match(/Android/)?.input?.includes(item));

const OsDetect = (os: UAParser.IOS): OS => {
  switch (os.name) {
    case 'iOS':
      return OS.iOS;
    case 'HarmonyOS':
    case 'Android':
      return isHarmonyOS ? OS.HarmonyOS : OS.Android;
    default:
      return OS.UNKNOWN;
  }
};

/**
 * 由於 iPad 與 Mac 的 UA 幾乎一樣，導致無法正確識別，故增加此判斷。
 * 但此識別方式有一個可能導致識別錯誤就是：使用 Mac 並外接一個豎著使用的螢幕
 * @param ua window.navigator.userAgent
 * @returns boolean isiPad
 */
const checkIsiPad = (ua: string) => {
  const currentWindow = getWindow();
  return (
    (/macintosh|mac os x/i.test(ua) &&
      currentWindow.screen.height > currentWindow.screen.width &&
      !ua.match(/(iPhone\sOS)\s([\d_]+)/)) ||
    ua.match(/(iPad).*OS\s([\d_]+)/)
  );
};

/**
 * 針對 ua-parser 檢測不出的特定 Android 廠牌型號進行再次比對以擴充 ua-parser 套件
 *
 * 使用 https://github.com/etienne-martin/device-detector-js/blob/master/src/fixtures/regexes/device/mobiles.json
 * 內提供的裝置列表來做比對，目前僅針對某幾個品牌，後續有新增品牌必須連 json 一併更新
 * @param device UAParser.Device
 */
const detectSpecialModel = (
  device: UAParser.IDevice,
  deviceList: Record<
    string,
    {
      regex: string;
      device: string;
      regex_ori?: string;
      models: {
        regex: string;
        model: string;
        device?: string;
      }[];
    }
  >,
): UAParser.IDevice => {
  const updatedDevice = { ...device };

  const isHonor = (huaweiModel: string | undefined) => {
    if (!huaweiModel) return false;

    return deviceList[SpecialBrands.HUAWEI].models.some(({ regex, model }) => {
      const modelReg = new RegExp(regex);
      return modelReg.test(huaweiModel) && model.toUpperCase().includes(SpecialBrands.HONOR.toUpperCase());
    });
  };

  // ua-parser 檢測出型號但 mapping 不了廠牌
  if (updatedDevice.model && !updatedDevice.vendor) {
    specialBrandsList.some((brand) => {
      const { models } = deviceList[brand as keyof typeof deviceList];
      const hasDetected = models.some(({ regex }) => {
        const modelReg = new RegExp(regex);
        return modelReg.test(updatedDevice.model!);
      });

      updatedDevice.model = hasDetected ? brand : '';
      return hasDetected;
    });
  } else if (updatedDevice.model && updatedDevice.vendor === SpecialBrands.HUAWEI) {
    // 檢測出華為但必須進一步判斷是否為榮耀
    updatedDevice.model = isHonor(updatedDevice.model) ? SpecialBrands.HONOR : SpecialBrands.HUAWEI;
  }

  return updatedDevice;
};

/**
 * 檢查是否為公司設定之特別品牌
 * @param brand SpecialBrands
 * @returns boolean
 */
export const isSpecialBrand = (brand: SpecialBrands): boolean => {
  if (!brand) return false;
  return [...specialBrandsList, SpecialBrands.HONOR].includes(brand);
};

let fingerPrintInfoPromise: Promise<GetResult> | null = null;

async function createFingerPrintInfoPromise() {
  const FingerprintJS = await import('@fingerprintjs/fingerprintjs');
  const fpPromise = await FingerprintJS.load();
  const result = await fpPromise.get();
  return result;
}

export const getFingerPrintInfo = async () => {
  if (!fingerPrintInfoPromise) {
    fingerPrintInfoPromise = createFingerPrintInfoPromise();
  }
  const result = await fingerPrintInfoPromise;
  return result;
};

/**
 * 分析 window.navigator.userAgent 解析並整理出系統內需要使用的資訊
 * @description 目前盤點 C2C & Deposit & Customer Service & Download App 有用到
 */
export const getDeviceInfo = async (): Promise<IDeviceInfoType> => {
  const { UAParser } = await import('ua-parser-js');
  const { mobileModelList } = await import('@utilities/config/device-list');
  const currentWindow = getWindow();

  const uaParser = new UAParser();
  const { browser, device, os: operatingSystem, ua } = uaParser.getResult();
  const isMobile = device.type === DeviceType.MOBILE;
  const isIpad = checkIsiPad(ua);
  const deviceType = isMobile ? DeviceType.MOBILE : DeviceType.DESKTOP;
  const appType = isMobile ? AppType.Mobile : AppType.PC;
  const os = isIpad ? OS.iOS : OsDetect(operatingSystem);
  const osVersion = isHarmonyOS ? '' : operatingSystem.version;
  const screen = `${currentWindow.innerWidth}x${currentWindow.innerHeight}`;

  return {
    deviceType,
    os,
    browser,
    device: {
      ...detectSpecialModel(device, mobileModelList),
      ...(isIpad && { model: 'iPad', type: DeviceType.TABLET }),
    },
    appType,
    osVersion,
    screen,
  };
};

/**
 * 註冊時，後台需要記錄用戶註冊時的裝置
 * @description 目前只用在註冊
 */

export const getOSInfo = () => {
  const { userAgent } = navigator; // 獲取 user agent 字串
  const platform = userAgent.match(/(Windows|Mac|Linux|Android|iOS)/i); // 匹配操作系統

  if (platform) {
    return platform[0]; // 返回匹配到的操作系統
  }
  return '-'; // 如果無法識別，返回未知
};
