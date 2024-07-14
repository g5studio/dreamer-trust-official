import { Page, RouteModule } from '@shared/enums';
import { useNavigateHandler } from '@shared/hooks/use-navigate-handler';
import { navigate } from '@shared/hooks/use-navigator';
import { RouteConfig } from '@shared/interfaces/route.interface';
import { useLocation } from '@solidjs/router';
import { formatAbsolutePathname, formatRelativePathname } from '@utilities/helpers/format.helper';
import { Log } from '@utilities/helpers/log.helper';
import { getRelativePathByKey, getRouteConfig } from '@utilities/helpers/routes.helper';
import { onMount } from 'solid-js';

interface IRedirectProps {
  url?: string;
  routesMap?: Record<RouteModule, RouteConfig>;
}

/**
 * 自動跳轉處理
 * @description 當前路由不存在時自動跳轉首頁
 */
const Redirect = (props: IRedirectProps) => {
  useNavigateHandler();
  const location = useLocation();

  onMount(() => {
    const mainPageUrl = formatRelativePathname(getRelativePathByKey(Page.SportMain));
    const currentRouteConfig = getRouteConfig(location.pathname, props.routesMap);
    const redirectUrl = props.url ?? mainPageUrl;
    if (props.url || !currentRouteConfig) {
      Log.info({
        msg: `auto redirect to ${redirectUrl}`,
      });
      navigate(formatRelativePathname(formatAbsolutePathname(redirectUrl)), { replace: true });
    }
  });
  return <></>;
};
export default Redirect;
