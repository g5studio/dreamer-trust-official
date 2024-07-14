import OverlayContainer from '@modules/common/components/OverlayContainer';
import { onCleanup, For } from 'solid-js';
import { toggleBottomSheet, toggleOverlay } from '@shared/hooks/use-overlay';
import Button from '../Button';
import Component from './index';
import type { Meta, StoryObj } from 'storybook-solidjs';

const meta: Meta<typeof Component> = {
  component: Component,
  argTypes: {},
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
export const BaseBottomSheetDemo: Story = {
  args: {
    contentSlot: () => (
      <>
        <For
          each={Array.from({ length: 100 })
            .fill(0)
            .map((_, i) => i)}>
          {(item) => <div>{item}</div>}
        </For>
      </>
    ),
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
      taskId = toggleBottomSheet(props);
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
