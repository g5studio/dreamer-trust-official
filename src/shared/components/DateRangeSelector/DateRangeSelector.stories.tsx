import { createSignal } from 'solid-js';
import OverlayContainer from '@modules/common/components/OverlayContainer';
import Component from './index';
import type { Meta, StoryObj } from 'storybook-solidjs';

const meta: Meta<typeof Component> = {
  component: Component,
  decorators: [
    (Story) => {
      return (
        <div>
          <Story />
          <OverlayContainer />
        </div>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof Component>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/solid/api/csf
 * to learn how to use render functions.
 */
export const BaseDateRangeSelectorDemo: Story = {
  render: () => {
    const [from, setFrom] = createSignal('2021-09-30');
    const [to, setTo] = createSignal('2022-10-03');
    return (
      <Component
        classes="w-50"
        from={from()}
        to={to()}
        dateRange={['2021-09-30', '2022-10-03']}
        onChange={(newFrom, newTo) => {
          setFrom(newFrom);
          setTo(newTo);
        }}
      />
    );
  },
};
