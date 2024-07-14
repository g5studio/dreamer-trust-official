import { createEffect } from 'solid-js';
// import { user } from '@shared/hooks/use-user-info';
import { Outlet, useLocation } from '@solidjs/router';
import { useSilentRefresh } from '@shared/hooks/use-silent-refresh';
// import { navigate } from '@shared/hooks/use-navigator';
import {
  // getOutsideRoutesConfig, getRelativePathByKey,
  getRouteConfig,
} from '@utilities/helpers/routes.helper';
// import { Page } from '@shared/enums';

const AuthGuard = () => {
  const location = useLocation();
  useSilentRefresh();
  createEffect(() => {
    const currentRouterConfig = getRouteConfig(location.pathname);
    if (currentRouterConfig) {
      // if (!user?.token.platform && !currentRouterConfig.allowGuest) {
      //   navigate(getRelativePathByKey(Page.Login, {}, getOutsideRoutesConfig()));
      // }
    }
  });
  return <Outlet />;
};

export default AuthGuard;
