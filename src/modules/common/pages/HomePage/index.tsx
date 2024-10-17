import Button from '@shared/components/Button';
import CarouselContainer from '@shared/components/CarouselContainer';
import ContentLayout from '@shared/components/ContentLayout';
import Picture from '@shared/components/Picture';
import { Direction, ErrorHandleType, Page } from '@shared/enums';
import { createCustomizeQuery } from '@shared/hooks/create-customize-query';
import { useNavigate } from '@shared/hooks/use-navigate';
import { translate } from '@shared/hooks/use-translation';
import { isPC } from '@shared/hooks/use-window-size';
import { getEvent } from '@shared/models/event.model';
import { createQuery } from '@tanstack/solid-query';
import { IApiEvent } from '@utilities/api/http/schema/event-api.schema';
import { queryConfigs } from '@utilities/api/solid-query';
import { formatClasses } from '@utilities/helpers/format.helper';
import AdvantageOneIcon from '@utilities/svg-components/common/AdvantageOneIcon';
import AdvantageTwoIcon from '@utilities/svg-components/common/AdvantageTwoIcon';
import DoubleArrowDownIcon from '@utilities/svg-components/shared/DoubleArrowDownIcon';
import { For, Match, Show, Switch } from 'solid-js';

const HomePage = () => {
  const { metaData, initialize } = getEvent();
  const navigate = useNavigate();

  createCustomizeQuery<IApiEvent[]>({
    query: createQuery(() => ({ ...queryConfigs.fetchEventList() })),
    errorHandleType: ErrorHandleType.None,
    onSuccess: (response: IApiEvent[]) => {
      if (response.length > 1) {
        initialize(response[0]);
      }
    },
  });

  /**
   * @description 無研討會資料時不顯示研討會輪播區塊
   */
  const carouselCount = () => (metaData.id ? 3 : 2);

  return (
    <ContentLayout
      testId="HomePage"
      classes={formatClasses('space-y-30 pb-30', {
        'space-y-16 pb-16': !isPC(),
      })}>
      <CarouselContainer
        classes={formatClasses({
          'px-10 pb-13 pt-6': !isPC(),
        })}
        replayMode="forward"
        testId="home-page-top-carousel"
        maxLength={carouselCount()}
        direction={Direction.Horizontal}
        sliderSlot={(currentIndex, changeIndex) => (
          <ul class="mt-4 flex flex-row items-center justify-center space-x-6">
            <For each={Array.from({ length: carouselCount() })}>
              {(_, id) => (
                <li
                  class={formatClasses('h-4 w-4 rounded-circle bg-black-5', {
                    'bg-black-2': currentIndex() === id(),
                  })}>
                  <button onClick={() => changeIndex(id())} class="h-full w-full" type="button" />
                </li>
              )}
            </For>
          </ul>
        )}>
        {() => (
          <div class="flex w-full flex-row flex-nowrap">
            <section
              class={formatClasses('flex min-w-full ', {
                'flex-row justify-center space-x-25 py-30_5': isPC(),
                'flex-col justify-start space-y-12': !isPC(),
              })}>
              <article
                class={formatClasses('w-full space-y-4', {
                  'w-145': isPC(),
                })}>
                <h1
                  class={formatClasses('text-16 leading-20 font-normal', {
                    'text-12 leading-14_5': !isPC(),
                  })}>
                  {translate('home.top-1.title')}
                </h1>
                <p class="text-lg leading-7">{translate('home.top-1.content')}</p>
              </article>
              <Picture
                pictureClasses={formatClasses({
                  'border-box w-full px-6': !isPC(),
                })}
                classes={formatClasses({
                  'h-75': isPC(),
                })}
                src="home/home-top-1@3x.png"
              />
            </section>
            {/* 研討會資訊 */}
            <Show when={metaData.id}>
              <section
                class={formatClasses('flex min-w-full ', {
                  'flex-row justify-center space-x-25': isPC(),
                  'flex-col-reverse justify-end': !isPC(),
                })}>
                <Picture
                  classes={formatClasses({
                    'h-136 min-w-190': isPC(),
                    'min-h-63 mt-6 w-full ': !isPC(),
                  })}
                  src="home/home-top-2@3x.png"
                />
                <article
                  class={formatClasses('w-full space-y-4', {
                    'grow py-22_5': isPC(),
                  })}>
                  <h1
                    class={formatClasses('text-16 leading-20 font-normal', {
                      'text-12 leading-14_5': !isPC(),
                    })}>
                    {translate('home.top-2.title')}
                  </h1>
                  <div class="space-y-2">
                    <p class="text-lg font-bold leading-7">{translate('home.top-2.content')}</p>
                    <div>
                      <p>{translate('home.top-2.time', { dateTime: metaData.displayStartTime })}</p>
                      <p>{translate('home.top-2.location', { location: metaData.location })}</p>
                    </div>
                  </div>
                  <Button
                    class="mt-6"
                    testId="home-event-detail-btn"
                    onClick={() => {
                      navigate()[Page.Seminar]();
                    }}
                    variant="primary">
                    {translate('home.top-2.details')}
                  </Button>
                </article>
              </section>
            </Show>
            {/* 我們的方案 */}
            <section
              class={formatClasses('flex min-w-full ', {
                'flex-row justify-center space-x-25': isPC(),
                'flex-col justify-start space-y-6': !isPC(),
              })}>
              <article
                class={formatClasses('w-full space-y-4', {
                  'grow px-25 py-22_5': isPC(),
                })}>
                <h1 class={formatClasses('text-16 leading-20 font-normal', { 'text-12 leading-14_5': !isPC() })}>
                  {translate('home.top-3.title')}
                </h1>
                <div class={formatClasses('space-y-10', { 'space-y-6': !isPC() })}>
                  <p class="text-lg leading-7">{translate('home.top-3.content')}</p>
                  <Button
                    class="mt-6"
                    testId="home-event-detail-btn"
                    onClick={() => {
                      navigate()[Page.Solutions]();
                    }}
                    variant="primary">
                    {translate('home.top-3.learnMore')}
                  </Button>
                </div>
              </article>
              <Picture
                classes={formatClasses({
                  'h-136 min-w-190': isPC(),
                  'min-h-63 w-full ': !isPC(),
                })}
                src="home/home-top-3@3x.png"
              />
            </section>
          </div>
        )}
      </CarouselContainer>
      {/* 我們的解決方案 */}
      <article
        class={formatClasses('relative flex flex-col items-center text-center', { 'px-12': isPC(), 'px-6': !isPC() })}>
        <Show when={isPC()}>
          <DoubleArrowDownIcon classes="absolute left-1/2 top-[-75px] translate-x-[-50%]" />
        </Show>
        <h5 class="text-5_5 text-primary-3">{translate('home.solutions.title')}</h5>
        <h1 class="text-7 text-primary-3">{translate('home.solutions.subTitle')}</h1>
        <span class="mt-2 h-4 w-16 rounded-[99px] bg-primary-3" />
        <section
          class={formatClasses('mt-10 flex', {
            'flex-row space-x-6': isPC(),
            'flex-col space-y-6': !isPC(),
          })}>
          <For each={Array.from({ length: 4 }).map((_, i) => i + 1)}>
            {(index) => (
              <article class={formatClasses('shrink grow basis-1/4 rounded-8 bg-black-7 pb-3')}>
                <Picture src={`home/solution-${index}@3x.png`} classes="w-full" />
                <section class="px-6_5 pt-3">
                  <h5 class={formatClasses('text-5_5', { 'text-lg': !isPC() })}>
                    {translate(`home.solutions.solution-${index}.title`)}
                  </h5>
                  <p class="text-grey-7 mt-2_5 text-start text-lg">
                    {translate(`home.solutions.solution-${index}.content`)}
                  </p>
                </section>
              </article>
            )}
          </For>
        </section>
      </article>
      {/* 我們的優勢 */}
      <article
        class={formatClasses('relative flex flex-col items-center text-center text-center', {
          'px-12': isPC(),
          'px-6': !isPC(),
        })}>
        <h5 class="text-5_5 text-primary-3">{translate('home.advantages.title')}</h5>
        <h1 class="text-7 text-primary-3">{translate('home.advantages.subTitle')}</h1>
        <span class="mt-2 h-4 w-16 rounded-[99px] bg-primary-3" />
        <section
          class={formatClasses('mt-10 flex', {
            'flex-row space-x-40': isPC(),
            'flex-col space-y-10': !isPC(),
          })}>
          <For each={Array.from({ length: 2 }).map((_, i) => i + 1)}>
            {(index) => (
              <article class="flex w-55 flex-col items-center space-y-10">
                <Switch>
                  <Match when={index === 1}>
                    <AdvantageOneIcon />
                  </Match>
                  <Match when={index === 2}>
                    <AdvantageTwoIcon />
                  </Match>
                </Switch>
                <p class="text-lg text-black-1">{translate(`home.advantages.advantage-${index}.content`)}</p>
              </article>
            )}
          </For>
        </section>
      </article>
    </ContentLayout>
  );
};
export default HomePage;
