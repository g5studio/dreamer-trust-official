import Divider from './index';
import type { Meta, StoryObj } from 'storybook-solidjs';

const meta: Meta<typeof Divider> = {
  component: Divider,
  argTypes: {
    type: {
      table: {
        disable: true,
      },
    },
    isDashed: {
      control: { type: 'boolean' },
    },
    classes: {
      table: {
        disable: true,
      },
    },
    children: {
      control: { type: 'text' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Withtext: Story = {
  name: 'Horizontal With Text',
  render: (props) => {
    return (
      <Divider type="horizontal" classes="text-black-3 border-[#11ffff]" isDashed={true}>
        {props.children}
      </Divider>
    );
  },
  args: {
    isDashed: false,
    children: 'Some Text',
  },
};

export const Horizontal: Story = {
  render: (props) => <Divider type="horizontal" isDashed={props.isDashed} />,
  args: {
    isDashed: false,
  },
};

export const Vertical: Story = {
  render: (props) => {
    return (
      <>
        <div class="flex items-center h-5">
          <span class="text-[#424242] text-sm font-semibold">滾球</span>
          <Divider type="vertical" classes="border-[#333333] h-[14px]" isDashed={props.isDashed} />
          <div class="flex items-center justify-center text-sm font-semibold text-primary">總局比分 15 vs 9</div>
        </div>
        <p class="text-red-1">Vertical type is NOT supported children</p>
      </>
    );
  },
  args: {
    isDashed: false,
  },
};
