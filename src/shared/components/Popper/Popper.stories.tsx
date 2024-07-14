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
export const BottomPopperDemo: Story = {
  args: {
    text: 'Some Text',
    position: 'bottom',
    direction: 'bottomTop',
    indicatorLength: 50,
    offsetY: 10,
  },
  render: (args) => (
    <div class="w-50 h-50 ">
      <div class="relative ml-20 mt-20 w-20">
        <div>Element</div>
        <Component {...args} />
      </div>
    </div>
  ),
};

export const TopPopperDemo: Story = {
  args: {
    text: 'Some Text',
    position: 'top',
    direction: 'topBottom',
  },
  render: (args) => (
    <div class="w-50 h-50 ">
      <div class="relative ml-20 mt-20 w-20">
        <div>Element</div>
        <Component {...args} />
      </div>
    </div>
  ),
};
