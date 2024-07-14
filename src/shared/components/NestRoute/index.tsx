import { OutsideRouteConfig, RouteConfig } from '@shared/interfaces/route.interface';

const NestRoute = (
  { path, component, children, key, guard }: Partial<RouteConfig | OutsideRouteConfig>,
  rootPath: string,
): Pick<RouteConfig, 'path' | 'component' | 'key'>[] => {
  let childrenRoutes: RouteConfig[] = [];
  const currentPath = `/${(path ? `${rootPath}/${path}` : rootPath).replace(/^[/]+/, '')}`;
  if (!!children && children?.length > 0) {
    childrenRoutes = children.flatMap((config) => NestRoute(config, currentPath));
  }
  return component
    ? [
        ...childrenRoutes,
        { path: currentPath, component: () => guard?.({ children: component({}) }) ?? component({}), key },
      ]
    : childrenRoutes;
};

export default NestRoute;
