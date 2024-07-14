import { isLocalAssetExist, isLocalUrl } from '@utilities/helpers/asset.helper';
import { createEffect, createSignal, on } from 'solid-js';

export function useLocalAssetExistence(accessor: () => string) {
  // default true due to the fact that most local assets are expected to exist
  const [isExist, setIsExist] = createSignal<boolean>(true);

  createEffect(
    on(accessor, (currentPath, newPath) => {
      if (currentPath !== newPath) {
        setIsExist(true);
        if (isLocalUrl(currentPath)) {
          void isLocalAssetExist(currentPath).then((result) => {
            // in case the promise resolved after the path has changed
            if (currentPath === accessor()) {
              setIsExist(result);
            }
          });
        }
      }
    }),
  );
  return isExist;
}
