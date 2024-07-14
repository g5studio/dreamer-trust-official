import { createSignal, onCleanup } from 'solid-js';
import OverlayContainer from '@modules/common/components/OverlayContainer';
import { FiatCurrency } from '@shared/enums';
import Button from '@shared/components/Button';
import { toggleHintPopup, toggleOverlay } from '@shared/hooks/use-overlay';
import Component from './index';
import type { Meta, StoryObj } from 'storybook-solidjs';

const meta: Meta<typeof Component> = {
  component: Component,
  args: {
    defaultHideMode: true,
    totalInput: 6,
    classes: 'gap-2',
  },
  argTypes: {
    defaultHideMode: {
      control: { type: 'boolean' },
    },
    totalInput: {
      control: { type: 'number' },
    },
    hasVisibilitySwitch: {
      control: { type: 'boolean' },
    },
  },
  render: (props) => {
    const [submitDisabled, setSubmitDisabled] = createSignal<boolean>(true);

    let taskId: string;
    const onOpen = () => {
      if (taskId) {
        toggleOverlay({
          action: 'close',
          taskId,
        });
      }
      taskId = toggleHintPopup(
        {
          type: 'information',
          i18nKeys: {
            title: '請輸入提現密碼',
          },
          primaryButton: {
            children: '確定',
            variant: 'primary',
            testId: 'withdrawal-cipher-primary-btn',
            onClick: () => {},
            classes: 'w-70 px-3_75 mt-2',
            disabled: submitDisabled,
          },
          cancelButton: {
            children: '取消',
            variant: 'outline',
            testId: 'withdrawal-cipher-cancel-btn',
            onClick: () => {},
            classes: 'w-70 px-3_75',
          },
          render: () => (
            <div class="text-primary text-center">
              <div class="font-4_5">
                <span>提現</span>
                <span class="mx-1_25">{`${FiatCurrency.CNY}`}</span>
                <span>100</span>
              </div>
              <Component
                {...props}
                onFinished={(_, password) => {
                  if (password) {
                    setSubmitDisabled(!password);
                  }
                }}
              />
            </div>
          ),
          classes: 'w-75 pt-9 pb-5',
        },
        { backgroundClose: true },
      );
    };

    onCleanup(() => {
      toggleOverlay({ action: 'close', taskId });
    });

    return (
      <Button variant="primary" classes="px-5" onClick={onOpen} testId="storybook-open-cipher-input-modal">
        Open Cipher Password Modal
      </Button>
    );
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

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/solid/api/csf
 * to learn how to use render functions.
 */
export const CipherPasswordDemo: Story = {};
