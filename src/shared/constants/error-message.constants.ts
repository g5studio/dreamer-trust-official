import { ServerErrorCode } from '@shared/enums';
import {
  BankCardServerError,
  CashoutServerError,
  CasinoServerError,
  DepositServerError,
  ErrorMessageMap,
  PromotionServerError,
  SportServerError,
} from '@shared/interfaces/error-message.interface';

const cashoutErrorMessageMap: ErrorMessageMap<CashoutServerError> = {
  [ServerErrorCode.ResourceNotFound]: 'error_10004',
  [ServerErrorCode.CashoutDisabled]: 'error_20308',
  [ServerErrorCode.CashoutUnikeyExpired]: 'error_30008',
  [ServerErrorCode.CashoutVariableNotFound]: 'error_30009',
  [ServerErrorCode.CashoutVariableChanged]: 'error_30010',
  [ServerErrorCode.CashoutClosed]: 'error_30011',
  [ServerErrorCode.CashoutAmountNotEnough]: 'error_30013',
  [ServerErrorCode.EventClosed]: 'error.cashOut.30015',
  [ServerErrorCode.CashoutOrderExist]: 'error.cashOut.30016',
  [ServerErrorCode.CashoutOrderExceedLimit]: 'error.cashOut.30017',
};

const sportErrorMessageMap: ErrorMessageMap<SportServerError> = {
  [ServerErrorCode.SportGameNotExisted]: 'error_40001',
};

const casinoErrorMessageMap: ErrorMessageMap<CasinoServerError> = {
  [ServerErrorCode.ThirdpartyCanNotStarUp]: 'error.thirdGameUrl.160001',
  [ServerErrorCode.ThirdpartyCeaseOperations]: 'error.thirdGameUrl.160004',
  [ServerErrorCode.TransferThirdPartyBalanceInOtherWalletNow]: 'isBalanceInThirdGame.popup.content.clickOtherGame',
  [ServerErrorCode.TransferThirdPartyBalanceNotEnoughToPlay]: 'errorCode.160123',
  [ServerErrorCode.TransferThirdPartyBalanceInBbinNow]: 'transfer.160129',
  [ServerErrorCode.ThirdpartyNotTryGame]: 'error.thirdGameUrl.160134',
  [ServerErrorCode.TransferThirdPartyUserIsPlayingV8]: 'error.thirdGameUrl.160134',
  [ServerErrorCode.TransferThirdPartyUserIsPlayingLY]: 'error.thirdGameUrl.160134',
  [ServerErrorCode.LineIsAbnormalAndTryAgainLater]: 'errorCode.160139',
  [ServerErrorCode.TransferringAndTryAgainLaterInAG]: 'transfer.160155',
  [ServerErrorCode.TransferringAndTryAgainLaterInKY]: 'transfer.160156',
  [ServerErrorCode.TransferFailedAndTryAgainLaterInPT]: 'transfer.160157',
  [ServerErrorCode.TransferFailedAndTryAgainLaterInBBIN]: 'transfer.160158',
  [ServerErrorCode.TransferFailedAndTryAgainLaterInV8]: 'transfer.160159',
  [ServerErrorCode.TransferFailedAndTryAgainLaterInLY]: 'transfer.160160',
  [ServerErrorCode.TransferThirdPartyMoneyFailed]: 'errorCode.160131',
  [ServerErrorCode.TransferThirdPartyInprogress]: '',
};

export const promotionErrorMessageMap: ErrorMessageMap<PromotionServerError> = {
  [ServerErrorCode.NotQualified]: 'promotions.200144',
  [ServerErrorCode.MemberRegisterDateNotInActivityRange]: 'promotions.200145',
  [ServerErrorCode.DepositTotalAmountNotInActivityRange]: 'promotions.200146',
  [ServerErrorCode.ValidBetAmountNotInActivityRange]: 'promotions.200147',
  [ServerErrorCode.OnlyAppCanApply]: 'promotions.200149',
  [ServerErrorCode.NotInActivityTime]: 'promotions.200150',
  [ServerErrorCode.UserCannotApplyAnyPromotion]: 'promotions.200151',
  [ServerErrorCode.DepositCountNotInActivityRange]: 'applyError.200205',
  [ServerErrorCode.MemberLoseNotInActivityRange]: 'promotions.200206',
  [ServerErrorCode.MemberWinNotInActivityRange]: 'promotions.200207',
  [ServerErrorCode.FirstDepositOnly]: 'promotions.200212_deposit',
  [ServerErrorCode.NextDepositOnly]: 'promotions.200213_deposit',
  [ServerErrorCode.MemberCurrencyNotInActivityRange]: 'promotions.200215',
  [ServerErrorCode.NotAllowSameIp]: 'promotions.200148',
  [ServerErrorCode.PromotionDzNameDuplicated]: 'promotions.200304',
  [ServerErrorCode.PromotionMemberNameNotFilled]: 'promotions.200305',
  [ServerErrorCode.PromotionAlreadyApplied]: 'promotions.200135',
  [ServerErrorCode.BudgetNotEnough]: 'promotions.200143',
  [ServerErrorCode.ApplyCountExceedLimit]: 'promotions.200155',
  [ServerErrorCode.PromotionDzPending]: 'promotions.200219',
  [ServerErrorCode.PromotionMemberNotQualified]: 'promotions.200309',
  [ServerErrorCode.MemberValidBetAmountNotEnough]: 'promotions.200311',
  [ServerErrorCode.MemberValidBetAmountSportNotEnough]: 'promotions.200312',
  [ServerErrorCode.MemberTotalValidBetAmountNotEnough]: 'promotions.200313',
  [ServerErrorCode.MemberTotalValidBetAmountSportNotEnough]: 'promotions.200314',
  [ServerErrorCode.MemberPhoneNotFilled]: 'promotions.200318',
  [ServerErrorCode.MemberInfoNotCompleted]: 'promotions.200319',
  [ServerErrorCode.GetMemberDetailError]: 'promotions.200110',
  [ServerErrorCode.PromotionNotStarted]: 'promotions.210001',
  [ServerErrorCode.PromotionEmailNotBind]: 'promotions.210002',
  [ServerErrorCode.PromotionCouponNotEnough]: 'promotions.140126',
  [ServerErrorCode.PromotionCouponExpired]: 'promotions.140127',
  [ServerErrorCode.PromotionNotFound]: 'promotions.200130',
  [ServerErrorCode.GoalCancel]: 'promotions.200317',
  [ServerErrorCode.MemberBetAmountInGoalMatchNotEnough]: 'promotions.210004',
};

const depositErrorMessageMap: ErrorMessageMap<DepositServerError> = {
  [ServerErrorCode.DepositAmountNotEndWithZero]: 'errorCode.deposit.140132',
  [ServerErrorCode.DepositAmountExceedRange]: 'errorCode.deposit.140111',
  [ServerErrorCode.OperationTimeout]: 'errorCode.deposit.140078',
  [ServerErrorCode.ThirdPartyPaymentOrderFailed]: 'errorCode.deposit.140119',
  [ServerErrorCode.DepositOrderPendingOrLockedExist]: 'errorCode.deposit.140013',
  [ServerErrorCode.BankcardExceedLimit]: 'errorCode.deposit.140073',
  [ServerErrorCode.ServiceClosed]: 'errorCode.deposit.10114',
  [ServerErrorCode.CryptocurrencyDepositAlreadyExist]: 'errorCode.deposit.140095',
  [ServerErrorCode.DepositAmountLessThanMin]: 'errorCode.deposit.140030',
  [ServerErrorCode.DepositAmountMinimum]: 'errorCode.deposit.140036',
  [ServerErrorCode.MemberNotFoundThirdpartyLevel]: 'errorCode.deposit.140062',
  [ServerErrorCode.BankcardNotEnabled]: 'errorCode.deposit.140021',
  [ServerErrorCode.MemberNotFoundThirdpartyAccount]: 'errorCode.deposit.140063',
  [ServerErrorCode.DepositAmountExceedMax]: 'errorCode.deposit.140061',
  [ServerErrorCode.DepositAmountExceedLimit]: '',
  [ServerErrorCode.DepositUserInfoNotCompleted]: 'ownMember.improveAccountInfoContent',
};

const bankcardErrorMessageMap: ErrorMessageMap<BankCardServerError> = {
  [ServerErrorCode.BankcardValidationFailed]: 'withdrawal.c2c.addCardFail',
  [ServerErrorCode.BankcardAlreadyBound]: 'withdrawal.c2c.bankCardBindToOthersError',
  [ServerErrorCode.VerificationCodeErrorTooManyTimes]: 'withdrawal.c2c.verificationQueryExceedLimit',
};

export const errorMessageMap: ErrorMessageMap<number> = {
  ...sportErrorMessageMap,
  ...cashoutErrorMessageMap,
  ...casinoErrorMessageMap,
  ...promotionErrorMessageMap,
  ...depositErrorMessageMap,
  ...bankcardErrorMessageMap,
  // !------ transactionRecord ------
  //     case 10001: 线路异常，请稍后再试, register use errorCodeMsg.notFollowRule
  [ServerErrorCode.ParameterError]: 'error.common.10001',
  // 10202: 無操作權限
  [ServerErrorCode.PermissionDenied]: 'common.loginInfo',
  // 10203: token 驗證錯誤
  [ServerErrorCode.TokenInvalid]: 'error.bonusExchange.10203',
  // 10204: 請重新登入
  [ServerErrorCode.TokenExpiry]: 'error.common.10204',
  // 120006: 該單號被鎖定
  [ServerErrorCode.OrderLocked]: 'error.transactionRecord.120006',
  // 140003: 找不到該單號
  [ServerErrorCode.OrderNotFound]: 'error.transactionRecord.140003',
  // 120007: 提款操作鎖定
  [ServerErrorCode.WithdrawLocked]: 'error.transactionRecord.120007',
  // 1400015: 該單號已經通過
  [ServerErrorCode.OrderAlreadyApproved]: 'error.transactionRecord.1400015',
  // 1400016: 該單號已經被拒絕
  [ServerErrorCode.OrderAlreadyRejected]: 'error.transactionRecord.1400016',
  // 300002: 已多次連續取消或逾時，請稍後再試
  [ServerErrorCode.CtcServiceBlacklistError]: 'deposit.c2c.transferFailedTooManyContent',
  // 300006: 已多次連續取消或逾時，請稍後再試
  [ServerErrorCode.CtcCrmBlacklist]: 'deposit.c2c.transferFailedTooManyContent',
  // 300009: 提现过于频繁，请稍后再试
  [ServerErrorCode.CtcWithdrawTimeNotOverOneMinute]: 'c2c.error.300009',
  // 10000: 線路異常，請稍後再試
  [ServerErrorCode.InternalServerError]: 'error.common.10000',
  // 300010
  [ServerErrorCode.CtcServiceError]: 'error.common.10000',
  // 300007
  [ServerErrorCode.CtcCrmSwitchOff]: 'error.common.10000',
  // 7130034: S3上傳失敗
  [ServerErrorCode.CtcS3UploadFailed]: 'c2c.error.7130034',

  // !------ register ------

  // 10005: 線路異常，請稍後再試
  [ServerErrorCode.BodyRequired]: 'error.common.10005',
  // 130000: 帳戶名或密碼有錯，請重新輸入
  [ServerErrorCode.AccountNotFound]: 'errorCodeMsg.loginFailContent',
  // 130001: 帳戶名或密碼有錯，請重新輸入
  [ServerErrorCode.PasswordError]: 'errorCodeMsg.loginFailContent',
  // 130002: 帳號已存在
  [ServerErrorCode.AccountAlreadyExist]: 'signUp.130002',
  // 130008: 您所在网络已无法注册，请联系7x24客服
  [ServerErrorCode.RegisterIpExceedLimit]: 'errorCodeMsg.signUpIpRegisterAccountLimitError',
  // 130013: 年齡未成年
  [ServerErrorCode.AgeNotAdult]: 'errorCodeMsg.130013',
  // 130027: 您所在網絡已無法註冊，請聯繫7x24客服
  [ServerErrorCode.RegisterIpBlacklistExceedLimit]: 'errorCodeMsg.signUpIpRegisterAccountLimitError',
  // 130035: 此暱稱無法使用，請換個再提交
  [ServerErrorCode.NicknameIncludeBadWord]: 'errorCode.ownMember.130035',
  // 130058: CLIENT_NONCE_ERROR (拼圖驗證錯誤)
  [ServerErrorCode.CaptchaError]: 'error.130058',
  // 130048: 驗證碼失效-請重發驗證碼
  [ServerErrorCode.OtpCodeExpired]: 'sms.130048',
  // 130049: 驗證碼錯誤-請重新輸入驗證碼
  [ServerErrorCode.VerificationCodeError]: 'sms.130049',
  // 130051: 手機號已有用戶使用
  [ServerErrorCode.PhoneNumberAlreadyExist]: 'sms.130051',
  // 130052: 請輸入正確的手機號碼
  [ServerErrorCode.MustProvidePhoneNumber]: 'sms.130052',
  // 130053: 未完成{流程名稱}流程，请联系7x24客服
  [ServerErrorCode.IpOverSendSmsLimit]: '6789bet.sms.130053',
  // 130054: 手機號已達當日發送驗證碼上限
  [ServerErrorCode.PhoneNumberOverSendSmsLimit]: 'sms.130054',
  // 130056: 'sms.130056', bindExistsAccount.130056 for bind account
  [ServerErrorCode.AccountAlreadyBoundPhoneNumber]: 'error.thirdPartyBindFail',
  // 130070: 郵箱地址已有用戶使用
  [ServerErrorCode.EmailIsAlreadyExist]: 'error.thirdPartyBindFail',
  // 130071: 同一EmailAddress每日發Email 驗證碼上限次數超過業主設定
  [ServerErrorCode.EmailOverSendLimit]: 'OTP.EmailOverSend',
  // 130072: 找不到業主電子信箱設定
  [ServerErrorCode.NotFoundVendorEmailSetting]: 'OTP.emailNotFound',
  // 130073: Email長度超過50字
  [ServerErrorCode.EmailLengthMoreThan50]: 'OTP.OTP.emailTooLong',
  // 130092: tmp token 到期
  [ServerErrorCode.ThirdPartyTmpTokenExpired]: 'signUp.forgetPasswordFailTitle',
  // 130093: 已經被綁定過
  [ServerErrorCode.ThirdPartyAccountAlreadyBound]: 'error.thirdPartyBindFail',
  // 130094: 三方註冊失敗
  [ServerErrorCode.RegisterFail]: 'error.130094',
  // 130108: 註冊失敗
  [ServerErrorCode.UnexpectedRegisterFailed]: 'error.130108',

  // !------ checkAccountExist ------

  // 130004: 輸入錯誤次數過多，請稍後再試
  [ServerErrorCode.AccountLocked]: 'sms.error.130004',
  // 130006: 帳戶名或提款密碼錯誤
  [ServerErrorCode.AccountOrWithdrawPasswordError]: 'errorCodeMsg.forgetPasswordFailContent',

  // !------ resetPassword ------

  // 130007: 重置密碼失敗
  [ServerErrorCode.VerificationNotPass]: 'error.130007',

  // !------ signIn ------

  // 130003: 該裝置被鎖定，請聯絡客服
  [ServerErrorCode.IpLocked]: 'errorCodeMsg.loginFailIpLock',
  // 130005: 該帳號被鎖定，請聯絡客服
  [ServerErrorCode.AccountAlreadyLocked]: 'errorCodeMsg.loginFailAccountLock',
  // 130018: 您的帳戶暫時無法登入，請聯繫7x24客服
  [ServerErrorCode.AccountDisabled]: 'errorCodeMsg.loginFailAccountError',
  // 130086: 輸入錯誤次數過多，請稍後再試
  [ServerErrorCode.LoginFailedUseOtp]: 'error.130086',
  // 130090: 手機/郵箱登入時密碼為空
  [ServerErrorCode.PasswordEmpty]: 'ownMember.enterPassword',
  // 130091: 綁定失敗
  [ServerErrorCode.BindFail]: 'error.130091',
  // 130095: 三方綁定失敗（已綁定過三方）
  [ServerErrorCode.ThirdPartyBindFail]: 'error.thirdPartyBindFail',
  // 130099: 玩家未綁定 email（進行必須通過郵箱驗證的動作時發現未綁定）
  [ServerErrorCode.EmailNotBound]: 'error.130099',
  // 130102: 需要跑驗證流程
  [ServerErrorCode.NeedVerification]: 'error.130102',
  // 130105: NOT_FOUND_AUTHORIZATION 未帶入 登入token
  [ServerErrorCode.NotFoundAuthorization]: 'error.130105',
  // 130106: 帳號已經綁定email
  [ServerErrorCode.TokenVerifyFail]: 'error.thirdPartyBindFail',

  // !------ transfer ------
  // 160111: 轉帳失敗，請稍後再試或聯繫7x24客服
  [ServerErrorCode.TransferThirdPartyCreateOrConfirmAccountError]: 'transfer.fail',
  // 160112: 轉帳失敗，請稍後再試或聯繫7x24客服(應該要為‘帳號已存在或密碼錯誤’)
  [ServerErrorCode.TransferThirdPartyAccountExistOrPasswordError]: 'transfer.fail',
  // 160113: 轉帳失敗，請稍後再試或聯繫7x24客服(應該要為'取得帳號餘額失敗')
  [ServerErrorCode.TransferThirdPartyGetBalanceError]: 'transfer.fail',
  // 160114: 轉帳失敗，請稍後再試或聯繫7x24客服(應該要為'重複轉帳')
  [ServerErrorCode.TransferThirdPartyRepeatError]: 'transfer.fail',
  // 160115: 轉帳失敗，請稍後再試或聯繫7x24客服(應該要為'轉帳失敗')
  [ServerErrorCode.TransferThirdPartyTransactionError]: 'transfer.fail',
  // 160116: 轉帳失敗，請稍後再試或聯繫7x24客服(應該要為'預約轉帳失敗')
  [ServerErrorCode.TransferThirdPartyReserveTransactionError]: 'transfer.fail',
  // 160117: 轉帳失敗，請稍後再試或聯繫7x24客服(應該要為'轉帳確認失敗')
  [ServerErrorCode.TransferThirdPartyConfirmTransactionError]: 'transfer.fail',
  // 160118: 轉帳失敗，請稍後再試或聯繫7x24客服(應該要為'AG餘額不足')
  [ServerErrorCode.TransferThirdPartyAgBalanceNotEnough]: 'transfer.fail',
  // 160123: 轉帳失敗，請稍後再試或聯繫7x24客服(應該要為'第三方餘額不足')
  [ServerErrorCode.TransferThirdPartyBalanceNotEnough]: 'transfer.fail',
  // 160124: 轉帳失敗，請稍後再試或聯繫7x24客服(應該要為'取得provider service失敗')
  [ServerErrorCode.TransferThirdPartyGetProviderServiceError]: 'transfer.fail',

  // !------ bonusExchange ------
  // 130064: 兌換失敗
  [ServerErrorCode.ExchangeVipScoreFail]: 'error.bonusExchange.130064',
  // 130065: 紅利不足
  [ServerErrorCode.VipScoreNotEnough]: 'error.bonusExchange.130065',

  // !------ withdrawal ------

  [ServerErrorCode.IdNotFound]: 'error.common.10104',
  // 130101: 提現密碼不正確
  [ServerErrorCode.WithdrawPasswordIncorrect]: 'error.130101',

  // !------ withdrawal apply ------

  // 130014: 尚未設定提款密碼
  [ServerErrorCode.WithdrawPasswordNotSet]: '',
  [ServerErrorCode.WithdrawPasswordError]: 'ownMember.withdrawPasswordError',
  // 140023: 低於最低提款金額 error.underMinWithdrawAmount
  [ServerErrorCode.WithdrawAmountLessThanMin]: '6789bet.postHandlingBatches.error.140023',
  // 140024: 提現密碼輸入錯誤次數過多，暫時鎖定，請稍後再試
  [ServerErrorCode.WithdrawPasswordErrorTooManyTimes]: '6789bet.postHandlingBatches.error.140024',
  // 140071: 提款金額小於提款手續費，請提高提款金額
  [ServerErrorCode.WithdrawAmountLessThanFee]: '6789bet.postHandlingBatches.error.140071',
  // 140072: 您申請的提現金額有誤，請重新設定
  [ServerErrorCode.WithdrawAmountNotInRange]: '6789bet.postHandlingBatches.error.140072',
  // 140114: 此銀行停止提供服務
  [ServerErrorCode.BankcardDisabled]: 'tranInfo.bankBranch.error.140114',
  // 140131: 提現請輸入尾數末3碼為0的整數
  [ServerErrorCode.WithdrawAmountNotEndWithZero]: 'tranInfo.bankBranch.error.140131',
  // 提現進行中，請聯繫7x24客服
  [ServerErrorCode.WithdrawProcessing]: 'tranInfo.bankBranch.error.140140',
  // 請先使用銀行卡提款成功一次後, 方可使用錢包提款, 如有疑問請聯繫在線客服
  [ServerErrorCode.WithdrawNeedUseBankcardAtLeastOnce]: 'tranInfo.bankBranch.error.140143',
  [ServerErrorCode.BankcardValidationNotEnough]: 'c2c.error.130089',
  // 140096: 啟用錢包的幣種不是加密貨幣
  [ServerErrorCode.WalletCurrencyNotCryptocurrency]: '6789bet.deleteCryptoAddress.error.140096',
  // 140097: 加密貨幣地址不存在
  [ServerErrorCode.WalletAddressNotFound]: '6789bet.deleteCryptoAddress.error.140097',
  // 140098: 已存在相同地址
  [ServerErrorCode.DuplicateDigitalWalletAddress]: 'errorCodeMsg.sameAddress',

  // 140019: 餘額不足，請重新輸入
  [ServerErrorCode.InsufficientBalance]: '6789bet.postHandlingBatches.error.140019',

  // !------ finished info ------
  [ServerErrorCode.OldPasswordError]: '6789bet.editMember.oldWithdrawPswError',
  // 130103: 舊三方帳號 不可以解除綁定
  [ServerErrorCode.OldThirdPartyAccountCannotUnbind]: 'error.130103',

  // !------ smsVerifyError ------
  // 130047: 短信驗證碼發送失敗，請稍後再試
  [ServerErrorCode.SmsSendFail]: 'sms.130047',
  // 130050: 短信驗證碼發送失敗，請稍後再試
  [ServerErrorCode.CannotResendOtpCode]: 'sms.130050',
  // 130068: 電話號碼尚未綁定
  [ServerErrorCode.PhoneNumberNotBound]: 'sms.130068',
  // 130097: 不正確 或 不合法 sms otp code（手機驗證未通過，輸入不正確或已過期）
  [ServerErrorCode.SmsOtpCodeError]: 'errorCodeMsg.errorTitlePuzzle',
  // 130098: 不正確 或 不合法 email otp code
  [ServerErrorCode.EmailOtpCodeError]: 'errorCodeMsg.errorTitlePuzzle',
  // 130100: 不正確 或 不合法 otp code(超過一個認證時回傳，手機或郵箱驗證不通過，但不知道是哪個類別)
  [ServerErrorCode.OtpCodeError]: 'errorCodeMsg.errorTitlePuzzle',
  // 130107: otpType 有問題（郵箱/手機登入，如type帶入存款則失敗，防呆用途，用戶看不到）
  [ServerErrorCode.OtpTypeProblem]: 'errorCodeMsg.errorTitlePuzzle',

  // !------ add bankcard ------
  [ServerErrorCode.BankcardDuplicated]: 'errorCodeMsg.duplicateBackCard',
  [ServerErrorCode.BankcardAlreadyBoundBySelf]: 'errorCodeMsg.duplicateBackCard',
  // 140137: 已綁定此錢包類型
  [ServerErrorCode.WalletTypeDuplicated]: 'errorCodeMsg.bankCard.duplicateAddress',
  // 140138: 此錢包地址已被其他會員綁定
  [ServerErrorCode.WalletAddressConflict]: 'errorCodeMsg.bankCard.addrAlreadyBinded',
  // 140025: 銀行卡已到綁定上限
  [ServerErrorCode.BankcardReachedLimit]: 'errorCodeMsg.bankCardLimit',
};
