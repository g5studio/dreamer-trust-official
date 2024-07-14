import { createSignal } from 'solid-js';
import Component from './index';
import type { Meta, StoryObj } from 'storybook-solidjs';

const meta: Meta<typeof Component> = {
  component: Component,
  argTypes: {
    // TODO configure you story dashboard here
  },
  render: (props) => {
    const [checked, setChecked] = createSignal(false);
    const onClick = () => setChecked(!checked());
    return <Component {...props} checked={checked()} onClick={onClick} />;
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/solid/api/csf
 * to learn how to use render functions.
 */
export const BaseSwitchButtonDemo: Story = {
  args: {
    // TODO configure your story props here
  },
};
