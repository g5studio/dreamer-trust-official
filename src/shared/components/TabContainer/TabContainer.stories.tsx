import { Show } from 'solid-js';

import { formatClasses } from '@utilities/helpers/format.helper';
import { translate } from '@shared/hooks/use-translation';
import { ArrowDownIcon } from '@utilities/svg-components';
import Component from './index';
import type { Meta, StoryObj } from 'storybook-solidjs';

const meta: Meta<typeof Component> = {
  component: Component,
  argTypes: {
    defaultValue: {
      options: [1, 2, 3],
      control: { type: 'radio' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/solid/api/csf
 * to learn how to use render functions.
 */
export const BaseTabContainerDemo: Story = {
  args: {
    tabs: [
      { labelI18nKey: '測試頁籤1', value: 1 },
      { labelI18nKey: '測試頁籤2', value: 2 },
    ],
    classes: 'gap-4',
    tabSlot: ({ labelI18nKey }, isActive) => (
      <span
        class={formatClasses('px-2 h-4 border', {
          'border-primary': isActive,
          'border-black': !isActive,
        })}>
        {translate(labelI18nKey)}
      </span>
    ),
    emptySlot: () => <div>no match data</div>,
    children: ({ labelI18nKey }) => <p>當前選擇： {labelI18nKey.toString()}</p>,
  },
};

export const BaseTabContainerDemoWithIcon: Story = {
  args: {
    tabs: [
      { labelI18nKey: '測試頁籤1', value: 1 },
      { labelI18nKey: '測試頁籤2', value: 2 },
    ],
    classes: 'gap-4',
    tabSlot: ({ labelI18nKey, value }, isActive) => (
      <Show
        when={value === 1}
        fallback={
          <span
            class={formatClasses('px-2 border', {
              'border-primary': isActive,
              'border-black': !isActive,
            })}>
            {translate(labelI18nKey)}
          </span>
        }>
        <div class="flex flex-row items-center gap-4">
          <ArrowDownIcon />
          <span
            class={formatClasses('px-2 border', {
              'border-primary': isActive,
              'border-black': !isActive,
            })}>
            {translate(labelI18nKey)}
          </span>
        </div>
      </Show>
    ),
    emptySlot: () => <div>no match data</div>,
    children: ({ labelI18nKey }) => <p>當前選擇： {labelI18nKey.toString()}</p>,
  },
};
