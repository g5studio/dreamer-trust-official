export const assetModules: Record<
  string,
  () => Promise<{
    default: PartialRecord<string, string>;
  }>
> = {
  icon: () => import('./icon'),
  shared: () => import('./shared'),
  home: () => import('./home'),
  'about-us': () => import('./about-us'),
  'contact-us': () => import('./contact-us'),
  seminar: () => import('./seminar'),
  common: () => import('./common'),
  blog: () => import('./blog'),
  solutions: () => import('./solutions'),
};
