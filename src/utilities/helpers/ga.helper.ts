import { GaEvent } from '@shared/enums';

const gaEventMap: (payload?: PartialRecord<string, unknown>) => PartialRecord<string, unknown> = (
  payload?: PartialRecord<string, unknown>,
) => ({
  [GaEvent.Login]: {
    event_category: 'header',
    event_label: 'wap.ga.header.login',
  },
  [GaEvent.SignUp]: {
    event_category: 'header',
    event_label: 'wap.ga.header.sign_up',
  },
  [GaEvent.Search]: {
    event_category: 'header',
    event_label: 'wap.ga.header.search',
    search_term: payload?.searchTerm,
  },
  [GaEvent.Share]: {
    event_category: 'header',
    event_label: 'wap.ga.header.share',
    method: payload?.method,
  },
  [GaEvent.JoinGroup]: {
    event_category: 'header',
    event_label: 'wap.ga.header.join_group',
    group_id: payload?.groupId,
  },
  [GaEvent.SelectContent]: {
    event_category: 'header',
    event_label: 'wap.ga.header.select_content',
    content_type: payload?.iid,
    item_id: payload?.market,
  },
  [GaEvent.RegistrationStart]: {
    event_category: 'header',
    event_label: 'wap.ga.header.reg_start',
  },
  [GaEvent.GrmStartRegistration]: {
    event_category: 'header',
    event_label: 'ga.header.grm_start_registration',
  },
  [GaEvent.GrmComplete_registration]: {
    event_category: 'header',
    event_label: 'ga.header.grm_complete_registration',
  },
  [GaEvent.GrmLogin]: {
    event_category: 'header',
    event_label: 'ga.header.grm_login',
  },
  [GaEvent.GrmRechargeStart]: {
    event_category: 'header',
    event_label: 'ga.header.grm_recharge_start',
  },
  [GaEvent.GrmRechargeRequestSuccess]: {
    event_category: 'header',
    event_label: 'ga.header.grm_recharge_request_success',
  },
  [GaEvent.GrmRechargeFirstSuccess]: {
    event_category: 'header',
    event_label: 'ga.header.grm_recharge_first_success',
  },
  [GaEvent.GrmRechargeSubsequentSuccess]: {
    event_category: 'header',
    event_label: 'ga.header.grm_recharge_subsequent_success',
  },
});

interface IAction {
  type: GaEvent;
  payload?: PartialRecord<string, unknown>;
  isProxy?: boolean;
}

const excludedProxyDomain = [
  // vd001 代理域名
  '8xbet219.com',
  '8xbet221.com',
  // QA Demo 域名
  'en-vd001-qa1-portal1.kjfjposdaa.app',
  'en-vd001-qa1-portal2.kjfjposdaa.app',
  'en-vd001-qa1-portal3.kjfjposdaa.app',
  'en-vd001-qa2-portal1.zx26daa.app',
  'en-vd001-qa2-portal2.zx26daa.app',
  'en-vd001-qa2-portal3.zx26daa.app',
  'en-vd011-qa1-portal1.kjfjposdaa.app',
  'en-vd011-qa1-portal2.kjfjposdaa.app',
  'en-vd011-qa1-portal3.kjfjposdaa.app',
  'en-vd011-qa2-portal1.zx26daa.app',
  'en-vd011-qa2-portal2.zx26daa.app',
  'en-vd011-qa2-portal3.zx26daa.app',
  // DEV 測試域名
  'en-vd001-test-portal-6.innodev.site',
  'en-vd011-test-portal-6.innodev.site',
  // STG 測試域名
  'en-vd001-test-portal-3.innostg.site',
  'en-vd001-test-portal-4.innostg.site',
  'en-vd011-test-portal-3.innostg.site',
  'en-vd011-test-portal-4.innostg.site',
  // UAT 測試域名
  'en-vd001-test-portal-2.innouat.site',
  'en-vd001-test-portal-4.innouat.site',
  'en-vd011-test-portal-2.innouat.site',
  'en-vd011-test-portal-4.innouat.site',
];

function isExcludeNonProxy() {
  return excludedProxyDomain.includes(window.location.hostname);
}

export const gaEvent = (action: IAction) => {
  const gtag = window?.gtag;
  const isExclude = isExcludeNonProxy() && !action.isProxy;
  if (gtag && !isExclude) {
    const gaEventProperties = gaEventMap()[action.type];
    if (gaEventProperties) {
      gtag('event', action.type, gaEventProperties);
    }
  }
};
