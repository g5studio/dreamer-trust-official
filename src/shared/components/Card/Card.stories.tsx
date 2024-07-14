import { Size } from '@shared/enums';
import Card, { ICardProps } from './index';
import type { Meta, StoryObj } from 'storybook-solidjs';

const meta: Meta<typeof Card> = {
  component: Card,
  argTypes: {
    paddingSize: {
      options: [Size.Small, Size.Middle],
      control: { type: 'radio' },
    },
    isLoading: {
      control: { type: 'boolean' },
    },
    classes: {
      control: { type: 'text' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

const CardTemplate = (props: ICardProps) => {
  return (
    <section class="h-20">
      <Card classes={props.classes} {...props}>
        {props.children}
      </Card>
    </section>
  );
};

export const NormalCard: Story = CardTemplate.bind({}) as Story;
NormalCard.args = {
  paddingSize: Size.Middle,
  children: '基本卡片展示',
};
