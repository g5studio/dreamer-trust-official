import { toggleImageModal } from '@shared/hooks/use-overlay';
import OverlayContainer from '@modules/common/components/OverlayContainer';
import Component from './index';
import type { Meta, StoryObj } from 'storybook-solidjs';

const meta: Meta<typeof Component> = {
  component: Component,
  argTypes: {
    onClose: { action: 'onClose' },
  },
  decorators: [
    (Story) => (
      <>
        <Story />
        <OverlayContainer />
      </>
    ),
  ],
  render: (props) => {
    const onOpen = () => {
      toggleImageModal(props);
    };
    return (
      <button type="button" onClick={onOpen}>
        open
      </button>
    );
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/solid/api/csf
 * to learn how to use render functions.
 */
export const BaseImageModalDemo: Story = {
  args: {
    imagePath: '/casino/slot-machine/banner.png',
  },
};
