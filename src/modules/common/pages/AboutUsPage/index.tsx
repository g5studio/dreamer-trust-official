import ContentLayout from '@shared/components/ContentLayout';
import { isLargePC, isMobile, isPC, isSmallMobile } from '@shared/hooks/use-window-size';
import { formatClasses } from '@utilities/helpers/format.helper';
import CarouselContainer from '@shared/components/CarouselContainer';
import { Direction, LocaleDash } from '@shared/enums';
import { translate, translation } from '@shared/hooks/use-translation';
import Picture from '@shared/components/Picture';
import { createSignal, For } from 'solid-js';
import { registerDirective } from '@utilities/helpers/directive.helper';
import { domProperty, DomPropertyCbParams } from '@utilities/directives/dom-property-directive';
import ArticleContainer from '@shared/components/ArticleContainer';
import OurMissionOneIcon from '@utilities/svg-components/common/OurMissionOneIcon';
import OurMissionTwoIcon from '@utilities/svg-components/common/OurMissionTwoIcon';
import OurMissionThreeIcon from '@utilities/svg-components/common/OurMissionThreeIcon';

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
                  'h-75 min-w-104_25': isPC(),
                  'h-53_5 min-w-75': !isPC(),
                  'h-auto min-w-full': isSmallMobile(),
                })}
                src="about-us/about-us-top-1@3x.png"
              />
              <article
                class={formatClasses('w-full space-y-4', {
                  'w-145': isPC(),
                })}>
                <div class="flex flex-col">
                  <h1
                    class={formatClasses('text-12 font-normal leading-14_5', {
                      'text-16 leading-20': isLargePC(),
                    })}>
                    {translate('aboutUs.top-1.title')}
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
                          'text-16 leading-20': isLargePC(),
                        },
                      )}>
                      {translate('aboutUs.top-1.title-2')}
                    </h1>
                    <h1
                      class={formatClasses(
                        'font-["PT_Serif"] text-12 font-normal italic leading-14_5 tracking-[3.2px]',
                        {
                          'text-16 leading-20': isLargePC(),
                        },
                      )}>
                      {translate('aboutUs.top-1.title-3')}
                    </h1>
                  </div>
                </div>
                <p
                  class={formatClasses('text-lg leading-7', {
                    'text-md': !isPC(),
                  })}>
                  {translate('aboutUs.top-1.content')}
                </p>
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
              class={formatClasses(
                'flex flex-row items-center space-x-3 font-["PT_Serif"] text-8 font-normal italic tracking-[3.2px]',
                {
                  'text-xxl': !isPC(),
                },
              )}>
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
          'grid grid-cols-3 gap-24': isPC(),
          'space-y-6': !isPC(),
        })}>
        <For each={[OurMissionOneIcon, OurMissionTwoIcon, OurMissionThreeIcon]}>
          {(Icon, index) => (
            <article class={formatClasses('flex flex-col items-center  space-y-10', { 'space-y-2': !isPC() })}>
              <div class="flex h-31_5 w-31_5 items-center justify-center">
                <Icon />
              </div>
              <p class="text-start text-xs text-black-2 xl:text-lg">
                {translate(`aboutUs.ourMission.mission-${index() + 1}.content`)}
              </p>
            </article>
          )}
        </For>
      </ArticleContainer>
    </ContentLayout>
  );
};
export default AboutUsPage;
