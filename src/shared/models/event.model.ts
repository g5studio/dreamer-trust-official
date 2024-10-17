import { TimeStamp } from '@shared/interfaces';
import { IBaseModel } from '@shared/interfaces/base-model.interface';
import { IApiEvent } from '@utilities/api/http/schema/event-api.schema';
import { createStore, reconcile } from 'solid-js/store';

type Event = {
  id: string;
  startTime: TimeStamp;
  endTime: TimeStamp;
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
    const { date, startTime, endTime, id } = apiResponse;
    console.log(date, startTime, endTime);
    updateData({
      id,
    });
  };

  return { metaData, updateData, initialize, reset };
};
