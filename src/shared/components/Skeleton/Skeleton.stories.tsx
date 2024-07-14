import Skeleton, { SkeletonType } from './index';
import type { Meta, StoryObj } from 'storybook-solidjs';

const meta: Meta<typeof Skeleton> = {
  component: Skeleton,
  argTypes: {
    type: {
      options: [SkeletonType.Rect, SkeletonType.Circle, SkeletonType.Text],
      control: { type: 'radio' },
    },
    classes: {
      options: ['w-7', 'w-14', 'w-28', 'h-7', ' h-14', ' h-28', 'w-7 h-7', 'w-14 h-14', 'w-28 h-28'],
      control: { type: 'radio' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/solid/api/csf
 * to learn how to use render functions.
 */
export const Rect: Story = {
  args: {
    type: SkeletonType.Rect,
    classes: 'w-14 h-14',
  },
};

export const Circle: Story = {
  args: {
    type: SkeletonType.Circle,
    classes: 'w-14 h-14',
  },
};

export const Text: Story = {
  args: {
    type: SkeletonType.Text,
    classes: 'w-14 h-14',
  },
};
