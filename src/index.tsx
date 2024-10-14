/* @refresh reload */
import { QueryClientProvider } from '@tanstack/solid-query';
import { queryClient } from '@utilities/api/solid-query';
import { Router } from '@solidjs/router';
import ThemeController from '@shared/components/ThemeController';
import { render } from 'solid-js/web';
import { preloadRoutes } from '@utilities/config/routes';

import App from './App';
import './index.css';

const root = document.getElementById('root');
root!.className = 'w-screen';

preloadRoutes();

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

if (root) {
  render(
    () => (
      <Router>
        <ThemeController />
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </Router>
    ),
    root,
  );
}
