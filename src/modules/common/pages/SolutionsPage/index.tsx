import ArticleContainer from '@shared/components/ArticleContainer';
import CarouselContainer from '@shared/components/CarouselContainer';
import ContentLayout from '@shared/components/ContentLayout';
import Picture from '@shared/components/Picture';
import Skeleton, { SkeletonType } from '@shared/components/Skeleton';
import { Direction, LocaleDash } from '@shared/enums';
import { translate, translation } from '@shared/hooks/use-translation';
import windowSize, { isLargePC, isMobile, isPC, isSmallMobile, isTablet } from '@shared/hooks/use-window-size';
import { useLayoutContext } from '@utilities/context/layout-context';
import { formatClasses } from '@utilities/helpers/format.helper';
import { For, Show } from 'solid-js';

const SolutionsPage = () => {
  const [{ mainScrollRef }] = useLayoutContext();

  /**
   * 平板版型較小畫面時，top區域圖片需縮小避免爆版
   * @description 扣除預設平板間隔100px後是否不足最小圖片寬度
   */
  const shouldDynamicAdjustTopImageWidth = () => isTablet() && windowSize.width - 80 - 527 < 417;
  /**
   * 平板版型較小畫面時，top區域圖片需縮小避免爆版
   * @description 總寬度 - 容器padding - 文案區域 - 最小間隔
   */
  const dynamicTopImageWidth = () => (windowSize.width - 80 - 427 - 40 < 417 ? windowSize.width - 80 - 427 - 40 : 417);

  const articleList = () => [
    {
      key: 'trust-solution',
      chapter: 7,
    },
    {
      key: 'estate-planning',
      chapter: 2,
    },
    {
      key: 'asset-management',
      chapter: 3,
    },
    {
      key: 'corporate-service',
      chapter: 1,
      pictureUrl: isMobile() ? 'solutions/cap-table-sm@3x.png' : 'solutions/cap-table@3x.png',
    },
  ];

  return (
    <ContentLayout
      testId="SolutionsPage"
      classes={formatClasses('relative space-y-30 pb-30', {
        'space-y-16 pb-16': !isPC(),
      })}>
      <CarouselContainer
        classes={formatClasses({
          'flex h-[544px] w-full items-center justify-center px-10': !isMobile(),
          'px-6 pt-5': isMobile(),
          'px-5 pt-7_5': isSmallMobile(),
        })}
        containerClasses={formatClasses({ 'w-full': !isMobile() && !isLargePC() })}
        replayMode="forward"
        testId="solutions-top-carousel"
        maxLength={1}
        direction={Direction.Horizontal}>
        {() => (
          <div class="flex w-full flex-row flex-nowrap">
            <section
              class={formatClasses('flex min-w-full', {
                'flex-row items-center justify-center space-x-25': !isMobile(),
                'justify-between space-x-0': !isMobile() && shouldDynamicAdjustTopImageWidth(),
                'flex-col justify-start': isMobile(),
              })}>
              <article
                class={formatClasses('w-full space-y-4', {
                  'max-w-[427px]': isTablet(),
                  'max-w-[517px]': isPC(),
                  'p-6 pb-0': isMobile(),
                })}>
                <div class="flex flex-col-reverse">
                  <h1
                    class={formatClasses('text-12 font-normal leading-14_5 tracking-[3.2px]', {
                      'text-16 leading-20': !isMobile(),
                    })}>
                    {translate('solutions.top-1.title')}
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
                      {translate('solutions.top-1.title-2')}
                    </h1>
                  </div>
                </div>
                <p
                  class={formatClasses('text-lg leading-7', {
                    'text-md': isMobile(),
                  })}>
                  {translate('solutions.top-1.content')}
                </p>
              </article>
              <Picture
                pictureClasses={formatClasses({
                  'item-center mt-12 flex justify-center': isMobile(),
                  'px-7': isSmallMobile(),
                })}
                classes={formatClasses({
                  'h-75 min-w-104_25': !isMobile() && !shouldDynamicAdjustTopImageWidth(),
                  'h-53_5 min-w-75': isMobile(),
                  'h-auto min-w-full': isSmallMobile(),
                })}
                src="solutions/solutions-top@3x.png"
                width={shouldDynamicAdjustTopImageWidth() ? dynamicTopImageWidth() : undefined}
              />
            </section>
          </div>
        )}
      </CarouselContainer>
      <ArticleContainer
        classes={formatClasses({
          'max-w-[610px]': isLargePC(),
          'mx-auto max-w-[632px]': !isMobile(),
        })}
        subTitleI18nKey="solutions.description.subTitle"
        titleI18nKey=""
        sectionClasses="mt-4"
        subTitleClasses={formatClasses('font-normal text-black-1', {
          'leading-13 text-9': isLargePC(),
          'text-7_5': !isPC(),
        })}>
        <p
          class={formatClasses('', {
            'text-lg': isLargePC(),
            'text-xs': !isPC(),
          })}>
          {translate('solutions.description.content')}
        </p>
      </ArticleContainer>
      <ArticleContainer
        subTitleI18nKey="solutions.our-solutions.subTitle"
        titleI18nKey="solutions.our-solutions.title"
        sectionClasses={formatClasses('grid', {
          'no-scrollbar mx-auto flex max-w-full flex-row justify-start space-x-6 overflow-x-auto px-6': isPC(),
          'grid-cols-2 gap-6': isTablet(),
          'grid-cols-1 gap-6': isMobile(),
        })}>
        <For each={Array.from({ length: 4 }).map((_, i) => i + 1)}>
          {(index) => (
            <article class={formatClasses('w-[318px] min-w-[318px] rounded-8 bg-black-5')}>
              <Picture src={`home/solution-${index}@3x.png`} classes={formatClasses('w-[318px] min-w-[318px]')} />
              <section class="p-6">
                <h5
                  class={formatClasses('text-nowrap text-black-2', {
                    'text-sm': !isPC(),
                    'text-5_5': isPC(),
                  })}>
                  {translate(`home.solutions.solution-${index}.title`)}
                </h5>
              </section>
            </article>
          )}
        </For>
      </ArticleContainer>
      {/* 文章區域 */}
      <For each={articleList()}>
        {({ key, chapter, pictureUrl }) => (
          <article
            class={formatClasses('flex flex-col items-center', {
              'mx-auto max-w-[1184px] space-y-9': isPC(),
              'space-y-6': !isPC(),
            })}>
            <section
              class={formatClasses('w-full', {
                'flex flex-row items-start': !isMobile(),
                'space-x-20': isPC(),
                'space-x-6 px-10': isTablet(),
                'space-y-6 px-6': isMobile(),
              })}>
              <div
                class={formatClasses({
                  'space-y-4': !isPC(),
                  'w-[576px] space-y-6': isPC(),
                  'flex-1': isTablet(),
                })}>
                <h1
                  class={formatClasses('font-normal', {
                    'text-9': isPC(),
                    'text-7_5': !isPC(),
                  })}>
                  {translate(`solutions.${key}.title`)}
                </h1>
                <p
                  class={formatClasses({
                    'text-lg': isPC(),
                    'text-xs': !isPC(),
                  })}>
                  {translate(`solutions.${key}.subTitle`)}
                </p>
              </div>
              <div
                class={formatClasses('flex flex-col space-y-6', {
                  'w-[528px]': isPC(),
                  'flex-1': isTablet(),
                })}>
                <For each={Array.from({ length: chapter })}>
                  {(_, index) => (
                    <div class="space-y-2">
                      <p
                        class={formatClasses('font-bold', {
                          'text-md': isPC(),
                          'text-xs': !isPC(),
                        })}>
                        {translate(`solutions.${key}.article-${index() + 1}.title`)}
                      </p>
                      <div class="h-1 w-4 rounded-[99px] bg-primary-3" />
                      <p
                        class={formatClasses({
                          'text-lg': isPC(),
                          'text-xs': !isPC(),
                        })}>
                        {translate(`solutions.${key}.article-${index() + 1}.content`)}
                      </p>
                    </div>
                  )}
                </For>
              </div>
            </section>
            <Show when={pictureUrl}>
              <Picture
                fallbackSlot={() => (
                  <Skeleton
                    type={SkeletonType.Rect}
                    classes={formatClasses('px-6', {
                      'mb-6 h-[223px] w-[440px]': isMobile(),
                      'h-[261px] w-[510px]': isTablet(),
                      'h-[341px] w-[660px]': isPC(),
                    })}
                  />
                )}
                classes={formatClasses('px-6', {
                  'mb-6 w-[440px]': isMobile(),
                  'w-[510px]': isTablet(),
                  'w-[660px]': isPC(),
                })}
                src={pictureUrl ?? ''}
              />
            </Show>
          </article>
        )}
      </For>
      <button
        type="button"
        onClick={() => mainScrollRef()?.scrollTo({ top: 0, behavior: 'smooth' })}
        class="fixed bottom-10 right-10 flex h-[55px] w-[55px] items-center justify-center rounded-circle bg-black-6"
        style={{
          'box-shadow': '0px 0px 5px 2px #00000040',
        }}>
        <svg width="34" height="19" viewBox="0 0 34 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 17L17 2L2 17" stroke="#222222" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
    </ContentLayout>
  );
};
export default SolutionsPage;
