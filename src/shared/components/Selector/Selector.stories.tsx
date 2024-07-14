import OverlayContainer from '@modules/common/components/OverlayContainer';
import { togglePopupPicker } from '@shared/hooks/use-overlay';
import { Setter } from 'solid-js';
import { ArrowDownIcon } from '@utilities/svg-components/ArrowDownIcon';
import { formatClasses } from '@utilities/helpers/format.helper';
import Component from './index';
import type { Meta, StoryObj } from 'storybook-solidjs';

const meta: Meta<typeof Component> = {
  component: Component,
  argTypes: {
    // TODO configure you story dashboard here
  },
  decorators: [
    (Story) => {
      return (
        <div>
          <Story />
          <OverlayContainer />
        </div>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof Component>;

const iconSlot = () => <ArrowDownIcon classes={formatClasses('w-4 h-4 relative')} />;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/solid/api/csf
 * to learn how to use render functions.
 */
export const SM: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
  args: {
    onMobileMenuOpen: (setIsOpen: Setter<boolean>) => {
      togglePopupPicker(
        {
          titleI18nKey: 'popup picker example',
          onConfirm: () => {},
          options: [
            {
              label: '123',
              value: 123,
            },
          ],
        },
        () => {
          setIsOpen(false);
        },
      );
    },
    iconSlot,
    iconClasses: {
      open: 'rotate-180',
    },
    children: <>test</>,
  },
};

export const MD: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
  args: {
    popoverSlot: () => <>test</>,
    iconSlot,
    iconClasses: {
      open: 'rotate-180',
    },
    children: <>test</>,
  },
};

export const XL: Story = {
  args: {
    popoverSlot: () => <>test</>,
    iconSlot,
    iconClasses: {
      open: 'rotate-180',
    },
    children: <>test</>,
  },
};

export const DisableDropdown: Story = {
  args: {
    disableDropdown: true,
    children: <>test</>,
  },
};
