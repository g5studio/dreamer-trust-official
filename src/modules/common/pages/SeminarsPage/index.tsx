import ArticleContainer from '@shared/components/ArticleContainer';
import CarouselContainer from '@shared/components/CarouselContainer';
import ContentLayout from '@shared/components/ContentLayout';
import Picture from '@shared/components/Picture';
import { Direction, LocaleDash, Page } from '@shared/enums';
import { useNavigate } from '@shared/hooks/use-navigate';
import { translate, translation } from '@shared/hooks/use-translation';
import { isXLargePC, isMobile, isPC, isSmallMobile } from '@shared/hooks/use-window-size';
import { useEventListContext } from '@utilities/context/event-list-context';
import { formatClasses } from '@utilities/helpers/format.helper';
import { createEffect, createSignal, Show } from 'solid-js';
import { domProperty } from '@utilities/directives/dom-property-directive';
import { registerDirective } from '@utilities/helpers/directive.helper';
import { pan } from '@utilities/directives/pan-directive';
import { queryClient, queryConfigs } from '@utilities/api/solid-query';
import EventList from './EventList';

registerDirective(domProperty);
registerDirective(pan);

const useAnimationControl = () => {
  const [eventListAnimationStart, setEventListAnimationStart] = createSignal<boolean>(false);
  const [pastEventListAnimationStart, setPastEventListAnimationStart] = createSignal<boolean>(false);

  const eventListAnimationClasses = () =>
    formatClasses({
      'opacity-0': !isMobile(),
      'animation-fade-in-bottom opacity-1': eventListAnimationStart() && !isMobile(),
    });

  const pastEventListAnimationClasses = () =>
    formatClasses({
      'opacity-0': !isMobile(),
      'animation-fade-in-bottom opacity-1': pastEventListAnimationStart() && !isMobile(),
    });

  return {
    setEventListAnimationStart,
    setPastEventListAnimationStart,
    eventListAnimationClasses,
    pastEventListAnimationClasses,
  };
};

const SeminarsPage = () => {
  const [{ eventList, pastEventList, haveEvents, eventParams }] = useEventListContext();
  const {
    setEventListAnimationStart,
    setPastEventListAnimationStart,
    eventListAnimationClasses,
    pastEventListAnimationClasses,
  } = useAnimationControl();
  const navigate = useNavigate();

  createEffect(() => {
    if (!haveEvents()) {
      navigate()[Page.Home]();
    }
  });

  void queryClient.invalidateQueries({
    queryKey: queryConfigs.fetchEventList(eventParams()).queryKey,
  });

  void queryClient.invalidateQueries({
    queryKey: queryConfigs.fetchPastEventList(eventParams()).queryKey,
  });

  return (
    <ContentLayout
      testId="SeminarsPage"
      classes={formatClasses('space-y-30 pb-30', {
        'space-y-16 pb-16': !isPC(),
      })}>
      <CarouselContainer
        classes={formatClasses({
          'flex h-[544px] w-full items-center justify-center px-10': !isMobile(),
          'px-6 pt-5': isMobile(),
          'px-5 pt-7_5': isSmallMobile(),
        })}
        containerClasses={formatClasses({ 'w-full': !isMobile() && !isXLargePC() })}
        replayMode="forward"
        testId="seminars-top-carousel"
        maxLength={1}
        direction={Direction.Horizontal}>
        {() => (
          <div class="flex w-full flex-row flex-nowrap">
            <section
              class={formatClasses('flex min-w-full', {
                'flex-row items-center justify-center space-x-25': !isMobile(),
                'flex-col-reverse justify-start': isMobile(),
              })}>
              <Picture
                pictureClasses={formatClasses({
                  'item-center mt-12 flex justify-center': isMobile(),
                  'px-7': isSmallMobile(),
                })}
                classes={formatClasses({
                  'h-75 min-w-104_25': !isMobile(),
                  'h-53_5 min-w-75': isMobile(),
                  'h-auto min-w-full': isSmallMobile(),
                })}
                src="seminar/seminar-top@3x.png"
              />
              <article
                class={formatClasses('w-full space-y-4', {
                  'max-w-[522px]': !isMobile(),
                  'p-6 pb-0': isMobile(),
                })}>
                <div class="flex flex-col">
                  <h1
                    class={formatClasses('text-12 font-normal leading-14_5 tracking-[3.2px]', {
                      'text-16 leading-20': !isMobile(),
                    })}>
                    {translate('seminars.top-1.title')}
                  </h1>
                  <div
                    class={formatClasses('flex flex-col', {
                      'flex-row': isPC(),
                      'lg:space-x-4 xl:space-x-8':
                        translation.language !== LocaleDash.zh_HK && translation.language !== LocaleDash.zh_CN,
                    })}>
                    <h1
                      class={formatClasses('special-title text-12 font-normal italic leading-14_5 tracking-[3.2px]', {
                        'text-16 leading-20': !isMobile(),
                      })}>
                      {translate('seminars.top-1.title-3')}
                    </h1>
                  </div>
                </div>
                <p
                  class={formatClasses('text-lg leading-7', {
                    'text-md': isMobile(),
                  })}>
                  {translate('seminars.top-1.content')}
                </p>
              </article>
            </section>
          </div>
        )}
      </CarouselContainer>
      {/* 研討會活動 */}
      <Show when={!!eventList().length}>
        <ArticleContainer
          onChildrenFideIn={() => {
            if (!isMobile()) {
              setEventListAnimationStart(true);
            }
          }}
          classes="w-full px-0"
          sectionClasses="w-full"
          titleI18nKey="seminars.event.title"
          subTitleI18nKey="seminars.event.subTitle">
          <div class={formatClasses('w-full', eventListAnimationClasses())}>
            <EventList events={eventList} testId="seminars-event-carousel" />
          </div>
        </ArticleContainer>
      </Show>
      {/* 過去的活動 */}
      <Show when={!!pastEventList().length}>
        <ArticleContainer
          onChildrenFideIn={() => {
            if (!isMobile()) {
              setPastEventListAnimationStart(true);
            }
          }}
          classes="w-full px-0"
          sectionClasses="w-full"
          titleI18nKey="seminars.pastEvent.title"
          subTitleI18nKey="seminars.pastEvent.subTitle">
          <div class={formatClasses('w-full', pastEventListAnimationClasses())}>
            <EventList testId="seminars-past-event-carousel" hideRSVP events={pastEventList} />
          </div>
        </ArticleContainer>
      </Show>
    </ContentLayout>
  );
};
export default SeminarsPage;
