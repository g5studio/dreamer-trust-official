import { IsoCode } from '@shared/enums';

/**
 * 以下預設國碼請參考：https://docs.google.com/spreadsheets/d/1HxUJA2C2of5902y-LyziuMmJ5WJ8_alBnN_DR-76TYY/edit#gid=1405556806
 */
export const defaultCountryCodeByIsoCodeMap = {
  [IsoCode.CN]: 86,
  [IsoCode.TW]: 86,
  [IsoCode.HK]: 86,
  [IsoCode.MO]: 86,
  [IsoCode.VN]: 84,
  [IsoCode.MY]: 60,
  [IsoCode.ID]: 62,
  [IsoCode.JP]: 81,
  [IsoCode.KR]: 82,
  [IsoCode.TH]: 66,
  [IsoCode.IN]: 91,
  [IsoCode.US]: 1,
  [IsoCode.BR]: 55,
};
