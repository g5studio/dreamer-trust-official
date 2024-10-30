import ArticleContainer from '@shared/components/ArticleContainer';
import Button from '@shared/components/Button';
import CarouselContainer from '@shared/components/CarouselContainer';
import ContentLayout from '@shared/components/ContentLayout';
import Picture from '@shared/components/Picture';
import { DateFormatType, Direction, Page } from '@shared/enums';
import { useNavigate } from '@shared/hooks/use-navigate';
import { translate, translation } from '@shared/hooks/use-translation';
import { isPC } from '@shared/hooks/use-window-size';
import { useEventListContext } from '@utilities/context/event-list-context';
import { useLayoutContext } from '@utilities/context/layout-context';
import { formatClasses } from '@utilities/helpers/format.helper';
import { transform } from '@utilities/helpers/time.helper';
import AdvantageOneIcon from '@utilities/svg-components/common/AdvantageOneIcon';
import AdvantageTwoIcon from '@utilities/svg-components/common/AdvantageTwoIcon';
import DoubleArrowDownIcon from '@utilities/svg-components/shared/DoubleArrowDownIcon';
import { createSignal, For, Match, Show, Switch } from 'solid-js';

const HomePage = () => {
  const [solutionRef, setSolutionRef] = createSignal<HTMLElement>();
  const [{ mainScrollRef, headerAreaHeight }] = useLayoutContext();
  const [{ firstEvent, haveEvents }] = useEventListContext();
  const navigate = useNavigate();

  /**
   * @description 無研討會資料時不顯示研討會輪播區塊
   */
  const carouselCount = () => (haveEvents() ? 3 : 2);

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
          <div class="flex w-full flex-row flex-nowrap">
            <section
              class={formatClasses('flex min-w-full', {
                'flex-row justify-center space-x-25 py-30_5': isPC(),
                'flex-col justify-start space-y-12': !isPC(),
              })}>
              <article
                class={formatClasses('w-full space-y-4', {
                  'w-145': isPC(),
                })}>
                <div class="flex flex-col">
                  <div class="flex flex-col md:flex-row">
                    <h1
                      class={formatClasses('text-16 font-normal leading-20 tracking-[3.2px]', {
                        'text-12 leading-14_5': !isPC(),
                      })}>
                      {translate('home.top-1.title')}
                    </h1>
                    <h1
                      class={formatClasses('text-16 font-normal leading-20 tracking-[3.2px]', {
                        'text-12 leading-14_5': !isPC(),
                      })}>
                      {translate('home.top-1.title-2')}
                    </h1>
                  </div>
                  <h1
                    class={formatClasses('special-title text-16 font-normal italic leading-20 tracking-[3.2px]', {
                      'text-12 leading-14_5': !isPC(),
                    })}>
                    {translate('home.top-1.subTitle')}
                  </h1>
                </div>
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
            <Show when={haveEvents()}>
              <section
                class={formatClasses('flex min-w-full ', {
                  'flex-row justify-center space-x-25': isPC(),
                  'flex-col-reverse justify-end': !isPC(),
                })}>
                <Picture
                  classes={formatClasses({
                    'h-136 min-w-190': isPC(),
                    'mt-6 min-h-63 w-full ': !isPC(),
                  })}
                  src="home/home-top-2@3x.png"
                />
                <article
                  class={formatClasses('w-full space-y-4', {
                    'grow py-22_5': isPC(),
                  })}>
                  <div class="flex flex-col">
                    <h1
                      class={formatClasses('text-16 font-normal leading-20 tracking-[3.2px]', {
                        'text-12 leading-14_5': !isPC(),
                      })}>
                      {translate('home.top-2.title')}
                    </h1>
                    <h1
                      class={formatClasses('special-title text-16 font-normal italic leading-20 tracking-[3.2px]', {
                        'text-12 leading-14_5': !isPC(),
                      })}>
                      {translate('home.top-2.subTitle')}
                    </h1>
                  </div>
                  <div class="space-y-2">
                    <p class="text-lg font-bold leading-7">{translate('home.top-2.content')}</p>
                    <div>
                      <p>
                        {translate('home.top-2.time', {
                          dateTime: transform({
                            locale: translation.language,
                            timestamp: firstEvent()!.startTime,
                            formatType: DateFormatType.CustomizeLocaleFormat,
                            offset: -(new Date().getTimezoneOffset() / 60),
                          }),
                        })}
                        <span> CST</span>
                      </p>
                      <p>{translate('home.top-2.location', { location: firstEvent()!.location })}</p>
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
                <div class="flex flex-col">
                  <h1
                    class={formatClasses('text-16 font-normal leading-20 tracking-[3.2px]', {
                      'text-12 leading-14_5': !isPC(),
                    })}>
                    {translate('home.top-3.title')}
                  </h1>
                  <h1
                    class={formatClasses('special-title text-16 font-normal italic leading-20 tracking-[3.2px]', {
                      'text-12 leading-14_5': !isPC(),
                    })}>
                    {translate('home.top-3.subTitle')}
                  </h1>
                </div>
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
      <ArticleContainer
        ref={setSolutionRef}
        titleI18nKey="home.solutions.title"
        subTitleI18nKey="home.solutions.subTitle"
        sectionClasses={formatClasses({
          'space-x-6': isPC(),
          'space-y-6': !isPC(),
        })}
        firstChildrenSlot={() => (
          <Show when={isPC()}>
            <button
              type="button"
              onClick={() => {
                mainScrollRef()?.scrollTo({
                  top: solutionRef()?.offsetTop ?? 0 - headerAreaHeight(),
                  behavior: 'smooth',
                });
              }}>
              <DoubleArrowDownIcon classes="absolute left-1/2 top-[-75px] translate-x-[-50%]" />
            </button>
          </Show>
        )}>
        <For each={Array.from({ length: 4 }).map((_, i) => i + 1)}>
          {(index) => (
            <article class={formatClasses('shrink grow basis-1/4 rounded-8 bg-black-5 pb-3')}>
              <Picture src={`home/solution-${index}@3x.png`} classes="w-full" />
              <section class="px-6_5 pt-3">
                <h5 class={formatClasses('text-5_5', { 'text-lg': !isPC() })}>
                  {translate(`home.solutions.solution-${index}.title`)}
                </h5>
                <p class="mt-2_5 text-start text-lg text-black-2">
                  {translate(`home.solutions.solution-${index}.content`)}
                </p>
              </section>
            </article>
          )}
        </For>
      </ArticleContainer>
      {/* 我們的優勢 */}
      <ArticleContainer
        titleI18nKey="home.advantages.title"
        subTitleI18nKey="home.advantages.subTitle"
        sectionClasses={formatClasses({
          'space-x-40': isPC(),
          'space-y-10': !isPC(),
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
      </ArticleContainer>
    </ContentLayout>
  );
};
export default HomePage;
