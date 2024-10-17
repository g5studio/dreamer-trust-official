import ContentLayout from '@shared/components/ContentLayout';
import { isPC } from '@shared/hooks/use-window-size';
import { formatClasses } from '@utilities/helpers/format.helper';
import CarouselContainer from '@shared/components/CarouselContainer';
import { Direction, LocaleDash } from '@shared/enums';
import { translate, translation } from '@shared/hooks/use-translation';
import Picture from '@shared/components/Picture';

const AboutUsPage = () => (
  <ContentLayout
    testId="AboutUsPage"
    classes={formatClasses('space-y-30 pb-30', {
      'space-y-16 pb-16': !isPC(),
    })}>
    <CarouselContainer
      classes={formatClasses({
        'px-10 pb-13 pt-6': !isPC(),
      })}
      replayMode="forward"
      testId="about-us-page-top-carousel"
      maxLength={1}
      direction={Direction.Horizontal}>
      {() => (
        <div class="flex w-full flex-row flex-nowrap">
          <section
            class={formatClasses('flex min-w-full', {
              'flex-row justify-center space-x-25 py-30_5': isPC(),
              'flex-col-reverse justify-start': !isPC(),
            })}>
            <Picture
              pictureClasses={formatClasses({
                'border-box mt-12 w-full': !isPC(),
              })}
              classes={formatClasses({
                'h-75': isPC(),
              })}
              src="about-us/about-us-top-1@3x.png"
            />
            <article
              class={formatClasses('w-full space-y-4', {
                'w-145': isPC(),
              })}>
              <div class="flex flex-col">
                <h1
                  class={formatClasses('text-16 leading-20 font-normal', {
                    'text-12 leading-14_5': !isPC(),
                  })}>
                  {translate('aboutUs.top-1.title')}
                </h1>
                <div
                  class={formatClasses('sm:flex-row flex flex-col', {
                    'sm:space-x-4 xl:space-x-8':
                      translation.language !== LocaleDash.zh_HK && translation.language !== LocaleDash.zh_CN,
                  })}>
                  <h1
                    class={formatClasses('text-16 leading-20 font-["PT_Serif"] font-normal italic', {
                      'text-12 leading-14_5': !isPC(),
                    })}>
                    {translate('aboutUs.top-1.title-2')}
                  </h1>
                  <h1
                    class={formatClasses('text-16 leading-20 font-["PT_Serif"] font-normal italic', {
                      'text-12 leading-14_5': !isPC(),
                    })}>
                    {translate('aboutUs.top-1.title-3')}
                  </h1>
                </div>
              </div>
              <p class="text-lg leading-7">{translate('aboutUs.top-1.content')}</p>
            </article>
          </section>
        </div>
      )}
    </CarouselContainer>
    {/*  */}
  </ContentLayout>
);
export default AboutUsPage;
