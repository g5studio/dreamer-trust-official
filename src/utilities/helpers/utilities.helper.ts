export function trimStart(str: string, char: string) {
  const regex = new RegExp(`^${char}+`, 'g');
  return str?.replace(regex, '');
}

export function trimEnd(str: string, char: string) {
  const regex = new RegExp(`${char}+$`, 'g');
  return str?.replace(regex, '');
}

export function trim(str: string, char: string) {
  return trimStart(trimEnd(str, char), char);
}

/**
 * 移除巢狀物件內的特定屬性
 */
export const removeKeyFromNestObject = <T extends object = object>(obj: T, keys: string[]): T => {
  const temp: T = { ...obj };
  Object.keys(obj).forEach((prop) => {
    if (keys.includes(prop)) {
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete temp[prop];
    } else if (temp[prop] && typeof temp[prop] === 'object') {
      temp[prop] = removeKeyFromNestObject(temp[prop], keys) as T;
    }
  });
  return temp;
};

/**
 * 以字串方式選擇深層屬性
 * @param obj obj = {a: {b: {c: 3}}}
 * @param key a.b.c
 * @returns 3
 */
export const getNestObjectProp = <T = unknown>(obj: unknown, key: string): T | undefined => {
  const [currentKey, ...others] = key.split('.');
  if (others.length > 0 && obj) {
    return getNestObjectProp(obj[currentKey], others.join('.')) as T;
  }
  return obj ? (obj[currentKey] as T) : undefined;
};

export const once = <T extends (...args: unknown[]) => unknown>(fn: T): T => {
  let called = false;
  let result: unknown;
  return ((...args: unknown[]) => {
    if (!called) {
      called = true;
      result = fn(...args);
    }
    return result;
  }) as T;
};
// we use padStart here to avoid direct call of String.prototype.padStart in other view, so that we can easily replace it with polyfill
export function padStart(str: string, length: number, char: string) {
  return str.padStart(length, char);
}

// we use padEnd here to avoid direct call of String.prototype.padEnd in other view, so that we can easily replace it with polyfill
export function padEnd(str: string, length: number, char: string) {
  return str.padEnd(length, char);
}

export function debounce<T extends (...args: unknown[]) => unknown>(fn: T, delay: number): T {
  let timer: NodeJS.Timeout;
  return ((...args: unknown[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  }) as T;
}

export function throttle<T extends (...args: unknown[]) => unknown>(fn: T, delay: number): T {
  let timer: NodeJS.Timeout | undefined;
  return ((...args: unknown[]) => {
    if (!timer) {
      timer = setTimeout(() => {
        fn(...args);
        timer = undefined;
      }, delay);
    }
  }) as T;
}

export function isNullOrUndefined(value: unknown): value is null | undefined {
  return value === null || value === undefined;
}

export function shadowCompareArray<T>(a: T[], b: T[]): boolean {
  if (a.length !== b.length) return false;
  return a.every((item, index) => item === b[index]);
}

export function isPlainObject(value: unknown): value is PartialRecord<string, unknown> {
  return Object.prototype.toString.call(value) === '[object Object]';
}

export function deepMerge<T extends object>(
  target: T,
  source: T,
  options?: {
    mergeArray?: boolean;
    ignoreUndefined?: boolean;
  },
): T {
  const result = { ...target };
  Object.keys(source).forEach((key) => {
    const targetValue = target[key] as unknown;
    const sourceValue = source[key] as unknown;
    if (isPlainObject(targetValue) && isPlainObject(sourceValue)) {
      result[key] = deepMerge(targetValue, sourceValue);
    } else if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
      if (options?.mergeArray) {
        result[key] = [...(targetValue as unknown[]), ...(sourceValue as unknown[])];
      } else {
        result[key] = sourceValue;
      }
    } else if (!options?.ignoreUndefined || sourceValue !== undefined) {
      result[key] = sourceValue;
    }
  });
  return result;
}

export const deleteEmptyField = <T extends object>(obj: T): Partial<T> => {
  const temp: Partial<T> = {};
  Object.keys(obj).forEach((key: string) => {
    if (!isNullOrUndefined(obj[key])) {
      temp[key] = obj[key] as unknown;
    }
  });
  return temp;
};

export const reverseArray = <T>(array: T[]): T[] => {
  const newArray: T[] = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }

  return newArray;
};

export const toArray = <T>(value: T | T[]): T[] => {
  if (Array.isArray(value)) {
    return value;
  }
  return [value];
};

export const memo = <T extends (...args: unknown[]) => unknown>(fn: T): T => {
  const cache = new Map<string, unknown>();
  return ((...args: unknown[]) => {
    const key = JSON.stringify(args);
    if (!cache.has(key)) {
      cache.set(key, fn(...args));
    }
    return cache.get(key) as ReturnType<T>;
  }) as T;
};

export const findLastIndex = <T>(array: T[], predicate: (value: T, index: number, obj: T[]) => boolean): number => {
  for (let i = array.length - 1; i >= 0; i--) {
    if (predicate(array[i], i, array)) {
      return i;
    }
  }
  return -1;
};

export const startsWith = (str: string, search: string): boolean => {
  return str.indexOf(search) === 0;
};

/**
 * 刪除指定key
 */
export const deleteObjectKey = <T extends object>(obj: T, key: string): Partial<T> => {
  let temp: Partial<T> = {};
  Object.keys(obj)
    .filter((objKey) => objKey !== key)
    .forEach((objKey) => {
      temp = { ...temp, [objKey]: obj[objKey] as Partial<T> };
    });
  return temp;
};

export const deepClone = <T>(obj: T): T => {
  if (typeof obj !== 'object' || obj === null || obj === undefined) {
    return obj;
  }

  // Handle Date
  if (obj instanceof Date) {
    return new Date(obj.getTime()) as T;
  }

  // Handle Array
  if (Array.isArray(obj)) {
    const result: unknown[] = [];
    for (let i = 0; i < obj.length; i++) {
      result[i] = deepClone(obj[i]);
    }
    return result as T;
  }

  // Handle objects (including Map, Set, etc.)
  const result = {};
  Object.keys(obj).forEach((key) => {
    const value = obj[key] as unknown;
    result[key] = deepClone(value);
  });

  return result as T;
};

/**
 * check error code represent has error or not
 * @param code number | undefined | null
 */
export const hasNoError = (code?: number | null): boolean => code === 0;
