import Footer from '@modules/common/components/Footer';
import Header from '@modules/common/components/Header';
import OverlayContainer from '@modules/common/components/OverlayContainer';
import NestRoute from '@shared/components/NestRoute';
import { RouteModule } from '@shared/enums';
import { Route, Routes } from '@solidjs/router';
import { useLayoutContext } from '@utilities/context/layout-context';
import { getRoutesConfig } from '@utilities/helpers/routes.helper';
import { Component, createMemo, For, onMount, Show } from 'solid-js';
import 'styles/_index.scss';

const App: Component = () => {
  const [, { setMainScrollRef }] = useLayoutContext();

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

  onMount(() => {
    setMainScrollRef(window);
  });

  return (
    <section class="relative flex min-h-screen flex-col">
      <OverlayContainer />
      <Header classes="sticky top-0 z-priority w-full" />
      <main class="main-container flex w-full grow flex-col">
        <Routes>
          <Show when={isRouteReady()}>
            <For each={routesMap()}>{(config) => <Route path={config.path} component={config.component} />}</For>
          </Show>
        </Routes>
      </main>
      <Footer classes="w-full" />
    </section>
  );
};

export default App;
