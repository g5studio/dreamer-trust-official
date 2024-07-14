import Component from './index';
import type { Meta, StoryObj } from 'storybook-solidjs';

const meta: Meta<typeof Component> = {
  component: Component,
  argTypes: {
    // TODO configure you story dashboard here
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/solid/api/csf
 * to learn how to use render functions.
 */
export const BaseCountdownBlockDemo: Story = {
  args: {
    startTime: Date.now() - 10 * 1000,
    endTime: Date.now() + 20 * 1000,
  },
};

export const PausedCountdownBlockDemo: Story = {
  args: {
    startTime: Date.now() - 10 * 1000,
    endTime: Date.now() + 20 * 1000,
    isPaused: true,
  },
};
