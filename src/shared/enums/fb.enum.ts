export enum FbEvent {
  /** 註冊-開始註册 */
  FbStartRegistration = 'registerClick',
  /** 註冊-註册成功 */
  FbSignUp = 'register',
  /** 登入 */
  FbPixelLogin = 'login',
  /** 點擊充值 */
  FbRechargeClick = 'rechargeClick',
  /** 點擊充值 */
  FbRechargeSuccess = 'rechargeSuccess',
  /** 首充成功 */
  FbPixelRechargeFirstSuccess = 'firstrecharge',
  /** 二充成功 */
  FbPixelRechargeSubsequentSuccess = 'recharge',
}
