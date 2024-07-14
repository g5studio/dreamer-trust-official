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
export const BaseTimePickerDemo: Story = {};

export const WithTime: Story = {
  args: {
    format: DateFormatType.Times,
  },
};

export const WithDefaultTime: Story = {
  args: {
    format: DateFormatType.SimpleHourMinutes,
    defaultSelectedValue: '12:00',
  },
};
