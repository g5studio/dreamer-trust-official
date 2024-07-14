import { createSignal } from 'solid-js';
import Component, { ITabProps } from './index';
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

export const TabAnimation: Story = {
  args: {
    tabList: [
      {
        labelI18nKey: 'ah',
        value: 'ah',
      },
      {
        labelI18nKey: 'ou',
        value: 'ou',
      },
      {
        labelI18nKey: '1x2',
        value: '1x2',
      },
      {
        labelI18nKey: 'cr',
        value: 'cr',
      },
      {
        labelI18nKey: 'oe',
        value: 'oe',
      },
      {
        labelI18nKey: 'cs',
        value: 'cd',
      },
      {
        labelI18nKey: 'or',
        value: 'or',
      },
    ],
  },
  render: (props: ITabProps) => {
    const [focusValue, setFocusValue] = createSignal<string | number>('ah');

    const tabSwitch = (value: string | number) => {
      setFocusValue(value);
    };

    return (
      <>
        <Component {...props} classes="h-17" selectedValue={focusValue()} callback={(value) => tabSwitch(value)} />
        <span>{`Selected Value: ${focusValue()}`}</span>
      </>
    );
  },
};

export const TabGeneral: Story = {
  args: {
    tabList: [
      {
        labelI18nKey: 'sport.common.ah',
        value: 'ah',
      },
      {
        labelI18nKey: 'sport.common.ou',
        value: 'ou',
      },
      {
        labelI18nKey: 'sport.common.1x2',
        value: '1x2',
      },
      {
        labelI18nKey: 'sport.football.cr',
        value: 'cr',
      },
      {
        labelI18nKey: 'sport.common.oe',
        value: 'oe',
      },
      {
        labelI18nKey: 'sport.common.cs',
        value: 'cd',
      },
      {
        labelI18nKey: 'sport.common.or',
        value: 'or',
      },
    ],
  },
  render: (props: ITabProps) => {
    const [focusValue, setFocusValue] = createSignal<string | number>('ah');

    const tabSwitch = (value: string | number) => {
      setFocusValue(value);
    };

    return (
      <>
        <Component
          {...props}
          disableAnimation={true}
          classes="h-17"
          selectedValue={focusValue()}
          callback={(value) => tabSwitch(value)}
        />
        <span>{`Selected Value: ${focusValue()}`}</span>
      </>
    );
  },
};
