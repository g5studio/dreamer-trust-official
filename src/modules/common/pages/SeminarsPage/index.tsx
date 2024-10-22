import CarouselContainer from '@shared/components/CarouselContainer';
import ContentLayout from '@shared/components/ContentLayout';
import Picture from '@shared/components/Picture';
import { Direction, LocaleDash } from '@shared/enums';
import { translate, translation } from '@shared/hooks/use-translation';
import { isLargePC, isMobile, isPC } from '@shared/hooks/use-window-size';
import { formatClasses } from '@utilities/helpers/format.helper';

const SeminarsPage = () => {
  return (
    <ContentLayout testId="SeminarsPage">
      <CarouselContainer
        classes={formatClasses({
          'flex h-[544px] w-full items-center justify-center px-10': !isMobile(),
          'px-10 pb-13 pt-6': isMobile(),
        })}
        replayMode="forward"
        testId="about-us-page-top-carousel"
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
                })}
                classes={formatClasses({
                  'min-w-104_25 h-75': isPC(),
                  'h-53_5 min-w-75': !isPC(),
                })}
                src="about-us/about-us-top-1@3x.png"
              />
              <article
                class={formatClasses('w-full space-y-4', {
                  'w-145': isPC(),
                })}>
                <div class="flex flex-col">
                  <h1
                    class={formatClasses('text-12 leading-14_5 font-normal', {
                      'text-16 leading-20': isLargePC(),
                    })}>
                    {translate('seminars.top-1.title')}
                  </h1>
                  <div
                    class={formatClasses('flex flex-col', {
                      'flex-row': isPC(),
                      'lg:space-x-4 xl:space-x-8':
                        translation.language !== LocaleDash.zh_HK && translation.language !== LocaleDash.zh_CN,
                    })}>
                    <h1
                      class={formatClasses('text-12 leading-14_5 font-["PT_Serif"] font-normal italic', {
                        'text-16 leading-20': isLargePC(),
                      })}>
                      {translate('seminars.top-1.title-2')}
                    </h1>
                    <h1
                      class={formatClasses('text-12 leading-14_5 font-["PT_Serif"] font-normal italic', {
                        'text-16 leading-20': isLargePC(),
                      })}>
                      {translate('seminars.top-1.title-3')}
                    </h1>
                  </div>
                </div>
                <p
                  class={formatClasses('text-lg leading-7', {
                    'text-md': !isPC(),
                  })}>
                  {translate('seminars.top-1.content')}
                </p>
              </article>
            </section>
          </div>
        )}
      </CarouselContainer>
    </ContentLayout>
  );
};
export default SeminarsPage;
