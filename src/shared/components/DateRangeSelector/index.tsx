import { IBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { ArrowDownIcon } from '@utilities/svg-components/ArrowDownIcon';
import { useDatePicker } from '@shared/hooks/use-date-picker';
import Selector from '@shared/components/Selector';
import Calendar, { ICalendar } from '@shared/components/Calendar';
import { createSignal } from 'solid-js';
import { addDate, formatDate, getTimeStampWithOffset } from '@utilities/helpers/time.helper';
import { DateFormatType } from '@shared/enums';

export interface IDateRangeSelectorProps extends IBaseComponentProps {
  to: string;
  from: string;
  onChange: (from: string, to: string) => void;
  dateRange: [string, string];
}

const DateRangeSelector = (props: IDateRangeSelectorProps) => {
  const [leftCalendar, leftCalendarRef] = createSignal<ICalendar | undefined>(undefined);
  const [rightCalendar, rightCalendarRef] = createSignal<ICalendar | undefined>(undefined);

  const { open, close } = useDatePicker(() => ({
    defaultFrom: props.from,
    defaultTo: props.to,
    dateRange: props.dateRange,
    onConfirm: props.onChange,
    handleOnClose: () => {},
  }));

  const handleOnDateRangeChange: (range: [string, string]) => void = ([from, to]) => {
    props.onChange(from, to);
  };

  return (
    <Selector
      testId={props.testId}
      triggerClasses="pl-4 pr-2 h-7_5"
      onMobileMenuOpen={open}
      onMobileMenuClose={close}
      dropdownMenuClasses="h-auto"
      popoverSlot={(closePopover) => (
        <div class="flex flex-row items-stretch p-3">
          <Calendar
            defaultType="range"
            ref={leftCalendarRef}
            defaultViewDate={props.from}
            defaultFromDate={props.from}
            defaultToDate={props.to}
            classes="mr-6"
            enablePrevious
            onDateRangeChange={(range) => {
              handleOnDateRangeChange(range);
              closePopover();
            }}
            minDate={props.dateRange[0]}
            maxDate={props.dateRange[1]}
            onPrevious={() => {
              leftCalendar()?.switchTo(-2);
              rightCalendar()?.switchTo(-2);
            }}
          />
          <Calendar
            ref={rightCalendarRef}
            defaultViewDate={formatDate({
              timestamp: addDate({ timestamp: getTimeStampWithOffset({ text: props.from }), offset: 1 }, 'month'),
              formatType: DateFormatType.CalendarDate,
            })}
            defaultFromDate={props.from}
            defaultToDate={props.to}
            defaultType="range"
            enableNext
            minDate={props.dateRange[0]}
            maxDate={props.dateRange[1]}
            onDateRangeChange={(range) => {
              handleOnDateRangeChange(range);
              closePopover();
            }}
            onNext={() => {
              leftCalendar()?.switchTo(2);
              rightCalendar()?.switchTo(2);
            }}
          />
        </div>
      )}
      iconClasses={{
        open: 'rotate-180',
        close: 'rotate-0',
      }}
      iconSlot={() => <ArrowDownIcon height={'1rem'} width={'1rem'} />}>
      <div class="text-center text-black-1">
        <span class="px-1 text-center text-xs text-black-1">{props.from}</span>
        &nbsp;&nbsp;~&nbsp;&nbsp;
        <span class="px-1 text-center text-xs text-black-1">{props.to}</span>
      </div>
    </Selector>
  );
};
export default DateRangeSelector;
