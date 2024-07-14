import { IBaseOverlay, IBaseOverlayProps } from '@shared/interfaces/base-component.interface';
import { customTwMerge } from '@utilities/helpers/format.helper';
import { createSignal } from 'solid-js';
import { translate } from '@shared/hooks/use-translation';
import { I18nKey } from '@shared/models/translation.model';
import Wheel, { IWheelOption } from '../Wheel';

export interface IPopupPickerProps extends IBaseOverlayProps {
  titleI18nKey: I18nKey;
  onCancel?: () => void;
  onConfirm: (value: string | number) => void;
  options: IWheelOption[];
  defaultSelectedValue?: string | number;
}

const PopupPicker = (props: IPopupPickerProps & IBaseOverlay) => {
  const [selectedValue, setSelectedValue] = createSignal<string | number | undefined>(props.defaultSelectedValue);
  const onChange = (value: string) => {
    setSelectedValue(value);
  };
  const onConfirm = () => {
    props.onClose();
    const value = selectedValue();
    if (value !== undefined) {
      props.onConfirm(value);
    }
  };
  const onCancel = () => {
    props.onClose();
    props.onCancel?.();
  };
  return (
    <div
      data-testid={props.testId}
      class={customTwMerge('left-0 w-full bg-layer-3 text-black transition-all duration-300', props.classes)}>
      <div class="h-11 w-full border-b border-black-5 bg-layer-6">
        <div class="m-auto flex items-center justify-between px-3 text-base leading-11 text-black-1">
          <div class="min-w-12_5 cursor-pointer text-center leading-11" onClick={onCancel}>
            {translate('common.cancel')}
          </div>
          <div class="leading-11">{translate(props.titleI18nKey)}</div>
          <div class="min-w-12_5 cursor-pointer text-center leading-11" onClick={onConfirm}>
            {translate('common.confirm')}
          </div>
        </div>
      </div>
      <div class="h-50">
        <Wheel options={props.options} defaultSelectedValue={props.defaultSelectedValue} onChange={onChange} />
      </div>
    </div>
  );
};
export default PopupPicker;
