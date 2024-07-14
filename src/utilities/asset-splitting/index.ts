export const assetModules: Record<
  string,
  () => Promise<{
    default: PartialRecord<string, string>;
  }>
> = {
  icon: () => import('./icon'),
  shared: () => import('./shared'),
};
