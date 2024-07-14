import { IBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { customTwMerge } from '@utilities/helpers/format.helper';
import { Show, createEffect, createSignal } from 'solid-js';
import { padStart } from '@utilities/helpers/utilities.helper';
import { DateFormatType } from '@shared/enums';
import Wheel from '../Wheel';

export interface ITimePickerProps extends IBaseComponentProps {
  // we don't use boolean here for further extension
  format?: DateFormatType.Times | DateFormatType.SimpleHourMinutes;
  defaultSelectedValue?: string;
  selectedValue?: string;
  onChange: (value: string) => void;
}

function getIndexToTimeString(index: number) {
  return padStart(String(index), 2, '0');
}

function generateOptionsFromLength(length: number) {
  const arr: {
    label: string;
    value: string;
  }[] = [];
  for (let i = 0; i < length; i++) {
    const text = getIndexToTimeString(i);
    arr.push({
      label: text,
      value: text,
    });
  }
  return arr;
}

function normalizeTimeValue(value: string, format: string) {
  // check the value has correct format or not
  const hour = value.substring(0, 2) || '00';
  const minute = value.substring(3, 5) || '00';
  const second = value.substring(6, 8) || '00';
  if (format === 'HH:mm') {
    return `${hour}:${minute}`;
  }
  return `${hour}:${minute}:${second}`;
}

function getNormalizeTimeUnit({ format, selectedValue }: { format: () => string; selectedValue: () => string }) {
  return {
    hour: () => normalizeTimeValue(selectedValue(), format()).substring(0, 2),
    minute: () => normalizeTimeValue(selectedValue(), format()).substring(3, 5),
    second: () => normalizeTimeValue(selectedValue(), format()).substring(6, 8),
  };
}

const TimePicker = (props: ITimePickerProps) => {
  // hour options from 00 to 23
  const hourOptions = generateOptionsFromLength(24);
  // minute options from 00 to 59
  const minuteOptions = generateOptionsFromLength(60);
  // second options from 00 to 59
  const secondOptions = generateOptionsFromLength(60);
  const allowSecond = () => props.format === DateFormatType.Times;
  const [selectedValue, setSelectedValue] = createSignal<string>(props.defaultSelectedValue ?? '');
  const format = () => props.format ?? 'HH:mm';
  const updateSelectedValue = (value: string) => {
    setSelectedValue(value);
    if (props.onChange) {
      props.onChange(value);
    }
  };
  const { hour, minute, second } = getNormalizeTimeUnit({
    format,
    selectedValue,
  });
  const updateValue = (newHour: string, newMinute: string, newSecond: string) => {
    let newValue = `${newHour}:${newMinute}`;
    if (allowSecond()) {
      newValue += `:${newSecond}`;
    }
    updateSelectedValue(newValue);
  };

  const onChangeHour = (value: string) => {
    updateValue(padStart(value, 2, '0'), minute(), second());
  };

  const onChangeMinute = (value: string) => {
    updateValue(hour(), padStart(value, 2, '0'), second());
  };

  const onChangeSecond = (value: string) => {
    updateValue(hour(), minute(), padStart(value, 2, '0'));
  };

  createEffect(() => {
    if (props.selectedValue) {
      setSelectedValue(props.selectedValue);
    }
  });

  return (
    <div data-testid={props.testId} class={customTwMerge('flex flex-row flex-1 w-full', props.classes)}>
      <Wheel options={hourOptions} onChange={onChangeHour} defaultSelectedValue={hour()} selectedValue={hour()} />
      <Wheel
        options={minuteOptions}
        onChange={onChangeMinute}
        defaultSelectedValue={minute()}
        selectedValue={minute()}
      />
      <Show when={allowSecond()}>
        <Wheel
          options={secondOptions}
          onChange={onChangeSecond}
          defaultSelectedValue={second()}
          selectedValue={second()}
        />
      </Show>
    </div>
  );
};
export default TimePicker;
