import { TimeStamp } from '@shared/interfaces';
import { IBaseModel } from '@shared/interfaces/base-model.interface';
import { IApiEvent } from '@utilities/api/http/schema/event-api.schema';
import { getTimeStamp } from '@utilities/helpers/time.helper';
import { createStore, reconcile } from 'solid-js/store';

type Event = {
  id: string;
  startTime: TimeStamp;
  endTime: TimeStamp;
  location: string;
  title: string;
  description: string;
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

  const initialize = (apiResponse: IApiEvent) => {
    const { date, startTime, endTime, id, location, title, description } = apiResponse;

    updateData({
      id,
      startTime: getTimeStamp(`${date} ${startTime}`),
      endTime: getTimeStamp(`${date} ${endTime}`),
      location,
      title,
      description,
    });
  };

  return { metaData, updateData, initialize, reset };
};
