import { DefaultOptions, QueryClient } from '@tanstack/solid-query';
import { AxiosError, HttpStatusCode } from 'axios';

const queryConfig: DefaultOptions<AxiosError> = {
  queries: {
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    retry: (failureCount, error) => {
      if (error.response?.status === HttpStatusCode.NotAcceptable) {
        return false;
      }
      return failureCount < 5;
    },
  },
  mutations: {
    retry: false,
  },
};

export const queryClient = new QueryClient({ defaultOptions: queryConfig });
