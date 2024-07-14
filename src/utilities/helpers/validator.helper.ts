type ValidateLengthConfig = {
  max?: number;
  min?: number;
  regular?: string;
};

type ContainStrOptions = {
  str?: string;
  caseSensitive: boolean;
  consecutive: number;
};
/**
 * 比對 A 字串是否與 B 字串中部分文字重複
 * @param val 輸入字串
 * @param options.str 欲比對字串
 * @param options.caseSensitive 區分大小寫
 * @param options.consecutive 連續重複幾個字
 * @return {boolean}
 */
const containStr = (val: string, options: ContainStrOptions) => {
  const { str, caseSensitive, consecutive } = options;
  if (!val) return false;
  if (!str || str.length < consecutive) return false;

  const parsedStr = caseSensitive ? str : str.toLowerCase();
  const parsedVal = caseSensitive ? val : val.toLowerCase();

  const times = parsedStr.length - consecutive + 1;
  const range = Array(times).keys();

  const targetArray = Array.from(range, (idx) => parsedStr.slice(idx, idx + consecutive));
  const regexString = targetArray.join('|');
  const pattern = new RegExp(regexString);
  return pattern.test(parsedVal);
};

type Dict = { [char: string]: number };
/**
 * 檢查輸入字串內字元是否超過限制之重複次數
 * @param val 輸入字串
 * @param option.repeatLimit 限制重複次數
 * @example
 * ```javascript
 * repeatOverTimes('abc123333', { repeatLimit: 3 }) // true
 * ```
 */
const isRepeatOverTimes = (val: string, { repeatLimit }: { repeatLimit: number }) => {
  const inputDictionary: Dict = val.split('').reduce((acc, cur) => {
    if (!acc[cur]) {
      acc[cur] = 1;
    } else {
      acc[cur] += 1;
    }

    return acc;
  }, {});

  return Object.values(inputDictionary).some((repeatTimes) => repeatTimes > repeatLimit);
};

/**
 * 驗證輸入字串內是否有連續的 6 個字元，檢查包含英文大小寫及數字
 * @param val 輸入字串
 * @param option.consecutive 限制連續次數
 * @example
 * ```javascript
 * consecutiveDetect('test1234', { repeatLimit: 6 })     // false
 * consecutiveDetect('abcdef123', { repeatLimit: 6 })    // true
 * consecutiveDetect('abcde123456', { repeatLimit: 6 })  // true
 * consecutiveDetect('abc123ABCDEF', { repeatLimit: 6 }) // true
 * ```
 */
const isConsecutiveDetected = (val: string, { consecutive }: { consecutive: number }) => {
  if (!val) return false;
  const targets = ['abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', '01234567890'];
  const convertToRegexString = (target: string): string => {
    const times = target.length - consecutive + 1;
    const reversed = target.split('').reverse().join('');

    const positive = Array.from(Array(times).keys(), (idx) => target.slice(idx, idx + consecutive));
    const negative = Array.from(Array(times).keys(), (idx) => reversed.slice(idx, idx + consecutive));

    return [...positive, ...negative].join('|');
  };

  return targets.some((target) => {
    const regexString = convertToRegexString(target);
    const pattern = new RegExp(regexString);
    return !!val.match(pattern) ?? false;
  });
};

const removeBlank = (input: string) => input?.replace(/(^[\s]*)|([\s]*$)/g, '');

const validate = (value: string, regular: RegExp): boolean => !!value && regular.test(value);

// all validations came from universe-portal-wap src/utils/formValidation/index.ts

/**
 * 使用情境：驗證 Email 格式
 * @param input
 */
export const validateEmail = (input: string): boolean =>
  validate(input, /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
// VERSION 2: validate(input, /^([A-Za-z0-9_-.])+@([A-Za-z0-9_\-.])+.([A-Za-z]{2,4})$/);

/**
 * 使用情境：驗證欄位為必填
 * @param input
 */
export const validateRequired = (input: string): boolean => !!removeBlank(input);
export const validateLength = (input: string, { max, regular }: ValidateLengthConfig): boolean =>
  validate(input, new RegExp(`[\\/w]${regular}{${max}}`));

/**
 * 使用情境：驗證密碼是否包含帳號的值且連續 4 碼
 * @param input password
 * @param account
 */
export const validateContainAccount = (input: string, account?: string): boolean =>
  !!input && !containStr(input, { str: account, caseSensitive: false, consecutive: 4 });

/**
 * 使用情境：驗證輸入字串內字元是否超過 4 次
 * @param input 輸入字串
 *  * ```javascript
 * 'test1234'        // true
 * 'abcdef1111'      // false
 * 'aaaa1234'        // false
 * ```
 */
export const validateRepeatOver4Times = (input: string): boolean =>
  !!input && !isRepeatOverTimes(input, { repeatLimit: 4 });

/**
 * 使用情境：驗證輸入字串內是否有連續的 6 個字元
 * @param input 輸入字串
 * @example
 * ```javascript
 * 'test1234'        // false
 * 'abcdef123'       // true
 * 'abcde123456'     // true
 * 'abc123ABCDEF'    // true
 * ```
 */
export const validateConsecutiveOver6Char = (input: string): boolean =>
  !!input && !isConsecutiveDetected(input, { consecutive: 6 });

/**
 * 使用情境：驗證欄位只能為 6 ~ 15 碼的大小寫字母及數字
 * @param input
 */
export const validateAccount = (input: string): boolean => validate(input, /^(?:[a-zA-Z]|\d){6,15}$/);

/**
 * 使用情境：驗證欄位只能為 8 ~ 15 碼的大小寫字母及數字
 * @param input
 */
export const validatePassword = (input: string): boolean => validate(input, /^(?:[a-zA-Z]|\d){8,15}$/);

/**
 * 使用情境：驗證欄位只能為 0 ~ 15 碼的大小寫字母及數字
 * @param input
 */
export const validateAccountLogin = (input: string): boolean => validate(input, /^(?:[a-zA-Z]|\d){0,15}$/);

/**
 * 使用情境：只能輸入數字 0 ~ 9
 * @param input
 */
export const onlyNumber = (input: string): boolean => validate(input, /^\d*$/);

/**
 * 使用情境：驗證欄位只能為 0 ~ 13 碼的數字 ( 0 ~ 10 碼的整數及 0 ~ 3 碼的小數連 1 碼的小數點)
 * @param input
 */
export const validateAmount = (input: string): boolean =>
  validate(input, /^(([1-9]{1}(\d{0,9})?)|(0{1}))(\.\d{0,2})?$/);

/**
 * 檢查是否為i18n key
 */
export const validateI18nKey = (input: string): boolean =>
  validate(input, /^([\w]+\.[\w]+)+$/) && !validate(input, /\s/);

function convertToHalfWidth(str: string) {
  return str.replace(/[\uFF01-\uFF5E]/g, (c) => {
    return String.fromCharCode(c.charCodeAt(0) - 0xfee0);
  });
}

/**
 * 檢查姓名
 */
export const validateName = (input: string): boolean => {
  // [不可連續輸入兩個空白]與[第一個字元不可為空白]
  // 可輸入「.」「．」「·」「・」四符號
  // 限2~50字元
  const validateNameLength = /^.{2,50}$/;
  const validateNameChar = /(^[\s])|(\s\s+)|([0-9`~!@#$%^&*()_|+\-=?;:'",<>「」{}[\]\\/’︿])/gi;

  return validate(input, validateNameLength) && !validate(convertToHalfWidth(input), validateNameChar);
};
/**
 * 檢查nickname
 */
export const validateNickName = (input: string): boolean => {
  const regex = /^([\u4e00-\u9fa5a-zA-Z\d]{1,10}$)/;
  return validate(input, regex);
};
/**
 * 使用情境：驗證輸入字串內是否有連續的 4 個字元
 */
export const validateConsecutiveOver4Char = (input: string): boolean =>
  !!input && !isConsecutiveDetected(input, { consecutive: 4 });
/**
 * 檢查至少N個字串
 */
export const validateAtLeastNChar = (input: string, count: number): boolean => {
  const regExp = new RegExp(`.{${count},}`);
  return validate(input, regExp);
};
/**
 * 使用情境：英文數字組合,不含特殊符號
 */
export const validateEnglishAndNumber = (input: string): boolean =>
  !!input && validate(input, /[a-zA-z]/) && validate(input, /\d/) && !validate(input, /[\W_]/);

/**
 * 使用情境：n個以上不同字符
 */
export const validateDifferenceWords = (input: string, count: number) => {
  if (!input) {
    return false;
  }
  const chunk = input.split('');
  const set = new Set(chunk);
  return set.size >= count;
};

/**
 * 使用情境：驗證是否含數字或字母
 * @param input
 */
export const validateNumbersLetters = (input: string): boolean => validate(input, /^[a-zA-Z0-9]+$/);

/**
 * 驗證網址格式是否合法
 * @param url
 */
export const validateHttpURL = (url: string) => {
  const pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i',
  );
  return pattern.test(url);
};

/** 使用情境：驗證必須是數字且長度為6位 */
export const validateWithdrawalPassword = (input: string): boolean => validate(input, /^[0-9]{6}$/);

/** 使用情境：替換掉所有非數字字元 */
export const replaceNonNumeric = (input: string) => input.replace(/\D/g, '');

/** 使用情境：驗證欄位只能為數字或包含至多8位小數的數字 */
export const validateCryptoAmount = (input: string) => validate(input, /^[0-9]*(\.[0-9]{1,8})?$/);

/** 使用情境：替換掉所有非數字字元，僅保留decimal */
export const replaceNonDecimal = (input: string) => input.replace(/[^0-9.]/g, '');

/**
 * 使用情境：只能輸入數字 0 ~ 9 或包含小數的數字
 */
export const onlyNumberOrDecimal = (input: string) => validate(input, /^[0-9]+(\.[0-9]*)?$/);

/**
 * 是否為不支援的瀏覽器
 * @description from 2.0 JigsawModal/index.tsx
 * @external https://innotech.atlassian.net/browse/TSD-15459
 */
export const isNotSupportBrowser = () =>
  /(MQQBrowser|QQBrowser|UCBrowser|SamsungBrowser|HuaweiBrowser|baiduboxapp|Baidu|VivoBrowser|XiaoMi|Quark|HeyTapBrowser)/.test(
    window.navigator.userAgent,
  );
