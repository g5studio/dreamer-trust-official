import { IBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { formatClasses } from '@utilities/helpers/format.helper';
import { translate } from '@shared/hooks/use-translation';
import { I18nKey } from '@shared/models/translation.model';
import { Show, type JSX } from 'solid-js';
import { isMobile } from '@shared/hooks/use-window-size';
import Button, { IButton } from '../Button';

interface IFloatingButtonProps extends Pick<JSX.ButtonHTMLAttributes<HTMLButtonElement>, 'type'>, IBaseComponentProps {
  buttonProps?: IButton;
  buttonName?: I18nKey;
  secondClasses?: string;
  hiddenBlockClasses?: string;
}

const FloatingButton = (props: IFloatingButtonProps) => {
  return (
    <div data-testid={props.testId} class={formatClasses(props.classes)}>
      <div
        class={formatClasses(
          'fixed bottom-0 left-[50%] flex w-full -translate-x-2/4 justify-center px-4 py-3 transition-transform duration-300 ease-out lg:bottom-10 lg:max-w-86 lg:justify-center',
          {
            'rounded-t-30 bg-layer-3 shadow-20 ': isMobile(),
          },
          props.secondClasses,
        )}>
        <Show when={props.buttonProps}>
          <Button
            {...props.buttonProps!}
            type={props.type}
            classes={formatClasses('h-14 w-full', props.buttonProps!.classes)}>
            <Show when={props.buttonName} fallback={translate('common.submit')}>
              {translate(props.buttonName)}
            </Show>
          </Button>
        </Show>
        {props.children}
      </div>
      {/* invisible block to occupy bottom height */}
      <div class={formatClasses('h-20 overflow-hidden', props.hiddenBlockClasses)} />
    </div>
  );
};
export default FloatingButton;
