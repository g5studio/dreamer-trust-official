import OverlayContainer from '@modules/common/components/OverlayContainer';
import { onCleanup } from 'solid-js';
import { toggleOverlay, togglePopupPicker } from '@shared/hooks/use-overlay';
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
export const BasePopupPickerDemo: Story = {
  args: {
    options: [
      {
        label: '1',
        value: '1',
      },
      {
        label: '2',
        value: '2',
      },
    ],
    defaultSelectedValue: '1',
  },
  render: (props) => {
    let taskId: string;
    const onOpen = () => {
      if (taskId) {
        toggleOverlay({
          action: 'close',
          taskId,
        });
      }
      taskId = togglePopupPicker(props);
    };
    onOpen();
    onCleanup(() => {
      toggleOverlay({ action: 'close', taskId });
    });
    return (
      <Button variant="primary" classes="px-5" onClick={onOpen} testId="storybook-open-date-picker-modal">
        Open Dialog
      </Button>
    );
  },
};
