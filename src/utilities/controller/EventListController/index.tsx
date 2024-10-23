import { ErrorHandleType, Language } from '@shared/enums';
import { createCustomizeQuery } from '@shared/hooks/create-customize-query';
import { translation } from '@shared/hooks/use-translation';
import { getEvent } from '@shared/models/event.model';
import { createQuery } from '@tanstack/solid-query';
import { IApiEvent } from '@utilities/api/http/schema/event-api.schema';
import { queryConfigs } from '@utilities/api/solid-query';
import { useEventListContext } from '@utilities/context/event-list-context';
import { formatLanguage } from '@utilities/helpers/format.helper';

/**
 * @description 取得研討會資料
 */
const EventListController = () => {
  const [, { setEventList }] = useEventListContext();
  createCustomizeQuery<IApiEvent[]>({
    query: createQuery(() => ({
      ...queryConfigs.fetchEventList({ language: formatLanguage(translation.language) ?? Language.zh_CN }),
    })),
    errorHandleType: ErrorHandleType.None,
    onSuccess: (response: IApiEvent[]) => {
      setEventList(
        response.map((event) => {
          const { metaData, initialize } = getEvent();
          initialize(event);
          return metaData;
        }),
      );
    },
  });
  return <></>;
};
export default EventListController;
