import { IBaseComponentProps } from '@shared/interfaces';
import { IEvent } from '@shared/models/event.model';
import { Accessor, Setter, createContext, createSignal, useContext } from 'solid-js';

export type EventListContextValue = {
  eventList: Accessor<IEvent['metaData'][]>;
  haveEvents: Accessor<boolean>;
  firstEvent: Accessor<Nullable<IEvent['metaData']>>;
};

export type EventListContextSetter = {
  setEventList: Setter<IEvent['metaData'][]>;
};

type ContextType = [EventListContextValue, EventListContextSetter];

const EventListContext = createContext<ContextType>();

export const EventListProvider = (props: IBaseComponentProps) => {
  const [eventList, setEventList] = createSignal<IEvent['metaData'][]>([]);

  const context: ContextType = [
    {
      eventList,
      haveEvents: () => eventList().length > 0,
      firstEvent: () => eventList()[0],
    },
    {
      setEventList,
    },
  ];

  return <EventListContext.Provider value={context}>{props.children}</EventListContext.Provider>;
};

export function useEventListContext() {
  const context = useContext(EventListContext);
  if (!context) {
    throw new Error('useEventListContext must be used within a EventListContext');
  }
  return context;
}
