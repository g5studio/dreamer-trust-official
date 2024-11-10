import ArticleContainer from '@shared/components/ArticleContainer';
import Button from '@shared/components/Button';
import CarouselContainer from '@shared/components/CarouselContainer';
import ContentLayout from '@shared/components/ContentLayout';
import Picture from '@shared/components/Picture';
import { oneSecondWithMileSeconds } from '@shared/constants/time.constants';
import { DateFormatType, Direction, Page } from '@shared/enums';
import { use1By1FadeInAnimation } from '@shared/hooks/use-animation';
import { useNavigate } from '@shared/hooks/use-navigate';
import { translate, translation } from '@shared/hooks/use-translation';
import windowSize, { isMobile, isPC, isSmallMobile, isTablet } from '@shared/hooks/use-window-size';
import { useEventListContext } from '@utilities/context/event-list-context';
import { useLayoutContext } from '@utilities/context/layout-context';
import { formatClasses } from '@utilities/helpers/format.helper';
import { transform } from '@utilities/helpers/time.helper';
import AdvantageOneIcon from '@utilities/svg-components/common/AdvantageOneIcon';
import AdvantageTwoIcon from '@utilities/svg-components/common/AdvantageTwoIcon';
import DoubleArrowDownIcon from '@utilities/svg-components/shared/DoubleArrowDownIcon';
import { createSignal, For, Match, Show, Switch } from 'solid-js';

const HomePage = () => {
  const { start: startSolutionAnimation, animationStartList: solutionAnimationList } = use1By1FadeInAnimation({
    length: 4,
    batchNumbers: isTablet() ? 2 : 1,
  });
  const { start: startAdvantageAnimation, animationStartList: advantageAnimationList } = use1By1FadeInAnimation({
    length: 4,
  });
  const [solutionRef, setSolutionRef] = createSignal<HTMLElement>();
  const [{ mainScrollRef, headerAreaHeight }] = useLayoutContext();
  const [{ firstEvent }] = useEventListContext();
  const navigate = useNavigate();

  /**
   * 平板版型較小畫面時，top區域圖片需縮小避免爆版
   * @description 扣除預設平板間隔100px後是否不足最小圖片寬度
   */
  const shouldDynamicAdjustTopImageWidth = () => isTablet() && windowSize.width - 80 - (417 + 100) < 417;
  /**
   * 平板版型較小畫面時，文章需縮小避免爆版
   * @description 總寬度 - 容器padding - 圖案寬度 - 最小間隔
   */
  const dynamicTopArticleWidth = () => windowSize.width - 80 - 417 - 40;

  /**
   * @description 無研討會資料時不顯示研討會輪播區塊
   */
  const carouselCount = () => (firstEvent()?.id ? 3 : 2);

  return (
    <ContentLayout
      testId="HomePage"
      classes={formatClasses('space-y-30 pb-30', {
        'space-y-16 pb-16': !isPC(),
      })}>
      <CarouselContainer
        classes={formatClasses({
          'flex h-[576px] w-full flex-col items-center justify-center': !isMobile(),
          'p-6': isMobile(),
        })}
        containerClasses={formatClasses({ 'w-full': !isMobile() })}
        replayMode="forward"
        animation="fade"
        testId="home-top-carousel"
        maxLength={carouselCount()}
        transition={oneSecondWithMileSeconds}
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
          <>
            {/* Top 1 */}
            <section
              class={formatClasses('flex min-w-full', {
                'h-[544px] flex-row items-center justify-center space-x-25 px-10': !isMobile(),
                'justify-between space-x-0': !isMobile() && shouldDynamicAdjustTopImageWidth(),
                'flex-col justify-start': isMobile(),
              })}>
              <article
                style={{
                  'max-width': shouldDynamicAdjustTopImageWidth() ? `${dynamicTopArticleWidth()}px` : undefined,
                }}
                class={formatClasses('space-y-4')}>
                <div class="flex flex-col">
                  <div
                    class={formatClasses('flex flex-col', {
                      'flex-row': isPC(),
                    })}>
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
                <p
                  class={formatClasses('text-lg leading-7', {
                    'text-md': isMobile(),
                  })}>
                  {translate('home.top-1.content')}
                </p>
              </article>
              <Picture
                pictureClasses={formatClasses({
                  'item-center mt-12 flex justify-center': isMobile(),
                })}
                classes={formatClasses({
                  'h-75 min-w-104_25': !isMobile(),
                  'h-53_5 min-w-75': isMobile(),
                  'h-auto min-w-full': isSmallMobile(),
                })}
                src="home/home-top-1@3x.png"
              />
            </section>
            {/* 研討會 */}
            <Show when={firstEvent()?.id}>
              <section
                class={formatClasses('flex min-w-full', {
                  'flex-row items-start justify-center space-x-25': !isMobile(),
                  'flex-col-reverse justify-start': isMobile(),
                })}>
                <Picture
                  pictureClasses={formatClasses({
                    'item-center mt-6 flex justify-center': isMobile(),
                  })}
                  classes={formatClasses(' object-cover', {
                    'h-[544px] object-left': !isMobile(),
                    'h-[252px] min-w-full object-top': isMobile(),
                  })}
                  src={firstEvent()?.imageUrl ?? 'home/home-top-2@3x.png'}
                />
                <article
                  class={formatClasses('space-y-4', {
                    'min-w-[462px] pt-20': !isMobile(),
                    'p-6 pb-0': isMobile(),
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
                    <p class="text-lg font-bold leading-7">{firstEvent()?.title}</p>
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
            {/* 解決方案 */}
            <section
              class={formatClasses('flex min-w-full', {
                'flex-row items-start justify-center space-x-25': !isMobile(),
                'flex-col justify-start': isMobile(),
              })}>
              <article
                class={formatClasses('space-y-4', {
                  'w-[462px] min-w-[462px] pl-10 pt-20': !isMobile(),
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
                pictureClasses={formatClasses({
                  'item-center mt-6 flex justify-center': isMobile(),
                })}
                classes={formatClasses(' object-cover', {
                  'h-[544px] object-center': !isMobile(),
                  'h-[252px] min-w-full object-top': isMobile(),
                })}
                src={isMobile() ? 'home/home-top-3-sm@3x.png' : 'home/home-top-3@3x.png'}
              />
            </section>
          </>
        )}
      </CarouselContainer>
      {/* 我們的解決方案 */}
      <ArticleContainer
        onChildrenFideIn={() => {
          if (!isMobile()) {
            startSolutionAnimation();
          }
        }}
        ref={setSolutionRef}
        titleI18nKey="home.solutions.title"
        subTitleI18nKey="home.solutions.subTitle"
        sectionClasses={formatClasses('grid gap-6 overflow-y-hidden', {
          'mx-auto max-w-[660px]': isTablet(),
          'no-scrollbar mx-auto flex max-w-full flex-row flex-nowrap justify-start overflow-x-auto': isPC(),
          'grid-cols-2': isTablet(),
          'grid-cols-1': isMobile(),
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
            <article
              class={formatClasses('w-[318px] rounded-8 bg-black-5 pb-6', {
                'min-w-[318px] grow': isPC(),
                'ms-6': index === 1 && isPC(),
                'me-6': index === 4 && isPC(),
                'opacity-0': !isMobile(),
                'animation-fade-in-bottom opacity-1': !isMobile() && solutionAnimationList()[index - 1],
              })}>
              <Picture src={`home/solution-${index}@3x.png`} classes="w-full" />
              <section class="px-6_5 pt-6">
                <h5 class={formatClasses('text-5_5', { 'text-sm text-black-2': !isPC() })}>
                  {translate(`home.solutions.solution-${index}.title`)}
                </h5>
                <p
                  class={formatClasses('mt-2_5 text-start text-lg text-black-2', {
                    'text-xs': !isPC(),
                  })}>
                  {translate(`home.solutions.solution-${index}.content`)}
                </p>
              </section>
            </article>
          )}
        </For>
      </ArticleContainer>
      {/* 我們的優勢 */}
      <ArticleContainer
        onChildrenFideIn={() => {
          if (!isMobile()) {
            startAdvantageAnimation();
          }
        }}
        titleI18nKey="home.advantages.title"
        subTitleI18nKey="home.advantages.subTitle"
        sectionClasses={formatClasses('grid', {
          'mx-auto max-w-[660px]': isTablet(),
          'grid-cols-2 gap-40': isPC(),
          'grid-cols-2 gap-10': isTablet(),
          'grid-cols-1 gap-10': isMobile(),
        })}>
        <For each={Array.from({ length: 2 }).map((_, i) => i + 1)}>
          {(index) => (
            <article
              style={{
                'animation-duration': '0.7s',
              }}
              class={formatClasses('flex w-[307px] flex-col items-center space-y-10', {
                'opacity-0': !isMobile(),
                'animation-fade-in-bottom opacity-1': !isMobile() && advantageAnimationList()[index - 1],
              })}>
              <Switch>
                <Match when={index === 1}>
                  <AdvantageOneIcon />
                </Match>
                <Match when={index === 2}>
                  <AdvantageTwoIcon />
                </Match>
              </Switch>
              <p
                class={formatClasses('text-lg text-black-1', {
                  'text-sm': !isPC(),
                })}>
                {translate(`home.advantages.advantage-${index}.content`)}
              </p>
            </article>
          )}
        </For>
      </ArticleContainer>
    </ContentLayout>
  );
};
export default HomePage;
