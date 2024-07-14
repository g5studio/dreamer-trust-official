import { lazy } from 'solid-js';
import { RouteModule } from '@shared/enums';
import { setOutsideRoutesConfig, setRoutesConfig } from '@utilities/helpers/routes.helper';
import { OutsideRouteConfig, RouteConfig } from '@shared/interfaces/route.interface';

/**
 * ![重要]: 新增路由配置時需至api enum內查詢當前路由是否須設置內站代碼
 */
const routesConfig: Partial<Record<RouteModule, RouteConfig>> = {
  [RouteModule.Platform]: {
    path: '',
  },
};

/**
 * 主結構外路由設置
 */
const outsideRoutesConfig: Record<Extract<RouteModule, RouteModule.Platform>, OutsideRouteConfig> = {
  [RouteModule.Platform]: {
    path: '',
  },
};

setRoutesConfig(routesConfig);
setOutsideRoutesConfig(outsideRoutesConfig);

function preloadRouteConfigComponent(config: RouteConfig | OutsideRouteConfig) {
  const { component } = config;
  const possibleLazyComponent = component as ReturnType<typeof lazy>;
  // if component is lazy component
  // lazy component has preload method
  if (possibleLazyComponent && possibleLazyComponent.preload) {
    void possibleLazyComponent.preload();
  }
  if (config.children) {
    config.children.forEach((childConfig) => {
      preloadRouteConfigComponent(childConfig);
    });
  }
}

function preloadRouteConfig(config: typeof routesConfig | typeof outsideRoutesConfig) {
  Object.values(config).forEach((moduleConfig) => {
    preloadRouteConfigComponent(moduleConfig);
  });
}

export function preloadRoutes() {
  preloadRouteConfig(routesConfig);
  preloadRouteConfig(outsideRoutesConfig);
}
