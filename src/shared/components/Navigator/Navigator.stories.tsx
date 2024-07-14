import Component, { INavigatorProps } from './index';
import type { Meta, StoryObj } from 'storybook-solidjs';

const meta: Meta<INavigatorProps> = {
  component: Component,
  argTypes: {
    titleI18nKey: {
      control: { type: 'text' },
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
export const Navigator: Story = {
  args: {
    titleI18nKey: 'Demo',
  },
};
