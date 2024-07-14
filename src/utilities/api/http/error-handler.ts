import { errorMessageMap } from '@shared/constants/error-message.constants';
import { Page, ServerErrorCode } from '@shared/enums';
import { navigate } from '@shared/hooks/use-navigator';
import { BaseTask, HintPopup, closeAllOverlay, toggleHintPopup } from '@shared/hooks/use-overlay';
import { IBaseApiResponse, Slot } from '@shared/interfaces';
import { I18nKey } from '@shared/models/translation.model';
import { Log } from '@utilities/helpers/log.helper';
import { getRelativePathByKey } from '@utilities/helpers/routes.helper';
import { AxiosError, HttpStatusCode } from 'axios';
import { translate } from '@shared/hooks/use-translation';

interface IErrorPopupProps
  extends Pick<HintPopup, 'render' | 'handleOnClose' | 'errorCode'>,
    Pick<
      BaseTask,
      'backdrop' | 'backgroundClose' | 'mainLayerEnabled' | 'onBackdropClick' | 'disableCloseAfterRouteChanged'
    > {
  errorMessage: I18nKey;
  title?: I18nKey;
  code?: ServerErrorCode;
  buttonText?: string;
  cancelButtonText?: string;
  footerSlot?: Slot;
  onConfirm?: () => void;
}

interface IFriendlyHintPopupProps extends IErrorPopupProps {
  onCancel?: () => void;
  primaryButtonClasses?: string;
  outlineButtonClasses?: string;
}

export type ErrorHandlerArgs = Pick<IBaseApiResponse<unknown>, 'code'> &
  Partial<Pick<IBaseApiResponse<unknown>, 'msg'>> &
  Pick<HintPopup['i18nKeys'], 'title'>;

const ignoreServerErrorList: ServerErrorCode[] = [
  ServerErrorCode.PlatformApiConnectionError,
  ServerErrorCode.RedisConnectionError,
  ServerErrorCode.CashoutUnikeyExpired,
  ServerErrorCode.CashoutVariableChanged,
  ServerErrorCode.TransferThirdPartyBalanceInOtherWalletNow,
  ServerErrorCode.TransferThirdPartyUserIsPlaying,
  ServerErrorCode.TransferThirdPartyUserIsPlayingPt,
  ServerErrorCode.TransferThirdPartyUserIsPlayingV8,
  ServerErrorCode.TransferThirdPartyUserIsPlayingLY,
];

/**
 * 預設溫馨提醒彈窗
 * @description 標題顯示溫馨提醒，只有一個確認按鈕
 */
const friendlyServerErrorList: ServerErrorCode[] = [
  ServerErrorCode.WithdrawNeedUseBankcardAtLeastOnce,
  ServerErrorCode.OrderDuplicated,
  ServerErrorCode.OrderFailed,
  ServerErrorCode.AccountExisted,
  ServerErrorCode.DepositOrderPendingOrLockedExist,
  ServerErrorCode.InsufficientBalance,
  ServerErrorCode.BankcardNotEnabled,
  ServerErrorCode.WithdrawPasswordErrorTooManyTimes,
  ServerErrorCode.BankcardFormatError,
  ServerErrorCode.WithdrawAmountLessThanFee,
  ServerErrorCode.DuplicateDigitalWalletAddress,
  ServerErrorCode.DepositAmountExceedRange,
  ServerErrorCode.BankcardDisabled,
  ServerErrorCode.PromotionCouponNotEnough,
  ServerErrorCode.PromotionCouponExpired,
  ServerErrorCode.WithdrawAmountNotEndWithZero,
  ServerErrorCode.DepositAmountNotEndWithZero,
  ServerErrorCode.WalletAddressConflict,
  ServerErrorCode.TransferThirdPartyBalanceNotEnoughToPlay,
  ServerErrorCode.TransferThirdPartyMoneyFailed,
  ServerErrorCode.TransferThirdPartyInprogress,
  ServerErrorCode.ThirdpartyNotTryGame,
  ServerErrorCode.TransferringAndTryAgainLaterInAG,
  ServerErrorCode.TransferringAndTryAgainLaterInKY,
  ServerErrorCode.PromotionNotFound,
  ServerErrorCode.PromotionAlreadyApplied,
  ServerErrorCode.BudgetNotEnough,
  ServerErrorCode.NotQualified,
  ServerErrorCode.MemberRegisterDateNotInActivityRange,
  ServerErrorCode.DepositTotalAmountNotInActivityRange,
  ServerErrorCode.ValidBetAmountNotInActivityRange,
  ServerErrorCode.NotAllowSameIp,
  ServerErrorCode.OnlyAppCanApply,
  ServerErrorCode.NotInActivityTime,
  ServerErrorCode.UserCannotApplyAnyPromotion,
  ServerErrorCode.ApplyCountExceedLimit,
  ServerErrorCode.DepositCountNotInActivityRange,
  ServerErrorCode.MemberLoseNotInActivityRange,
  ServerErrorCode.MemberWinNotInActivityRange,
  ServerErrorCode.FirstDepositOnly,
  ServerErrorCode.NextDepositOnly,
  ServerErrorCode.PromotionDzPending,
  ServerErrorCode.PromotionDzNameDuplicated,
  ServerErrorCode.PromotionMemberNameNotFilled,
  ServerErrorCode.PromotionMemberNotQualified,
  ServerErrorCode.MemberValidBetAmountNotEnough,
  ServerErrorCode.MemberValidBetAmountSportNotEnough,
  ServerErrorCode.MemberTotalValidBetAmountNotEnough,
  ServerErrorCode.MemberTotalValidBetAmountSportNotEnough,
  ServerErrorCode.GoalCancel,
  ServerErrorCode.MemberPhoneNotFilled,
  ServerErrorCode.MemberInfoNotCompleted,
  ServerErrorCode.PromotionNotStarted,
  ServerErrorCode.PromotionEmailNotBind,
  ServerErrorCode.MemberBetAmountInGoalMatchNotEnough,
  ServerErrorCode.OperationTimeout,
];

const reLoginModalId = 'error-common-reLogin';

export const getErrorMessage = (code: ServerErrorCode): I18nKey => {
  const i18nKey: I18nKey = errorMessageMap[code] || 'error.common.10000';
  return i18nKey;
};

/**
 * 錯誤
 */
export const toggleErrorPopup = ({
  errorMessage,
  onConfirm,
  title = 'common.error',
  buttonText = 'common.sure',
  render,
  footerSlot,
  errorCode,
  backdrop = true,
  backgroundClose = true,
  mainLayerEnabled = false,
  onBackdropClick,
  handleOnClose,
}: IErrorPopupProps) =>
  toggleHintPopup(
    {
      type: 'error',
      errorCode,
      i18nKeys: {
        title,
        description: errorMessage,
      },
      primaryButton: {
        children: buttonText,
        variant: 'primary',
        testId: 'error-popup-primary-btn',
        onClick: () => {
          onConfirm?.();
        },
      },
      handleOnClose,
      render,
      footerSlot,
    },
    {
      backdrop,
      backgroundClose,
      mainLayerEnabled,
      onBackdropClick,
    },
  );

/**
 * 溫馨提醒彈窗
 * @description 預設標題為溫馨提醒，主按鈕為確定
 */
export const toggleFriendlyTipsPopup = ({
  errorMessage,
  title = 'common.friendlyTips',
  buttonText = 'common.sure',
  cancelButtonText,
  render,
  footerSlot,
  errorCode,
  backdrop = true,
  backgroundClose = true,
  mainLayerEnabled = false,
  handleOnClose,
  onCancel,
  onConfirm,
  primaryButtonClasses,
  outlineButtonClasses,
  taskId,
  disableCloseAfterRouteChanged,
}: IFriendlyHintPopupProps &
  Omit<BaseTask, 'taskId'> &
  Partial<Pick<BaseTask, 'taskId' | 'disableCloseAfterRouteChanged'>>) =>
  toggleHintPopup(
    {
      type: 'information',
      i18nKeys: {
        title,
        description: errorMessage,
      },
      primaryButton: buttonText
        ? {
            children: buttonText,
            variant: 'primary',
            classes: primaryButtonClasses,
            testId: errorCode ? `friendly-tips-${errorCode}-primary-btn` : 'friendly-tips-primary-btn',
            onClick: () => {
              onConfirm?.();
            },
          }
        : undefined,
      cancelButton: cancelButtonText
        ? {
            children: cancelButtonText,
            classes: outlineButtonClasses,
            variant: 'outline',
            testId: errorCode ? `friendly-tips-${errorCode}-cancel-btn` : 'friendly-tips-cancel-btn',
            onClick: () => {
              onCancel?.();
            },
          }
        : undefined,
      handleOnClose,
      render,
      footerSlot,
    },
    {
      backdrop,
      backgroundClose,
      mainLayerEnabled,
      taskId,
      disableCloseAfterRouteChanged,
    },
  );

/**
 * 系統已知錯誤統一處理
 * @description 非特殊錯誤處理邏輯為使用error code比對有無存在翻譯內容，若無則使用預設訊息彈窗
 * @external https://innotech.atlassian.net/browse/PRF-1011
 */
/* eslint-disable complexity */
export const serverErrorHandler = ({ code, title, msg = '' }: ErrorHandlerArgs, handleOnClose?: () => void) => {
  if (!ignoreServerErrorList.includes(code)) {
    Log.system({
      msg: 'Toggle general server error handler',
      params: { code },
    });
    const i18nKey: I18nKey = getErrorMessage(code);
    if (friendlyServerErrorList.includes(code)) {
      toggleFriendlyTipsPopup({
        errorCode: code,
        errorMessage: i18nKey,
        handleOnClose,
      });
    } else {
      switch (code) {
        case ServerErrorCode.PermissionDenied:
          toggleFriendlyTipsPopup({
            title: 'errorCodeMsg.title.remind',
            errorCode: code,
            errorMessage: /Authorization/.test(msg) ? i18nKey : msg,
            handleOnClose,
          });
          break;
        case ServerErrorCode.TokenExpiry:
        case ServerErrorCode.TokenInvalid:
          closeAllOverlay();
          toggleFriendlyTipsPopup({
            taskId: reLoginModalId,
            errorCode: code,
            errorMessage: 'error.common.reLogin',
            handleOnClose,
            disableCloseAfterRouteChanged: true,
          });
          break;
        case ServerErrorCode.BankcardAlreadyBoundBySelf:
        case ServerErrorCode.BankcardDuplicated:
          toggleFriendlyTipsPopup({
            errorCode: code,
            errorMessage: i18nKey,
            buttonText: '6686.onlineService',
            cancelButtonText: 'common.cancel',
            onConfirm: () => {
              navigate(getRelativePathByKey(Page.CustomerService), { replace: true });
            },
          });
          break;
        case ServerErrorCode.ThirdPartyPaymentOrderFailed:
        case ServerErrorCode.BankcardExceedLimit:
          toggleFriendlyTipsPopup({
            errorCode: code,
            errorMessage: i18nKey,
            buttonText: '6789bet.customerService.contact',
            cancelButtonText: 'common.continueDeposit',
            onConfirm: () => {
              navigate(getRelativePathByKey(Page.CustomerService), { replace: true });
            },
            onCancel: () => {
              navigate(getRelativePathByKey(Page.Deposit), { replace: true });
            },
          });
          break;
        case ServerErrorCode.AccountLocked:
          toggleFriendlyTipsPopup({
            errorCode: code,
            errorMessage: i18nKey,
            buttonText: 'foobar.onlineService',
            cancelButtonText: 'common.cancel',
            outlineButtonClasses: 'opacity-100',
            onConfirm: () => {
              navigate(getRelativePathByKey(Page.CustomerService), { replace: true });
            },
          });
          break;
        default:
          toggleErrorPopup({
            errorMessage: i18nKey,
            errorCode: code,
            handleOnClose,
            title,
          });
          break;
      }
    }
  }
};

/**
 * 連線錯誤統一處理
 * @external https://innotech.atlassian.net/browse/IN-31510
 */
export const networkErrorHandler = (error: AxiosError) => {
  const { response } = error;
  const status = response?.status;
  switch (status) {
    case HttpStatusCode.InternalServerError:
      toggleErrorPopup({ errorMessage: 'error.common.10000' });
      break;
    default:
      break;
  }
};

// !提供QA與開發人員快速重現指定error code情境，為避免開發人員誤用，不加入全局定義內
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/**
 * @external https://innotech.atlassian.net/browse/PRF-1364
 */
(window as any).serverErrorHandler = serverErrorHandler;

/**
 * SMS驗證特殊錯誤處理
 */
export function onVerifySMSErrors(error: IBaseApiResponse, processName?: I18nKey) {
  switch (error.code) {
    case ServerErrorCode.IpOverSendSmsLimit:
    case ServerErrorCode.PhoneNumberOverSendSmsLimit:
      toggleErrorPopup({
        backgroundClose: false,
        errorCode: error.code,
        errorMessage: translate('userSendOtpSms.otpNotYet', { type: translate(processName ?? '') }),
        onConfirm: () => {
          navigate(getRelativePathByKey(Page.CustomerService));
        },
      });
      break;
    default:
      serverErrorHandler(error);
      break;
  }
}
