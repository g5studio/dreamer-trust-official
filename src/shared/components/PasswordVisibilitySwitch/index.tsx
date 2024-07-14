import { Show, createEffect, createSignal, JSXElement, JSX } from 'solid-js';
import { IBaseComponentProps } from '@shared/interfaces/base-component.interface';
import Picture from '@shared/components/Picture';
import { EyeOpen } from '@utilities/svg-components/EyeOpen';
import { EyeClose } from '@utilities/svg-components/EyeClose';
import { formatClasses } from '@utilities/helpers/format.helper';

export interface IPasswordVisibilitySwitchProps extends IBaseComponentProps {
  onOpen?: () => void;
  onClose?: () => void;
  openIcon?: string | (() => JSX.Element);
  closeIcon?: string | (() => JSX.Element);
  classes?: string;
  defaultVisible?: boolean;
}

const PasswordVisibilitySwitch = (props: IPasswordVisibilitySwitchProps) => {
  const [passwordVisibility, setPasswordVisibility] = createSignal<boolean>(props.defaultVisible ?? false);
  const visibilitySwitch = (): void => {
    setPasswordVisibility(!passwordVisibility());
  };

  createEffect(() => {
    if (passwordVisibility()) {
      if (props.onOpen) {
        props.onOpen();
      }
    } else if (props.onClose) {
      props.onClose();
    }
  });
  const generateRandomId = `id_${Math.random().toString(36).slice(2, 9)}`;

  const renderEyeOpenIcon = (): JSXElement => {
    if (props.openIcon) {
      if (typeof props.openIcon === 'string') {
        return <Picture src={props.openIcon} classes={formatClasses('text-blue-500', props.classes)} alt="openEyes" />;
      }
      return props.openIcon?.();
    }
    return <EyeOpen classes="fill-black-3" />;
  };

  const renderEyeCloseIcon = () => {
    if (props.closeIcon) {
      if (typeof props.closeIcon === 'string') {
        return <Picture src={props.closeIcon} classes={formatClasses('text-blue-500', props.classes)} alt="openEyes" />;
      }
      return props.closeIcon?.();
    }
    return <EyeClose classes="fill-black-3" />;
  };

  return (
    <div data-testid={props.testId} class="flex items-center">
      <input type="checkbox" class="hidden" onChange={visibilitySwitch} id={generateRandomId} />
      <label for={generateRandomId} class="inline-block w-auto select-none cursor-pointer">
        <Show when={passwordVisibility()} fallback={renderEyeCloseIcon()}>
          {renderEyeOpenIcon()}
        </Show>
      </label>
    </div>
  );
};
export default PasswordVisibilitySwitch;
