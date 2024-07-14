import Button from '../Button';
import Input from './index';
import type { Meta, StoryObj } from 'storybook-solidjs';

const meta: Meta<typeof Input> = {
  component: Input,
  argTypes: {
    variant: {
      table: {
        disable: true,
      },
    },
    legendI18nKey: {
      control: { type: 'text' },
    },
    error: {
      control: { type: 'text' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    readonly: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;
export const NormalInput: Story = {
  render: (props) => {
    return (
      <Input
        variant="normal"
        legendI18nKey={props.legendI18nKey ?? 'Normal'}
        value={''}
        error={props.error}
        disabled={props.disabled}
        readonly={props.readonly}
      />
    );
  },
  args: {
    legendI18nKey: 'Normal',
    error: null,
    disabled: false,
    readonly: false,
  },
};

export const NumberInput: Story = {
  render: (props) => {
    return (
      <Input
        variant="number"
        legendI18nKey={props.legendI18nKey ?? 'Number'}
        value={''}
        error={props.error}
        disabled={props.disabled}
        readonly={props.readonly}
      />
    );
  },
  args: {
    legendI18nKey: 'Number',
    error: null,
    disabled: false,
    readonly: false,
  },
};

export const OptionInput: Story = {
  render: (props) => {
    return (
      <Input
        variant="option"
        legendI18nKey={props.legendI18nKey ?? 'Option'}
        value={''}
        error={props.error}
        disabled={props.disabled}
        readonly={true}
      />
    );
  },
  args: {
    legendI18nKey: 'Number',
    error: null,
    disabled: false,
    readonly: false,
  },
};

export const PasswordInput: Story = {
  render: (props) => {
    return (
      <Input
        variant="password"
        legendI18nKey={props.legendI18nKey ?? 'Password'}
        value={''}
        error={props.error}
        disabled={props.disabled}
        readonly={props.readonly}
      />
    );
  },
  args: {
    legendI18nKey: 'Password',
    error: null,
    disabled: false,
    readonly: false,
  },
};

export const InputWithAppend: Story = {
  render: (props) => {
    return (
      <Input
        variant="normal"
        legendI18nKey={props.legendI18nKey ?? 'Normal'}
        value={''}
        error={props.error}
        disabled={props.disabled}
        readonly={props.readonly}
        append={() => (
          <Button classes="w-24 h-8" testId="btn" variant="primary" onClick={() => {}}>
            APPEND
          </Button>
        )}
      />
    );
  },
  args: {
    legendI18nKey: 'Append',
    error: null,
    disabled: false,
    readonly: false,
  },
};

export const InputWithPrepend: Story = {
  render: (props) => {
    return (
      <Input
        variant="normal"
        legendI18nKey={props.legendI18nKey ?? 'Normal'}
        value={''}
        error={props.error}
        disabled={props.disabled}
        readonly={props.readonly}
        prepend={() => (
          <Button classes="w-24 h-8" testId="btn" variant="primary" onClick={() => {}}>
            PREPEND
          </Button>
        )}
      />
    );
  },
  args: {
    legendI18nKey: 'Prepend',
    error: null,
    disabled: false,
    readonly: false,
  },
};
