import { OtpType } from '@shared/enums';
import { I18nKey } from '@shared/models/translation.model';

export const OtpProcessName: PartialRecord<OtpType, I18nKey> = {
  [OtpType.QuickLogin]: '6789bet.simpleCode.quickLogin',
  [OtpType.ForgetPassword]: 'signIn.forgetPassword',
  [OtpType.Register]: 'signIn.registered',
  [OtpType.BindPhone]: 'sms.binding',
  [OtpType.Login]: 'signIn.login',
  [OtpType.AgentRegister]: 'franchise.registerTitle',
  [OtpType.Withdraw]: 'accountRecord.withdrawal',
};
