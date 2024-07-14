import { PromiseCacheKey } from '@shared/enums/cache.enum';

export interface IRetryOptions {
  retryCount?: number;
  retryDelay?: number | ((retryCount: number) => number);
}

export function retryPromise<T>(promise: () => Promise<T>, options?: IRetryOptions): Promise<T> {
  const { retryCount = 3, retryDelay = (count: number) => Math.min(count * 1000, 30000) } = options || {};
  return new Promise((resolve, reject) => {
    let count = 0;
    const retry = () => {
      promise()
        .then(resolve)
        .catch((error) => {
          if (count < retryCount) {
            count += 1;
            const delay = typeof retryDelay === 'function' ? retryDelay(count) : retryDelay;
            setTimeout(() => {
              retry();
            }, delay);
          } else {
            reject(error);
          }
        });
    };
    retry();
  });
}

const cacheMap: PartialRecord<
  string,
  {
    promise: Promise<unknown>;
    expireTime: number;
  }
> = {};

function clearExpiredCache() {
  const keyList = Object.keys(cacheMap);
  const now = Date.now();
  for (let i = 0; i < keyList.length; i++) {
    const key = keyList[i];
    const cache = cacheMap[key];
    if (cache && cache.expireTime < now) {
      // disable the eslint rule here because the key is known hand not dynamic
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete cacheMap[key];
    }
  }
}

export async function cachePromise<T>({
  promiseKey,
  /**
   * key for distinguish the cache of the same promiseKey
   */
  key,
  promise,
  expireTime,
  validatePromiseResponse,
}: {
  promiseKey: PromiseCacheKey;
  key: string;
  promise: () => Promise<T>;
  expireTime: number;
  validatePromiseResponse?: (data: T) => boolean;
}): Promise<T> {
  clearExpiredCache();

  const realKey = `${promiseKey}-${key}`;
  const cache = cacheMap[realKey];
  if (cache && cache.expireTime > Date.now()) {
    return cache.promise as Promise<T>;
  }
  const newPromise = promise();

  void newPromise.then((data) => {
    if (validatePromiseResponse && !validatePromiseResponse(data)) {
      // disable the eslint rule here because the key is known hand not dynamic
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete cacheMap[realKey];
    } else {
      cacheMap[realKey] = {
        promise: newPromise,
        expireTime: Date.now() + expireTime,
      };
    }
  });
  newPromise.catch(() => {
    // disable the eslint rule here because the key is known hand not dynamic
    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
    delete cacheMap[realKey];
  });
  return newPromise;
}
