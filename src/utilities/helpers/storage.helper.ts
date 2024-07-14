import { LocalStorageItem, LocaleDash, SessionStorageItem } from '@shared/enums';

export function getSessionStorage(key: SessionStorageItem): string | null {
  try {
    // sessionStorage is not available in some browsers in incognito mode
    return sessionStorage.getItem(key);
  } catch (e) {
    return null;
  }
}

/**
 * 如果 storage 內儲存的是 Object，會回傳 JSON Parse 後的結果，若無資料則回傳空物件
 * @param key
 */
export function getParsedSessionStorage<T>(key: SessionStorageItem): T {
  const storedData = getSessionStorage(key);
  if (!storedData) {
    return {} as T;
  }

  return JSON.parse(storedData) as T;
}

export function setSessionStorage(key: SessionStorageItem, value: string): void {
  try {
    sessionStorage.setItem(key, value);
  } catch (e) {
    // do nothing
  }
}

export function removeSessionStorage(key: SessionStorageItem): void {
  try {
    sessionStorage.removeItem(key);
  } catch (e) {
    // do nothing
  }
}

export function clearSessionStorage(): void {
  try {
    sessionStorage.clear();
  } catch (e) {
    // do nothing
  }
}

function getKeyName(key: LocalStorageItem, version?: number): string {
  return version ? `${key}-version-${version}` : key;
}

export function getLocalStorage(key: LocalStorageItem, version?: number): string | null {
  try {
    // localStorage is not available in some browsers in incognito mode
    return localStorage.getItem(getKeyName(key, version));
  } catch (e) {
    return null;
  }
}

/**
 * 如果 storage 內儲存的是 Object，會回傳 JSON Parse 後的結果，若無資料則回傳空物件
 * @param key
 */
export function getParsedLocalStorage<T>(key: LocalStorageItem, defaultValue = {}, version?: number): T {
  try {
    const storedData = getLocalStorage(key, version);
    if (!storedData) {
      return defaultValue as T;
    }
    return JSON.parse(storedData) as T;
  } catch (e) {
    return defaultValue as T;
  }
}

export const getLanguageFromLocalStorage = (): LocaleDash | undefined =>
  Object.values(LocaleDash).find((locale: string) => locale === getLocalStorage(LocalStorageItem.Language));

// version is used to prevent data conflict between different versions of the same key
export function setLocalStorage(key: LocalStorageItem, value: string, version?: number): void {
  try {
    localStorage.setItem(getKeyName(key, version), value);
  } catch (e) {
    // do nothing
  }
}

export function removeLocalStorage(key: LocalStorageItem): void {
  try {
    localStorage.removeItem(key);
  } catch (e) {
    // do nothing
  }
}

export function clearLocalStorage(): void {
  try {
    localStorage.clear();
  } catch (e) {
    // do nothing
  }
}
