// TODO: https://innotech.atlassian.net/browse/PRF-1432
import { IBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { back, navigate } from '@shared/hooks/use-navigator';
import { Show, JSX, mergeProps } from 'solid-js';
import { translate } from '@shared/hooks/use-translation';
import { Slot } from '@shared/interfaces';
import { formatClasses } from '@utilities/helpers/format.helper';
import { I18nKey } from '@shared/models/translation.model';
import { useLocation } from '@solidjs/router';
import { isMobile } from '@shared/hooks/use-window-size';

import ArrowCircleLeftIcon from '@utilities/svg-components/ArrowCircleLeftIcon';
import { usePageCheck } from '@shared/hooks/use-page-check';

export interface INavigatorProps extends IBaseComponentProps {
  /**
   * @description 自定義顯示路由名稱
   */
  titleI18nKey?: I18nKey;
  titleClasses?: string;
  titleStyle?: JSX.CSSProperties;
  render?: Slot;
  rightSideSlot?: Slot;
  leftSideSlot?: Slot;
  rightSideSlotClasses?: string;
  leftSideSlotClasses?: string;
  sectionClasses?: string;
  redirectUrl?: string;
  customOnClick?: () => void;
}

/**
 * 路由跳轉元件
 * @description 手機版當前路由設定有disableMobileHeader的自動sticky在上方
 * @external https://innotech.atlassian.net/browse/PRF-1477
 * @external https://projects.invisionapp.com/d/main/default/#/console/21878514/464277880/inspect mobile
 * @external https://projects.invisionapp.com/d/main/default/#/console/22173525/473135908/inspect pc
 * @layer important
 */
const Navigator = (props: INavigatorProps) => {
  const location = useLocation();
  const { currentRoute } = usePageCheck({ pathname: () => location.pathname });

  const isPageHeader = () => !!currentRoute()?.disableMobileHeader && isMobile();

  const mergedProps: INavigatorProps = mergeProps<[Partial<INavigatorProps>, INavigatorProps]>(
    {
      titleStyle: {
        'max-width': 'calc(100% - 3.25rem)',
      },
    },
    props,
  );

  return (
    <div
      class={formatClasses(
        'box-content h-9 min-h-9 rounded-12 bg-layer-3 px-3 py-1 lg:px-4',
        {
          'sticky top-0 z-important': isPageHeader(),
          'rounded-t-none ': isMobile(),
        },
        props.classes,
      )}
      data-testid={props.testId}>
      <div
        class={formatClasses(
          'relative flex h-full min-h-full w-full flex-row items-center justify-center',
          props.sectionClasses,
        )}>
        <Show
          when={!props.leftSideSlot}
          fallback={
            <div class={formatClasses('absolute left-0 top-[50%] translate-y-[-50%]', props.leftSideSlotClasses)}>
              {props.leftSideSlot?.()}
            </div>
          }>
          <button
            class={formatClasses(
              'absolute left-0 top-[50%] translate-y-[-50%] rounded-circle bg-layer-7 p-1_5 outline-none',
              props.leftSideSlotClasses,
            )}
            onClick={() =>
              props.customOnClick ? props.customOnClick() : props.redirectUrl ? navigate(props.redirectUrl) : back(1)
            }>
            <ArrowCircleLeftIcon classes="h-5 w-5" />
          </button>
        </Show>

        <Show when={!props.render} fallback={props.render!()}>
          <p
            class={formatClasses('text-center text-lg font-normal text-black-1 lg:text-base', props.titleClasses)}
            style={mergedProps.titleStyle}>
            <Show when={currentRoute()?.i18n && !props.titleI18nKey} fallback={translate(props.titleI18nKey)}>
              {translate(currentRoute()!.i18n)}
            </Show>
          </p>
        </Show>
        <Show when={props.rightSideSlot}>
          <div class={formatClasses('absolute right-0 top-[50%] flex translate-y-[-50%]', props.rightSideSlotClasses)}>
            {props.rightSideSlot!()}
          </div>
        </Show>
      </div>
    </div>
  );
};
export default Navigator;
