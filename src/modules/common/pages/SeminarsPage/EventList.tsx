import CarouselContainer from '@shared/components/CarouselContainer';
import { Direction } from '@shared/enums';
import { isMobile } from '@shared/hooks/use-window-size';
import { IEvent } from '@shared/models/event.model';
import { domProperty } from '@utilities/directives/dom-property-directive';
import { registerDirective } from '@utilities/helpers/directive.helper';
import { formatClasses } from '@utilities/helpers/format.helper';
import { Show, For, Accessor, children, createMemo } from 'solid-js';
import { gestureScroll } from '@utilities/directives/gesture-scroll-directive';
import { IBaseComponentProps } from '@shared/interfaces';
import SeminarEventCard from './SeminarEventCard';

registerDirective(domProperty);
registerDirective(gestureScroll);

type Props = {
  events: Accessor<IEvent['metaData'][]>;
} & IBaseComponentProps;

/**
 * 研討會列表
 * @description
 * 1. pc & tablet以carousel呈現
 * 2. mobile 以scroll呈現
 * @external http://devops.psgp.com/DefaultCollection/ESOP/_workitems/edit/15791
 */
const EventList = (props: Props) => {
  const eventList = createMemo(() =>
    children(() => <For each={props.events()}>{(data) => <SeminarEventCard hideRSVP eventData={data} />}</For>),
  );
  return (
    <Show
      when={!isMobile()}
      fallback={
        <div class="no-scrollbar w-full overflow-x-auto" use:gestureScroll={{}}>
          <div class="flex w-fit w-full flex-row flex-nowrap space-x-6">{eventList()()}</div>
        </div>
      }>
      <CarouselContainer
        replayMode="forward"
        classes="w-full"
        containerClasses="w-full"
        testId={props.testId ?? 'event-carousel'}
        maxLength={props.events().length}
        direction={Direction.Horizontal}
        sliderSlot={(currentIndex, changeIndex) => (
          <ul class="mt-10 flex flex-row items-center justify-center space-x-6">
            <For each={props.events()}>
              {(_, id) => (
                <li
                  class={formatClasses('h-4 w-4 rounded-circle bg-black-4', {
                    'bg-black-3': currentIndex() === id(),
                  })}>
                  <button onClick={() => changeIndex(id())} class="h-full w-full" type="button" />
                </li>
              )}
            </For>
          </ul>
        )}>
        {() => <div class={formatClasses('flex w-full flex-row flex-nowrap')}>{eventList()()}</div>}
      </CarouselContainer>
    </Show>
  );
};

export default EventList;
