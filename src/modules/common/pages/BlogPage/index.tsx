import ArticleContainer from '@shared/components/ArticleContainer';
import CarouselContainer from '@shared/components/CarouselContainer';
import ContentLayout from '@shared/components/ContentLayout';
import Picture from '@shared/components/Picture';
import { Direction, ErrorHandleType, Language, LocaleDash } from '@shared/enums';
import { translate, translation } from '@shared/hooks/use-translation';
import windowSize, { isLargePC, isMobile, isPC, isSmallMobile, isTablet } from '@shared/hooks/use-window-size';
import { formatClasses, formatLanguage } from '@utilities/helpers/format.helper';
import { createCustomizeQuery } from '@shared/hooks/create-customize-query';
import { createQuery } from '@tanstack/solid-query';
import { queryConfigs } from '@utilities/api/solid-query';
import { IApiBlog } from '@utilities/api/http/schema/blog.schema';
import { createMemo, createSignal, For, Show } from 'solid-js';
import { getBlog } from '@modules/common/models/blog.model';
import { IApiQuestion } from '@utilities/api/http/schema/faq.schema';
import SkeletonContainer from '@shared/components/SkeletonContainer';
import { ArrowDownLineIcon } from '@utilities/svg-components';
import Skeleton, { SkeletonType } from '@shared/components/Skeleton';
import BlogList from './BlogList';

/**
 * @description 洞察更新頁面
 * @external https://www.figma.com/design/Yu8CUgYbtdP8V5GyEvdYSR/01_Website-Exploration?node-id=860-3858&t=UultcfFnQgaafJob-4 (PC)
 * @external https://www.figma.com/design/Yu8CUgYbtdP8V5GyEvdYSR/01_Website-Exploration?node-id=839-11075&t=UultcfFnQgaafJob-4 (Tablet)
 * @external https://www.figma.com/design/Yu8CUgYbtdP8V5GyEvdYSR/01_Website-Exploration?node-id=836-7468&t=UultcfFnQgaafJob-4 (Mobile)
 */
const BlogPage = () => {
  const language = () => formatLanguage(translation.language) ?? Language.zh_CN;

  const queryBlogList = createCustomizeQuery<IApiBlog[]>({
    query: createQuery(() => ({
      ...queryConfigs.fetchBlogList({ language: language() }),
    })),
    errorHandleType: ErrorHandleType.None,
    onSuccess: () => {},
    onError: () => {},
  });

  const queryQuestionList = createCustomizeQuery<IApiQuestion[]>({
    query: createQuery(() => ({ ...queryConfigs.fetchQuestionList({ language: language() }) })),
    errorHandleType: ErrorHandleType.None,
    onSuccess: () => {},
    onError: () => {},
  });

  const blogs = createMemo(
    () =>
      queryBlogList.data?.data.map((_) => {
        const { initialize, metaData } = getBlog();
        initialize(_);
        return metaData;
      }) ?? [],
  );

  const questions = createMemo(() =>
    queryQuestionList.isLoading
      ? Array.from({ length: 5 }).map(() => ({ question: '', answer: '' }))
      : queryQuestionList?.data?.data ?? [],
  );

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

  return (
    <ContentLayout
      testId="BlogPage"
      classes={formatClasses('space-y-30 pb-30', {
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
        testId="blog-top-carousel"
        maxLength={1}
        direction={Direction.Horizontal}>
        {() => (
          <div class="flex w-full flex-row flex-nowrap">
            <section
              class={formatClasses('flex min-w-full', {
                'flex-row items-center justify-center space-x-25': !isMobile(),
                'justify-between space-x-0': !isMobile() && shouldDynamicAdjustTopImageWidth(),
                'flex-col-reverse justify-start': isMobile(),
              })}>
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
                src="blog/blog-top@3x.png"
                width={shouldDynamicAdjustTopImageWidth() ? dynamicTopImageWidth() : undefined}
              />
              <article
                class={formatClasses('w-full space-y-4', {
                  'max-w-[427px]': isTablet(),
                  'max-w-[517px]': isPC(),
                  'p-6 pb-0': isMobile(),
                })}>
                <div class="flex flex-col">
                  <h1
                    class={formatClasses('text-12 font-normal leading-14_5 ', {
                      'text-16 leading-20': !isMobile(),
                    })}>
                    {translate('blog.top-1.title')}
                  </h1>
                  <div
                    class={formatClasses('flex flex-col', {
                      'flex-row': isPC(),
                      'lg:space-x-4 xl:space-x-8':
                        translation.language !== LocaleDash.zh_HK && translation.language !== LocaleDash.zh_CN,
                    })}>
                    <h1
                      class={formatClasses(
                        'font-["PT_Serif"] text-12 font-normal italic leading-14_5 tracking-[3.2px]',
                        {
                          'text-16 leading-20': !isMobile(),
                        },
                      )}>
                      {translate('blog.top-1.title-2')}
                    </h1>
                  </div>
                </div>
                <p
                  class={formatClasses('text-lg leading-7', {
                    'text-md': isMobile(),
                  })}>
                  {translate('blog.top-1.content')}
                </p>
              </article>
            </section>
          </div>
        )}
      </CarouselContainer>
      <ArticleContainer
        subTitleI18nKey="blog.questions.subTitle"
        titleI18nKey=""
        sectionClasses="w-full flex justify-center items-center">
        <ul
          class={formatClasses({
            'w-[808px] space-y-6': !isMobile(),
            'w-full': windowSize.width <= 808 + 48,
            'w-full space-y-4': isMobile(),
          })}>
          <For each={questions()}>
            {({ question, answer }) => {
              const [isExpand, setIsExpand] = createSignal<boolean>(false);
              return (
                <li
                  class={formatClasses('flex w-full flex-col border-b-0_25  border-black-4 text-start', {
                    'pb-4': isMobile(),
                    'pb-6': !isMobile(),
                  })}>
                  <div class={formatClasses('flex w-full flex-row items-center space-x-4')}>
                    <button
                      disabled={queryQuestionList.isLoading}
                      class={formatClasses('flex h-6 w-6 items-center justify-center', {
                        '-rotate-90': !isExpand(),
                      })}
                      type="button"
                      onClick={() => setIsExpand((pre) => !pre)}>
                      <ArrowDownLineIcon />
                    </button>
                    <SkeletonContainer
                      showSkeleton={queryQuestionList.isLoading}
                      skeletonSlot={() => <Skeleton type={SkeletonType.Text} classes="min-h-5_5 w-full" />}>
                      <p
                        class={formatClasses('w-full', {
                          'leading-5_5': isMobile(),
                          'text-5_5': !isMobile(),
                        })}>
                        {question}
                      </p>
                    </SkeletonContainer>
                  </div>
                  <Show when={isExpand()}>
                    <p
                      class={formatClasses('w-full text-black-2', {
                        'mt-4 text-sm leading-5_5': isMobile(),
                        'mt-6 text-5_5 text-lg': !isMobile(),
                      })}>
                      {answer}
                    </p>
                  </Show>
                </li>
              );
            }}
          </For>
        </ul>
      </ArticleContainer>
      <ArticleContainer subTitleI18nKey="blog.blogs.subTitle" titleI18nKey="blog.blogs.title" sectionClasses="w-full">
        <BlogList isLoading={queryBlogList.isLoading} blogs={blogs} />
      </ArticleContainer>
    </ContentLayout>
  );
};
export default BlogPage;
