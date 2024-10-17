import { DateFormatType } from '@shared/enums';
import { IBaseModel } from '@shared/interfaces/base-model.interface';
import { IApiEvent } from '@utilities/api/http/schema/event-api.schema';
import { getTimeStamp, transform } from '@utilities/helpers/time.helper';
import { createStore, reconcile } from 'solid-js/store';

type Event = {
  id: string;
  /**
   * @description YYYY.MM.DD hh:mm:ss TZ
   */
  displayStartTime: string;
  /**
   * @description YYYY.MM.DD hh:mm:ss TZ
   */
  displayEndTime: string;
  location: string;
};
export interface IEvent extends IBaseModel<unknown, Event> {}

export const getEvent = (): IEvent => {
  const initialData = (): Event => ({}) as Event;
  const [metaData, setData] = createStore<Event>(initialData());

  // !no need to change
  const updateData = (data: Partial<Event>) => {
    setData(data);
    return metaData;
  };

  // !no need to change
  const reset = () => {
    setData(reconcile(initialData()));
  };

  // TODO mapping your api data here , you should reassign the value event if the field name are the same between api schema and model interface , please remove this line before commit
  const initialize = (apiResponse: IApiEvent) => {
    const { date, startTime, endTime, id, timeZone, location } = apiResponse;

    updateData({
      id,
      displayStartTime: `${transform({
        timestamp: getTimeStamp(`${date} ${startTime}`),
        formatType: DateFormatType.EventDateTime,
        offset: -(new Date().getTimezoneOffset() / 60),
      })} ${timeZone}`,
      displayEndTime: `${transform({
        timestamp: getTimeStamp(`${date} ${endTime}`),
        formatType: DateFormatType.EventDateTime,
        offset: -(new Date().getTimezoneOffset() / 60),
      })} ${timeZone}`,
      location,
    });
  };

  return { metaData, updateData, initialize, reset };
};
