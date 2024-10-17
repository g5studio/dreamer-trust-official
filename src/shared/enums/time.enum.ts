/**
 * !Should follow ISO_8601 standard
 * @external https://en.wikipedia.org/wiki/ISO_8601#Dates
 */
export enum DateFormatType {
  SimpleDate = 'YYYY/MM/DD',
  SimpleMonth = 'YYYY/MM',
  CalendarDate = 'YYYY-MM-DD',
  CalendarMonth = 'YYYY-MM',
  CalendarMonthDate = 'MM-DD',
  OrdinalDate = 'YYYY-DDD',
  Times = 'HH:mm:ss',
  SimpleHourMinutes = 'HH:mm',
  SimpleTimes = 'mm:ss',
  SimpleDateTime = 'YYYY/MM/DD HH:mm:ss',
  CalendarDateTime = 'YYYY-MM-DD HH:mm:ss',
  CalendarDateTimeWithoutSecond = 'YYYY-MM-DD HH:mm',
  CalendarSimpleMonthDateHourMinutes = 'MM/DD HH:mm',
  EventDateTime = 'YYYY.MM.DD hh:mm A',
  // !Customize format type
  /**
   * 體育賽事時間特殊格式
   */
  CustomizeLocaleFormat = 'customize-locale',
  /**
   * 時區設置頁面特殊格式
   */
  CustomizeTimezoneLocaleFormat = 'customize-tz-locale',
  /**
   * 賽果頁面特殊格式
   */
  CustomizeResultLocaleFormat = 'customize-result-locale',
  /**
   * 紀錄模組特殊格式
   */
  CustomizeRecordLocaleFormat = 'customize-record-locale',
  /** 聯賽日期列表特殊格式 */
  CustomizeLeagueDateLocaleFormat = 'customize-league-date-locale-format',
  /**
   * 體育時間選單特殊格式
   */
  CustomizeSportDateFilterLocaleFormat = 'customize-sport-date-filter-locale',
  /**
   * 體育賽事篩選特殊格式
   */
  CustomizeSportFilterLocaleFormat = 'customize-sport-filter-locale',
  CustomSimpleDate = 'DD/MM/YYYY',
  CustomSimpleMonth = 'MM/YYYY',
  CustomCalendarDate = 'DD-MM-YYYY',
  CustomCalendarMonth = 'MM-YYYY',
  CustomSimpleDateNoFormat = 'YYYYMMDD',
  WeekDay = 'dddd',
  ShortWeekDay = 'ddd',
  PureYear = 'YYYY',
  PureMonth = 'MM',
  PureDate = 'DD',
  // Record related format
  // DD MMM HH:mm
  RecordDate = 'DD MMM HH:mm',
  // DD-MM HH:mm for zh_CN
  RecordDateWithDash = 'DD-MM HH:mm',
  // MMM Do HH:mm for ja_JP and ko_KR
  RecordDateWithOrdinal = 'MMM Do HH:mm',
  // MMM DD HH:mm
  RecordDateMonthFirst = 'MMM DD HH:mm',
  // MM-DD HH:mm for zh_CN
  RecordDateMonthFirstWithDash = 'MM-DD HH:mm',
  // DD MMM
  RecordDateWithoutTime = 'DD MMM',
  // DD-MM for zh_CN
  RecordDateWithoutTimeWithDash = 'DD-MM',
  // MMM Do for ja_JP and ko_KR
  RecordDateWithoutTimeWithOrdinal = 'MMM Do',
  // HH
  Hour = 'HH',
  // mm
  Minute = 'mm',
}

export enum DateCode {
  Today = 'today',
  Yesterday = 'yesterday',
  Last7Days = 'lastSevenDays',
  Last30Days = 'lastThirtyDays',
}

export enum DateCheckType {
  Before = 1,
  After,
}
