import { PixType } from '@shared/enums';

type AnonymousOptions = {
  /**
   * 原始資料
   */
  origin: string;
  /**
   * 匿名規則，預設匹配文字字元
   */
  regExp?: RegExp;
  /**
   * 匿名使用符號，預設*
   */
  symbol?: string;
  /**
   * 忽略前n字元
   */
  ignore?: number;
  times?: number;
};

/**
 * 資訊去敏方法
 * @param param0.regExp 替換規則
 * @param param0.origin 原始資料
 * @param param0.symbol 去敏代碼
 * @param param0.ignore 保留前n個
 * @param param0.times 重複次數
 * @returns {string}
 */
export const formatAnonymous = ({
  regExp = /[\w]{1}/,
  origin,
  symbol = '*',
  ignore = 0,
  times = 1,
}: AnonymousOptions): string => {
  let formatted = origin.substring(ignore);
  for (let i = 0; i < times; i++) {
    formatted = formatted.replace(regExp, symbol);
  }
  return `${origin.slice(0, ignore)}${formatted}`;
};

export const anonymousCardNumber = (type: string, origin: string) => {
  switch (type as PixType) {
    case PixType.CPF:
    case PixType.Phone:
    case PixType.CNPJ:
      return formatAnonymous({
        origin,
        times: origin.length - 4,
      });

    /**
     * @前固定顯示8碼
     * 若有2個字符以上，顯示前2個字符，其餘@前的字符以*字代替
     * 若只有2個字符，顯示前1個字符，其餘@前的字符以*字代替
     *
     * 隱碼後Email總長若超出卡片尺寸，則超出部分截斷不顯示
     */
    case PixType.Email: {
      const [prefix, domain] = origin.split('@');

      // 檢查若是prefix長度只有兩碼，則只顯示1碼明碼。其餘皆顯示2碼明碼
      const ignore = prefix.length === 2 ? 1 : 2;

      // @前無論長短皆需固定顯示8碼
      const patternLength = 8;

      return `${formatAnonymous({
        origin: prefix.padEnd(patternLength, '*'),
        regExp: /[\w\d.!#$&'+/=?^_{}~-]{1}/,
        ignore,
        times: patternLength - ignore,
      })}@${domain}`;
    }
    default:
      return `**** **** **** ${origin.slice(-4)}`;
  }
};

export const anonymousCryptoAddress = ({
  origin,
  symbol = '.',
  maxLength = 46,
}: {
  origin: string;
  symbol?: string;
  maxLength?: number;
}): string => {
  if (origin.length <= maxLength) {
    return origin;
  }

  const firstHalf = origin.substring(0, 10);
  const secondHalf = origin.substring(origin.length - 10);

  return `${firstHalf.padEnd(maxLength, symbol)}${secondHalf}`;
};

/**
 * 依據父元素寬度，匿名化加密地址
 * @param parentElement 父元素，用於計算父元素寬度
 * @param origin 原始地址
 * @returns
 * 如果文字寬度超過父元素寬度，會有以下兩種形式的回傳值
 * 1. abcdef...1234
 * 2. abcdefAbcdef.........12345Abcdef
 *
 * 如果文字寬度未超過父元素寬度，則回傳原始地址
 *
 */
export const anonymousCryptoAddressByWidth = ({
  origin,
  parentElement,
}: {
  origin: string;
  parentElement?: HTMLDivElement;
}) => {
  const ctx = document.createElement('canvas').getContext('2d');
  if (ctx && parentElement) {
    const parentElementWidth = parentElement.offsetWidth;
    const computedStyle = getComputedStyle(parentElement);
    ctx.font = `${computedStyle.fontSize} ${computedStyle.fontFamily}`;
    const textWidth = ctx.measureText(origin).width;
    if (textWidth > parentElementWidth) {
      let result = {
        first: origin.toString().match(/^(\w{10})/)?.[0] || '',
        last: origin.toString().match(/(\w{10})$/)?.[0] || '',
      };

      if (parentElementWidth < ctx.measureText(`${result.first}...${result.last}`).width) {
        result = {
          first: origin.toString().match(/^(\w{6})/)?.[0] || '',
          last: origin.toString().match(/(\w{4})$/)?.[0] || '',
        };
      }

      const dotCount = Math.floor(
        (parentElementWidth - ctx.measureText(`${result.first}${result.last}`).width) / ctx.measureText('.').width,
      );
      return `${result.first}${'.'.repeat(dotCount)}${result.last}`;
    }
  }

  return origin;
};

/**
 * 卡片管理匿名化姓名
 * 中文：只顯示前1碼，其餘以*代替，至多只顯示3碼
 * 非中文：只顯示首3字元，其他字元隱碼，至多只顯示6字元（含隱碼），如果只有2或3字元，隱最後一碼
 * 備註：空格也算一碼
 * @external https://innotech.atlassian.net/browse/PRF-1759
 * @param origin 原始資料
 * @returns
 */
export const anonymousName = (origin: string) => {
  if (!origin) return origin;
  const isCN = /^[\u4e00-\u9fa5]+/.test(origin);
  return isCN
    ? origin
        .split('')
        .map((str, i) => (i >= 1 ? '*' : str))
        .join('')
        .substring(0, 3)
    : origin
        .split('')
        .map((str, i, arr) => {
          if (arr.length > 3) {
            return i >= 3 ? str.replace(/./g, '*') : str;
          }

          return i === arr.length - 1 ? str.replace(/./g, '*') : str;
        })
        .join('')
        .substring(0, 6);
};
