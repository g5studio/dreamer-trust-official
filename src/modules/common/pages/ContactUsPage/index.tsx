import CarouselContainer from '@shared/components/CarouselContainer';
import ContentLayout from '@shared/components/ContentLayout';
import Picture from '@shared/components/Picture';
import { Direction, LocaleDash } from '@shared/enums';
import { translate, translation } from '@shared/hooks/use-translation';
import windowSize, { isLargePC, isMobile, isPC, isSmallMobile, isTablet } from '@shared/hooks/use-window-size';
import { formatClasses } from '@utilities/helpers/format.helper';
import ArticleContainer from '@shared/components/ArticleContainer';
import AddressIcon from '@utilities/svg-components/common/AddressIcon';
import PhoneIcon from '@utilities/svg-components/common/PhoneIcon';
import EmailIcon from '@utilities/svg-components/common/EmailIcon';
import { createSignal, For } from 'solid-js';
import { registerDirective } from '@utilities/helpers/directive.helper';
import { domProperty, DomPropertyCbParams } from '@utilities/directives/dom-property-directive';
import { ContactUsForm } from './ContactUsForm';

registerDirective(domProperty);

const ContactUsPage = () => {
  const [sgOfficeWidth, setSGOfficeWidth] = createSignal<number>(0);
  const [hkOfficeWidth, setHKOfficeWidth] = createSignal<number>(0);

  const tabletOfficeWidth = () => (sgOfficeWidth() > hkOfficeWidth() ? sgOfficeWidth() : hkOfficeWidth());

  /**
   * 平板版型較小畫面時，top區域圖片需縮小避免爆版
   * @description 扣除預設平板間隔100px後是否不足最小圖片寬度
   */
  const shouldDynamicAdjustTopImageWidth = () => isTablet() && windowSize.width - 80 - 492 < 417;
  /**
   * 平板版型較小畫面時，top區域圖片需縮小避免爆版
   * @description 總寬度 - 容器padding - 文案區域 - 最小間隔
   */
  const dynamicTopImageWidth = () => (windowSize.width - 80 - 392 - 40 < 417 ? windowSize.width - 80 - 392 - 40 : 417);

  return (
    <ContentLayout
      testId="ContactUsPage"
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
        testId="seminars-top-carousel"
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
                src="contact-us/contact-us-top@3x.png"
                width={shouldDynamicAdjustTopImageWidth() ? dynamicTopImageWidth() : undefined}
              />
              <article
                class={formatClasses('space-y-4', {
                  'min-w-[392px]': !isMobile(),
                  'p-6 pb-0': isMobile(),
                })}>
                <div class="flex flex-col">
                  <h1
                    class={formatClasses('text-12 font-normal leading-14_5 tracking-[3.2px]', {
                      'text-16 leading-20': !isMobile(),
                    })}>
                    {translate('contactUs.top-1.title')}
                  </h1>
                  <h1
                    class={formatClasses('text-12 font-normal leading-14_5 tracking-[3.2px]', {
                      'text-16 leading-20': !isMobile(),
                    })}>
                    {translate('contactUs.top-1.title-2')}
                  </h1>
                  <div
                    class={formatClasses('flex flex-col', {
                      'flex-row': isPC(),
                      'lg:space-x-4 xl:space-x-8':
                        translation.language !== LocaleDash.zh_HK && translation.language !== LocaleDash.zh_CN,
                    })}>
                    <h1
                      class={formatClasses('special-title text-12 font-normal italic leading-14_5 tracking-[3.2px]', {
                        'text-16 leading-20': !isMobile(),
                      })}>
                      {translate('contactUs.top-1.title-3')}
                    </h1>
                  </div>
                </div>
              </article>
            </section>
          </div>
        )}
      </CarouselContainer>
      <ContactUsForm />
      <ArticleContainer
        titleI18nKey={''}
        subTitleI18nKey="contactUs.location.title"
        subTitleClasses="text-[32px] font-medium"
        sectionClasses={formatClasses('flex w-full flex-col space-y-9', {
          'items-center': isPC(),
        })}
        sectionStyle={{
          'padding-left': isTablet() ? `calc((100% - ${tabletOfficeWidth()}px)/2)` : undefined,
        }}>
        <For each={['sg', 'hk']}>
          {(code) => (
            <section
              use:domProperty={{
                keyList: ['domRectWidth'],
                cb: ([width]: DomPropertyCbParams<['domRectWidth']>) => {
                  if (code === 'sg') {
                    setSGOfficeWidth(width);
                  } else {
                    setHKOfficeWidth(width);
                  }
                },
              }}
              class={formatClasses('flex', {
                'flex-row items-end space-x-14': !isMobile(),
                'w-[796px]': isPC(),
                'w-fit': isTablet(),
                'flex-col space-y-6': isMobile(),
              })}>
              <Picture
                classes={formatClasses({ 'w-[350px] min-w-[350px]': !isMobile(), 'max-h-[200px] w-full': isMobile() })}
                src={`contact-us/office-${code}@3x.png`}
              />
              <div
                class={formatClasses('flex flex-col text-start', {
                  'max-w-[390px]': !isMobile(),
                })}>
                <h5
                  class={formatClasses('text-black-2', {
                    'text-lg': !isMobile(),
                    'text-xs': isMobile(),
                  })}>
                  {translate(`contactUs.location.${code}.title`)}
                </h5>
                <p
                  class={formatClasses('mt-2 font-bold', {
                    'text-xxl': !isMobile(),
                  })}>
                  {translate(`contactUs.location.${code}.description`)}
                </p>
                <section
                  class={formatClasses({
                    'mt-9  space-y-3 text-lg': !isMobile(),
                    'max-w-[357px]': !isMobile(),
                    'max-w-[340px]': isMobile(),
                    'mt-4 space-y-2 text-xs': isMobile(),
                  })}>
                  <div class="flex flex-row space-x-4">
                    <AddressIcon classes="mt-0_75 h-5 min-w-5" />
                    <span>{translate(`contactUs.location.${code}.address`)}</span>
                  </div>
                  <div class="flex flex-row items-center space-x-4">
                    <PhoneIcon />
                    <span>{translate(`contactUs.location.${code}.phone`)}</span>
                  </div>
                  <div class="flex flex-row items-center space-x-4">
                    <EmailIcon />
                    <span>{translate(`contactUs.location.${code}.email`)}</span>
                  </div>
                </section>
              </div>
            </section>
          )}
        </For>
      </ArticleContainer>
    </ContentLayout>
  );
};
export default ContactUsPage;
