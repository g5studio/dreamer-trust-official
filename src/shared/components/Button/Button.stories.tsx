import { ComponentProps } from 'solid-js';

import { customTwMerge } from '@utilities/helpers/format.helper';
import Button, { ButtonVariants, IButton } from './index';
import type { Meta, StoryObj } from 'storybook-solidjs';

type ButtonPropsAndCustomArgs = ComponentProps<typeof Button> & { backgroundColor?: string };

const meta: Meta<ButtonPropsAndCustomArgs> = {
  component: Button,
  argTypes: {
    variant: {
      table: {
        disable: true,
      },
    },
    loading: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    classes: {
      options: ['w-15 h-15 rounded-full', 'w-20 h-6', 'w-30 h-10', 'w-60 h-20'],
      control: { type: 'radio' },
    },
    children: {
      control: { type: 'text' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;
const ButtonTemplate = (props: IButton) => {
  return (
    <Button {...props} classes={customTwMerge('w-30 h-10', props.classes)} onClick={() => {}}>
      {props.children || 'Button'}
    </Button>
  );
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/solid/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = ButtonTemplate.bind({}) as Story;
Primary.args = {
  variant: ButtonVariants.primary,
  // classes: 'w-30 h-10',
};

export const PrimaryFlat: Story = ButtonTemplate.bind({}) as Story;
PrimaryFlat.args = {
  variant: ButtonVariants['primary-flat'],
};

export const Outline: Story = ButtonTemplate.bind({}) as Story;
Outline.args = {
  variant: ButtonVariants.outline,
};

export const ActiveOutline: Story = ButtonTemplate.bind({}) as Story;
ActiveOutline.args = {
  variant: ButtonVariants['active-outline'],
};

export const Icon: Story = ButtonTemplate.bind({}) as Story;
Icon.args = {
  variant: ButtonVariants.icon,
};

export const Block: Story = ButtonTemplate.bind({}) as Story;
Block.args = {
  variant: ButtonVariants.block,
};
