import { getBlog } from '@modules/common/models/blog.model';
import ContentLayout from '@shared/components/ContentLayout';
import Picture from '@shared/components/Picture';
import { DateFormatType, ErrorHandleType, Language } from '@shared/enums';
import { createCustomizeQuery } from '@shared/hooks/create-customize-query';
import { back } from '@shared/hooks/use-navigator';
import { translate, translation } from '@shared/hooks/use-translation';
import { isLargePC, isMobile } from '@shared/hooks/use-window-size';
import { useParams } from '@solidjs/router';
import { createQuery } from '@tanstack/solid-query';
import { IApiBlog } from '@utilities/api/http/schema/blog.schema';
import { queryConfigs } from '@utilities/api/solid-query';
import { insertHtml } from '@utilities/directives/insert-html-directive';
import { registerDirective } from '@utilities/helpers/directive.helper';
import { formatClasses, formatLanguage } from '@utilities/helpers/format.helper';
import { transform } from '@utilities/helpers/time.helper';
import { ArrowDownLineIcon } from '@utilities/svg-components';
import { createEffect, on, Show } from 'solid-js';

registerDirective(insertHtml);

/**
 * 部落格詳情頁面
 * @external https://www.figma.com/design/Yu8CUgYbtdP8V5GyEvdYSR/01_Website-Exploration?node-id=860-3956&t=rVNL1lQLqPY1RXp8-4 pc
 * @external https://www.figma.com/design/Yu8CUgYbtdP8V5GyEvdYSR/01_Website-Exploration?node-id=839-11173&t=rVNL1lQLqPY1RXp8-4 tablet
 * @external https://www.figma.com/design/Yu8CUgYbtdP8V5GyEvdYSR/01_Website-Exploration?node-id=836-7560&t=rVNL1lQLqPY1RXp8-4 mobile
 */
const BlogDetailPage = () => {
  const params = useParams<{ id: string }>();
  const { initialize, metaData } = getBlog();
  const language = () => formatLanguage(translation.language) ?? Language.zh_CN;
  const queryBlog = createCustomizeQuery<IApiBlog>({
    query: createQuery(() => ({ ...queryConfigs.fetchBlog({ id: params.id, language: language() }) })),
    errorHandleType: ErrorHandleType.None,
    onSuccess: (response: IApiBlog) => {
      initialize(response);
    },
    onError: () => {
      back(1);
    },
  });

  createEffect(
    on(
      () => metaData.id,
      (id) => {
        if (queryBlog.isFetched && id !== params.id) {
          back(1);
        }
      },
    ),
  );

  return (
    <ContentLayout
      testId="BlogDetailPage"
      classes={formatClasses('space-y-20 px-0 pb-20 ', {
        'space-y-16 px-10 pb-16': !isLargePC(),
        'px-6': isMobile(),
      })}>
      <Show when={metaData.id}>
        <div class={formatClasses('space-y-4', { 'py-6': isMobile(), 'pt-20': !isMobile() })}>
          <nav class="flex flex-row items-center space-x-2">
            <button type="button" onClick={() => back(1)} class="rotate-90">
              <ArrowDownLineIcon />
            </button>
            <span>{translate('common.back')}</span>
          </nav>
          <h1
            class={formatClasses({
              'text-7_5': isMobile(),
              'text-10': !isMobile(),
            })}>
            {metaData.title}
          </h1>
          <p
            class={formatClasses({
              'text-sm': isMobile(),
              'text-5_5': !isMobile(),
            })}>
            {metaData.subTitle}
          </p>
          <div
            class={formatClasses('flex flex-row items-center space-x-6', {
              'text-sm': isMobile(),
              'text-5_5': !isMobile(),
            })}>
            <p>{metaData.author}</p>
            <p>
              {transform({
                locale: translation.language,
                timestamp: metaData.publishTime,
                formatType: DateFormatType.CustomizeLocaleShortFormat,
                offset: -(new Date().getTimezoneOffset() / 60),
              })}
            </p>
          </div>
        </div>
        <div class="space-y-10">
          <Picture classes="w-full" src={metaData.mainImageUrl} />
          <div
            use:insertHtml={{
              testId: `blog-${metaData.id}-content`,
              html: metaData.content,
              position: 'beforebegin',
              classes: 'reset',
            }}
          />
        </div>
      </Show>
    </ContentLayout>
  );
};
export default BlogDetailPage;
