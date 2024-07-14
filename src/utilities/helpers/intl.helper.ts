import { Dictionary } from '@shared/interfaces';
import { timezoneList } from '@shared/constants/timezone-list.constant';
import { LocaleDash } from '@shared/enums';
import { memo } from './utilities.helper';

export const formatIntl = memo(
  (timeZone: string, name: keyof Intl.DateTimeFormatPartTypesRegistry, value: string): string | undefined => {
    try {
      return (
        new Intl.DateTimeFormat('en', {
          [name]: value,
          timeZone,
        })
          .formatToParts()
          .find(({ type }) => type === name) || {}
      ).value;
    } catch (e) {
      return undefined;
    }
  },
);

export const getSupportedTzList = memo((): string[] => timezoneList);

export function mergeDictionary(current: Dictionary, newDictionary: Partial<Dictionary>): Dictionary {
  const localeList = Object.keys(newDictionary || {}) as LocaleDash[];
  const mergedDictionary: Dictionary = { ...current };
  localeList.forEach((locale) => {
    mergedDictionary[locale] = { ...(current[locale] || {}), ...(newDictionary[locale] || {}) };
  });
  return mergedDictionary;
}
