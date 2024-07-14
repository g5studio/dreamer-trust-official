export type CountryCodeItem = {
  /**
   * image file name
   */
  flagIcon: string;
  /**
   * 拼音
   */
  pinyin: string;
  countryCode: number;
  numberCount: number;
  regex: RegExp;
  countryName: string;
  countryName_En: string;
  available: boolean; // unused
  default: boolean;
  banVender: string[];
};
export type ParsedCountryCodeItem = CountryCodeItem & { group: string };
export type ParsedCountryCodeList = Array<ParsedCountryCodeItem>;
export type DisplayedCountryCode = PartialRecord<string, ParsedCountryCodeList>;
