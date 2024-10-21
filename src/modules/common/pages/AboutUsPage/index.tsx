import ContentLayout from '@shared/components/ContentLayout';
import { isPC } from '@shared/hooks/use-window-size';
import { formatClasses } from '@utilities/helpers/format.helper';
import CarouselContainer from '@shared/components/CarouselContainer';
import { Direction, LocaleDash } from '@shared/enums';
import { translate, translation } from '@shared/hooks/use-translation';
import Picture from '@shared/components/Picture';
import { createSignal, For } from 'solid-js';
import { registerDirective } from '@utilities/helpers/directive.helper';
import { domProperty, DomPropertyCbParams } from '@utilities/directives/dom-property-directive';
import ArticleContainer from '@shared/components/ArticleContainer';

registerDirective(domProperty);

const AboutUsPage = () => {
  const [articleSize, setArticleSize] = createSignal<DomSize>();
  return (
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
      {/* 值得信賴的專業知識 */}
      <section class="flex flex-col items-center xl:flex-row xl:px-31_5">
        <Picture
          classes={formatClasses({
            'h-[546px]': isPC(),
          })}
          src={isPC() ? 'about-us/trust-introduction@3x.png' : 'about-us/trust-introduction-sm@3x.png'}
        />
        <div
          class={formatClasses('relative', {
            'w-full': !isPC(),
          })}>
          <Picture
            pictureClasses="w-full"
            classes={formatClasses({
              'h-[546px]': isPC(),
              'w-full': !isPC(),
            })}
            style={{
              height: isPC() ? 'auto' : `${articleSize()?.height}px`,
            }}
            src={isPC() ? 'about-us/section-bg@3x.png' : 'about-us/section-bg-sm@3x.png'}
          />
          <article
            use:domProperty={{
              keyList: ['domRectHeight', 'domRectWidth', 'domRectTop', 'domRectLeft'],
              cb: ([height, width, left, top]: DomPropertyCbParams<
                ['domRectHeight', 'domRectWidth', 'domRectTop', 'domRectLeft']
              >) => {
                setArticleSize({ height, width, left, top });
              },
              enabled: !isPC(),
            }}
            class={formatClasses('absolute left-0 top-0 z-normal w-full space-y-9 text-black-6', {
              'p-6': !isPC(),
              'h-full px-26 py-34': isPC(),
            })}>
            <h2
              class={formatClasses('flex flex-row items-center space-x-3 font-["PT_Serif"] text-8 font-normal italic', {
                'text-xxl': !isPC(),
              })}>
              <span class="h-0_5 w-10 rounded-16 bg-black-6" />
              <span>{translate('aboutUs.introduce.title')}</span>
            </h2>
            <p
              class={formatClasses('text-lg', {
                'text-xs': !isPC(),
              })}>
              {translate('aboutUs.introduce.content')}
            </p>
          </article>
        </div>
      </section>
      {/* 我們的價值 */}
      <ArticleContainer
        titleI18nKey="aboutUs.ourValue.title"
        subTitleI18nKey="aboutUs.ourValue.subTitle"
        sectionClasses={formatClasses({
          'grid grid-cols-3 gap-20': isPC(),
          'space-y-10': !isPC(),
        })}>
        <For each={['integrity', 'clientCentric', 'trustworthy', 'compliance', 'accountability', 'excellence']}>
          {(key) => (
            <article class={formatClasses('space-y-4')}>
              <h5
                class={formatClasses('border-b-0_25 border-black-3 pb-4 text-start text-5_5', { 'text-sm': !isPC() })}>
                {translate(`aboutUs.ourValue.${key}.title`)}
              </h5>
              <p class="mt-2_5 text-start text-xs text-black-2 xl:text-lg">
                {translate(`aboutUs.ourValue.${key}.content`)}
              </p>
            </article>
          )}
        </For>
      </ArticleContainer>
      {/* 我們的使命 */}
      <ArticleContainer
        titleI18nKey="aboutUs.ourMission.title"
        subTitleI18nKey="aboutUs.ourMission.subTitle"
        sectionClasses={formatClasses({
          'space-x-6': isPC(),
          'space-y-6': !isPC(),
        })}>
        test
      </ArticleContainer>
    </ContentLayout>
  );
};
export default AboutUsPage;
