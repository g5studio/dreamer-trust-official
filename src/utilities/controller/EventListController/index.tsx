import { ErrorHandleType } from '@shared/enums';
import { createCustomizeQuery } from '@shared/hooks/create-customize-query';
import { getEvent } from '@shared/models/event.model';
import { createQuery } from '@tanstack/solid-query';
import { IApiEvent } from '@utilities/api/http/schema/event-api.schema';
import { queryConfigs } from '@utilities/api/solid-query';
import { useEventListContext } from '@utilities/context/event-list-context';

/**
 * @description 取得研討會資料
 */
const EventListController = () => {
  const [{ eventParams }, { setEventList, setPastEventList }] = useEventListContext();
  createCustomizeQuery<IApiEvent[]>({
    query: createQuery(() => ({
      ...queryConfigs.fetchEventList(eventParams()),
    })),
    errorHandleType: ErrorHandleType.None,
    onSuccess: (response: IApiEvent[]) => {
      if (typeof response === 'object') {
        setEventList(
          response.map((event) => {
            const { metaData, initialize } = getEvent();
            initialize(event);
            return metaData;
          }),
        );
      }
    },
  });

  createCustomizeQuery<IApiEvent[]>({
    query: createQuery(() => ({
      ...queryConfigs.fetchPastEventList(eventParams()),
    })),
    //! normally we need ignore all default error handler when load page initial data
    errorHandleType: ErrorHandleType.None,
    onSuccess: (response) => {
      if (typeof response === 'object') {
        setPastEventList(
          response.map((event) => {
            const { metaData, initialize } = getEvent();
            initialize(event);
            return metaData;
          }),
        );
      }
    },
    onError: () => {},
  });
  return <></>;
};
export default EventListController;
