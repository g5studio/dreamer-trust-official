import { LocalStorageItem, LocaleDash } from '@shared/enums';
import { Dictionary } from '@shared/interfaces';
import { IBaseModel } from '@shared/interfaces/base-model.interface';
import { mergeDictionary } from '@utilities/helpers/intl.helper';
import { getLocalStorage, setLocalStorage } from '@utilities/helpers/storage.helper';
import { getWindow } from '@utilities/helpers/window.helper';
import localDictionary from '@utilities/i18n/dictionary';
import i18nInstance, { Translation } from '@utilities/i18n/instance';
import { createEffect } from 'solid-js';
import { createStore, reconcile } from 'solid-js/store';

export type TranslationParams = PartialRecord<string, string | number>;

export type I18nKey = string | ((dictionary: Dictionary) => string);

export type TranslationProps = {
  dictionary: Dictionary;
  /**
   * 當前選擇語系
   * @external https://innotech.atlassian.net/browse/IN-32878
   * @description 優先級：localStorage內存放值 > 瀏覽器當前允許使用的預設語系 > 環境變數內IP資訊所提供語系 > 後台系統預設值(use-system-initialisation) > 簡中(use-indexed-db-initialisation)
   */
  language: LocaleDash;
};

type IApiI18nSnapshot = {
  translations: Record<string, string>[];
};

export interface ITranslation extends IBaseModel<IApiI18nSnapshot, TranslationProps> {
  /**
   *
   * @param i18nKey 可傳入固定key or callback function
   * @param params 翻譯替換參數，owner變數無需傳入，底層會自動帶入vendor模型內業主名稱
   */
  translate: (i18nKey?: I18nKey, params?: TranslationParams) => string;
  changeLanguage: (language: LocaleDash) => void;
  updateDictionary: (dictionary: Partial<Dictionary>) => void;
}

const browserLocaleDashMap: PartialRecord<LocaleDash, string[]> = {
  [LocaleDash.en_US]: ['en-NZ', 'en-AU', 'en-GB', 'en-US', 'en-CA', 'en-us', 'en'],
  [LocaleDash.id_ID]: ['id-ID', 'id-id', 'id'],
  [LocaleDash.ms_MY]: ['ms-MY', 'ms-my', 'ms'],
  [LocaleDash.vi_VN]: ['vi-VN', 'vi-vn', 'vi'],
  [LocaleDash.zh_HK]: ['zh-TW', 'zh-HK', 'zh-MO', 'zh-hk', 'zh-mo', 'zh-tw'],
  [LocaleDash.zh_CN]: ['zh-CN', 'zh-cn', 'zh'],
  [LocaleDash.hi_IN]: ['hi-IN', 'hi-in', 'hi'],
  [LocaleDash.ja_JP]: ['ja-JP', 'ja-jp', 'ja'],
  [LocaleDash.ko_KR]: ['ko-KR', 'ko-kr', 'ko'],
  [LocaleDash.th_TH]: ['th-TH', 'th-th', 'th'],
  [LocaleDash.pt_PT]: ['pt-PT', 'pt-BR', 'pt-pt', 'pt'],
};

export const getBrowserLocale = (browserLocale: string): LocaleDash | undefined =>
  Object.values(LocaleDash).find((locale) => browserLocaleDashMap[locale]?.includes(browserLocale));

export const getTranslation = (): ITranslation => {
  const initialData = (): TranslationProps =>
    ({
      dictionary: {},
      language:
        getLocalStorage(LocalStorageItem.Language) ??
        getBrowserLocale(getWindow().navigator.language.toLowerCase()) ??
        LocaleDash.en_US,
    }) as TranslationProps;

  const [metaData, setData] = createStore<TranslationProps>(initialData());

  // !no need to change
  const updateData = (data: Partial<TranslationProps>) => {
    setData(data);
    return metaData;
  };

  // !no need to change
  const reset = () => {
    setData(reconcile(initialData()));
  };

  const initialize = ({ translations }: IApiI18nSnapshot) => {
    const normalizedTranslations = Array.isArray(translations) ? translations : [translations];
    const flattenTranslations = normalizedTranslations.reduce((acc, cur) => {
      return { ...acc, ...cur };
    }, {});
    setData('dictionary', metaData.language, flattenTranslations);
  };

  const translate = (i18nKey: I18nKey, params: TranslationParams = {}) => {
    if (typeof i18nKey === 'function') {
      return i18nKey(metaData.dictionary);
    }

    const content: string = i18nKey
      ? (metaData.dictionary[metaData.language] ?? {})[i18nKey] ??
        localDictionary[metaData.language]?.(i18nKey) ??
        i18nKey
      : '';

    return Translation.replaceTranslationWithOptions(content, params);
  };

  const changeLanguage = (locale: LocaleDash) => {
    setData('language', locale);
  };

  const updateDictionary = (dictionary: Partial<Dictionary>) => {
    setData('dictionary', mergeDictionary(metaData.dictionary, dictionary));
  };

  createEffect(() => {
    setLocalStorage(LocalStorageItem.Language, metaData.language);
    i18nInstance.changeLanguage(metaData.language);
  });

  createEffect(() => {
    i18nInstance.updateDictionary(metaData.dictionary);
  });

  return { metaData, updateData, initialize, reset, translate, changeLanguage, updateDictionary };
};
