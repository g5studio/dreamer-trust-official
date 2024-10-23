import dayjs, { Dayjs } from 'dayjs';
import utc from 'dayjs/plugin/utc';
import duration from 'dayjs/plugin/duration';
import timezone from 'dayjs/plugin/timezone';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { DateCode, DateFormatType, DateCheckType, LocaleDash } from '@shared/enums';
import {
  BaseTimeHelperArgs,
  DateCodeTimeHelperArgs,
  DateRange,
  TimeHelperArgs,
  TimeStamp,
  CalendarDate,
  CalendarDayInString,
  DateCodeWithCustom,
  Timezone,
} from '@shared/interfaces/time.interface';
import cn from 'dayjs/locale/zh-cn';
import hk from 'dayjs/locale/zh-hk';
import ja from 'dayjs/locale/ja';
import ko from 'dayjs/locale/ko';
import en from 'dayjs/locale/en';
import id from 'dayjs/locale/id';
import ms from 'dayjs/locale/ms';
import es from 'dayjs/locale/es';
import pt from 'dayjs/locale/pt';
import vi from 'dayjs/locale/vi';
import hi from 'dayjs/locale/hi';
import th from 'dayjs/locale/th';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { DateCodeCustomValue, dateCodeI18nMap, dateCodeList, estGmt } from '@shared/constants/time.constants';
import { I18nKey } from '@shared/models/translation.model';
import { padStart } from './utilities.helper';

dayjs.extend(utc);
dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);
dayjs.extend(duration);
/**
 * we only use timezone for minimal timezone support such as timezone guessing
 * dayjs tz has some bug about daylight time/summer time
 * it can be fixed by apply the same timezone calculation twice
 * or use utcOffset instead of tz
 * this is an example code for how to apply timezone twice
 * @example
 * function toTimezoneStartDate(date: string, tz = 'America/Caracas') {
 *   const once = day.tz(data, tz);
 *   const twice = once.tz(tz);
 *   const offset = once.diff(twice, 'minute);
 *   return once.startOf('day').add(offset, 'minute').toDate();
 * }
 */
dayjs.extend(timezone);

type CustomizeLocale = Extract<LocaleDash, LocaleDash.zh_CN | LocaleDash.en_US | LocaleDash.zh_HK>;

const localeLib: Record<LocaleDash, ILocale> = {
  [LocaleDash.zh_CN]: cn,
  [LocaleDash.zh_HK]: hk,
  [LocaleDash.en_US]: en,
  [LocaleDash.es_ES]: es,
  [LocaleDash.hi_IN]: hi,
  [LocaleDash.id_ID]: id,
  [LocaleDash.ja_JP]: ja,
  [LocaleDash.ko_KR]: ko,
  [LocaleDash.ms_MY]: ms,
  [LocaleDash.pt_PT]: pt,
  [LocaleDash.th_TH]: th,
  [LocaleDash.vi_VN]: vi,
};

const customizeLocaleFormat: Record<CustomizeLocale, string> = {
  [LocaleDash.zh_CN]: 'YYYY年MM月DD日 hh:mm A',
  [LocaleDash.zh_HK]: 'YYYY年MM月DD日 hh:mm A',
  [LocaleDash.en_US]: 'MMMM DD, YYYY hh:mm A',
};

const customizeLocaleShortFormat: Record<CustomizeLocale, string> = {
  [LocaleDash.zh_CN]: 'YYYY年MM月DD日',
  [LocaleDash.zh_HK]: 'YYYY年MM月DD日',
  [LocaleDash.en_US]: 'MMMM DD, YYYY',
};

const customizeFormatMap: Partial<Record<DateFormatType, Partial<Record<LocaleDash, string>>>> = {
  [DateFormatType.CustomizeLocaleFormat]: customizeLocaleFormat,
  [DateFormatType.CustomizeLocaleShortFormat]: customizeLocaleShortFormat,
};

const dateCodeMap: () => Record<DateCode, dayjs.Dayjs> = () => ({
  [DateCode.Today]: dayjs(),
  [DateCode.Yesterday]: dayjs().subtract(1, 'day'),
  [DateCode.Last7Days]: dayjs().subtract(6, 'day'),
  [DateCode.Last30Days]: dayjs().subtract(30, 'day'),
});

/**
 * 取得當前格式化語系
 * @description 特殊格式化方式下查無設定時需通用英文翻譯
 */
const getFormatLocale = ({
  locale,
  formatType = DateFormatType.CustomSimpleDate,
}: Omit<BaseTimeHelperArgs, 'offset' | 'locale'> & Required<Pick<BaseTimeHelperArgs, 'locale'>>): ILocale => {
  if (customizeFormatMap[formatType] && !customizeFormatMap[formatType]![locale]) {
    return localeLib[LocaleDash.en_US];
  }
  return localeLib[locale];
};

/**
 * 根據指定語系格式化文字
 */
const format = (
  date: dayjs.ConfigType,
  { locale, formatType = DateFormatType.CustomSimpleDate }: Omit<BaseTimeHelperArgs, 'offset'>,
): string =>
  locale
    ? dayjs(date)
        .locale(getFormatLocale({ locale, formatType }))
        .format(
          customizeFormatMap[formatType]
            ? customizeFormatMap[formatType]![locale as CustomizeLocale] ??
                customizeFormatMap[formatType]![LocaleDash.en_US]
            : formatType,
        )
    : dayjs(date).format(formatType);

/**
 * 取得特定日期本地時間戳記
 * @param code 指定日期
 * @returns {TimeStamp}
 */
const getTimeStampByCode = (code: DateCode): TimeStamp => dateCodeMap()[code].valueOf();

export const getIsDate = (date: string): boolean => dayjs(date).isValid();

/**
 * 取得當前時區資料
 */
export const getDefaultTimezone = (): Timezone => dayjs.tz.guess();

/**
 * 取得當地時區偏差值
 * @example ```javascript
 * getDefaultGMTOffset(); // 'GMT+08:00'
 * ```
 */
export const getDefaultGMTOffset = (): string => `GMT${dayjs().format('Z')}`;

/**
 * 取得指定時區偏差值
 * @description 主機時區固定為UTC-4
 * @param input 默認為主機時區
 */
export const getTimezoneOffset = (input = estGmt): number => +input.replace(/^(UTC|GMT)/, '').replace(/:[0-9]+$/, '');

/**
 * 取得當前系統時區指定日期時間戳記
 * @param date 指定日期
 * @param offset 呼叫getTimezoneOffset取得時區偏差值，不指定則以使用者當地時區轉換
 * @returns {TimeStamp}
 */
export const getTimeStamp = (date: dayjs.ConfigType, offset?: number): TimeStamp => {
  const validDate = dayjs(date).isValid()
    ? typeof offset === 'number'
      ? dayjs(date).utcOffset(offset, true)
      : dayjs(date)
    : dayjs();
  return validDate.valueOf();
};

/**
 * 將時間字串轉換為時間戳記
 * @description 默認為UTC時間
 * @param time 時間字串
 * @returns {TimeStamp}
 */
export const getTimeStringToTimeStamp = (
  time: string,
  formatType: DateFormatType.SimpleHourMinutes | DateFormatType.SimpleTimes | DateFormatType.Times,
) => {
  const timeUnits = time.split(':').map(Number);
  const timeMultipliers = {
    [DateFormatType.Times]: [60 * 60 * 1000, 60 * 1000, 1000],
    [DateFormatType.SimpleHourMinutes]: [60 * 60 * 1000, 60 * 1000],
    [DateFormatType.SimpleTimes]: [60 * 1000, 1000],
  };

  return timeUnits.reduce((total, unit, index) => total + unit * timeMultipliers[formatType][index], 0);
};

/**
 * 取得指定時區day物件
 * @param offset 預設系統選擇時區
 */
export const getUTCDayInstance = (value: dayjs.ConfigType, offset = 8): Dayjs =>
  dayjs.utc(dayjs(value)).utcOffset(offset);

/**
 * 取得當地時區文字
 * @example 'Asia/Taipei'
 */
export const getLocalTimezone = () => dayjs.tz.guess();

/**
 * 格式化時間
 */
export const formatDate = ({
  timestamp,
  locale,
  formatType = DateFormatType.CustomSimpleDate,
}: Omit<TimeHelperArgs, 'offset'>): string => format(dayjs(timestamp), { formatType, locale });

/**
 * 格式化UTC時間
 */
export const formatUTCDate = ({
  timestamp,
  offset = 0,
  formatType = DateFormatType.CustomSimpleDate,
  locale,
}: TimeHelperArgs): string => format(dayjs.utc(dayjs(timestamp)).utcOffset(offset), { formatType, locale });

/**
 * 格式化Server時間
 * @description some of our service is using GMT-04:00
 */
export const formatServerUTCDate = (args: Omit<TimeHelperArgs, 'offset'>): string => {
  return formatUTCDate({ ...args, offset: -4 });
};

/**
 * 格式化指定時間
 * @description 預設使用系統當前時區，格式為YYYY-MM-DD
 * @example ```javascript
 * formatDateByCode({code: DateCode.Today, formatType: DateFormatType.CalendarDate}); // 2024-03-05
 * ```
 */
export const formatDateByCode = ({
  code,
  locale,
  formatType = DateFormatType.CalendarDate,
  offset,
}: DateCodeTimeHelperArgs): string =>
  formatUTCDate({
    timestamp: getTimeStampByCode(code),
    locale,
    formatType,
    offset,
  });

/**
 * 格式化指定格式時間
 * @param date 文字日期
 * @param inputFormat 指定格式
 */
export const formatDateFromDateString = (
  date: string,
  { formatType, locale }: Required<Pick<BaseTimeHelperArgs, 'formatType'>> & Pick<BaseTimeHelperArgs, 'locale'>,
  inputFormat?: Exclude<DateFormatType, DateFormatType.CustomizeLocaleFormat>,
): string => {
  return format(dayjs(date, inputFormat), { formatType, locale });
};

/**
 * 日期變動
 * @param {dayjs.ManipulateType} unit 變動單位
 * @returns {TimeStamp}
 */
export const addDate = (
  { timestamp, offset = 0 }: Omit<TimeHelperArgs, 'formatType' | 'locale'>,
  unit: dayjs.ManipulateType,
): TimeStamp => getTimeStamp(dayjs(timestamp).add(offset, unit));

/**
 * 取得日期區間
 * @param {dayjs.ManipulateType} unit 變動單位
 * @default 'd'
 * @returns {DateRange}
 */
export const getDateRange = (
  { timestamp, offset = 0 }: Omit<TimeHelperArgs, 'formatType' | 'locale'>,
  unit: dayjs.ManipulateType = 'd',
): DateRange => ({
  start: timestamp,
  end: getTimeStamp(dayjs(addDate({ timestamp, offset }, unit)).endOf(unit)),
});

/**
 * 取得日期間隔
 * @param {dayjs.ManipulateType} unit 變動單位
 * @default 'd'
 * @returns
 */
export const getDateRangeOffset = ({ start, end }: DateRange, unit: dayjs.ManipulateType = 'd'): number =>
  dayjs(end).startOf(unit).diff(dayjs(start).startOf(unit), unit);

/**
 * 日期檢查
 * @param source 檢查對象
 * @param target 檢查目標
 * @param checkType 檢查方式
 * @default DateCheckType.Before
 * @returns {boolean}
 */
export const checkDate = (
  source: Omit<TimeHelperArgs, 'formatType' | 'offset' | 'locale'>,
  target: Omit<TimeHelperArgs, 'formatType' | 'offset' | 'locale'>,
  checkType: DateCheckType = DateCheckType.Before,
): boolean => {
  switch (checkType) {
    case DateCheckType.After:
      return dayjs(source.timestamp).isAfter(dayjs(target.timestamp));
    default:
      return dayjs(source.timestamp).isBefore(dayjs(target.timestamp));
  }
};

export const getMillisecondTimestamp = (serverTime: string | number): TimeStamp => {
  // server time can be in ms or s, we need to convert it to ms
  const { length } = String(serverTime);
  // assumed server time > Sep 9, 2001
  if (length <= 10) {
    return Number(serverTime) * 1000;
  }
  return Number(serverTime);
};

export const alignStandardTime = (serverTime: TimeStamp) => {
  const now = Date.now();
  if (!serverTime) {
    return now;
  }
  // if delay > 2s, we will use server time
  // otherwise, we will use local time
  const delay = Math.abs(now - serverTime);
  if (delay > 2000) {
    return serverTime;
  }
  return now;
};

/** --------- Relative time helper --------- */

// if the date is out of month last day, it will be set to the last day of the month
// if the date is out of month first day, it will be set to the first day of the month
export const getValidDate = ({ year, month, date }: { year: string; month: string; date: string }) => {
  const firstDayOfMonth = dayjs(`${year}-${month}-01`);
  const lastDayOfMonth = firstDayOfMonth.endOf('month');
  if (Number(date) > lastDayOfMonth.date()) {
    return lastDayOfMonth.format('DD');
  }
  if (Number(date) < firstDayOfMonth.date()) {
    return firstDayOfMonth.format('DD');
  }
  return date;
};
/**
 * parse data string to year, month, date
 */
export const parseCalendarDateFromDateString = (
  date: string,
  formatType = DateFormatType.CalendarDate,
): Pick<CalendarDate, 'year' | 'date' | 'month'> => {
  const parsed = dayjs(date, formatType);
  return {
    year: parsed.format('YYYY'),
    month: parsed.format('MM'),
    date: parsed.format('DD'),
  };
};

/**
 * parse data string to year, month, date
 */
export const parseCalendarDateInDecimalFromDateString = (
  date: string,
  formatType = DateFormatType.CalendarDate,
): Pick<CalendarDate<number>, 'year' | 'month' | 'date'> => {
  const { year, month, date: parsedData } = parseCalendarDateFromDateString(date, formatType);
  return {
    year: parseInt(year, 10),
    month: parseInt(month, 10),
    date: parseInt(parsedData, 10),
  };
};

export const checkRelativeDate = ({
  source,
  target,
  checkType,
}: {
  source: string;
  target: string;
  checkType: DateCheckType;
}) => {
  const sourceToTimestamp = getTimeStamp(source);
  const targetToTimestamp = getTimeStamp(target);
  return checkDate({ timestamp: sourceToTimestamp }, { timestamp: targetToTimestamp }, checkType);
};

/**
 * after year or month change, the original date may be invalid or out of range
 * this function will normalize the date to a valid date
 */
export function normalizeDate({ year, month, date, startDate, endDate }: CalendarDate) {
  const validDate = getValidDate({ year, month, date });
  const parsed = dayjs(`${year}-${month}-${validDate}`);
  const start = dayjs(startDate);
  const end = dayjs(endDate);
  if (parsed.isBefore(start)) {
    return start.format('DD');
  }
  if (parsed.isAfter(end)) {
    return end.format('DD');
  }
  return validDate;
}

export function normalizeMonth({
  year,
  month,
  startDate,
  endDate,
}: Pick<CalendarDate, 'year' | 'month' | 'startDate' | 'endDate'>) {
  // 01 is not related to month, it is just a placeholder
  const parsed = dayjs(`${year}-${month}-01`);
  const start = dayjs(startDate);
  const end = dayjs(endDate);
  if (parsed.isBefore(start)) {
    return start.format('MM');
  }
  if (parsed.isAfter(end)) {
    return end.format('MM');
  }
  return month;
}

export function getDateRangeStringByDateCode(
  code: DateCode,
  includeToday: boolean = false,
): [CalendarDayInString, CalendarDayInString] {
  const start = formatDateByCode({ code });
  const end = formatDateByCode({
    code: code === DateCode.Yesterday && !includeToday ? DateCode.Yesterday : DateCode.Today,
  });
  return [start, end];
}

export function isDateRangeStrMatchWithDateCode(start: CalendarDayInString, end: CalendarDayInString, code: DateCode) {
  const [codeStartStr, codeEndStr] = getDateRangeStringByDateCode(code);
  return start === codeStartStr && end === codeEndStr;
}

export function normalizeDateStringWithinRange(
  date: CalendarDayInString,
  start: CalendarDayInString,
  end: CalendarDayInString,
  formatType = DateFormatType.CalendarDate,
) {
  const parsed = dayjs(date);
  const startDate = dayjs(start);
  const endDate = dayjs(end);
  if (parsed.isBefore(startDate)) {
    return startDate.format(formatType);
  }
  if (parsed.isAfter(endDate)) {
    return endDate.format(formatType);
  }
  return date;
}

export function getDateCodeByDateRangeString(
  dateRange: [CalendarDayInString, CalendarDayInString],
): DateCodeWithCustom {
  const matchedDateCode = dateCodeList.find((dateCode) => {
    const [start, end] = getDateRangeStringByDateCode(dateCode);
    return start === dateRange[0] && end === dateRange[1];
  });
  if (matchedDateCode !== undefined) {
    return matchedDateCode;
  }
  return DateCodeCustomValue;
}

export function getDateI18nKeyByDateRangeString(
  dateRange: [CalendarDayInString, CalendarDayInString],
  displayCustomTime = true,
): string | I18nKey {
  const matchedDateCode = getDateCodeByDateRangeString(dateRange);
  if (matchedDateCode === DateCodeCustomValue && displayCustomTime) {
    return `${dateRange[0]} ~ ${dateRange[1]}`;
  }
  return dateCodeI18nMap[matchedDateCode];
}

/**
 * @description 將毫秒轉換為時分秒
 * @param millisecond
 */
export function convertMillisecondsToTime(millisecond: number): { hours: number; minutes: number; seconds: number } {
  const seconds = Math.floor((millisecond / 1000) % 60);
  const minutes = Math.floor((millisecond / (1000 * 60)) % 60);
  const hours = Math.floor(millisecond / (1000 * 60 * 60));

  return { hours, minutes, seconds };
}

export function millisecondToTimeString(
  millisecond: number,
  translate: (key: I18nKey, replaceText?: PartialRecord<string, string>) => string,
) {
  const { hours, minutes, seconds } = convertMillisecondsToTime(millisecond);
  const padZero = (value: number) => padStart(String(value), 2, '0');
  const unit = {
    hour: {
      singular: translate('common.unit.hour', { h: padZero(hours) }),
      plural: translate('common.unit.hours', { h: padZero(hours) }),
    },
    minute: {
      singular: translate('common.unit.minute', { m: padZero(minutes) }),
      plural: translate('common.unit.minutes', { m: padZero(minutes) }),
    },
    second: {
      singular: translate('common.unit.second', { s: padZero(seconds) }),
      plural: translate('common.unit.seconds', { s: padZero(seconds) }),
    },
  };
  const timeString: string[] = [];
  const secondWithUnit = seconds > 1 ? unit.second.plural : unit.second.singular;

  if (hours > 0) {
    timeString.push(hours > 1 ? unit.hour.plural : unit.hour.singular);
  }
  // if (minutes > 0) {
  timeString.push(minutes > 1 ? unit.minute.plural : unit.minute.singular);
  // }
  if (seconds >= 0 && hours === 0) {
    timeString.push(secondWithUnit);
  }
  return timeString.join(secondWithUnit.includes(' ') ? ' ' : '');
}

export const getTimeStampWithOffset = ({ text }: { text: string; isEst?: boolean }) =>
  getTimeStamp(text, getTimezoneOffset());

export const transform = ({ timestamp, ...args }: TimeHelperArgs & { isEst?: boolean }): string =>
  formatUTCDate({
    ...args,
    timestamp: getMillisecondTimestamp(timestamp),
  });

export const convertTimeToPastRelease = (
  releaseTime: TimeStamp,
  translate: (key: I18nKey, replaceText?: PartialRecord<string, string>) => string,
) => {
  const diff = Date.now() - releaseTime;

  if (diff < 60 * 1000) {
    return translate('common.secsPast', { num: String(Math.round(diff / 1000)) });
  }
  if (diff < 3600 * 1000) {
    return translate('common.minsPast', { num: String(Math.round(diff / 60 / 1000)) });
  }
  if (diff < 86400 * 1000) {
    return translate('common.hoursPast', { num: String(Math.round(diff / 60 / 60 / 1000)) });
  }

  const date = transform({ timestamp: releaseTime, formatType: DateFormatType.RecordDateMonthFirstWithDash });
  return `${date} ${translate('common.publish')}`;
};

export const getMillisecondFromTime = (time: number, unit?: duration.DurationUnitType | undefined) =>
  dayjs.duration(time, unit).asMilliseconds();

/**
 * 生日可選範圍為1920-01-01 ~ 系統選擇時區回推18年的今日
 */
export const getBirthdayDateRange: () => [string, string] = () => [
  '1920-01-01',
  transform({
    timestamp: getUTCDayInstance(getTimeStampWithOffset({ text: formatDateByCode({ code: DateCode.Today }) }), 8)
      .add(-18, 'year')
      .valueOf(),
    formatType: DateFormatType.CalendarDate,
  }),
];

/**
 * 從timestamp判斷是否今天
 */
export const isToday = (timestamp: TimeStamp): boolean => {
  return (
    formatDateByCode({ code: DateCode.Today }) === transform({ timestamp, formatType: DateFormatType.CalendarDate })
  );
};
