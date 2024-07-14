import { usePageCheck } from '@shared/hooks/use-page-check';
import { IBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { formatClasses } from '@utilities/helpers/format.helper';
import { Show, createEffect, on } from 'solid-js';
import { Portal } from 'solid-js/web';

export enum FixedButtonId {
  SportCart = 'sport-cart',
  ShareMoney = 'share-money',
  RedEnvelopeCountdown = 'red-envelope-countdown',
  C2CNotification = 'c2c-notification',
  SelectedLeagueButton = 'selected-league-button',
}

interface IFixedButtonPortalProps extends IBaseComponentProps {
  buttonId: FixedButtonId;
}

interface IFixedButtonConfig {
  visible: (pageData: ReturnType<typeof usePageCheck>) => boolean;
  order: number;
}

const fixedButtonConfig: Record<FixedButtonId, IFixedButtonConfig> = {
  [FixedButtonId.SportCart]: {
    visible: (pageData) => pageData.isSportPage() && !pageData.isSearchPage() && !pageData.isSportMaintenancePage(),
    order: 4,
  },
  [FixedButtonId.ShareMoney]: {
    // ! refer to 2.0 src/sports/components/ShareMoneySticky/index.tsx - line 23
    visible: (pageData) =>
      pageData.isSportPage() &&
      !pageData.isSearchPage() &&
      !pageData.isSportExhaustivePage() &&
      !pageData.isGameResultPage() &&
      !pageData.isSportEuroPage(),
    order: 2,
  },
  [FixedButtonId.RedEnvelopeCountdown]: {
    visible: () => true,
    order: 1,
  },
  [FixedButtonId.C2CNotification]: {
    visible: (pageData) => !pageData.isDepositPage() && !pageData.isWithdrawPage(),
    order: 3,
  },
  [FixedButtonId.SelectedLeagueButton]: {
    visible: (pageData) => pageData.isSportPage() && !pageData.isSearchPage(),
    order: 5,
  },
};

const FixedButtonPortal = (props: IFixedButtonPortalProps) => {
  const pageData = usePageCheck();
  let ref: HTMLDivElement | undefined;

  // portal will insert a div that cannot be controlled by solid-js
  // we need to insert the order css to the div
  createEffect(
    // the order change will be removed in few cases:
    // 1. the ref is not ready
    // 2. the Show condition is not met
    // 3. the whole component is unmounted
    // we don't need to handle 3, since the component is already unmounted, the order doesn't matter
    // we only need to handle 1 and 2
    on([() => ref, () => fixedButtonConfig[props.buttonId].visible(pageData)], () => {
      if (ref) {
        // find ref from fixed-button-group and insert the order css
        const buttonGroup = document.getElementById('fixed-button-group');
        if (buttonGroup) {
          const button = buttonGroup.querySelector(`#${props.buttonId}`);
          const buttonOrder = fixedButtonConfig[props.buttonId].order;
          if (button && button.parentElement) {
            button.parentElement.style.order = buttonOrder.toString();
          }
        }
      }
    }),
  );
  return (
    <Show when={fixedButtonConfig[props.buttonId].visible(pageData)}>
      <Portal mount={document.getElementById('fixed-button-group') || document.body}>
        <div
          id={props.buttonId}
          ref={ref}
          data-testId={props.testId}
          class={formatClasses('pointer-events-auto', props.classes)}>
          {props.children}
        </div>
      </Portal>
    </Show>
  );
};
export default FixedButtonPortal;
