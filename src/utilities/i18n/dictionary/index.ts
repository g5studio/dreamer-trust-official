import en from '@utilities/i18n/dictionary/en-us.json';
import id from '@utilities/i18n/dictionary/id-id.json';
import ms from '@utilities/i18n/dictionary/ms-my.json';
import vi from '@utilities/i18n/dictionary/vi-vn.json';
import cn from '@utilities/i18n/dictionary/zh-cn.json';
import hk from '@utilities/i18n/dictionary/zh-hk.json';
import ja from '@utilities/i18n/dictionary/ja-jp.json';
import ko from '@utilities/i18n/dictionary/ko-kr.json';
import th from '@utilities/i18n/dictionary/th-th.json';
import hi from '@utilities/i18n/dictionary/hi-in.json';
import pt from '@utilities/i18n/dictionary/pt-pt.json';
import { LocaleDash } from '@shared/enums';
import { getNestObjectProp } from '@utilities/helpers/utilities.helper';

const localDictionary: Record<LocaleDash, (key: string) => string | undefined> = {
  [LocaleDash.en_US]: (key: string) => getNestObjectProp<string>(en, key),
  [LocaleDash.hi_IN]: (key: string) => getNestObjectProp<string>(hi, key),
  [LocaleDash.id_ID]: (key: string) => getNestObjectProp<string>(id, key),
  [LocaleDash.ja_JP]: (key: string) => getNestObjectProp<string>(ja, key),
  [LocaleDash.ko_KR]: (key: string) => getNestObjectProp<string>(ko, key),
  [LocaleDash.ms_MY]: (key: string) => getNestObjectProp<string>(ms, key),
  [LocaleDash.th_TH]: (key: string) => getNestObjectProp<string>(th, key),
  [LocaleDash.es_ES]: (key: string) => getNestObjectProp<string>(pt, key),
  [LocaleDash.pt_PT]: (key: string) => getNestObjectProp<string>(pt, key),
  [LocaleDash.vi_VN]: (key: string) => getNestObjectProp<string>(vi, key),
  [LocaleDash.zh_CN]: (key: string) => getNestObjectProp<string>(cn, key),
  [LocaleDash.zh_HK]: (key: string) => getNestObjectProp<string>(hk, key),
};

export default localDictionary;
