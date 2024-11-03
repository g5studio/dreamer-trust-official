import Picture from '@shared/components/Picture';
import Skeleton, { SkeletonType } from '@shared/components/Skeleton';
import { translate } from '@shared/hooks/use-translation';
import { isMobile, isPC, isTablet } from '@shared/hooks/use-window-size';
import { IBaseComponentProps } from '@shared/interfaces';
import { formatClasses } from '@utilities/helpers/format.helper';
import { IBlog } from '@modules/common/models/blog.model';
import { registerDirective } from '@utilities/helpers/directive.helper';
import { insertHtml } from '@utilities/directives/insert-html-directive';
import { Show } from 'solid-js';
import SkeletonContainer from '@shared/components/SkeletonContainer';
import { useNavigate } from '@shared/hooks/use-navigate';
import { Page } from '@shared/enums';

registerDirective(insertHtml);

type MockSeminarCardProps = {
  isLoading: true;
};

type RealSeminarCardProps = {
  isLoading: false;
  blogData: IBlog['metaData'];
};

type SeminarCardProps = (MockSeminarCardProps | RealSeminarCardProps) & IBaseComponentProps;

const BlogCard = (props: SeminarCardProps) => {
  const navigate = useNavigate();
  return (
    <section class={formatClasses('relative flex flex-col', props.classes)}>
      <Show
        when={!props.isLoading}
        fallback={
          <Skeleton
            type={SkeletonType.Rect}
            classes={formatClasses('h-[149px] w-[238px]', {
              'h-[219px] w-[298px]': isTablet(),
              'h-[219px] w-[354px]': isPC(),
            })}
          />
        }>
        {!props.isLoading ? (
          <Picture
            src={props.blogData.mainImageUrl}
            classes={formatClasses('h-[149px] w-[238px] rounded-t-8 object-cover object-top', {
              'h-[219px] w-[298px]': isTablet(),
              'h-[219px] w-[354px]': isPC(),
            })}
            fallbackSlot={() => (
              <Skeleton
                type={SkeletonType.Rect}
                classes={formatClasses('h-[149px] w-[238px]', {
                  'h-[219px] w-[298px]': isTablet(),
                  'h-[219px] w-[354px]': isPC(),
                })}
              />
            )}
          />
        ) : (
          <></>
        )}
      </Show>
      {/* 部落格內容 */}
      <article
        class={formatClasses('w-[238px] grow rounded-b-8 bg-black-5 px-5 py-4', {
          'w-[298px]': isTablet(),
          'w-[354px]': isPC(),
        })}>
        <div class={formatClasses('space-y-2_5')}>
          <div class="space-y-2 text-start text-black-2">
            <SkeletonContainer
              showSkeleton={props.isLoading}
              skeletonSlot={() => <Skeleton type={SkeletonType.Text} classes="min-h-4 w-full" />}>
              <h5 class={formatClasses('text-xxl', { 'text-md': isMobile() })}>
                {!props.isLoading ? props.blogData.title : ''}
              </h5>
            </SkeletonContainer>
            <div
              class={formatClasses('overflow-hidden text-lg', {
                'max-h-[127px] text-xs': isMobile(),
                'max-h-[187px]': !isMobile(),
              })}>
              <SkeletonContainer
                showSkeleton={props.isLoading}
                skeletonSlot={() => (
                  <Skeleton
                    type={SkeletonType.Rect}
                    classes={formatClasses({
                      'min-h-[127px] min-w-full': isMobile(),
                      'min-h-[187px] min-w-full': !isMobile(),
                    })}
                  />
                )}>
                {!props.isLoading ? (
                  <div
                    use:insertHtml={{
                      testId: `blog-${props.blogData.id}-content`,
                      html: props.blogData.content,
                      position: 'beforebegin',
                      classes: 'reset',
                    }}
                  />
                ) : (
                  <></>
                )}
              </SkeletonContainer>
            </div>
          </div>
          <Show when={!props.isLoading}>
            <p
              class={formatClasses('flex flex-row items-center space-x-2 text-start text-lg text-black-2', {
                'text-xs': isMobile(),
              })}>
              <a onClick={() => navigate()[Page.BlogDetail]({ id: !props.isLoading ? props.blogData.id : '' })}>
                {translate('blog.blogs.learnMore')}
              </a>
            </p>
          </Show>
        </div>
        {props.children}
      </article>
    </section>
  );
};

export default BlogCard;
