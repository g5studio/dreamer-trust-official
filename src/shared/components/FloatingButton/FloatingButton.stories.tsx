import { ButtonVariants } from '../Button';
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
export const BaseFloatingButtonDemo: Story = {
  args: {
    buttonProps: {
      variant: ButtonVariants['primary-flat'],
      testId: 'FloatingButtonButton',
      onClick: () => {},
    },
  },
};
