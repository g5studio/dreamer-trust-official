import Header from '@modules/common/components/Header';
import OverlayContainer from '@modules/common/components/OverlayContainer';
import NestRoute from '@shared/components/NestRoute';
import { RouteModule } from '@shared/enums';
import { Route, Routes } from '@solidjs/router';
import { getRoutesConfig } from '@utilities/helpers/routes.helper';
import { Component, createMemo, For, Show } from 'solid-js';
import 'styles/_index.scss';

const App: Component = () => {
  const isRouteReady = () => Object.values(getRoutesConfig()).length > 0;

  const routesMap = createMemo(() =>
    Object.values(RouteModule)
      .filter((module) => getRoutesConfig()[module as RouteModule])
      .reduce(
        (routes, module: string) => [
          ...routes,
          ...NestRoute(getRoutesConfig()[module as RouteModule]!, getRoutesConfig()[module as RouteModule]!.path),
        ],
        [],
      ),
  );

  return (
    <>
      <OverlayContainer />
      <Header />
      <main class="main-container">
        <Routes>
          <Show when={isRouteReady()}>
            <For each={routesMap()}>{(config) => <Route path={config.path} component={config.component} />}</For>
          </Show>
        </Routes>
      </main>
    </>
  );
};

export default App;
