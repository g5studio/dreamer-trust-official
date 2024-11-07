import CarouselContainer from '@shared/components/CarouselContainer';
import { Direction } from '@shared/enums';
import { isMobile, isTablet } from '@shared/hooks/use-window-size';
import { IEvent } from '@shared/models/event.model';
import { formatClasses } from '@utilities/helpers/format.helper';
import { Show, For, Accessor, createSignal } from 'solid-js';
import { IBaseComponentProps } from '@shared/interfaces';
import { registerDirective } from '@utilities/helpers/directive.helper';
import { domProperty, DomPropertyCbParams } from '@utilities/directives/dom-property-directive';
import SeminarEventCard from './SeminarEventCard';

registerDirective(domProperty);

type Props = {
  events: Accessor<IEvent['metaData'][]>;
  hideRSVP?: boolean;
} & IBaseComponentProps;

/**
 * 研討會列表
 * @description
 * 1. pc & tablet以carousel呈現
 * 2. mobile 以scroll呈現
 * @external http://devops.psgp.com/DefaultCollection/ESOP/_workitems/edit/15791
 */
const EventList = (props: Props) => {
  const Slider = () => {
    const [containerWidth, setContainerWidth] = createSignal<number>(0);
    const [listWidth, setListWidth] = createSignal<number>(0);
    const isOverflow = () => containerWidth() < listWidth();
    return (
      <div
        class={formatClasses('w-full min-w-full')}
        use:domProperty={{
          keyList: ['domRectWidth'],
          cb: ([width]: DomPropertyCbParams<['domRectWidth']>) => {
            setContainerWidth(width);
          },
        }}>
        <div class={formatClasses('no-scrollbar overflow-x-auto')}>
          <div
            use:domProperty={{
              keyList: ['domRectWidth'],
              cb: ([width]: DomPropertyCbParams<['domRectWidth']>) => {
                setListWidth(width);
              },
            }}
            class={formatClasses('flex w-fit min-w-full flex-row flex-nowrap space-x-6', {
              'justify-center': !isOverflow(),
            })}>
            <For each={props.events()}>
              {(data, index) => (
                <div
                  class={formatClasses('flex flex-col', {
                    'ps-10': index() === 0 && isOverflow(),
                    'pr-10': index() === props.events().length - 1 && isOverflow(),
                  })}>
                  <SeminarEventCard classes="grow" hideRSVP={props.hideRSVP} eventData={data} />
                </div>
              )}
            </For>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Show when={!isMobile()} fallback={<Slider />}>
      <CarouselContainer
        replayMode="forward"
        classes={formatClasses('w-full', {
          'px-10': isTablet(),
        })}
        containerClasses="w-full"
        testId={props.testId ?? 'event-carousel'}
        maxLength={props.events().length}
        direction={Direction.Horizontal}
        sliderSlot={(currentIndex, changeIndex) => (
          <Show when={props.events().length > 0}>
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
          </Show>
        )}>
        {() => (
          <div class={formatClasses('flex w-full flex-row flex-nowrap')}>
            <For each={props.events()}>{(data) => <SeminarEventCard hideRSVP={props.hideRSVP} eventData={data} />}</For>
          </div>
        )}
      </CarouselContainer>
    </Show>
  );
};

export default EventList;
