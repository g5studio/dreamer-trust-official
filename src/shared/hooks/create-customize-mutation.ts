import { TimeStamp } from '@shared/interfaces';
import { MutationFunction, createMutation } from '@tanstack/solid-query';
import { AxiosError, AxiosResponse } from 'axios';
import { batch } from 'solid-js';
import { createStore, unwrap } from 'solid-js/store';
import { IApiResponseHandlerHookProps, useApiResponseHandler } from './use-api-response-handler';

type CustomizeMutationConfig<ApiResponse, ApiRequest> = {
  mutation: { mutationFn: MutationFunction<AxiosResponse<ApiResponse>, ApiRequest> };
  /**
   * only execute when api response code is 0
   * @param data api response
   */
  onSuccess?: (data: ApiResponse, variable: ApiRequest, time?: TimeStamp) => void;
  /**
   * api有打通無論結果為何都會執行
   */
  onSettled?: (data: ApiResponse | undefined) => void;
  retry?: boolean | number;
} & IApiResponseHandlerHookProps<ApiResponse>;

type MutateState = {
  isLoading: boolean;
  isSettled: boolean;
  isError: boolean;
};

const createCustomizeMutation = <ApiResponse, ApiRequest>({
  mutation: { mutationFn },
  errorHandleType,
  onNetworkError = () => {},
  onSettled = () => {},
  onSuccess = () => {},
  onServerError = () => {},
  onError = () => {},
  retry,
  disableGeneralNetworkErrorHandle = false,
  disableGeneralServerErrorHandle = false,
}: CustomizeMutationConfig<ApiResponse, ApiRequest>) => {
  const [state, setState] = createStore<MutateState>({
    isError: false,
    isLoading: false,
    isSettled: false,
  });

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

  const mutation = createMutation<AxiosResponse<ApiResponse>, AxiosError, ApiRequest>(() => ({
    mutationFn,
    retry,
    onMutate: () => {
      batch(() => {
        setState('isLoading', true);
        setState('isSettled', false);
      });
    },
    onError: (error: AxiosError<ApiResponse>) => {
      setState('isError', true);
      if (isNeedCheckNetworkError()) {
        handleNetworkError(error);
      }
      if (isNotAcceptableServerError(error) && isNeedCheckServerError()) {
        handleServerError(error.response!.data);
      }
    },
    onSettled: (data) => {
      batch(() => {
        setState('isLoading', false);
        setState('isSettled', true);
      });
      onSettled(data?.data);
    },
    onSuccess: (data, variable) => {
      setState('isError', false);
      onSuccess(unwrap(data.data), variable);
    },
  }));
  return {
    mutation,
    isError: () => state.isError,
    isLoading: () => state.isLoading,
    isSettled: () => state.isSettled,
  };
};

export { createCustomizeMutation };
