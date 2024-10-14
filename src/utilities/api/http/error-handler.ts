import { errorMessageMap } from '@shared/constants/error-message.constants';
import { ServerErrorCode } from '@shared/enums';
import { BaseTask, HintPopup, toggleHintPopup } from '@shared/hooks/use-overlay';
import { IBaseApiResponse, Slot } from '@shared/interfaces';
import { I18nKey } from '@shared/models/translation.model';
import { Log } from '@utilities/helpers/log.helper';
import { AxiosError, HttpStatusCode } from 'axios';

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
export const serverErrorHandler = ({ code }: ErrorHandlerArgs, handleOnClose?: () => void) => {
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
    }
  }
};

/**
 * 連線錯誤統一處理
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
(window as any).serverErrorHandler = serverErrorHandler;
