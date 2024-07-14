import { createSignal } from 'solid-js';
import Component from './index';
import type { Meta, StoryObj } from 'storybook-solidjs';

const meta: Meta<typeof Component> = {
  component: Component,
  argTypes: {
    // TODO configure you story dashboard here
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/solid/api/csf
 * to learn how to use render functions.
 */
export const BaseDropdownDemo: Story = {
  args: {
    align: 'left',
    itemList: [
      {
        label: 'label 1',
        value: 1,
      },
      {
        label: 'label 2',
        value: 2,
      },
      {
        label: 'label 3',
        value: 3,
      },
    ],
  },
  render: (args) => {
    const [selectedValue, setSelectedValue] = createSignal<string | number>(1);
    const onChange = (value: string | number) => {
      setSelectedValue(value);
    };
    return <Component {...args} selectedValue={selectedValue} onChange={onChange} />;
  },
};
