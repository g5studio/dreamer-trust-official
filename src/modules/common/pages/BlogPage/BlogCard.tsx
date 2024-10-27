import Picture from '@shared/components/Picture';
import Skeleton, { SkeletonType } from '@shared/components/Skeleton';
import { translate } from '@shared/hooks/use-translation';
import { isMobile, isPC, isTablet } from '@shared/hooks/use-window-size';
import { IBaseComponentProps } from '@shared/interfaces';
import { formatClasses } from '@utilities/helpers/format.helper';
import { IBlog } from '@modules/common/models/blog.model';
import { registerDirective } from '@utilities/helpers/directive.helper';
import { insertHtml } from '@utilities/directives/insert-html-directive';

registerDirective(insertHtml);

interface ISeminarCardProps extends IBaseComponentProps {
  blogData: IBlog['metaData'];
}

const BlogCard = (props: ISeminarCardProps) => {
  return (
    <section class={formatClasses('relative flex flex-col', props.classes)}>
      <Picture
        src={props.blogData.mainImageUrl}
        pictureClasses="flex grow"
        classes={formatClasses('w-[238px]', {
          'w-[298px]': isTablet(),
          'w-[354px]': isPC(),
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
      {/* 部落格內容 */}
      <article
        class={formatClasses('w-[238px] grow rounded-b-8 bg-black-5 px-5 py-4', {
          'w-[298px]': isTablet(),
          'w-[354px]': isPC(),
        })}>
        <div class={formatClasses('space-y-2_5')}>
          <div class="space-y-2 text-start text-black-2">
            <h5 class={formatClasses('text-xxl', { 'text-md': isMobile() })}>{props.blogData.title}</h5>
            <div
              use:insertHtml={{
                testId: `blog-${props.blogData.id}-content`,
                html: props.blogData.content,
                position: 'beforebegin',
                classes: formatClasses('overflow-hidden text-lg', {
                  'max-h-[127px]  text-xs': isMobile(),
                  'max-h-[187px]': !isMobile(),
                }),
              }}
            />
          </div>
          <p
            class={formatClasses('flex flex-row items-center space-x-2 text-start text-lg text-black-2', {
              'text-xs': isMobile(),
            })}>
            <a onClick={() => {}}>{translate('blog.blogs.learnMore')}</a>
          </p>
        </div>
        {props.children}
      </article>
    </section>
  );
};

export default BlogCard;
