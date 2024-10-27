import ArticleContainer from '@shared/components/ArticleContainer';
import CarouselContainer from '@shared/components/CarouselContainer';
import ContentLayout from '@shared/components/ContentLayout';
import Picture from '@shared/components/Picture';
import { Direction, ErrorHandleType, Language, LocaleDash } from '@shared/enums';
import { translate, translation } from '@shared/hooks/use-translation';
import { isLargePC, isMobile, isPC, isSmallMobile } from '@shared/hooks/use-window-size';
import { formatClasses, formatLanguage } from '@utilities/helpers/format.helper';
import { createCustomizeQuery } from '@shared/hooks/create-customize-query';
import { createQuery } from '@tanstack/solid-query';
import { queryConfigs } from '@utilities/api/solid-query';
import { IApiBlog } from '@utilities/api/http/schema/blog.schema';
import { createMemo } from 'solid-js';
import { getBlog } from '@modules/common/models/blog.model';
import BlogList from './BlogList';

/**
 * @description 洞察更新頁面
 * @external https://www.figma.com/design/Yu8CUgYbtdP8V5GyEvdYSR/01_Website-Exploration?node-id=860-3858&t=UultcfFnQgaafJob-4 (PC)
 * @external https://www.figma.com/design/Yu8CUgYbtdP8V5GyEvdYSR/01_Website-Exploration?node-id=839-11075&t=UultcfFnQgaafJob-4 (Tablet)
 * @external https://www.figma.com/design/Yu8CUgYbtdP8V5GyEvdYSR/01_Website-Exploration?node-id=836-7468&t=UultcfFnQgaafJob-4 (Mobile)
 */
const BlogPage = () => {
  const queryBlogList = createCustomizeQuery<IApiBlog[]>({
    query: createQuery(() => ({
      ...queryConfigs.fetchBlogList({ language: formatLanguage(translation.language) ?? Language.zh_CN }),
    })),
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

  return (
    <ContentLayout
      testId="BlogPage"
      classes={formatClasses('space-y-30 pb-30', {
        'space-y-16 pb-16': !isLargePC(),
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
                src="blog/blog-top@3x.png"
              />
              <article
                class={formatClasses('w-full space-y-4', {
                  'max-w-[522px]': !isMobile(),
                  'p-6': isMobile(),
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
                      class={formatClasses('font-["PT_Serif"] text-12 font-normal italic leading-14_5', {
                        'text-16 leading-20': !isMobile(),
                      })}>
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
      <ArticleContainer subTitleI18nKey="blog.questions.subTitle" titleI18nKey="">
        <div />
      </ArticleContainer>
      <ArticleContainer subTitleI18nKey="blog.blogs.subTitle" titleI18nKey="blog.blogs.title" sectionClasses="w-full">
        <BlogList blogs={blogs} />
      </ArticleContainer>
    </ContentLayout>
  );
};
export default BlogPage;
