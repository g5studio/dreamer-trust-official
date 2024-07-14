import { onCleanup } from 'solid-js';
import OverlayContainer from '@modules/common/components/OverlayContainer';
import { useDatePicker } from '@shared/hooks/use-date-picker';
import Button from '../Button';
import Component from './index';
import type { Meta, StoryObj } from 'storybook-solidjs';

const meta: Meta<typeof Component> = {
  component: Component,
  argTypes: {
    onConfirm: { action: 'onConfirm' },
    onCancel: { action: 'onCancel' },
  },
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
export const BaseDatePickerModalDemo: Story = {
  args: {
    dateRange: ['2023-01-01', '2023-12-31'],
  },
  render: (props) => {
    const { open, close } = useDatePicker(() => props);
    open();
    onCleanup(() => {
      close();
    });
    return (
      <Button variant="primary" classes="px-5" onClick={open} testId="storybook-open-date-picker-modal">
        Open Dialog
      </Button>
    );
  },
};
