import Button, { ButtonVariants } from '../Button';
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
export const BaseDropdownContainerDemo: Story = {
  render: () => {
    return (
      <Component<string>
        triggerSlot={({ toggleDropdown }) => (
          <Button
            classes="px-4"
            variant={ButtonVariants.primary}
            testId="StorybookDropdownTrigger"
            onClick={toggleDropdown}>
            Trigger
          </Button>
        )}
        align="left"
        itemList={['text1', 'text2', 'text3']}
        childrenContainerClasses={'bg-layer-3 shadow rounded-md p-2'}
        itemSlot={({ item }) => <div class="text-sm">{item}</div>}
      />
    );
  },
};

export const RightAlignDropdownContainerDemo: Story = {
  render: () => {
    return (
      <Component<string>
        triggerSlot={({ toggleDropdown }) => (
          <Button
            classes="px-4"
            variant={ButtonVariants.primary}
            testId="StorybookDropdownTrigger"
            onClick={toggleDropdown}>
            Trigger
          </Button>
        )}
        align="right"
        itemList={['text1', 'text2', 'text3']}
        childrenContainerClasses={'bg-layer-3 shadow rounded-md p-2'}
        itemSlot={({ item }) => <div class="text-sm">{item}</div>}
      />
    );
  },
};

export const ClickThroughDropdownContainerDemo: Story = {
  render: () => {
    return (
      <div class="flex justify-start">
        <Component<string>
          triggerSlot={({ toggleDropdown }) => (
            <Button
              classes="px-4"
              variant={ButtonVariants.primary}
              testId="StorybookDropdownTrigger"
              onClick={toggleDropdown}>
              Trigger
            </Button>
          )}
          align="left"
          itemList={['text1', 'text2', 'text3']}
          outsideClickThrough={true}
          childrenContainerClasses={'bg-layer-3 shadow rounded-md p-2'}
          itemSlot={({ item }) => <div class="text-sm">{item}</div>}
        />
        <Button
          classes="ml-2 px-4"
          variant={ButtonVariants.primary}
          testId="StorybookCanClickButton"
          onClick={() => {}}>
          Can Click
        </Button>
      </div>
    );
  },
};

export const NotCloseDropdownContainerDemo: Story = {
  render: () => {
    return (
      <Component<string>
        triggerSlot={({ toggleDropdown }) => (
          <Button
            classes="px-4"
            variant={ButtonVariants.primary}
            testId="StorybookDropdownTrigger"
            onClick={toggleDropdown}>
            Trigger
          </Button>
        )}
        outsideBehavior="none"
        align="left"
        itemList={['text1', 'text2', 'text3']}
        childrenContainerClasses={'bg-layer-3 shadow rounded-md p-2'}
        itemSlot={({ item }) => <div class="text-sm">{item}</div>}
      />
    );
  },
};
