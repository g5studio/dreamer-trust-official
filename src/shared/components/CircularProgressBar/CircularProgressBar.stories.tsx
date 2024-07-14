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
export const BaseCircularProgressBarDemo: Story = {
  args: {
    value: 10,
    text: '10%',
  },
  render: (props) => (
    <div class="w-20 h-20">
      <Component {...props} />
    </div>
  ),
};
