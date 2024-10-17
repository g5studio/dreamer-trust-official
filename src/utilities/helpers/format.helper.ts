import { Language, Locale, LocaleDash } from '@shared/enums';
import { extendTailwindMerge } from 'tailwind-merge';

const arbitraryValueRegex = /^\[(?:([a-z-]+):)?(.+)\]$/i;
const lengthUnitRegex =
  /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;

function isUnderScoreFloatingPointNumber(value: unknown) {
  if (typeof value === 'string' && value.indexOf('_') !== -1) {
    const [base, decimal] = value.split('_');
    return !isNaN(parseFloat(`${base}.${decimal}`));
  }
  return false;
}

function getIsArbitraryValue(value: string, label: string | Set<string>, testValue: (value: string) => boolean) {
  const result = arbitraryValueRegex.exec(value);

  if (result) {
    if (result[1]) {
      return typeof label === 'string' ? result[1] === label : label.has(result[1]);
    }

    return testValue(result[2]!);
  }

  return false;
}

function isLengthOnly(value: string) {
  return lengthUnitRegex.test(value);
}

function isArbitraryLength(value: string) {
  return getIsArbitraryValue(value, 'length', isLengthOnly);
}

export const customTwMerge = extendTailwindMerge({
  extend: {
    theme: {
      spacing: [isUnderScoreFloatingPointNumber, (value: string) => value === 'safe-bottom'],
      borderWidth: [isUnderScoreFloatingPointNumber],
    },
    classGroups: {
      'max-w': [
        {
          // any value that start with max-w- should be treated as max-w
          'max-w': [
            () => {
              return true;
            },
          ],
        },
      ],
      'max-h': [
        {
          // any value that start with max-h- should be treated as max-h
          'max-h': [
            () => {
              return true;
            },
          ],
        },
      ],
      'min-w': [
        {
          // any value that start with min-w- should be treated as min-w
          'max-w': [
            () => {
              return true;
            },
          ],
        },
      ],
      'min-h': [
        {
          // any value that start with min-h- should be treated as min-h
          'max-h': [
            () => {
              return true;
            },
          ],
        },
      ],
      z: [
        {
          // any value that start with leading- should be treated as leading
          z: [
            () => {
              return true;
            },
          ],
        },
      ],
      leading: [
        {
          // any value that start with leading- should be treated as leading
          leading: [
            () => {
              return true;
            },
          ],
        },
      ],
      rounded: [
        {
          rounded: [
            () => {
              return true;
            },
          ],
        },
      ],
      'rounded-b': [
        {
          'rounded-b': [
            () => {
              return true;
            },
          ],
        },
      ],
      'rounded-t': [
        {
          'rounded-t': [
            () => {
              return true;
            },
          ],
        },
      ],
      'rounded-l': [
        {
          'rounded-l': [
            () => {
              return true;
            },
          ],
        },
      ],
      'rounded-r': [
        {
          'rounded-r': [
            () => {
              return true;
            },
          ],
        },
      ],
      'rounded-tl': [
        {
          'rounded-tl': [
            () => {
              return true;
            },
          ],
        },
      ],
      'rounded-tr': [
        {
          'rounded-tr': [
            () => {
              return true;
            },
          ],
        },
      ],
      'rounded-bl': [
        {
          'rounded-bl': [
            () => {
              return true;
            },
          ],
        },
      ],
      'rounded-br': [
        {
          'rounded-br': [
            () => {
              return true;
            },
          ],
        },
      ],
      'bg-size': [
        {
          bg: [
            (value: string) => {
              return /%$/.test(value);
            },
          ],
        },
      ],
      'font-size': [
        {
          text: [
            'base',
            (value: string) => {
              return (
                (value.indexOf('#') === -1 && arbitraryValueRegex.test(value)) ||
                ['xxxs', 'xxs', 'xs', 'sm', 'base', 'lg', 'lgx', 'xl', 'xxl', '7'].includes(value)
              );
            },
            isArbitraryLength,
            isUnderScoreFloatingPointNumber,
          ],
        },
      ],
      'bg-color': [
        {
          bg: [
            (value: string) => {
              return /%$/.test(value);
            },
          ],
        },
      ],
      shadow: [
        {
          shadow: [
            () => {
              return true;
            },
          ],
        },
      ],
    },
  },
});

/**
 * 將物件轉換成query string，並把不需要的key刪除
 * @param obj 要轉換的物件
 * @returns query string
 */
export const formatQueryString = (
  obj: PartialRecord<string, string | number | boolean | string[] | number[] | undefined>,
): string => {
  const query = Object.entries(obj)
    .filter(([, value]) => {
      const isEmptyArray = Array.isArray(value) && value.length === 0;
      return value !== undefined && value !== null && !isEmptyArray;
    })
    .map(([key, value]) => {
      let v: string | number;
      if (Array.isArray(value)) {
        v = value.map(encodeURIComponent).join(',');
      } else {
        v = encodeURIComponent(String(value));
      }
      return `${key}=${v}`;
    })
    .join('&');
  return query;
};

/**
 * 取得絕對路徑
 * @example /test => test
 */
export const formatAbsolutePathname = (pathname: string) => {
  if (pathname && pathname[0] === '/') {
    return pathname.slice(1);
  }
  return pathname;
};

/**
 * 取得相對路徑
 * @example test => /test
 */
export const formatRelativePathname = (pathname: string) => (/^\//.test(pathname) ? pathname : `/${pathname}`);

/**
 * 取得不包含search query的路徑
 */
export const formatPurePathname = (pathname: string) =>
  pathname.replace(/\?[\w|\W]+/, '').replace(/^[A-Z]/, pathname[0]?.toLowerCase());

export const formatLocale = (localDash: LocaleDash): Locale => {
  const key: Locale = Object.keys(LocaleDash)[
    Object.values(LocaleDash).findIndex((value) => value === localDash)
  ] as Locale;
  return Locale[key];
};

export const formatLanguage = (localeDash: LocaleDash): Language | undefined => {
  const key: Locale = Object.keys(LocaleDash)[
    Object.values(LocaleDash).findIndex((value) => value === localeDash)
  ] as Locale;
  if ([Locale.en_US, Locale.zh_HK, Locale.zh_CN].includes(key)) {
    return Language[key] as Language;
  }
  return undefined;
};

export const formatToKebabCase = (str: string): string => {
  return str.replace(/_/g, '-').toLowerCase();
};

export const formatClassList = (classList: PartialRecord<string, boolean | undefined | null>): string => {
  return Object.entries(classList)
    .filter(([, value]) => value)
    .map(([key]) => key)
    .join(' ');
};

export const formatClasses = (
  ...classes: (string | PartialRecord<string, boolean | undefined | null> | undefined | null | false)[]
): string => {
  return customTwMerge(
    ...classes.map((cls) => {
      if (!cls) {
        return '';
      }
      if (typeof cls === 'string') {
        return cls;
      }
      return formatClassList(cls);
    }),
  );
};

/**
 * 空資料顯示處理
 * @param symbol 無資料時顯示符號，預設 '-'
 */
export const formatEmptySymbol = <Data = string | number | object | undefined | null>(
  data: Data,
  symbol = '-',
): string | Data => {
  if (!!data && typeof data === 'object') {
    return Object.keys(data).length > 0 ? data : symbol;
  }

  if (Array.isArray(data)) {
    return data.length > 0 ? data : symbol;
  }

  return data ?? symbol;
};

export const formatIntString = (value: string | number, digits: number = 0): string => {
  const num = parseInt(String(value), 10);
  const normalized = num.toFixed(digits);
  return normalized;
};
