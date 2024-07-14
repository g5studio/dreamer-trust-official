import { DateCode, DateFormatType, LocaleDash } from '@shared/enums';
import type { ManipulateType } from 'dayjs';

export type TimeUnit = ManipulateType;

export type Millisecond = number;

/**
 * @description 系統內時間資料溝通皆透過timestamp格式
 * @example 1702442119329
 */
export type TimeStamp = Millisecond;

export type BaseTimeHelperArgs = {
  /**
   * 格式化方式
   * @default 'DD/MM/YYYY'
   */
  formatType?: DateFormatType;
  /**
   * 時區偏差值
   * @default 0
   */
  offset?: number;
  /**
   * 格式化語系
   */
  locale?: LocaleDash;
};

export type TimeHelperArgs = {
  /**
   * 系統內時間資料溝通格式
   */
  timestamp: TimeStamp;
} & BaseTimeHelperArgs;

export type DateCodeTimeHelperArgs = {
  /**
   * 指定日期
   */
  code: DateCode;
} & BaseTimeHelperArgs;

export type DateRange = {
  start: TimeStamp;
  end: TimeStamp;
};

export type CalendarDate<T = string> = {
  /**
   * yyyy
   */
  year: T;
  /**
   * MM
   */
  month: T;
  /**
   * dd
   */
  date: T;
  /**
   * yyyy-MM-dd
   */
  startDate: string;
  /**
   * yyyy-MM-dd
   */
  endDate: string;
};

export type DateCodeCustom = 'custom';
export type DateCodeWithCustom = DateCode | DateCodeCustom;

// DateFormatType.CalendarDate
export type CalendarDayInString = string;

// DateFormatType.CalendarDateTime
export type CalendarDateTimeInString = string;

export type SimpleTimesInString = string;

export type Timezone = string;

/**
 * 時區資料設定
 * @example {
 * GMT: 'GMT-11:00';
 * TimeZone: 'Pacific/Midway';
 * zone: 'United States Minor Outlying Islands/Midway';
 * }
 */
export type TimezoneConfig = {
  /**
   * 時區資訊
   */
  GMT: string;
  /**
   * 時區代碼
   */
  TimeZone: Timezone;
  /**
   * 時區翻譯
   */
  zone: string;
};

export type TimezoneConfigs = Record<LocaleDash, TimezoneConfig[]>;
