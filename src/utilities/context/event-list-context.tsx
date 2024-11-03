import { Language } from '@shared/enums';
import { translation } from '@shared/hooks/use-translation';
import { IBaseComponentProps } from '@shared/interfaces';
import { IEvent } from '@shared/models/event.model';
import { IApiEventSearchParams } from '@utilities/api/http/schema/event-api.schema';
import { formatLanguage } from '@utilities/helpers/format.helper';
import { Accessor, Setter, createContext, createSignal, useContext } from 'solid-js';

export type EventListContextValue = {
  eventList: Accessor<IEvent['metaData'][]>;
  pastEventList: Accessor<IEvent['metaData'][]>;
  haveEvents: Accessor<boolean>;
  firstEvent: Accessor<Nullable<IEvent['metaData']>>;
  eventParams: Accessor<IApiEventSearchParams>;
};

export type EventListContextSetter = {
  setEventList: Setter<IEvent['metaData'][]>;
  setPastEventList: Setter<IEvent['metaData'][]>;
};

type ContextType = [EventListContextValue, EventListContextSetter];

const EventListContext = createContext<ContextType>();

export const EventListProvider = (props: IBaseComponentProps) => {
  const [eventList, setEventList] = createSignal<IEvent['metaData'][]>([]);
  const [pastEventList, setPastEventList] = createSignal<IEvent['metaData'][]>([]);

  const context: ContextType = [
    {
      eventList,
      pastEventList,
      haveEvents: () => eventList().length > 0 || pastEventList().length > 0,
      firstEvent: () => eventList()[0],
      eventParams: () => ({ language: formatLanguage(translation.language) ?? Language.zh_CN }),
    },
    {
      setEventList,
      setPastEventList,
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
