import { SkeletonType } from '../Skeleton';
import Component, { ISkeletonContainerProps } from './index';
import type { Meta, StoryObj } from 'storybook-solidjs';

const meta: Meta<typeof Component> = {
  component: Component,
  argTypes: {
    type: {
      options: [SkeletonType.Rect, SkeletonType.Circle, SkeletonType.Text],
      control: { type: 'radio' },
    },
    classes: {
      options: ['w-7', 'w-14', 'w-28', 'h-7', ' h-14', ' h-28', 'w-7 h-7', 'w-14 h-14', 'w-28 h-28'],
      control: { type: 'radio' },
    },
    showSkeleton: {
      control: { type: 'boolean' },
      defaultValue: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

const Template = (props: ISkeletonContainerProps) => {
  return (
    <div class="w-screen h-14">
      <Component {...props}>Content which need show after data loaded</Component>
    </div>
  );
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/solid/api/csf
 * to learn how to use render functions.
 */
export const Demo: Story = Template.bind({}) as Story;
Demo.args = {
  showSkeleton: true,
};
