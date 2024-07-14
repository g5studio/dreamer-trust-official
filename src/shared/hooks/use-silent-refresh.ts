// import { ErrorHandleType } from '@shared/enums';
// import { IApiRefreshToken, IApiRefreshTokenRequest } from '@utilities/api/schema';
// import { mutationConfigs } from '@utilities/api/solid-query';
// import { Log } from '@utilities/helpers/log.helper';
// import { createEffect, onCleanup } from 'solid-js';
// import { createCustomizeMutation } from './create-customize-mutation';
// import { isLoggedIn, updateToken, user } from './use-user-info';

// const tokenLifeTime = 30 * 60 * 1000;
// const refreshBufferTime = 5 * 60 * 1000;
// const tokenRefreshTime = tokenLifeTime - refreshBufferTime;

export const useSilentRefresh = () => {
  // let timer: NodeJS.Timeout;
  // const {
  //   mutation: { mutate: refreshToken },
  // } = createCustomizeMutation<IApiRefreshToken, IApiRefreshTokenRequest>({
  //   retry: false,
  //   errorHandleType: ErrorHandleType.Server,
  //   disableGeneralServerErrorHandle: true,
  //   mutation: mutationConfigs.refreshToken(),
  //   onSuccess: (response) => {
  //     Log.info({
  //       msg: 'token refreshed, new token will expire in 30 mins',
  //     });
  //     updateToken({
  //       platform: response.token,
  //       refreshToken: response.refreshToken,
  //     });
  //   },
  //   onServerError: ({ msg }) => {
  //     Log.error({
  //       msg: `refresh token fail , ${msg}`,
  //     });
  //   },
  // });
  // const onRefreshToken = () => {
  //   clearTimeout(timer);
  //   if (user.token.refreshToken) {
  //     refreshToken({ refreshToken: user.token.refreshToken });
  //   } else {
  //     Log.info({
  //       msg: 'refresh token fail , refresh token not found',
  //     });
  //   }
  //   timer = setTimeout(onRefreshToken, tokenRefreshTime);
  // };
  // createEffect(() => {
  //   if (isLoggedIn()) {
  //     Log.info({
  //       msg: 'token will expire in 30 mins',
  //     });
  //     timer = setTimeout(onRefreshToken, tokenRefreshTime);
  //   } else {
  //     clearTimeout(timer);
  //   }
  //   onCleanup(() => clearTimeout(timer));
  // });
};
