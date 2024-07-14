import { IBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { customTwMerge } from '@utilities/helpers/format.helper';
import { Show, createEffect, createSignal } from 'solid-js';
import { padStart } from '@utilities/helpers/utilities.helper';
import {
  formatDateFromDateString,
  normalizeDate,
  normalizeDateStringWithinRange,
  normalizeMonth,
  parseCalendarDateInDecimalFromDateString,
} from '@utilities/helpers/time.helper';
import { DateFormatType } from '@shared/enums';
import Wheel, { IWheelOption } from '../Wheel';

type DatePickerFormat = DateFormatType.CalendarDate | DateFormatType.CalendarMonth;

export interface IDatePickerProps extends IBaseComponentProps {
  // we don't use boolean here for further extension
  format?: DatePickerFormat;
  defaultSelectedValue?: string;
  selectedValue?: string;
  onChange: (value: string) => void;
  dateRange: [string, string];
}

function normalizeDateValue(value: string, format: DatePickerFormat, startDate: string) {
  // check the value has correct format or not
  const startYear = Number(startDate.substring(0, 4));
  const startMonth = Number(startDate.substring(5, 7));
  const startDay = Number(startDate.substring(8, 10));
  const year = value.substring(0, 4) || startYear;
  const month = value.substring(5, 7) || startMonth;
  const day = value.substring(8, 10) || startDay;
  if (format === DateFormatType.CalendarMonth) {
    return `${year}-${month}`;
  }
  return `${year}-${month}-${day}`;
}

function getNormalizeDateUnit({
  format,
  selectedValue,
  startDate,
}: {
  format: () => DatePickerFormat;
  selectedValue: () => string;
  startDate: () => string;
}) {
  return {
    year: () =>
      formatDateFromDateString(normalizeDateValue(selectedValue(), format(), startDate()), {
        formatType: DateFormatType.PureYear,
      }),
    month: () =>
      formatDateFromDateString(normalizeDateValue(selectedValue(), format(), startDate()), {
        formatType: DateFormatType.PureMonth,
      }),
    date: () =>
      formatDateFromDateString(normalizeDateValue(selectedValue(), format(), startDate()), {
        formatType: DateFormatType.PureDate,
      }),
  };
}

const generateDayOptions = (startDay: number, endDay: number) => {
  const dayOptions: IWheelOption[] = [];
  for (let k = startDay; k <= endDay; k++) {
    dayOptions.push({
      label: padStart(String(k), 2, '0'),
      value: padStart(String(k), 2, '0'),
    });
  }
  return dayOptions;
};

const DatePicker = (props: IDatePickerProps) => {
  const [selectedValue, setSelectedValue] = createSignal<string>(props.defaultSelectedValue ?? '');
  const yearOptions = () => {
    const [start, end] = props.dateRange;
    const startYear = Number(start.substring(0, 4));
    const endYear = Number(end.substring(0, 4));
    const arr: IWheelOption[] = [];
    for (let i = startYear; i <= endYear; i++) {
      arr.push({
        label: String(i),
        value: String(i),
      });
    }
    return arr;
  };

  const { year, month, date } = getNormalizeDateUnit({
    format: () => props.format ?? DateFormatType.CalendarDate,
    selectedValue,
    startDate: () => props.dateRange[0],
  });
  const monthOptions = () => {
    // display month from current year but not exceed the start date and end date
    const [start, end] = props.dateRange;
    const { year: startYear, month: startMonth } = parseCalendarDateInDecimalFromDateString(start);
    const { year: endYear, month: endMonth } = parseCalendarDateInDecimalFromDateString(end);
    const yearMonthMap: {
      [key: number]: IWheelOption[];
    } = {};

    for (let i = startYear; i <= endYear; i++) {
      const startMonthOfYear = i === startYear ? startMonth : 1;
      const endMonthOfYear = i === endYear ? endMonth : 12;
      yearMonthMap[i] = [];
      for (let j = startMonthOfYear; j <= endMonthOfYear; j++) {
        yearMonthMap[i].push({
          label: padStart(String(j), 2, '0'),
          value: padStart(String(j), 2, '0'),
        });
      }
    }

    return yearMonthMap[Number(year())] ?? [];
  };

  const dateOptions = () => {
    const [start, end] = props.dateRange;
    const { year: startYear, month: startMonth, date: startDate } = parseCalendarDateInDecimalFromDateString(start);
    const { year: endYear, month: endMonth, date: endDate } = parseCalendarDateInDecimalFromDateString(end);
    const yearMonthDateMap: {
      [key: string]: IWheelOption[];
    } = {};

    for (let i = startYear; i <= endYear; i++) {
      const startMonthOfYear = i === startYear ? startMonth : 1;
      const endMonthOfYear = i === endYear ? endMonth : 12;
      for (let j = startMonthOfYear; j <= endMonthOfYear; j++) {
        const startDayOfMonth = i === startYear && j === startMonth ? startDate : 1;
        const endDayOfMonth = i === endYear && j === endMonth ? endDate : new Date(i, j, 0).getDate();
        const key = `${i}-${j}`;
        yearMonthDateMap[key] = generateDayOptions(startDayOfMonth, endDayOfMonth);
      }
    }

    return yearMonthDateMap[`${Number(year())}-${Number(month())}`] ?? [];
  };

  const updateValue = (newYear: string, newMonth: string, newDate: string) => {
    const [startDate, endDate] = props.dateRange;
    const normalizedMonth = normalizeMonth({
      month: newMonth,
      year: newYear,
      startDate,
      endDate,
    });
    const normalizedDate = normalizeDate({
      date: newDate,
      month: normalizedMonth,
      year: newYear,
      startDate,
      endDate,
    });
    const newValue = normalizeDateValue(
      `${newYear}-${normalizedMonth}-${normalizedDate}`,
      props.format ?? DateFormatType.CalendarDate,
      props.dateRange[0],
    );
    if (newValue !== selectedValue()) {
      setSelectedValue(newValue);
      props.onChange(newValue);
    }
  };

  const onChangeYear = (value: string) => {
    updateValue(value, month(), date());
  };

  const onChangeMonth = (value: string) => {
    updateValue(year(), value, date());
  };

  const onChangeDate = (value: string) => {
    updateValue(year(), month(), value);
  };

  createEffect(() => {
    const normalizedDate = normalizeDateStringWithinRange(selectedValue(), props.dateRange[0], props.dateRange[1]);
    const newValue = normalizeDateValue(
      normalizedDate,
      props.format ?? DateFormatType.CalendarDate,
      props.dateRange[0],
    );
    if (newValue !== selectedValue()) {
      props.onChange(newValue);
    }
  });

  createEffect(() => {
    if (props.selectedValue) {
      setSelectedValue(props.selectedValue);
    }
  });

  return (
    <div data-testid={props.testId} class={customTwMerge('flex flex-row flex-1 w-full', props.classes)}>
      <Wheel defaultSelectedValue={year()} selectedValue={year()} options={yearOptions()} onChange={onChangeYear} />
      <Wheel defaultSelectedValue={month()} selectedValue={month()} options={monthOptions()} onChange={onChangeMonth} />
      <Show when={props.format === DateFormatType.CalendarDate}>
        <Wheel defaultSelectedValue={date()} selectedValue={date()} options={dateOptions()} onChange={onChangeDate} />
      </Show>
    </div>
  );
};
export default DatePicker;
