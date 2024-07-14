import { IBaseOverlay, IBaseOverlayProps } from '@shared/interfaces/base-component.interface';
import { formatClassList, formatClasses } from '@utilities/helpers/format.helper';
import { translate } from '@shared/hooks/use-translation';
import { Show, batch, createEffect, createSignal, mergeProps, on } from 'solid-js';
import { createStore } from 'solid-js/store';
import { DateCheckType, DateFormatType } from '@shared/enums';
import { checkRelativeDate } from '@utilities/helpers/time.helper';
import { TwoWayArrowIcon } from '@utilities/svg-components/TwoWayArrowIcon';
import Button, { ButtonVariants } from '../Button';
import DatePicker from '../DatePicker';
import style from './index.module.scss';

export interface IDatePickerModalProps extends IBaseOverlayProps {
  onConfirm: (from: string, to: string) => void;
  /**
   * [start, end] in yyyy-MM-dd format
   */
  dateRange: [string, string];
  defaultFrom?: string;
  defaultTo?: string;
  onCancel?: () => void;
  cancelClasses?: string;
  confirmClasses?: string;
}

enum SelectMode {
  Month = 'month',
  Date = 'date',
}

enum SelectDateMode {
  From = 'from',
  To = 'to',
}

function normalizeMonth(from: string) {
  return from.substring(0, 7);
}

function normalizeFrom(from: string, fromMonth: string, startDate: string) {
  // if fromMonth !== month of startDate, it means it must has 01 as day
  if (fromMonth !== normalizeMonth(startDate)) {
    return `${fromMonth}-01`;
  }
  // otherwise, startDate should be the first day of this month
  return startDate;
}

function normalizeTo(to: string, fromMonth: string, endDate: string) {
  // if to is not in the same month as fromMonth, set to to the last day of fromMonth
  // if to is after endDate, set to to endDate
  if (fromMonth !== normalizeMonth(to)) {
    // if fromMonth !== month of endDate, it means it must has 31 as day
    if (fromMonth !== normalizeMonth(endDate)) {
      const year = parseInt(fromMonth.substring(0, 4), 10);
      const month = parseInt(fromMonth.substring(5, 7), 10);
      const lastDay = new Date(year, month, 0).getDate();
      return `${fromMonth}-${lastDay}`;
    }
    // otherwise, endDate should be the last day of this month
    return endDate;
  }
  return to;
}

const DatePickerModal = (props: IDatePickerModalProps & IBaseOverlay) => {
  const [mode, setMode] = createSignal(SelectMode.Date);
  const [dateMode, setDateMode] = createSignal(SelectDateMode.From);
  const mergedProps = mergeProps(
    {
      // this is valid usage of default props
      // eslint-disable-next-line solid/reactivity
      defaultFrom: props.dateRange[0],
      // eslint-disable-next-line solid/reactivity
      defaultTo: props.dateRange[1],
    },
    props,
  );
  const [selectedDate, setSelectedDate] = createStore({
    from: mergedProps.defaultFrom,
    to: mergedProps.defaultTo,
    fromMonth: mergedProps.defaultFrom.substring(0, 7),
  });

  const setFromDate = (date: string) => {
    batch(() => {
      setSelectedDate('from', date);
      // if new from is after to, set to to the same date as from
      if (
        checkRelativeDate({
          source: date,
          target: selectedDate.to,
          checkType: DateCheckType.After,
        })
      ) {
        setSelectedDate('to', date);
      }
      setSelectedDate('fromMonth', normalizeMonth(date));
    });
  };

  const setToDate = (date: string) => {
    batch(() => {
      setSelectedDate('to', date);
      // if new to is before from, set from to the same date as to
      if (
        checkRelativeDate({
          source: selectedDate.from,
          target: date,
          checkType: DateCheckType.After,
        })
      ) {
        setSelectedDate('from', date);
        setSelectedDate('fromMonth', normalizeMonth(date));
      }
    });
  };

  const setMonth = (month: string) => {
    batch(() => {
      setSelectedDate('fromMonth', month);
      setSelectedDate('from', normalizeFrom(selectedDate.from, month, props.dateRange[0]));
      setSelectedDate('to', normalizeTo(selectedDate.to, month, props.dateRange[1]));
    });
  };

  createEffect(
    on(mode, () => {
      if (mode() === SelectMode.Month) {
        setSelectedDate('from', normalizeFrom(selectedDate.from, selectedDate.fromMonth, props.dateRange[0]));
        setSelectedDate('to', normalizeTo(selectedDate.to, selectedDate.fromMonth, props.dateRange[1]));
      }
    }),
  );

  return (
    <div data-testid={props.testId} class={formatClasses('flex flex-col gap-3 pb-2_25', props.classes)}>
      <div class="item-center flex h-7_5 justify-around text-sm text-black-3">
        <div
          onClick={() => setMode(SelectMode.Date)}
          class={formatClasses('cursor-pointer', {
            'font-semibold text-primary': mode() === SelectMode.Date,
          })}>
          {translate('6789bet.betRecord.betDate')}
        </div>
        <TwoWayArrowIcon
          classes={formatClasses('h-5 w-5', {
            'rotate-180 transform': mode() !== SelectMode.Month,
          })}
        />
        <div
          onClick={() => setMode(SelectMode.Month)}
          class={formatClasses('cursor-pointer', {
            'font-semibold text-primary': mode() === SelectMode.Month,
          })}>
          {translate('6789bet.betRecord.betMonth')}
        </div>
      </div>
      <div class="w-full">
        <Show
          when={mode() !== SelectMode.Month}
          fallback={
            <div
              class={formatClasses(
                'min-h-9 rounded-10 bg-layer-3 px-2_5',
                style['component-date-picker-modal__selector-area'],
              )}>
              <div class="flex h-9 items-center justify-between text-sm leading-9 text-black-3">
                <span>{translate('6789bet.betRecord.month')}</span>
                <span class="text-primary">{selectedDate.fromMonth}</span>
              </div>
              <div class="py-4">
                <div class="flex h-25 items-center overflow-hidden py-2_5">
                  <DatePicker
                    format={DateFormatType.CalendarMonth}
                    defaultSelectedValue={selectedDate.fromMonth}
                    onChange={setMonth}
                    selectedValue={selectedDate.fromMonth}
                    dateRange={props.dateRange}
                  />
                </div>
              </div>
            </div>
          }>
          <div
            class={formatClasses(
              'min-h-9 cursor-pointer rounded-10 bg-layer-3 px-2_5',
              style['component-date-picker-modal__selector-area'],
            )}
            onClick={() => setDateMode(SelectDateMode.From)}>
            <div class="flex h-9 items-center justify-between text-sm leading-9 text-black-3">
              <span>{translate('6789bet.betRecord.from')}</span>
              <span
                class={formatClassList({
                  'text-primary': dateMode() === SelectDateMode.From,
                })}>
                {selectedDate.from}
              </span>
            </div>
            <Show when={dateMode() === SelectDateMode.From}>
              <div class="py-4">
                <div class="flex h-25 items-center overflow-hidden py-2_5">
                  <DatePicker
                    format={DateFormatType.CalendarDate}
                    defaultSelectedValue={selectedDate.from}
                    onChange={setFromDate}
                    selectedValue={selectedDate.from}
                    dateRange={props.dateRange}
                  />
                </div>
              </div>
            </Show>
          </div>
          <div
            class={formatClasses(
              'mt-4 min-h-9 cursor-pointer rounded-10 bg-layer-3 px-2_5',
              style['component-date-picker-modal__selector-area'],
            )}
            onClick={() => setDateMode(SelectDateMode.To)}>
            <div class="flex h-9 items-center justify-between text-sm leading-9 text-black-3">
              <span>{translate('6789bet.betRecord.to')}</span>
              <span
                class={formatClassList({
                  'text-primary': dateMode() === SelectDateMode.To,
                  'text-black-1': dateMode() !== SelectDateMode.To,
                })}>
                {selectedDate.to}
              </span>
            </div>
            <Show when={dateMode() === SelectDateMode.To}>
              <div class="py-4">
                <div class="flex h-25 items-center overflow-hidden py-2_5">
                  <DatePicker
                    format={DateFormatType.CalendarDate}
                    defaultSelectedValue={selectedDate.to}
                    onChange={setToDate}
                    selectedValue={selectedDate.to}
                    dateRange={props.dateRange}
                  />
                </div>
              </div>
            </Show>
          </div>
        </Show>
      </div>
      <Button
        testId="DatePickerModalConfirm"
        variant={ButtonVariants.primary}
        classes={props.confirmClasses}
        onClick={() => {
          props.onClose();
          props.onConfirm(selectedDate.from, selectedDate.to);
        }}>
        {translate('common.confirm')}
      </Button>
      <Button
        testId="DatePickerModalCancel"
        variant={ButtonVariants.outline}
        classes={props.cancelClasses}
        onClick={() => {
          props.onClose();
          props.onCancel?.();
        }}>
        {translate('common.cancel')}
      </Button>
    </div>
  );
};
export default DatePickerModal;
