import { ErrorHandleType, ErrorType } from '@shared/enums';
import { networkErrorHandler } from '@utilities/api/http/error-handler';
import { AxiosError, HttpStatusCode } from 'axios';

interface IApiResponseHandlerHook<ApiResponse> {
  isNeedCheckNetworkError: () => boolean;
  isNeedCheckServerError: () => boolean;
  handleServerError: (response: ApiResponse) => void;
  handleNetworkError: (error: AxiosError) => void;
  /**
   * 是否為網路層回報的server error
   * @external https://innotech.atlassian.net/browse/IN-31510
   * @returns {boolean}
   */
  isNotAcceptableServerError: (error: AxiosError) => boolean;
}

export interface IApiResponseHandlerHookProps<ApiResponse> {
  /**
   * 錯誤處理類型
   */
  errorHandleType: ErrorHandleType;
  /**
   * 網路層報錯處理
   * @param error 錯誤內容
   */
  onNetworkError?: (error: AxiosError) => void;
  /**
   * 預期內的系統錯誤處理
   */
  onServerError?: (data: ApiResponse) => void;
  /**
   * 任何錯誤處理
   */
  onError?: (type: ErrorType.Network | ErrorType.Server, error: AxiosError | ApiResponse) => void;
  disableGeneralNetworkErrorHandle?: boolean;
  disableGeneralServerErrorHandle?: boolean;
}

/**
 * API錯誤通用處理邏輯
 */
export const useApiResponseHandler = <ApiResponse>({
  errorHandleType,
  disableGeneralNetworkErrorHandle,
  disableGeneralServerErrorHandle,
  onError,
  onNetworkError,
  onServerError,
}: IApiResponseHandlerHookProps<ApiResponse>): IApiResponseHandlerHook<ApiResponse> => {
  const isNeedCheckServerError = (): boolean =>
    errorHandleType === ErrorHandleType.Server || errorHandleType === ErrorHandleType.All;

  const isNeedCheckNetworkError = (): boolean =>
    errorHandleType === ErrorHandleType.Network || errorHandleType === ErrorHandleType.All;

  const handleServerError = (response: ApiResponse) => {
    if (!disableGeneralServerErrorHandle) {
      // serverErrorHandler(response);
    }
    onServerError?.(response);
    onError?.(ErrorType.Server, response);
  };

  const handleNetworkError = (error: AxiosError) => {
    if (!disableGeneralNetworkErrorHandle) {
      networkErrorHandler(error);
    }
    onNetworkError?.(error);
    onError?.(ErrorType.Network, error);
  };

  return {
    isNeedCheckNetworkError,
    isNeedCheckServerError,
    handleServerError,
    handleNetworkError,
    isNotAcceptableServerError: ({ response }: AxiosError) => response?.status === HttpStatusCode.NotAcceptable,
  };
};
