import { ErrorHandleType } from '@shared/enums';
import { ServerErrorCode } from '@shared/enums/server-error.enum';
import { TimeStamp } from '@shared/interfaces';
import { IBaseApiResponse } from '@shared/interfaces/api.interface';
import { CreateInfiniteQueryResult } from '@tanstack/solid-query';
import { networkErrorHandler } from '@utilities/api/http/error-handler';
import { deepClone } from '@utilities/helpers/utilities.helper';
import { AxiosError, AxiosResponse } from 'axios';
import { createEffect, on } from 'solid-js';

interface IPagingResponse<T> {
  pages: T[];
}

type CustomizeInfiniteQueryConfig<ApiResponse> = {
  query: CreateInfiniteQueryResult<IPagingResponse<AxiosResponse<IBaseApiResponse<ApiResponse>>>, AxiosError>;
  /**
   * 錯誤處理類型
   */
  errorHandleType: ErrorHandleType;
  /**
   * only execute when api response code is 0
   * @description map API response to frontend model
   * @param data api response
   */
  onSuccess: (data: ApiResponse[], indexList: number[], receivedTimeList: TimeStamp[]) => void;
  /**
   * api有打通無論結果為何都會執行
   */
  onSettled?: (data?: AxiosResponse<IBaseApiResponse<ApiResponse>>[]) => void;
  /**
   * 預期內的系統錯誤處理
   */
  onServerError?: (data: IBaseApiResponse<ApiResponse>[], indexList: number[]) => void;
  /**
   * 網路層報錯處理
   */
  onNetworkError?: (error: AxiosError) => void;

  disableGeneralNetworkErrorHandle?: boolean;
};

type CustomizeInfiniteQueryResponse<ApiResponse> = CreateInfiniteQueryResult<
  IPagingResponse<AxiosResponse<IBaseApiResponse<ApiResponse>>>,
  AxiosError
>;

const createCustomizeInfiniteQuery = <ApiResponse>({
  query,
  errorHandleType,
  onSuccess = () => {},
  onSettled = () => {},
  onServerError = () => {},
  onNetworkError = () => {},
  disableGeneralNetworkErrorHandle = false,
}: CustomizeInfiniteQueryConfig<ApiResponse>): CustomizeInfiniteQueryResponse<ApiResponse> => {
  createEffect(() => {
    if (query.error && (errorHandleType === ErrorHandleType.Network || errorHandleType === ErrorHandleType.All)) {
      if (!disableGeneralNetworkErrorHandle) {
        networkErrorHandler(query.error);
      }
      onNetworkError(query.error);
    }
  });

  createEffect(
    on(
      () => query.isSuccess && query.data.pages,
      () => {
        if (query.isSuccess) {
          const pages = deepClone(query.data.pages);
          const successData = pages.filter((item) => item.data.code === ServerErrorCode.None);
          const errorData = pages.filter((item) => item.data.code !== ServerErrorCode.None);
          const successIndexList = successData.map((item) => pages.indexOf(item));
          const errorIndexList = errorData.map((item) => pages.indexOf(item));
          if (successData.length > 0) {
            onSuccess(
              successData.map((item) => item.data.data),
              successIndexList,
              successData.map((item) => item.data.time),
            );
          }
          if (
            errorData.length > 0 &&
            (errorHandleType === ErrorHandleType.Server || errorHandleType === ErrorHandleType.All)
          ) {
            onServerError(
              errorData.map((item) => item.data),
              errorIndexList,
            );
          }
        }
      },
    ),
  );

  createEffect(() => {
    if (query.isFetched) {
      onSettled(query.data?.pages);
    }
  });

  return query;
};

export { createCustomizeInfiniteQuery };
