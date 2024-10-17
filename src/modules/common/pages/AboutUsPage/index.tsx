import ContentLayout from '@shared/components/ContentLayout';
import { isPC } from '@shared/hooks/use-window-size';
import { formatClasses } from '@utilities/helpers/format.helper';
import CarouselContainer from '@shared/components/CarouselContainer';
import { Direction } from '@shared/enums';
import { translate } from '@shared/hooks/use-translation';
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
      testId="home-page-top-carousel"
      maxLength={1}
      direction={Direction.Horizontal}>
      {() => (
        <div class="flex w-full flex-row flex-nowrap">
          <section
            class={formatClasses('flex min-w-full ', {
              'flex-row justify-center space-x-25 py-30_5': isPC(),
              'flex-col justify-start space-y-12': !isPC(),
            })}>
            <article
              class={formatClasses('w-full space-y-4', {
                'w-145': isPC(),
              })}>
              <h1
                class={formatClasses('text-16 leading-20 font-normal', {
                  'text-12 leading-14_5': !isPC(),
                })}>
                {translate('home.top-1.title')}
              </h1>
              <p class="text-lg leading-7">{translate('home.top-1.content')}</p>
            </article>
            <Picture
              pictureClasses={formatClasses({
                'border-box w-full px-6': !isPC(),
              })}
              classes={formatClasses({
                'h-75': isPC(),
              })}
              src="home/home-top-1@3x.png"
            />
          </section>
        </div>
      )}
    </CarouselContainer>
    {/*  */}
  </ContentLayout>
);
export default AboutUsPage;
