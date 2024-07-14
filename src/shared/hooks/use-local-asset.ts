import { localAssetsEndpoint, resolvedLocalAssetsMap } from '@utilities/helpers/asset.helper';
import { createEffect, createSignal, on } from 'solid-js';

export const useLocalAssets = (accessor: () => string | undefined) => {
  const [assetPath, setAssetPath] = createSignal<string>(resolvedLocalAssetsMap[accessor() ?? ''] ?? '');
  createEffect(
    on(accessor, () => {
      const lastCache = resolvedLocalAssetsMap[accessor() ?? ''] ?? '';
      setAssetPath(lastCache);
      const path = accessor();
      if (path) {
        localAssetsEndpoint(path)
          .then((result) => {
            if (result !== lastCache) {
              setAssetPath(result);
            }
          })
          .catch(() => {
            // ignore
          });
      }
    }),
  );
  return assetPath;
};
