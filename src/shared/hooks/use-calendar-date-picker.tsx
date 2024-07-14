import { Accessor, For, createEffect, createSignal, mergeProps, on, onCleanup } from 'solid-js';
import { toggleBottomSheet, toggleOverlay } from '@shared/hooks/use-overlay';
import { DateFormatType, LocaleDash, OverlayType } from '@shared/enums';
import Calendar, { ICalendar } from '@shared/components/Calendar';
import DatePicker from '@shared/components/DatePicker';
import { IBaseOverlay, IBaseOverlayProps } from '@shared/interfaces';
import Card from '@shared/components/Card';
import { getUTCDayInstance } from '@utilities/helpers/time.helper';
import Popover from '@shared/components/Popover';
import { calendarMonths, calendarZhMonths } from '@shared/constants/time.constants';
import LeftArrowIcon from '@utilities/svg-components/LeftArrowIcon';
import { RightArrowIcon } from '@utilities/svg-components/RightArrowIcon';
import { registerDirective } from '@utilities/helpers/directive.helper';
import { DomPropertyCbParams, domProperty } from '@utilities/directives/dom-property-directive';
import { formatClasses } from '@utilities/helpers/format.helper';
import { isMobile } from './use-window-size';
import { translate, translation } from './use-translation';

registerDirective(domProperty);

type CalendarDatePickerHook = {
  open: () => void;
  close: () => void;
};

type CalendarDatePickerProps = {
  defaultValue?: string;
  onSubmit: (onClose: () => void, date: string | undefined) => void;
  onChange?: (date: string) => void;
  dateRange: [string, string];
};

type DatePickerModalProps = CalendarDatePickerProps & IBaseOverlay & IBaseOverlayProps;

const DatePickerModal = (props: DatePickerModalProps) => {
  const dateInstance = getUTCDayInstance(props.defaultValue);
  const [selectedDate, selectDate] = createSignal<string | undefined>(props.defaultValue);
  const [displayMonth, setDisplayMonth] = createSignal<number>(dateInstance.month());
  const [displayYear, setDisplayYear] = createSignal<number>(dateInstance.year());
  const [calendar, ref] = createSignal<ICalendar | undefined>();
  const [width, setWidth] = createSignal<DOMRect['width']>();
  const months = () =>
    translation.language === LocaleDash.zh_CN || translation.language === LocaleDash.zh_HK
      ? calendarZhMonths
      : calendarMonths;
  const currentMonth = () => months()[displayMonth()];
  const yearRange = () => props.dateRange.map((range) => getUTCDayInstance(range).year());
  const years = () =>
    Array.from({
      length: yearRange()[1] - yearRange()[0],
    })
      .map((_, index) => yearRange()[1] - index)
      .reduce((previous: number[][], current: number) => {
        if (previous[previous.length - 1]?.length < 9) {
          previous[previous.length - 1].push(current);
          return previous;
        }
        return [...previous, [current]];
      }, []);

  createEffect(() => {
    if (calendar()) {
      calendar()!.viewDate(`${displayYear()}-${displayMonth() + 1}-01`);
    }
  });

  return (
    <Card classes="select-none p-2_5">
      <div
        use:domProperty={{
          keyList: ['domRectWidth'],
          cb: (values: DomPropertyCbParams<['domRectWidth']>) => {
            const [domRectWidth] = values;
            setWidth(domRectWidth);
          },
        }}
        class="p-2 text-sm font-semibold">
        <div class="flex flex-row items-center justify-between">
          <button onClick={() => props.onClose()} type="button">
            {translate('common.cancel')}
          </button>
          <span>{translate('common.dateSelection')}</span>
          <button onClick={() => props.onSubmit(props.onClose, selectedDate())} type="button">
            {translate('common.sure')}
          </button>
        </div>
        <div class="mt-2 flex flex-row items-center justify-between">
          <div class="flex flex-row items-center gap-4">
            <Popover
              outsideClickThrough
              childrenContainerClasses="translate-x-[-10px]"
              triggerSlot={({ togglePopover }) => (
                <button onClick={togglePopover} type="button" class="text-sm font-semibold">
                  {currentMonth()}
                </button>
              )}
              popoverSlot={({ closePopover }) => (
                <Card classes="p-0 py-2">
                  <div class="text-normal flex flex-row flex-wrap gap-1 text-xs" style={{ width: `${width()}px` }}>
                    <For each={months()}>
                      {(month, index) => (
                        <button
                          class={formatClasses(
                            'flex shrink grow basis-1/4 items-center justify-center text-nowrap border-black-4 hover:text-primary',
                            {
                              'text-primary': month === currentMonth(),
                            },
                          )}
                          type="button"
                          onClick={() => {
                            setDisplayMonth(index());
                            closePopover();
                          }}>
                          {month}
                        </button>
                      )}
                    </For>
                  </div>
                </Card>
              )}
            />
            <Popover
              outsideClickThrough
              childrenContainerClasses="translate-x-[-80px]"
              triggerSlot={({ togglePopover }) => (
                <button onClick={togglePopover} type="button" class="text-sm font-semibold">
                  {displayYear()}
                </button>
              )}
              popoverSlot={({ closePopover }) => {
                const [page, setPage] = createSignal<number>(0);
                return (
                  <Card classes="flex flex-row items-center p-0 py-2">
                    <button
                      type="button"
                      class="flex h-6 w-6 items-center justify-center rounded"
                      disabled={page() === 0}
                      onClick={() => setPage((previous) => previous - 1)}>
                      <LeftArrowIcon />
                    </button>
                    <div class="text-normal flex flex-row flex-wrap gap-1 text-xs" style={{ width: `${width()}px` }}>
                      <For each={years()[page()]}>
                        {(year) => (
                          <button
                            class={formatClasses(
                              'flex shrink grow basis-1/4 items-center justify-center text-nowrap border-black-4 hover:text-primary',
                              {
                                'text-primary': year === displayYear(),
                              },
                            )}
                            type="button"
                            onClick={() => {
                              setDisplayYear(year);
                              closePopover();
                            }}>
                            {year}
                          </button>
                        )}
                      </For>
                    </div>
                    <button
                      type="button"
                      class="flex h-6 w-6 items-center justify-center rounded"
                      disabled={page() === years().length}
                      onClick={() => setPage((previous) => previous + 1)}>
                      <RightArrowIcon />
                    </button>
                  </Card>
                );
              }}
            />
          </div>
          <div class="flex flex-row items-center">
            <button
              type="button"
              class="mr-2 flex h-6 w-6 items-center justify-center rounded border border-black-10"
              onClick={() => calendar()?.previous()}>
              <LeftArrowIcon />
            </button>
            <button
              type="button"
              class="flex h-6 w-6 items-center justify-center rounded border border-black-10"
              onClick={() => calendar()?.next()}>
              <RightArrowIcon />
            </button>
          </div>
        </div>
      </div>
      <Calendar
        ref={ref}
        disableCaption
        minDate={props.dateRange[0]}
        maxDate={props.dateRange[1]}
        defaultDate={props.defaultValue}
        defaultType="single"
        onViewDateChange={({ year, month }) => {
          setDisplayYear(year);
          setDisplayMonth(month);
        }}
        onDateChange={(value: string) => {
          props.onChange?.(value);
          selectDate(value);
        }}
      />
    </Card>
  );
};

const toggleDatePicker = (props: CalendarDatePickerProps, taskId: string) => {
  toggleOverlay<CalendarDatePickerProps>({
    type: OverlayType.Custom,
    taskId,
    action: 'open',
    config: {
      component: DatePickerModal,
      props,
    },
    backgroundClose: true,
  });
};

const toggleDateBottomSheet = (
  { defaultValue, dateRange, onChange, onSubmit }: CalendarDatePickerProps,
  taskId: string,
) => {
  const [selectedDate, selectDate] = createSignal<string | undefined>(defaultValue);
  toggleBottomSheet(
    {
      classes: 'max-h-none',
      backgroundClose: true,
      disableHeader: false,
      headerSlot: ({ onClose }) => (
        <div class="flex h-13_75 items-center justify-between bg-layer-1 px-3_75">
          <button type="button" class="text-sm" onClick={() => onClose()}>
            {translate('vd000.cancel')}
          </button>
          <span class="text-sm">{translate('common.dateSelection')}</span>
          <button
            type="button"
            class="text-sm"
            onClick={() => {
              onSubmit(onClose, selectedDate());
            }}>
            {translate('vd000.common.determine')}
          </button>
        </div>
      ),
      contentSlot: () => (
        <div class="bg-layer-3">
          <DatePicker
            format={DateFormatType.CalendarDate}
            defaultSelectedValue={defaultValue}
            onChange={(value) => {
              onChange?.(value);
              selectDate(value);
            }}
            dateRange={dateRange}
          />
        </div>
      ),
    },
    { taskId },
  );
};

/**
 * @description
 * 1. pc 開啟單選日曆彈窗
 * 2. mobile 開啟時間選擇bottom sheet
 * @param props toggle calendar date picker props
 * @returns {CalendarDatePickerHook}
 */
export const useCalendarDatePicker = (
  props: Accessor<Omit<CalendarDatePickerProps, 'defaultValue'> & { selectedDate: string | undefined }>,
): CalendarDatePickerHook => {
  const [selectedDate, selectDate] = createSignal<string | undefined>(props().selectedDate);
  const taskId = 'calendar-date-picker-modal';
  const mergedProps: CalendarDatePickerProps = mergeProps<[CalendarDatePickerProps, Partial<CalendarDatePickerProps>]>(
    props(),
    {
      onChange: (value: string) => selectDate(value),
    },
  );
  let isOpen: boolean;
  const open = () => {
    if (isMobile()) {
      toggleDateBottomSheet({ ...mergedProps, defaultValue: selectedDate() }, taskId);
    } else {
      toggleDatePicker({ ...mergedProps, defaultValue: selectedDate() }, taskId);
    }
    isOpen = true;
  };

  const close = () => {
    toggleOverlay({ action: 'close', taskId });
    isOpen = false;
  };

  // !版型自動切換
  createEffect(
    on([isMobile], () => {
      if (isOpen) {
        close();
        open();
      }
    }),
  );

  onCleanup(() => {
    close();
  });

  return {
    open: () => {
      selectDate(props().selectedDate);
      open();
    },
    close,
  };
};
