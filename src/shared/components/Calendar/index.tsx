import {
  calendarMonths,
  calendarWeekDays,
  calendarZhMonths,
  calendarZhWeekDays,
} from '@shared/constants/time.constants';
import { DateCode, DateFormatType, LocaleDash } from '@shared/enums';
import { translation } from '@shared/hooks/use-translation';
import { CalendarDate, TimeStamp } from '@shared/interfaces';
import { IBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { formatClasses } from '@utilities/helpers/format.helper';
import {
  formatDateByCode,
  getUTCDayInstance as dayjs,
  getTimeStampWithOffset,
  transform,
} from '@utilities/helpers/time.helper';
import LeftArrowIcon from '@utilities/svg-components/LeftArrowIcon';
import RightArrowIcon from '@utilities/svg-components/RightArrowIcon';
import { Accessor, For, Setter, Show, createEffect, createMemo, createSignal, onMount } from 'solid-js';

type CalendarRangeProps = {
  defaultType: 'range';
  defaultFromDate?: string;
  defaultToDate?: string;
  onDateRangeChange?: (range: [string, string]) => void;
};

type CalendarSingleProps = {
  defaultType: 'single';
  defaultDate?: string;
  onDateChange?: (date: string) => void;
};

type CalendarProps = (CalendarRangeProps | CalendarSingleProps) &
  IBaseComponentProps & {
    /**
     * 預設檢視日期
     * @description 若有設置，月曆預設呈現該月份
     */
    defaultViewDate?: string;
    enableNext?: boolean;
    enablePrevious?: boolean;
    disableCaption?: boolean;
    maxDate?: string;
    minDate?: string;
    ref?: Setter<ICalendar | undefined>;
    onNext?: () => void;
    onPrevious?: () => void;
    onViewDateChange?: (viewDate: Pick<CalendarDate<number>, 'year' | 'month' | 'date'>) => void;
  };

type CalendarData = {
  row: number;
  col: number;
  timestamp: TimeStamp;
};

type Timestamps = Record<string, TimeStamp>;

export interface ICalendar {
  /**
   * 選擇日期
   * @description 選擇指定日期病自動切換至指定日期月份
   * @param date 指定日期
   */
  selectDate: (date: string) => void;
  /**
   * 檢視日期
   * @description 自動切換至指定日期月份
   * @param date 指定日期
   */
  viewDate: (date: string) => void;
  /**
   * 翻至隔月
   */
  next: () => void;
  /**
   * 翻至前月
   */
  previous: () => void;
  /**
   * 翻至指定月
   */
  switchTo: (offset: number) => void;
}

/**
 * 取得月曆資料
 * @param text 該月第一天日期
 */
const getMonthlyCalendar = (text: string) => {
  const calendarData: CalendarData[] = [];
  const firstDateSystemTimestamp: TimeStamp = getTimeStampWithOffset({ text });
  const lastDateSystemTimestamp: TimeStamp = dayjs(firstDateSystemTimestamp).endOf('month').valueOf();
  for (let i = 1; i <= dayjs(firstDateSystemTimestamp).day(); i++) {
    const Date = dayjs(firstDateSystemTimestamp).add(-i, 'day');
    calendarData.push({
      row: 0,
      col: Date.day() < 6 ? Date.day() % 6 : 6,
      timestamp: Date.valueOf(),
    });
  }
  for (let i = 0; i <= dayjs(lastDateSystemTimestamp).diff(dayjs(firstDateSystemTimestamp), 'days'); i++) {
    const Date = dayjs(firstDateSystemTimestamp).add(i, 'day');
    calendarData.push({
      row: Math.floor(
        (dayjs(Date).diff(dayjs(firstDateSystemTimestamp), 'days') + dayjs(firstDateSystemTimestamp).day()) / 7,
      ),
      col: Date.day() < 6 ? Date.day() % 6 : 6,
      timestamp: Date.valueOf(),
    });
  }
  for (let i = 1; i <= 6 - dayjs(lastDateSystemTimestamp).day(); i++) {
    const Date = dayjs(lastDateSystemTimestamp).add(i, 'day');
    calendarData.push({
      row: Math.floor(
        (dayjs(Date).diff(dayjs(firstDateSystemTimestamp), 'days') + dayjs(firstDateSystemTimestamp).day()) / 7,
      ),
      col: Date.day() < 6 ? Date.day() % 6 : 6,
      timestamp: Date.valueOf(),
    });
  }
  return calendarData;
};
const getDateSelected = (timestamp: TimeStamp, currentTimestamp: Accessor<TimeStamp | undefined>): boolean =>
  Boolean(currentTimestamp() && transform({ timestamp }) === transform({ timestamp: currentTimestamp()! }));

const getDateTimestamp = (col: number, row: number, timestamps: Timestamps): TimeStamp => timestamps[`${row}_${col}`];

const getWeekDays = () =>
  translation.language === LocaleDash.zh_CN || translation.language === LocaleDash.zh_HK
    ? calendarZhWeekDays
    : calendarWeekDays;

const getMonths = () =>
  translation.language === LocaleDash.zh_CN || translation.language === LocaleDash.zh_HK
    ? calendarZhMonths
    : calendarMonths;

const handleOnSelectBeforeStart = ({
  from,
  to,
  timestamp,
  setSelectedDateRange,
}: {
  from: TimeStamp | undefined;
  to: TimeStamp | undefined;
  timestamp: Accessor<TimeStamp>;
  setSelectedDateRange: Setter<[TimeStamp | undefined, TimeStamp | undefined]>;
}) => {
  if (!from || timestamp() < from) {
    if (to) {
      if (to < timestamp()) {
        setSelectedDateRange([to, timestamp()]);
      } else {
        setSelectedDateRange([timestamp(), to]);
      }
    } else {
      setSelectedDateRange([timestamp(), from]);
    }
  }
};

const handleOnSelectAfterEnd = ({
  from,
  to,
  timestamp,
  setSelectedDateRange,
}: {
  from: TimeStamp | undefined;
  to: TimeStamp | undefined;
  timestamp: Accessor<TimeStamp>;
  setSelectedDateRange: Setter<[TimeStamp | undefined, TimeStamp | undefined]>;
}) => {
  if (!to || timestamp() > to) {
    if (from) {
      if (from > timestamp()) {
        setSelectedDateRange([timestamp(), from]);
      } else {
        setSelectedDateRange([from, timestamp()]);
      }
    } else {
      setSelectedDateRange([to, timestamp()]);
    }
  }
};

const handleOnSetRange = ({
  from,
  to,
  timestamp,
  setSelectedDateRange,
}: {
  from: TimeStamp | undefined;
  to: TimeStamp | undefined;
  timestamp: Accessor<TimeStamp>;
  setSelectedDateRange: Setter<[TimeStamp | undefined, TimeStamp | undefined]>;
}) => {
  if (from && to) {
    if (from < timestamp() && to > timestamp()) {
      setSelectedDateRange([timestamp(), to]);
      return;
    }
    if (from === timestamp() || to === timestamp()) {
      setSelectedDateRange([timestamp(), undefined]);
      return;
    }
  }
  handleOnSelectBeforeStart({ from, to, timestamp, setSelectedDateRange });
  handleOnSelectAfterEnd({ from, to, timestamp, setSelectedDateRange });
};

const handleOnSelectDate = ({
  defaultType,
  timestamp,
  setSelectedDateRange,
  selectedDateRange,
  setSelectedDate,
}: {
  timestamp: Accessor<TimeStamp>;
  defaultType: 'single' | 'range';
  selectedDateRange: Accessor<[TimeStamp | undefined, TimeStamp | undefined]>;
  setSelectedDate: Setter<TimeStamp | undefined>;
  setSelectedDateRange: Setter<[TimeStamp | undefined, TimeStamp | undefined]>;
}) => {
  switch (defaultType) {
    case 'range': {
      const [from, to] = selectedDateRange();
      handleOnSetRange({ from, to, timestamp, setSelectedDateRange });
      break;
    }
    default:
      setSelectedDate(timestamp());
      break;
  }
};

const getRangeClassList = ({
  disabled,
  timestamp,
  isInRange,
  selectedDateRange,
}: {
  disabled: Accessor<boolean>;
  timestamp: Accessor<TimeStamp>;
  selectedDateRange: Accessor<[TimeStamp | undefined, TimeStamp | undefined]>;
  isInRange: (timestamp: TimeStamp) => boolean;
}) => ({
  'hover:rounded-circle hover:bg-primary hover:bg-opacity-50': !isInRange(timestamp()) && !disabled(),
  'bg-primary text-white hover:bg-opacity-50': isInRange(timestamp()),
  'rounded-l-full': !!selectedDateRange()[0] && timestamp() === selectedDateRange()[0],
  'rounded-r-full': !!selectedDateRange()[1] && timestamp() === selectedDateRange()[1],
  'bg-primary text-white rounded-full':
    (!selectedDateRange()[0] && !!selectedDateRange()[1] && timestamp() === selectedDateRange()[1]) ||
    (!!selectedDateRange()[0] && !selectedDateRange()[1] && timestamp() === selectedDateRange()[0]),
});

const getSingleClassList = ({
  disabled,
  timestamp,
  selectedDate,
}: {
  disabled: Accessor<boolean>;
  timestamp: Accessor<TimeStamp>;
  selectedDate: Accessor<TimeStamp | undefined>;
}) => ({
  'rounded-circle bg-primary text-white': getDateSelected(timestamp(), selectedDate),
  'hover:rounded-circle hover:bg-primary hover:bg-opacity-50':
    !getDateSelected(timestamp(), selectedDate) && !disabled(),
});

const getCellClassList = ({
  disabled,
  timestamp,
  selectedDate,
  isInRange,
  isCurrentMonth,
  selectedDateRange,
  todayTimestamp,
  type,
}: {
  disabled: Accessor<boolean>;
  timestamp: Accessor<TimeStamp>;
  type: 'single' | 'range';
  selectedDate: Accessor<TimeStamp | undefined>;
  selectedDateRange: Accessor<[TimeStamp | undefined, TimeStamp | undefined]>;
  isInRange: (timestamp: TimeStamp) => boolean;
  isCurrentMonth: Accessor<boolean>;
  todayTimestamp: Accessor<TimeStamp>;
}) => ({
  'font-bold': todayTimestamp() === timestamp(),
  'opacity-25 cursor-not-allowed': disabled(),
  invisible: !isCurrentMonth(),
  ...(type === 'range'
    ? getRangeClassList({ disabled, timestamp, selectedDateRange, isInRange })
    : getSingleClassList({ disabled, timestamp, selectedDate })),
});

const getViewDateTimestamp = (props: CalendarProps): TimeStamp | undefined =>
  props.defaultViewDate
    ? dayjs(getTimeStampWithOffset({ text: props.defaultViewDate }))
        .startOf('month')
        .valueOf()
    : props.defaultType === 'single'
      ? props.defaultDate
        ? dayjs(getTimeStampWithOffset({ text: props.defaultDate }))
            .startOf('month')
            .valueOf()
        : undefined
      : props.defaultFromDate || props.defaultToDate
        ? dayjs(getTimeStampWithOffset({ text: (props.defaultFromDate ?? props.defaultToDate)! }))
            .startOf('month')
            .valueOf()
        : undefined;

const useCalendarData = ({
  todayTimestamp,
  viewDateTimestamp,
}: {
  todayTimestamp: Accessor<TimeStamp>;
  viewDateTimestamp: Accessor<TimeStamp | undefined>;
}) => {
  const firstDateTimestamp = () => viewDateTimestamp() ?? dayjs(todayTimestamp()).startOf('month').valueOf();

  const calendar = () =>
    getMonthlyCalendar(
      transform({
        timestamp: firstDateTimestamp(),
        formatType: DateFormatType.CalendarDate,
      }),
    );

  const rows = () =>
    calendar()
      .map(({ row }) => row)
      .reduce((previous: number[], row) => (previous.includes(row) ? previous : [...previous, row]), [])
      .sort();

  const columns = () =>
    calendar()
      .map(({ col }) => col)
      .reduce((previous: number[], col) => (previous.includes(col) ? previous : [...previous, col]), [])
      .sort();

  const timestamps: Accessor<Timestamps> = createMemo(() =>
    calendar().reduce(
      (previous, current) => ({ ...previous, [`${current.row}_${current.col}`]: current.timestamp }),
      {},
    ),
  );

  return {
    rows,
    columns,
    calendar,
    timestamps,
  };
};

/**
 * 日曆元件
 * @description 預設開啟月份依照以下規則
 * 1. defaultViewDate 月份
 * 2. defaultDate or defaultFromDate 月份
 * 3. 現實時間當月
 */
const Calendar = (props: CalendarProps) => {
  const [selectedDate, setSelectedDate] = createSignal<TimeStamp | undefined>(
    props.defaultType === 'single' && props.defaultDate
      ? getTimeStampWithOffset({ text: props.defaultDate })
      : undefined,
  );

  const [selectedDateRange, setSelectedDateRange] = createSignal<[TimeStamp | undefined, TimeStamp | undefined]>(
    props.defaultType === 'range'
      ? [
          props.defaultFromDate ? getTimeStampWithOffset({ text: props.defaultFromDate }) : undefined,
          props.defaultToDate ? getTimeStampWithOffset({ text: props.defaultToDate }) : undefined,
        ]
      : [undefined, undefined],
  );

  const [viewDateTimestamp, setViewDateTimestamp] = createSignal<TimeStamp | undefined>(getViewDateTimestamp(props));

  const todayTimestamp = () =>
    getTimeStampWithOffset({
      text: formatDateByCode({ code: DateCode.Today, formatType: DateFormatType.CalendarDate }),
    });

  const { rows, columns, timestamps } = useCalendarData({ viewDateTimestamp, todayTimestamp });

  const maxDate = () => (props.maxDate ? getTimeStampWithOffset({ text: props.maxDate }) : undefined);
  const minDate = () => (props.minDate ? getTimeStampWithOffset({ text: props.minDate }) : undefined);

  const isInRange = (timestamp: TimeStamp): boolean =>
    props.defaultType === 'range' && selectedDateRange()[0] && selectedDateRange()[1]
      ? selectedDateRange()[0]! <= timestamp && selectedDateRange()[1]! >= timestamp
      : false;

  const changeMonth = (offset: number) => {
    setViewDateTimestamp(dayjs(viewDateTimestamp()).add(offset, 'month').startOf('month').valueOf());
  };

  onMount(() => {
    props.ref?.({
      next: () => changeMonth(1),
      previous: () => changeMonth(-1),
      selectDate: (date: string) => {
        setSelectedDate(getTimeStampWithOffset({ text: date }));
      },
      viewDate: (date: string) => {
        setViewDateTimestamp(
          dayjs(getTimeStampWithOffset({ text: date }))
            .startOf('month')
            .valueOf(),
        );
      },
      switchTo: (offset: number) => changeMonth(offset),
    } as ICalendar);
  });

  createEffect(() => {
    if (props.defaultType === 'range') {
      const [from, to] = selectedDateRange().map((timestamp) =>
        timestamp ? transform({ timestamp, formatType: DateFormatType.CalendarDate }) : undefined,
      );
      if (from && to && (from !== props.defaultFromDate || to !== props.defaultToDate)) {
        props.onDateRangeChange?.([from, to]);
      }
    }
  });

  createEffect(() => {
    if (props.defaultType === 'single') {
      const date = selectedDate()
        ? transform({ timestamp: selectedDate()!, formatType: DateFormatType.CalendarDate })
        : undefined;
      if (date && date !== props.defaultDate) {
        props.onDateChange?.(date);
      }
    }
  });

  createEffect(() => {
    if (props.onViewDateChange) {
      const viewDate = dayjs(viewDateTimestamp());
      props.onViewDateChange({
        year: viewDate.year(),
        month: viewDate.month(),
        date: viewDate.date(),
      });
    }
  });

  return (
    <table
      data-testid={props.testId}
      class={formatClasses('border-collapse border-spacing-0 select-none', props.classes)}>
      <Show when={!props.disableCaption}>
        <caption>
          <div class="flex flex-row items-center justify-between">
            <Show when={props.enablePrevious} fallback={<div class="min-h-6 min-w-6" />}>
              <button
                type="button"
                class="flex h-6 w-6 items-center justify-center rounded border border-black-10 hover:bg-primary hover:bg-opacity-50"
                onClick={() => (props.onPrevious ? props.onPrevious() : changeMonth(-1))}>
                <LeftArrowIcon />
              </button>
            </Show>
            <p class="text-sm">
              <strong>{getMonths()[dayjs(viewDateTimestamp()).month()]}</strong>
              <strong class="ml-1">{dayjs(viewDateTimestamp()).year()}</strong>
            </p>
            <Show when={props.enableNext} fallback={<div class="min-h-6 min-w-6" />}>
              <button
                type="button"
                class="flex h-6 w-6 items-center justify-center rounded border border-black-10 hover:bg-primary hover:bg-opacity-50"
                onClick={() => (props.onNext ? props.onNext() : changeMonth(1))}>
                <RightArrowIcon />
              </button>
            </Show>
          </div>
        </caption>
      </Show>
      <thead>
        <tr>
          <For each={getWeekDays()}>
            {(day) => <th class="h-9 w-9 text-xs font-light text-black-3 opacity-50">{day}</th>}
          </For>
        </tr>
      </thead>
      <tbody>
        <For each={rows()}>
          {(row) => (
            <tr>
              <For each={columns()}>
                {(column) => {
                  const timestamp: Accessor<TimeStamp> = () => getDateTimestamp(column, row, timestamps());
                  const isCurrentMonth = () => dayjs(timestamp()).month() === dayjs(viewDateTimestamp()).month();
                  const disabled = () =>
                    Boolean(
                      (minDate() && dayjs(timestamp()).isBefore(dayjs(minDate()))) ||
                        (maxDate() && dayjs(timestamp()).isAfter(dayjs(maxDate()))),
                    );
                  return (
                    <td class="p-0">
                      <button
                        class={formatClasses(
                          'flex h-9 w-9 items-center justify-center text-xs',
                          getCellClassList({
                            isCurrentMonth,
                            isInRange,
                            timestamp,
                            type: props.defaultType,
                            disabled,
                            selectedDate,
                            selectedDateRange,
                            todayTimestamp,
                          }),
                        )}
                        disabled={disabled()}
                        type="button"
                        onClick={() =>
                          handleOnSelectDate({
                            timestamp,
                            defaultType: props.defaultType,
                            selectedDateRange,
                            setSelectedDate,
                            setSelectedDateRange,
                          })
                        }>
                        {dayjs(timestamp()).date()}
                      </button>
                    </td>
                  );
                }}
              </For>
            </tr>
          )}
        </For>
      </tbody>
    </table>
  );
};
export default Calendar;
