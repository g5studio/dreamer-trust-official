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
export const BaseWheelDemo: Story = {
  args: {
    options: [
      {
        label: 'Option 1',
        value: 'option1',
      },
      {
        label: 'Option 2',
        value: 'option2',
      },
      {
        label: 'Option 3',
        value: 'option3',
      },
    ],
    defaultSelectedValue: 'option2',
  },
};

export const SmallerWheelDemo: Story = {
  args: {
    options: [
      {
        label: 'Option 1',
        value: 'option1',
      },
      {
        label: 'Option 2',
        value: 'option2',
      },
      {
        label: 'Option 3',
        value: 'option3',
      },
    ],
    defaultSelectedValue: 'option2',
  },
  decorators: [
    (Story) => (
      <div class="flex h-25 items-center overflow-hidden rounded-5 bg-layer-3 px-2">
        <Story />
      </div>
    ),
  ],
};
