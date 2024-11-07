import CarouselContainer from '@shared/components/CarouselContainer';
import { Direction } from '@shared/enums';
import { isMobile, isPC } from '@shared/hooks/use-window-size';
import { domProperty, DomPropertyCbParams } from '@utilities/directives/dom-property-directive';
import { registerDirective } from '@utilities/helpers/directive.helper';
import { formatClasses } from '@utilities/helpers/format.helper';
import { Show, For, Accessor, createSignal } from 'solid-js';
import { IBaseComponentProps } from '@shared/interfaces';
import { IBlog } from '@modules/common/models/blog.model';
import BlogCard from './BlogCard';

registerDirective(domProperty);

type Props = {
  blogs: Accessor<IBlog['metaData'][]>;
  isLoading: boolean;
  blogAnimationClasses: ArrowFn<number, string>;
} & IBaseComponentProps;

const maxCols = 3;

/**
 * 部落格列表
 * @description
 * 1. pc & tablet以carousel呈現
 * 2. mobile 以scroll呈現
 * @external https://www.figma.com/design/Yu8CUgYbtdP8V5GyEvdYSR/01_Website-Exploration?node-id=839-11142&t=UultcfFnQgaafJob-4 pc + tablet
 * @external https://www.figma.com/design/Yu8CUgYbtdP8V5GyEvdYSR/01_Website-Exploration?node-id=836-7532&t=UultcfFnQgaafJob-4 mobile
 */
const BlogList = (props: Props) => {
  /**
   * @description pc + tablet 文章需以三個為一組分群
   */
  const blogDataGroup: Accessor<IBlog['metaData'][][]> = () =>
    props.blogs().reduce(
      (list: IBlog['metaData'][][], blog) => {
        const newList = [...list];
        if (newList[newList.length - 1].length < maxCols) {
          newList[newList.length - 1].push(blog);
        } else {
          newList.push([blog]);
        }
        return newList;
      },
      [[]] as IBlog['metaData'][][],
    );

  return (
    <Show
      when={!props.isLoading}
      fallback={
        <div class="no-scrollbar w-full overflow-x-auto overflow-y-hidden">
          <div
            class={formatClasses('flex w-fit w-full flex-row flex-nowrap space-x-6', {
              'space-x-10': isPC(),
            })}>
            {<For each={Array.from({ length: 3 })}>{() => <BlogCard isLoading />}</For>}
          </div>
        </div>
      }>
      <Show
        when={!isMobile()}
        fallback={
          <div class="no-scrollbar w-full overflow-x-auto overflow-y-hidden">
            <div class={formatClasses('flex w-fit w-full flex-row flex-nowrap space-x-6')}>
              {
                <For each={props.blogs()}>
                  {(data, index) => (
                    <BlogCard
                      classes={formatClasses({
                        'pl-6': index() === 0,
                        'pr-6': index() === props.blogs().length - 1,
                      })}
                      isLoading={false}
                      blogData={data}
                    />
                  )}
                </For>
              }
            </div>
          </div>
        }>
        <CarouselContainer
          replayMode="forward"
          classes="w-full"
          contentClasses="flex flex-row items-center"
          containerClasses={formatClasses('w-full')}
          testId="seminars-event-carousel"
          maxLength={blogDataGroup().length}
          direction={Direction.Horizontal}
          sliderSlot={(currentIndex, changeIndex) => (
            <Show when={blogDataGroup().length > 1}>
              <ul class="mt-10 flex flex-row items-center justify-center space-x-6">
                <For each={blogDataGroup()}>
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
            </Show>
          )}>
          {() => (
            <For each={blogDataGroup()}>
              {(group) => {
                const [containerWidth, setContainerWidth] = createSignal<number>(0);
                const [blogsWidth, setBlogsWidth] = createSignal<number>(0);
                const isOverflow = () => containerWidth() < blogsWidth();
                return (
                  <div
                    class={formatClasses('w-full min-w-full')}
                    use:domProperty={{
                      keyList: ['domRectWidth'],
                      cb: ([width]: DomPropertyCbParams<['domRectWidth']>) => {
                        setContainerWidth(width);
                      },
                    }}>
                    <div
                      class={formatClasses('no-scrollbar flex min-w-full overflow-x-auto overflow-y-hidden', {
                        'justify-center': !isOverflow(),
                      })}>
                      <div
                        use:domProperty={{
                          keyList: ['domRectWidth'],
                          cb: ([width]: DomPropertyCbParams<['domRectWidth']>) => {
                            setBlogsWidth(width);
                          },
                        }}
                        class={formatClasses('flex w-fit flex-row flex-nowrap space-x-6', {
                          'space-x-10': isPC(),
                        })}>
                        <For each={group}>
                          {(blog, index) => (
                            <BlogCard
                              classes={formatClasses(
                                {
                                  'ps-10': index() === 0 && isOverflow(),
                                  'pr-10': index() === props.blogs().length - 1 && isOverflow(),
                                },
                                props.blogAnimationClasses(index()),
                              )}
                              isLoading={false}
                              blogData={blog}
                            />
                          )}
                        </For>
                      </div>
                    </div>
                  </div>
                );
              }}
            </For>
          )}
        </CarouselContainer>
      </Show>
    </Show>
  );
};

export default BlogList;
