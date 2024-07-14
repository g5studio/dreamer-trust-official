import { SportSorting } from '@shared/enums';
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
export const BaseMoreContainerDemo: Story = {
  args: {
    // TODO configure your story props here
  },
  render: () => {
    const [sortType, setSortType] = createSignal<SportSorting>(SportSorting.Tournament);

    const toggleSortType = () => {
      const switchSortType =
        sortType() === SportSorting.Tournament ? SportSorting.KickOffTime : SportSorting.Tournament;

      setSortType(switchSortType);
    };

    return (
      <Component classes="h-7_5" onToggle={() => toggleSortType()}>
        <small class="text-black-1">{sortType() === SportSorting.Tournament ? 'League' : 'Time'}</small>
      </Component>
    );
  },
};
