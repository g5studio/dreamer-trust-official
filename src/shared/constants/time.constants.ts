import { DateCode } from '@shared/enums';
import { DateCodeCustom, DateCodeWithCustom } from '@shared/interfaces';
import { I18nKey } from '@shared/models/translation.model';

export const DateCodeCustomValue: DateCodeCustom = 'custom';

export const dateCodeI18nMap: Record<DateCodeWithCustom, I18nKey> = {
  [DateCode.Today]: 'betRecord.today',
  [DateCode.Yesterday]: 'betRecord.yesterday',
  [DateCode.Last7Days]: 'betRecord.nearly7d',
  [DateCode.Last30Days]: 'betRecord.nearly30d',
  [DateCodeCustomValue]: 'betRecord.customDate',
};

export const dateCodeList: DateCode[] = [DateCode.Today, DateCode.Yesterday, DateCode.Last7Days, DateCode.Last30Days];

export const estGmt = 'GMT-04:00';

/** 早盤串場 日期filter tab 預設顯示天數 */
export const dateFilterDefaultLength = 7;

export const calendarMonths = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
export const calendarWeekDays = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
export const calendarZhWeekDays = ['日', '一', '二', '三', '四', '五', '六'];
export const calendarZhMonths = [
  '一月',
  '二月',
  '三月',
  '四月',
  '五月',
  '六月',
  '七月',
  '八月',
  '九月',
  '十月',
  '十一月',
  '十二月',
];

export const oneSecondWithMileSeconds = 1000;
export const oneMinuteWithMileSeconds = 60 * oneSecondWithMileSeconds;
export const oneHourWithMileSeconds = 60 * oneMinuteWithMileSeconds;
export const oneDayWithMileSeconds = 24 * oneHourWithMileSeconds;
