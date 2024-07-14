import { IBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { Show, JSX, Setter } from 'solid-js';
import PasswordVisibilitySwitch from '@shared/components/PasswordVisibilitySwitch';
import CipherInputGroup, { ICipherInputGroup } from '@shared/components/CipherInputGroup';
import { formatClasses } from '@utilities/helpers/format.helper';

interface ICipherPasswordProps extends IBaseComponentProps {
  totalInput: number;
  onFinished: (finish: boolean, password?: string) => void;
  hasVisibilitySwitch?: boolean;
  defaultHideMode?: boolean;
  classes?: string;
  hidePasswords?: () => void;
  showPasswords?: () => void;
  isHideMode: boolean;
  openIcon?: string | (() => JSX.Element);
  closeIcon?: string | (() => JSX.Element);
  containerClasses?: string;
  inputClasses?: string;
  hideByAsterisk?: boolean;
  isDelayHideMode?: boolean;
  ref?: Setter<ICipherInputGroup | undefined>;
}

const CipherPassword = (props: ICipherPasswordProps) => {
  return (
    <div
      data-testid={props.testId}
      class={formatClasses(
        'mb-2_5 mt-5 flex items-center justify-between lg:mx-auto lg:w-full lg:justify-around',
        props.classes,
      )}>
      <CipherInputGroup
        defaultTotalInput={props.totalInput}
        isHideMode={props.isHideMode}
        onFinished={props.onFinished}
        containerClasses={props.containerClasses}
        inputClasses={props.inputClasses}
        hideByAsterisk={props.hideByAsterisk}
        isDelayHideMode={props.isDelayHideMode}
        ref={props.ref}
      />
      <Show when={props.hasVisibilitySwitch}>
        <PasswordVisibilitySwitch
          onOpen={props.showPasswords}
          onClose={props.hidePasswords}
          openIcon={props.openIcon}
          closeIcon={props.closeIcon}
        />
      </Show>
    </div>
  );
};
export default CipherPassword;
