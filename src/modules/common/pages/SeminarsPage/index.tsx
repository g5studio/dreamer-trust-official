import ArticleContainer from '@shared/components/ArticleContainer';
import CarouselContainer from '@shared/components/CarouselContainer';
import ContentLayout from '@shared/components/ContentLayout';
import Picture from '@shared/components/Picture';
import { Direction, ErrorHandleType, Language, LocaleDash, Page } from '@shared/enums';
import { createCustomizeQuery } from '@shared/hooks/create-customize-query';
import { useNavigate } from '@shared/hooks/use-navigate';
import { translate, translation } from '@shared/hooks/use-translation';
import { isLargePC, isMobile, isPC, isSmallMobile } from '@shared/hooks/use-window-size';
import { getEvent } from '@shared/models/event.model';
import { createQuery } from '@tanstack/solid-query';
import { IApiEvent } from '@utilities/api/http/schema/event-api.schema';
import { queryConfigs } from '@utilities/api/solid-query';
import { useEventListContext } from '@utilities/context/event-list-context';
import { formatClasses, formatLanguage } from '@utilities/helpers/format.helper';
import { createEffect, createMemo, For, Show } from 'solid-js';
import SeminarEventCard from './SeminarEventCard';

const SeminarsPage = () => {
  const [{ eventList, haveEvents }] = useEventListContext();
  const navigate = useNavigate();

  const queryPastEvent = createCustomizeQuery<IApiEvent[]>({
    query: createQuery(() => ({
      ...queryConfigs.fetchPastEventList({ language: formatLanguage(translation.language) ?? Language.zh_CN }),
    })),
    //! normally we need ignore all default error handler when load page initial data
    errorHandleType: ErrorHandleType.None,
    onSuccess: () => {},
    onError: () => {},
  });

  const pastEvents = createMemo(
    () =>
      queryPastEvent.data?.data.map((_) => {
        const { initialize, metaData } = getEvent();
        initialize(_);
        return metaData;
      }) ?? [],
  );

  createEffect(() => {
    if (!haveEvents()) {
      navigate()[Page.Home]();
    }
  });

  return (
    <ContentLayout
      testId="SeminarsPage"
      classes={formatClasses('space-y-30 pb-30', {
        'space-y-16 pb-16': !isLargePC(),
      })}>
      <CarouselContainer
        classes={formatClasses({
          'flex h-[544px] w-full items-center justify-center px-10': !isMobile(),
          'px-10 pb-13 pt-6': isMobile(),
        })}
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
                })}
                classes={formatClasses({
                  'h-75 min-w-104_25': isPC(),
                  'h-53_5 min-w-75': !isPC(),
                  'h-auto min-w-full': isSmallMobile(),
                })}
                src="seminar/seminar-top@3x.png"
              />
              <article
                class={formatClasses('w-full space-y-4', {
                  'w-145': isPC(),
                })}>
                <div class="flex flex-col">
                  <h1
                    class={formatClasses('text-12 font-normal leading-14_5', {
                      'text-16 leading-20': isLargePC(),
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
                      class={formatClasses('font-["PT_Serif"] text-12 font-normal italic leading-14_5', {
                        'text-16 leading-20': isLargePC(),
                      })}>
                      {translate('seminars.top-1.title-2')}
                    </h1>
                    <h1
                      class={formatClasses('font-["PT_Serif"] text-12 font-normal italic leading-14_5', {
                        'text-16 leading-20': isLargePC(),
                      })}>
                      {translate('seminars.top-1.title-3')}
                    </h1>
                  </div>
                </div>
                <p
                  class={formatClasses('text-lg leading-7', {
                    'text-md': !isPC(),
                  })}>
                  {translate('seminars.top-1.content')}
                </p>
              </article>
            </section>
          </div>
        )}
      </CarouselContainer>
      {/* 研討會活動 */}
      <Show when={haveEvents()}>
        <ArticleContainer
          classes="w-full"
          sectionClasses="w-full"
          titleI18nKey="seminars.event.title"
          subTitleI18nKey="seminars.event.subTitle">
          <CarouselContainer
            replayMode="forward"
            classes="w-full"
            containerClasses="w-full"
            testId="seminars-event-carousel"
            offset={isMobile() ? '238px' : '100%'}
            maxLength={eventList().length}
            direction={Direction.Horizontal}
            sliderSlot={(currentIndex, changeIndex) => (
              <ul class="mt-10 flex flex-row items-center justify-center space-x-6">
                <For each={eventList()}>
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
            {() => (
              <div
                class={formatClasses('flex w-full flex-row flex-nowrap', {
                  'space-x-6': isMobile(),
                })}>
                <For each={eventList()}>{(data) => <SeminarEventCard eventData={data} />}</For>
              </div>
            )}
          </CarouselContainer>
        </ArticleContainer>
      </Show>
      {/* 過去的活動 */}
      <Show when={!!pastEvents().length}>
        <ArticleContainer
          classes="w-full"
          sectionClasses="w-full"
          titleI18nKey="seminars.pastEvent.title"
          subTitleI18nKey="seminars.pastEvent.subTitle">
          <CarouselContainer
            replayMode="forward"
            classes="w-full"
            containerClasses="w-full"
            testId="seminars-past-event-carousel"
            offset={isMobile() ? '238px' : '100%'}
            maxLength={pastEvents().length}
            direction={Direction.Horizontal}
            sliderSlot={(currentIndex, changeIndex) => (
              <ul class="mt-10 flex flex-row items-center justify-center space-x-6">
                <For each={pastEvents()}>
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
            {() => (
              <div
                class={formatClasses('flex w-full flex-row flex-nowrap', {
                  'space-x-6': isMobile(),
                })}>
                <For each={pastEvents()}>{(data) => <SeminarEventCard eventData={data} />}</For>
              </div>
            )}
          </CarouselContainer>
        </ArticleContainer>
      </Show>
    </ContentLayout>
  );
};
export default SeminarsPage;
