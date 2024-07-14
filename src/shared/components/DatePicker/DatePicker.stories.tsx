import { DateFormatType } from '@shared/enums';
import Component from './index';
import type { Meta, StoryObj } from 'storybook-solidjs';

const meta: Meta<typeof Component> = {
  component: Component,
  argTypes: {
    onChange: {
      action: 'changed',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/solid/api/csf
 * to learn how to use render functions.
 */
export const BaseDatePickerDemo: Story = {
  args: {
    format: DateFormatType.CalendarDate,
    dateRange: ['2023-10-01', '2023-11-11'],
  },
};

export const MonthPicker: Story = {
  args: {
    format: DateFormatType.CalendarMonth,
    dateRange: ['2023-10-01', '2023-11-11'],
  },
};

export const WithDefaultDate: Story = {
  args: {
    format: DateFormatType.CalendarDate,
    defaultSelectedValue: '2023-12-12',
    dateRange: ['2023-10-01', '2023-12-30'],
  },
};
