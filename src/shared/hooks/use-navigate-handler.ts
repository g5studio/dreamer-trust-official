import { createEffect } from 'solid-js';
import { CustomEventType } from '@shared/enums';
import { IRouteChangedEvent, navigator } from '@shared/hooks/use-navigator';
import { useNavigate } from '@solidjs/router';

export const useNavigateHandler = () => {
  const navigate = useNavigate();

  createEffect(() => {
    const navigateOptions = navigator.navigateOption;
    if (navigateOptions) {
      const { to, options, stable } = navigateOptions;
      const { search, relative, ...nativeOptions } = options ?? {};

      if (!stable) {
        setTimeout(() => navigate(to, options), 0);
        if (to) {
          window.dispatchEvent(
            new CustomEvent<IRouteChangedEvent>(CustomEventType.RouterChanged, {
              detail: { pathname: to, history: navigator.history, options: nativeOptions },
            }),
          );
        }
      }
    }
  });
};
