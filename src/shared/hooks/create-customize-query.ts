import { ServerErrorCode } from '@shared/enums/server-error.enum';
import { TimeStamp } from '@shared/interfaces';
import { IBaseApiResponse } from '@shared/interfaces/api.interface';
import { CreateQueryResult } from '@tanstack/solid-query';
import { ErrorHandlerArgs } from '@utilities/api/http/error-handler';
import { deepClone } from '@utilities/helpers/utilities.helper';
import { AxiosError, AxiosResponse } from 'axios';
import { createEffect, on } from 'solid-js';
import { IApiResponseHandlerHookProps, useApiResponseHandler } from './use-api-response-handler';

type CustomizeQueryConfig<ApiResponse> = {
  query: CreateQueryResult<AxiosResponse<IBaseApiResponse<ApiResponse>>, AxiosError<IBaseApiResponse>>;
  /**
   * only execute when api response code is 0
   * @description map API response to frontend model
   * @param data api response
   */
  onSuccess: (data: ApiResponse, time: TimeStamp) => void;
  /**
   * api有打通無論結果為何都會執行
   */
  onSettled?: (data: IBaseApiResponse<ApiResponse> | undefined) => void;
  /**
   * query請求過程中enabled條件改變導致請求被取消時處理
   */
  onCanceled?: () => void;
} & IApiResponseHandlerHookProps<ApiResponse>;

type CustomizeQueryResponse<ApiResponse> = CreateQueryResult<
  AxiosResponse<IBaseApiResponse<ApiResponse>>,
  AxiosError<ErrorHandlerArgs>
>;

const retryOptions = {
  retry: 5,
};

const createCustomizeQuery = <ApiResponse>({
  query,
  errorHandleType,
  onError = () => {},
  onSuccess = () => {},
  onSettled = () => {},
  onCanceled = () => {},
  onServerError = () => {},
  onNetworkError = () => {},
  disableGeneralNetworkErrorHandle = false,
  disableGeneralServerErrorHandle = false,
}: CustomizeQueryConfig<ApiResponse>): CustomizeQueryResponse<ApiResponse> => {
  const {
    isNeedCheckNetworkError,
    isNeedCheckServerError,
    handleServerError,
    handleNetworkError,
    isNotAcceptableServerError,
  } = useApiResponseHandler<ApiResponse>({
    errorHandleType,
    onError,
    onServerError,
    onNetworkError,
    disableGeneralNetworkErrorHandle,
    disableGeneralServerErrorHandle,
  });

  createEffect(
    on(
      () => query.error,
      () => {
        if (query.error) {
          // ! 網路層處理
          if (isNeedCheckNetworkError()) {
            handleNetworkError(query.error);
          }
          // ! 服務層處理
          if (isNotAcceptableServerError(query.error) && isNeedCheckServerError()) {
            handleServerError(query.error.response!.data as IBaseApiResponse<ApiResponse>);
          }
        }
      },
    ),
  );

  createEffect(
    on(
      () => query.isSuccess && query.data?.data,
      () => {
        if (query.isSuccess) {
          if (query.data.data.code === ServerErrorCode.None) {
            onSuccess(deepClone(query.data.data.data), query.data.data.time);
          } else if (isNeedCheckServerError()) {
            handleServerError(query.data.data);
          }
        }
      },
    ),
  );

  createEffect(() => {
    if (query.isFetched) {
      onSettled(query.data?.data);
    }
  });

  createEffect(
    on(
      () => [query.isFetching, query.isFetched],
      ([isFetching, isFetched], previous = []) => {
        const [preIsFetching] = previous;
        const isRequestEnd = !isFetching && preIsFetching;
        const isCanceled = isRequestEnd && !isFetched;
        if (isCanceled) {
          onCanceled();
        }
      },
    ),
  );

  return query;
};

export { createCustomizeQuery, retryOptions };
