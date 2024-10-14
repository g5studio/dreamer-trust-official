import { Page } from '@shared/enums';
import { getRelativePathByKey } from '@utilities/helpers/routes.helper';

export const usePathMap = () => ({
  [Page.Home]: getRelativePathByKey(Page.Home),
});
