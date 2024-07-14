import { IBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { formatClasses } from '@utilities/helpers/format.helper';

interface ISwitchButtonProps extends IBaseComponentProps {
  checked?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  isEuroCup?: boolean;
  onClick: () => void;
}

const SwitchButton = (props: ISwitchButtonProps) => {
  const onClick = () => {
    if (!props.disabled && !props.readOnly) {
      props.onClick();
    }
  };
  return (
    <button
      type="button"
      role="switch"
      aria-checked={props.checked}
      data-testid={props.testId}
      disabled={props.disabled}
      class={formatClasses(
        'relative flex h-7_5 w-12_5 items-center rounded-15 px-0_75 transition-all duration-200 ease-in-out',
        {
          'cursor-pointer': !props.disabled && !props.readOnly,
          'bg-black-5': !props.checked,
          [props.isEuroCup ? 'bg-blue-39' : 'bg-primary']: props.checked,
        },
        props.classes,
      )}
      onClick={onClick}>
      <div
        class="h-5 w-5 rounded-full bg-layer-3 shadow-22 transition-transform duration-200 ease-in-out"
        style={{
          transform: props.checked ? 'translateX(100%)' : 'translateX(0)',
        }}
      />
    </button>
  );
};
export default SwitchButton;
