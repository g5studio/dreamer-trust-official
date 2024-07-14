import { createEffect, createSignal, on } from 'solid-js';
import axios from 'axios';
import { assetModules } from '@utilities/asset-splitting';
import { isNullOrUndefined, startsWith, trimStart } from './utilities.helper';
import { IRetryOptions, retryPromise } from './promise.helper';

function normalizeRelativePath(filePath: string) {
  let normalizedPath = filePath;
  // remove src/ prefix for direct import from assets folder
  if (normalizedPath.includes('src/')) {
    normalizedPath = normalizedPath.replace('src/', '');
  }
  if (normalizedPath.includes('assets/target/')) {
    normalizedPath = normalizedPath.replace('assets/target/', '');
  }
  return normalizedPath;
}

export const resolvedLocalAssetsMap: PartialRecord<string, string> = {};

const getDynamicPath = async (path: string) => {
  const relativePath = `../../assets/target/${trimStart(normalizeRelativePath(path), '/')}`;
  const moduleName = relativePath.split('/')[4];
  const dynamicModule = assetModules[moduleName];
  if (dynamicModule) {
    const assetMap = await dynamicModule();
    const assetModule = assetMap.default;
    return assetModule[relativePath];
  }
  return undefined;
};

const localAssetsEndpointBase = async (path: string) => {
  const dynamicPath = await getDynamicPath(path);
  if (dynamicPath) {
    // const isDev = import.meta.env.DEV || import.meta.env.VITE_SERVE_TEST === 'true';
    const result = dynamicPath;
    resolvedLocalAssetsMap[path] = result;
    return result;
  }

  return '';
};

const localAssetsPromiseMap: PartialRecord<string, Promise<string>> = {};

export const localAssetsEndpoint = (path: string) => {
  if (isNullOrUndefined(localAssetsPromiseMap[path])) {
    localAssetsPromiseMap[path] = localAssetsEndpointBase(path);
  }
  return localAssetsPromiseMap[path]!;
};
export function isLocalUrl(src: string | undefined) {
  return src && !startsWith(src, 'data:') && !startsWith(src, 'http');
}

export const isLocalAssetExist = async (path: string) => {
  const dynamicPath = await getDynamicPath(path);
  return !!dynamicPath;
};

export function getWebpPathUrl(path: string) {
  const webpRelativePath = path.replace(/(\.jpg|\.png)$/, '.webp');
  return webpRelativePath;
}

export interface ILottiePartialData {
  assets: {
    p?: string;
  }[];
}

/**
 * Convert relative path in lottie into absolute path
 * @param lottie - the lottie json object
 * @param assetRelativePath - the lottie relative path under assets/target, e.g. assets/target/abc/index.json, the assetRelativePath is /abc
 */
export async function lottieRelativePathResolver(lottie: ILottiePartialData, assetRelativePath: string) {
  // loop through
  const assets = lottie.assets.map(async (data) => {
    let { p } = data;
    if (p && (startsWith(p, 'images/') || startsWith(p, '/images'))) {
      p = await localAssetsEndpoint(`/${trimStart(assetRelativePath, '/')}/${trimStart(p, '/')}`);
    }
    return {
      ...data,
      p,
    };
  });
  const resolvedAssets = await Promise.all(assets);
  return {
    ...lottie,
    assets: resolvedAssets,
  };
}

const resolvedJsonDataMap: PartialRecord<string, unknown> = {};

function getJsonDataCache<T>(path: string | undefined) {
  if (!isNullOrUndefined(path) && !isNullOrUndefined(resolvedJsonDataMap[path])) {
    return resolvedJsonDataMap[path] as T;
  }
  return undefined;
}

export function jsonData<T = unknown>(jsonPath: () => string | undefined, retryOptions?: IRetryOptions) {
  const defaultPath = jsonPath();
  const [json, setJson] = createSignal<T | undefined>(getJsonDataCache<T>(defaultPath));
  const client = axios.create({});
  let dataKey;
  createEffect(
    on(jsonPath, () => {
      const path = jsonPath();
      const cache = getJsonDataCache<T>(path);
      if (path) {
        if (cache) {
          setJson(() => cache);
        } else {
          dataKey = path;
          retryPromise(() => client.get(path), retryOptions)
            .then((response) => {
              // only set json when the path didn't change
              if (dataKey === jsonPath()) {
                const data = response.data as T;
                resolvedJsonDataMap[path] = data;
                setJson(() => data);
              }
            })
            .catch(() => {
              // just ignore
            });
        }
      } else {
        // clear previous data when url changed
        setJson(undefined);
      }
    }),
  );
  return json;
}

export const lottieLocalJsonData = (jsonPath: () => string | undefined, relativePath: () => string) => {
  const data = jsonData<ILottiePartialData>(jsonPath);
  const [result, setResult] = createSignal<ILottiePartialData | null>(null);
  createEffect(() => {
    const lottieData = data();
    if (lottieData) {
      void lottieRelativePathResolver(lottieData, relativePath()).then((resolvedData) => {
        setResult(resolvedData);
      });
    }
  });
  return result;
};
