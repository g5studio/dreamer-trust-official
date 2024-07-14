import PasswordVisibilitySwitch from './index';
import type { Meta, StoryObj } from 'storybook-solidjs';

const meta: Meta<typeof PasswordVisibilitySwitch> = {
  component: PasswordVisibilitySwitch,
  argTypes: {
    classes: {
      options: ['w-30', 'w-50'],
      control: { type: 'radio' },
    },
    openIcon: {
      control: { type: 'text' },
    },
    closeIcon: {
      control: { type: 'text' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof PasswordVisibilitySwitch>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/solid/api/csf
 * to learn how to use render functions.
 */
export const NormalSwitch: Story = {
  args: {},
};
