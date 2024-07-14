import { ServerErrorCode } from '@shared/enums';
import { I18nKey } from '@shared/models/translation.model';

export type CashoutServerError = Extract<
  ServerErrorCode,
  | ServerErrorCode.ResourceNotFound
  | ServerErrorCode.CashoutDisabled
  | ServerErrorCode.CashoutUnikeyExpired
  | ServerErrorCode.CashoutVariableNotFound
  | ServerErrorCode.CashoutVariableChanged
  | ServerErrorCode.CashoutClosed
  | ServerErrorCode.CashoutAmountNotEnough
  | ServerErrorCode.EventClosed
  | ServerErrorCode.CashoutOrderExist
  | ServerErrorCode.CashoutOrderExceedLimit
>;

export type SportServerError = Extract<ServerErrorCode, ServerErrorCode.SportGameNotExisted>;

export type CasinoServerError = Extract<
  ServerErrorCode,
  | ServerErrorCode.ThirdpartyCanNotStarUp
  | ServerErrorCode.ThirdpartyCeaseOperations
  | ServerErrorCode.TransferThirdPartyBalanceInOtherWalletNow
  | ServerErrorCode.TransferThirdPartyBalanceNotEnoughToPlay
  | ServerErrorCode.TransferThirdPartyBalanceInBbinNow
  | ServerErrorCode.ThirdpartyNotTryGame
  | ServerErrorCode.TransferThirdPartyUserIsPlayingV8
  | ServerErrorCode.TransferThirdPartyUserIsPlayingLY
  | ServerErrorCode.LineIsAbnormalAndTryAgainLater
  | ServerErrorCode.TransferringAndTryAgainLaterInAG
  | ServerErrorCode.TransferringAndTryAgainLaterInKY
  | ServerErrorCode.TransferFailedAndTryAgainLaterInPT
  | ServerErrorCode.TransferFailedAndTryAgainLaterInBBIN
  | ServerErrorCode.TransferFailedAndTryAgainLaterInV8
  | ServerErrorCode.TransferFailedAndTryAgainLaterInLY
  | ServerErrorCode.TransferThirdPartyInprogress
  | ServerErrorCode.TransferThirdPartyMoneyFailed
>;

export type PromotionServerError = Extract<
  ServerErrorCode,
  | ServerErrorCode.NotQualified
  | ServerErrorCode.MemberRegisterDateNotInActivityRange
  | ServerErrorCode.DepositTotalAmountNotInActivityRange
  | ServerErrorCode.ValidBetAmountNotInActivityRange
  | ServerErrorCode.OnlyAppCanApply
  | ServerErrorCode.NotInActivityTime
  | ServerErrorCode.UserCannotApplyAnyPromotion
  | ServerErrorCode.DepositCountNotInActivityRange
  | ServerErrorCode.MemberLoseNotInActivityRange
  | ServerErrorCode.MemberWinNotInActivityRange
  | ServerErrorCode.FirstDepositOnly
  | ServerErrorCode.NextDepositOnly
  | ServerErrorCode.MemberCurrencyNotInActivityRange
  | ServerErrorCode.NotAllowSameIp
  | ServerErrorCode.PromotionDzNameDuplicated
  | ServerErrorCode.PromotionMemberNameNotFilled
  | ServerErrorCode.PromotionAlreadyApplied
  | ServerErrorCode.BudgetNotEnough
  | ServerErrorCode.ApplyCountExceedLimit
  | ServerErrorCode.PromotionDzPending
  | ServerErrorCode.PromotionMemberNotQualified
  | ServerErrorCode.MemberValidBetAmountNotEnough
  | ServerErrorCode.MemberValidBetAmountSportNotEnough
  | ServerErrorCode.MemberTotalValidBetAmountNotEnough
  | ServerErrorCode.MemberTotalValidBetAmountSportNotEnough
  | ServerErrorCode.MemberPhoneNotFilled
  | ServerErrorCode.MemberInfoNotCompleted
  | ServerErrorCode.GetMemberDetailError
  | ServerErrorCode.PromotionNotStarted
  | ServerErrorCode.PromotionEmailNotBind
  | ServerErrorCode.PromotionCouponNotEnough
  | ServerErrorCode.PromotionCouponExpired
  | ServerErrorCode.PromotionNotFound
  | ServerErrorCode.GoalCancel
  | ServerErrorCode.MemberBetAmountInGoalMatchNotEnough
>;

export type DepositServerError = Extract<
  ServerErrorCode,
  | ServerErrorCode.DepositAmountNotEndWithZero
  | ServerErrorCode.DepositAmountExceedRange
  | ServerErrorCode.OperationTimeout
  | ServerErrorCode.ThirdPartyPaymentOrderFailed
  | ServerErrorCode.BankcardNotEnabled
  | ServerErrorCode.DepositOrderPendingOrLockedExist
  | ServerErrorCode.BankcardExceedLimit
  | ServerErrorCode.ServiceClosed
  | ServerErrorCode.CryptocurrencyDepositAlreadyExist
  | ServerErrorCode.DepositAmountLessThanMin
  | ServerErrorCode.DepositAmountMinimum
  | ServerErrorCode.MemberNotFoundThirdpartyLevel
  | ServerErrorCode.MemberNotFoundThirdpartyAccount
  | ServerErrorCode.DepositAmountExceedMax
  | ServerErrorCode.DepositAmountExceedLimit
  | ServerErrorCode.DepositUserInfoNotCompleted
>;

export type BankCardServerError = Extract<
  ServerErrorCode,
  | ServerErrorCode.BankcardValidationFailed
  | ServerErrorCode.BankcardAlreadyBound
  | ServerErrorCode.VerificationCodeErrorTooManyTimes
>;

export type ErrorMessageMap<T extends ServerErrorCode> = Record<T, I18nKey>;
