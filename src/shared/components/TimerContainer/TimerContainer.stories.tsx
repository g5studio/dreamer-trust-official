import Component from './index';
import type { Meta, StoryObj } from 'storybook-solidjs';

const meta: Meta<typeof Component> = {
  component: Component,
  argTypes: {
    countMode: {
      defaultValue: 'down',
      options: ['up', 'down'],
      control: { type: 'radio' },
    },
    countUnit: {
      defaultValue: 'second',
      options: ['millisecond', 'second', 'minute', 'hour'],
      control: { type: 'radio' },
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
export const BaseTimerContainerDemo: Story = {
  args: {
    countMode: 'up',
    min: 0,
    max: 3,
    onTimeout: () => {},
    children: ({ current }) => {
      return <div>{current()}</div>;
    },
  },
};
