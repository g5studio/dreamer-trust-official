import ContentLayout from '@shared/components/ContentLayout';
import windowSize, { isLargePC, isMobile, isPC, isSmallMobile, isTablet } from '@shared/hooks/use-window-size';
import { formatClasses } from '@utilities/helpers/format.helper';
import CarouselContainer from '@shared/components/CarouselContainer';
import { Direction } from '@shared/enums';
import { translate } from '@shared/hooks/use-translation';
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

  /**
   * 平板版型較小畫面時，top區域圖片需縮小避免爆版
   * @description 扣除預設平板間隔100px後是否不足最小圖片寬度
   */
  const shouldDynamicAdjustTopImageWidth = () => isTablet() && windowSize.width - 80 - 516 < 417;
  /**
   * 平板版型較小畫面時，top區域圖片需縮小避免爆版
   * @description 總寬度 - 容器padding - 文案區域 - 最小間隔
   */
  const dynamicTopImageWidth = () => (windowSize.width - 80 - 416 - 40 < 417 ? windowSize.width - 80 - 416 - 40 : 417);

  return (
    <ContentLayout
      testId="AboutUsPage"
      classes={formatClasses('space-y-30 pb-30', {
        'space-y-16 pb-16': !isPC(),
      })}>
      <CarouselContainer
        classes={formatClasses({
          'flex h-[544px] w-full items-center justify-center px-10': !isMobile(),
          'px-6 pt-5': isMobile(),
          'px-5 pt-7_5': isSmallMobile(),
        })}
        containerClasses={formatClasses({ 'w-full': !isMobile() && !isLargePC() })}
        replayMode="forward"
        testId="about-us-top-carousel"
        maxLength={1}
        direction={Direction.Horizontal}>
        {() => (
          <div class="flex w-full flex-row flex-nowrap">
            <section
              class={formatClasses('flex min-w-full', {
                'flex-row items-center justify-center space-x-25': !isMobile(),
                'justify-between space-x-0': !isMobile() && shouldDynamicAdjustTopImageWidth(),
                'flex-col-reverse justify-start': isMobile(),
              })}>
              <Picture
                pictureClasses={formatClasses({
                  'item-center mt-12 flex justify-center': isMobile(),
                  'px-7': isSmallMobile(),
                })}
                classes={formatClasses({
                  'h-75 min-w-104_25': !isMobile() && !shouldDynamicAdjustTopImageWidth(),
                  'h-53_5 min-w-75': isMobile(),
                  'h-auto min-w-full': isSmallMobile(),
                })}
                src="about-us/about-us-top-1@3x.png"
                width={shouldDynamicAdjustTopImageWidth() ? dynamicTopImageWidth() : undefined}
              />
              <article
                class={formatClasses('w-full space-y-4', {
                  'max-w-[416px]': isTablet(),
                  'max-w-[512px]': isPC(),
                  'p-6 pb-0': isMobile(),
                })}>
                <div class="flex flex-col">
                  <h1
                    class={formatClasses('text-12 font-normal leading-14_5 tracking-[3.2px]', {
                      'text-16 leading-20': !isMobile(),
                    })}>
                    {translate('aboutUs.top-1.title')}
                  </h1>
                  <h1
                    class={formatClasses('special-title text-12 font-normal italic leading-14_5 tracking-[3.2px]', {
                      'text-16 leading-20': !isMobile(),
                    })}>
                    {translate('aboutUs.top-1.title-2')}
                  </h1>
                </div>
                <p
                  class={formatClasses('text-lg leading-7', {
                    'text-md': isMobile(),
                  })}>
                  {translate('aboutUs.top-1.content')}
                </p>
              </article>
            </section>
          </div>
        )}
      </CarouselContainer>
      {/* 值得信賴的專業知識 */}
      <section
        class={formatClasses('flex flex-row', {
          'px-11': !isMobile() && windowSize.width < 1187,
          'mx-auto max-w-[1187px]': isPC(),
          'flex-col': isMobile(),
        })}>
        <Picture
          classes={formatClasses('object-cover', {
            'h-[546px]': !isMobile(),
          })}
          src={isMobile() ? 'about-us/trust-introduction-sm@3x.png' : 'about-us/trust-introduction@3x.png'}
          style={{
            'min-width': !isMobile()
              ? `${
                  (windowSize.width < 1187 ? windowSize.width : 1187) -
                  (windowSize.width < 1187 ? 88 : 0) -
                  (articleSize()?.width ?? 0)
                }px`
              : undefined,
          }}
        />
        <article
          use:domProperty={{
            keyList: ['domRectHeight', 'domRectWidth', 'domRectTop', 'domRectLeft'],
            cb: ([height, width, left, top]: DomPropertyCbParams<
              ['domRectHeight', 'domRectWidth', 'domRectTop', 'domRectLeft']
            >) => {
              setArticleSize({ height, width, left, top });
            },
          }}
          class={formatClasses('relative flex overflow-hidden ', {
            'items-center justify-center rounded-e-8': !isMobile(),
            'px-26': isPC(),
            'max-w-[540px] px-20': isTablet(),
            'w-[677px] min-w-[677px]': isPC(),
            'min-h-[224px] p-6': isMobile(),
          })}>
          <Picture
            style={{
              'min-height': `${articleSize()?.height}px`,
            }}
            height={articleSize()?.height}
            pictureClasses="absolute top-0 left-0 z-bg"
            classes={formatClasses('object-cover')}
            src={!isMobile() ? 'about-us/section-bg@3x.png' : 'about-us/section-bg-sm@3x.png'}
          />
          <section class="flex flex-col space-y-9 text-black-6">
            <h2
              class={formatClasses(
                'special-title flex flex-row items-center space-x-3 text-8 font-normal italic tracking-normal',
                {
                  'text-xxl': isMobile(),
                },
              )}>
              <span class="h-0_5 w-10 rounded-16 bg-black-6" />
              <span>{translate('aboutUs.introduce.title')}</span>
            </h2>
            <p
              class={formatClasses('text-lg', {
                'text-xs': isMobile(),
              })}>
              {translate('aboutUs.introduce.content')}
            </p>
          </section>
        </article>
      </section>
      {/* 我們的價值 */}
      <ArticleContainer
        titleI18nKey="aboutUs.ourValue.title"
        subTitleI18nKey="aboutUs.ourValue.subTitle"
        sectionClasses={formatClasses('grid', {
          'mx-auto max-w-[1187px]': isPC(),
          'px-14': isMobile() && !isSmallMobile(),
          'grid-cols-3 gap-20 px-10': isPC(),
          'grid-cols-3 gap-10': isTablet(),
          'grid-cols-1 gap-10': isMobile(),
        })}>
        <For each={['integrity', 'clientCentric', 'trustworthy', 'compliance', 'accountability', 'excellence']}>
          {(key) => (
            <article class={formatClasses('space-y-4')}>
              <h5
                class={formatClasses('border-b-0_25 border-black-3 pb-4 text-start text-5_5', {
                  'text-sm': isMobile(),
                })}>
                {translate(`aboutUs.ourValue.${key}.title`)}
              </h5>
              <p
                class={formatClasses('mt-2_5 text-start', {
                  'text-xs': isMobile(),
                  'text-lg': !isMobile(),
                })}>
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
        sectionClasses={formatClasses('grid', {
          'mx-auto max-w-[1187px]': isPC(),
          'grid-cols-3 gap-24 px-10': isPC(),
          'grid-cols-3 gap-10': isTablet(),
          'grid-cols-1 gap-6': isMobile(),
        })}>
        <For each={[OurMissionOneIcon, OurMissionTwoIcon, OurMissionThreeIcon]}>
          {(Icon, index) => (
            <article
              class={formatClasses('flex max-w-[312px] flex-col items-center space-y-10', {
                'space-y-2': !isPC(),
              })}>
              <div class="flex h-31_5 w-31_5 items-center justify-center">
                <Icon />
              </div>
              <p
                class={formatClasses('text-start text-xs', {
                  'text-center text-lg': !isMobile(),
                })}>
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
