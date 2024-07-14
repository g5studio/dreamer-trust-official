import Component from './index';
import type { Meta, StoryObj } from 'storybook-solidjs';

const meta: Meta<typeof Component> = {
  component: Component,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Component>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/solid/api/csf
 * to learn how to use render functions.
 */
export const BaseProgressBarDemo: Story = {
  args: {
    progress: 0.2,
  },
  render: (props) => (
    <div class="w-25 h-20 flex items-center justify-center">
      <Component {...props} />
    </div>
  ),
};
