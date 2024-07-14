import { LocalStorageItem, LocaleDash } from '@shared/enums';
import { I18nKey, ITranslation, TranslationParams, TranslationProps } from '@shared/models/translation.model';
import { getLocalStorage, setLocalStorage } from '@utilities/helpers/storage.helper';
import { isNullOrUndefined } from '@utilities/helpers/utilities.helper';
import { validateI18nKey } from '@utilities/helpers/validator.helper';
import { Dictionary } from '@shared/interfaces';
import localDictionary from './dictionary';

export class Translation implements Pick<ITranslation, 'changeLanguage' | 'translate'> {
  constructor(prop?: TranslationProps) {
    if (prop) {
      Object.assign(this, prop);
    }
  }

  public language: LocaleDash = getLocalStorage(LocalStorageItem.Language) as LocaleDash;

  /**
   * 依照參數替換翻譯內容，若當前內容為i18n key格式則回傳空字串
   * @param translation 翻譯內容
   * @param params 參數
   */
  public static replaceTranslationWithOptions(translation: string, params?: TranslationParams): string {
    let temp = translation;
    if (validateI18nKey(translation)) {
      return '';
    }
    if (params) {
      Object.keys(params).forEach((key) => {
        const value = params[key];
        if (!isNullOrUndefined(value) && typeof temp === 'string') {
          temp = temp.replace(new RegExp(`{${key}}`, 'g'), value.toString());
        }
      });
    }
    return temp;
  }

  private dictionary: Dictionary = {} as Dictionary;

  /**
   * 取得一對一多語言內容
   * @description 不支援業主變數替換功能
   */
  public translate(i18nKey: I18nKey, params?: TranslationParams): string {
    if (typeof i18nKey === 'function') {
      return i18nKey(this.dictionary);
    }
    const content: string = i18nKey
      ? this.dictionary[this.language][i18nKey] ?? localDictionary[this.language](i18nKey) ?? i18nKey
      : '';
    return Translation.replaceTranslationWithOptions(content, params);
  }

  /**
   * @description 此方法僅提供translation model進行資料同步
   * @param language
   */
  public changeLanguage(language: LocaleDash): void {
    setLocalStorage(LocalStorageItem.Language, language);
    document.getElementsByTagName('html')[0]?.setAttribute('lang', language);
    this.language = language;
  }

  /**
   * @description 此方法僅提供translation model進行資料同步
   * @param dictionary
   */
  public updateDictionary(dictionary: Dictionary): void {
    this.dictionary = { ...this.dictionary, ...dictionary };
  }
}

const i18nInstance = new Translation();

export default i18nInstance;
