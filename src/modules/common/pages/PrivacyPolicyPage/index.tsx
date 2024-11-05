import ContentLayout from '@shared/components/ContentLayout';
import { translate, translation } from '@shared/hooks/use-translation';
import { registerDirective } from '@utilities/helpers/directive.helper';
import { insertHtml } from '@utilities/directives/insert-html-directive';
import { formatClasses } from '@utilities/helpers/format.helper';
import { isXLargePC, isPC } from '@shared/hooks/use-window-size';
import { getTimeStamp, transform } from '@utilities/helpers/time.helper';
import { DateFormatType } from '@shared/enums';
import style from './index.module.scss';

registerDirective(insertHtml);

const PrivacyPolicyPage = () => (
  <ContentLayout
    isSimplePage
    classes={formatClasses('px-6', {
      'space-y-12 px-35 py-20': isPC(),
      'px-26': isXLargePC(),
      'space-y-12 py-16': !isPC(),
    })}
    testId="PrivacyPolicyPage">
    <div
      class={formatClasses('flex border-b-0_25 border-primary-2 pb-6', {
        'flex-row items-end justify-between': isPC(),
        'flex-col justify-start space-y-2': !isPC(),
      })}>
      <h1
        class={formatClasses({
          'text-5_5': !isPC(),
          'text-9': isPC(),
        })}>
        {translate('policy.title')}
      </h1>
      <div
        class={formatClasses('flex flex-col text-black-2', {
          'text-sm': isPC(),
          'text-xs': !isPC(),
        })}>
        <span>
          {translate('common.release-date', {
            date: transform({
              locale: translation.language,
              timestamp: getTimeStamp('2024-06-25'),
              formatType: DateFormatType.CustomizeLocaleShortFormat,
              offset: -(new Date().getTimezoneOffset() / 60),
            }),
          })}
        </span>
        <span>
          {translate('common.effective-date', {
            date: transform({
              locale: translation.language,
              timestamp: getTimeStamp('2024-06-25'),
              formatType: DateFormatType.CustomizeLocaleShortFormat,
              offset: -(new Date().getTimezoneOffset() / 60),
            }),
          })}
        </span>
      </div>
    </div>
    <article
      class={formatClasses('space-y-12', {
        'text-xs': !isPC(),
        'text-lg': isPC(),
      })}>
      <strong>{translate('policy.content-1')}</strong>
      <section class="flex flex-col space-y-4">
        <span>{translate('policy.content-2')}</span>
        <span>{translate('policy.content-3')}</span>
        <strong>{translate('policy.content-4')}</strong>
        <strong>{translate('policy.content-5')}</strong>
        <span
          use:insertHtml={{
            testId: 'policy.content-6',
            html: translate('policy.content-6'),
          }}
        />
      </section>
      <section class="flex flex-col">
        <strong>{translate('policy.content-7')}</strong>
        <span>{translate('policy.content-8')}</span>
        <span>{translate('policy.content-9')}</span>
        <span>{translate('policy.content-10')}</span>
        <span>{translate('policy.content-11')}</span>
        <span>{translate('policy.content-12')}</span>
        <span>{translate('policy.content-13')}</span>
        <span>{translate('policy.content-14')}</span>
        <span>{translate('policy.content-15')}</span>
        <span>{translate('policy.content-16')}</span>
        <span>{translate('policy.content-17')}</span>
        <span>{translate('policy.content-18')}</span>
        <span>{translate('policy.content-19')}</span>
      </section>
      {/* 我們收集您的何種個人資料 */}
      <section class={formatClasses('flex flex-col space-y-4', style['page-privacy-policy__terms-container'])}>
        <strong
          class={formatClasses({
            'text-5_5': isPC(),
            'text-sm': !isPC(),
          })}>
          {translate('policy.content-20')}
        </strong>
        <ol
          class={formatClasses('space-y-6', {
            'text-lg': isPC(),
            'text-xs': !isPC(),
          })}>
          <li>{translate('policy.content-21')}</li>
          <li>{translate('policy.content-22')}</li>
          <li>{translate('policy.content-23')}</li>
          <li>
            {translate('policy.content-24')}
            <ol>
              <li>{translate('terms.content-25')}</li>
              <li>{translate('terms.content-26')}</li>
            </ol>
          </li>
        </ol>
      </section>
      {/* 二、我們收集個人資料的方式 */}
      <section class={formatClasses('flex flex-col space-y-4', style['page-privacy-policy__terms-container'])}>
        <strong
          class={formatClasses({
            'text-5_5': isPC(),
            'text-sm': !isPC(),
          })}>
          {translate('policy.content-27')}
        </strong>
        <ol
          class={formatClasses('space-y-6', {
            'text-lg': isPC(),
            'text-xs': !isPC(),
          })}>
          <li>{translate('policy.content-28')}</li>
          <li>{translate('policy.content-29')}</li>
        </ol>
      </section>
      {/* 三、我們如何使用您的個人資料 */}
      <section class={formatClasses('flex flex-col space-y-4', style['page-privacy-policy__terms-container'])}>
        <strong
          class={formatClasses({
            'text-5_5': isPC(),
            'text-sm': !isPC(),
          })}>
          {translate('policy.content-30')}
        </strong>
        <ol
          class={formatClasses('space-y-6', {
            'text-lg': isPC(),
            'text-xs': !isPC(),
          })}>
          <li>
            {translate('policy.content-31')}
            <ol>
              <li>{translate('policy.content-32')}</li>
              <li>{translate('policy.content-33')}</li>
              <li>{translate('policy.content-34')}</li>
              <li>{translate('policy.content-35')}</li>
              <li>{translate('policy.content-36')}</li>
              <li>{translate('policy.content-37')}</li>
            </ol>
          </li>
          <li>{translate('policy.content-38')}</li>
        </ol>
      </section>
      {/* 四、個人資料保存 */}
      <section class={formatClasses('flex flex-col space-y-4', style['page-privacy-policy__terms-container'])}>
        <strong
          class={formatClasses({
            'text-5_5': isPC(),
            'text-sm': !isPC(),
          })}>
          {translate('policy.content-39')}
        </strong>
        <ol
          class={formatClasses('space-y-6', {
            'text-lg': isPC(),
            'text-xs': !isPC(),
          })}>
          <li>{translate('policy.content-40')}</li>
          <li>
            {translate('policy.content-41')}
            <ol>
              <li>{translate('policy.content-42')}</li>
              <li>{translate('policy.content-43')}</li>
              <li>{translate('policy.content-44')}</li>
              <li>{translate('policy.content-45')}</li>
            </ol>
          </li>
        </ol>
      </section>
      {/* 五、我們如何使用Cookie */}
      <section class={formatClasses('flex flex-col space-y-4', style['page-privacy-policy__terms-container'])}>
        <strong
          class={formatClasses({
            'text-5_5': isPC(),
            'text-sm': !isPC(),
          })}>
          {translate('policy.content-46')}
        </strong>
        <ol
          class={formatClasses('space-y-6', {
            'text-lg': isPC(),
            'text-xs': !isPC(),
          })}>
          <li>{translate('policy.content-47')}</li>
          <li>{translate('policy.content-48')}</li>
          <li>{translate('policy.content-49')}</li>
        </ol>
      </section>
      {/* 六、我們如何共享、轉讓、披露您的個人資料 */}
      <section class={formatClasses('flex flex-col space-y-4', style['page-privacy-policy__terms-container'])}>
        <strong
          class={formatClasses({
            'text-5_5': isPC(),
            'text-sm': !isPC(),
          })}>
          {translate('policy.content-50')}
        </strong>
        {/* （一）共享 */}
        <strong
          class={formatClasses({
            'text-5_5': isPC(),
            'text-sm': !isPC(),
          })}>
          {translate('policy.content-51')}
        </strong>
        <ol
          class={formatClasses('space-y-6', {
            'text-lg': isPC(),
            'text-xs': !isPC(),
          })}>
          <li>
            {translate('policy.content-52')}
            <ol>
              <li>{translate('policy.content-53')}</li>
              <li>{translate('policy.content-54')}</li>
              <li>{translate('policy.content-55')}</li>
              <li>{translate('policy.content-56')}</li>
              <li>{translate('policy.content-57')}</li>
            </ol>
          </li>
          <li>{translate('policy.content-58')}</li>
        </ol>
        {/* （二）轉讓 */}
        <strong
          class={formatClasses({
            'text-5_5': isPC(),
            'text-sm': !isPC(),
          })}>
          {translate('policy.content-59')}
        </strong>
        <ol
          class={formatClasses('space-y-6', {
            'text-lg': isPC(),
            'text-xs': !isPC(),
          })}>
          <li>
            {translate('policy.content-60')}
            <ol>
              <li>{translate('policy.content-61')}</li>
              <li>{translate('policy.content-62')}</li>
            </ol>
          </li>
        </ol>
        {/* （三）公開披露 */}
        <strong
          class={formatClasses({
            'text-5_5': isPC(),
            'text-sm': !isPC(),
          })}>
          {translate('policy.content-63')}
        </strong>
        <ol
          class={formatClasses('space-y-6', {
            'text-lg': isPC(),
            'text-xs': !isPC(),
          })}>
          <li>
            {translate('policy.content-64')}
            <ol>
              <li>{translate('policy.content-65')}</li>
              <li>{translate('policy.content-66')}</li>
              <li>{translate('policy.content-67')}</li>
            </ol>
          </li>
        </ol>
        {/* （四） 共享、轉讓、公開披露個人信息時事先徵得授權同意的例外 */}
        <strong
          class={formatClasses({
            'text-5_5': isPC(),
            'text-sm': !isPC(),
          })}>
          {translate('policy.content-68')}
        </strong>
        <ol
          class={formatClasses('space-y-6', {
            'text-lg': isPC(),
            'text-xs': !isPC(),
          })}>
          <li>{translate('policy.content-69')}</li>
          <li>{translate('policy.content-70')}</li>
          <li>{translate('policy.content-71')}</li>
          <li>{translate('policy.content-72')}</li>
          <li>{translate('policy.content-73')}</li>
          <li>{translate('policy.content-74')}</li>
          <li>{translate('policy.content-75')}</li>
        </ol>
        {/* 請您注意，根據法律規定，共享、轉讓經匿名化處理的個人信息，且確保數據接收方無法復原並重新識別個人信息主體的，不屬於個人信息的對外共享、轉讓及公開披露行爲，對此類數據的保存及處理將無需另行向您通知並徵得您的同意。同時，您同意本政策意味著您授權我們將運營本應用及相關産品/服務所産生的數據共享、轉讓、公開披露給使用本産品和服務的其他用戶與公衆。如果您希望限制此等共享、轉讓、公開披露，請通過本政策所載的聯繫方式聯繫我們。 */}
        <strong
          class={formatClasses({
            'text-5_5': isPC(),
            'text-sm': !isPC(),
          })}>
          {translate('policy.content-76')}
        </strong>
      </section>
      {/* 七、我們如何保障您的個人資料 */}
      <section class={formatClasses('flex flex-col space-y-4', style['page-privacy-policy__terms-container'])}>
        <strong
          class={formatClasses({
            'text-5_5': isPC(),
            'text-sm': !isPC(),
          })}>
          {translate('policy.content-77')}
        </strong>
        <ol
          class={formatClasses('space-y-6', {
            'text-lg': isPC(),
            'text-xs': !isPC(),
          })}>
          <li>{translate('policy.content-78')}</li>
          <li>{translate('policy.content-79')}</li>
          <li>{translate('policy.content-80')}</li>
          <li>{translate('policy.content-81')}</li>
          <li>{translate('policy.content-82')}</li>
        </ol>
      </section>
      {/* 八、您的權利和私隱選擇 */}
      <section class={formatClasses('flex flex-col space-y-4', style['page-privacy-policy__terms-container'])}>
        <strong
          class={formatClasses({
            'text-5_5': isPC(),
            'text-sm': !isPC(),
          })}>
          {translate('policy.content-83')}
        </strong>
        <ol
          class={formatClasses('space-y-6', {
            'text-lg': isPC(),
            'text-xs': !isPC(),
          })}>
          <li>
            {translate('policy.content-84')}
            <ol>
              <li>{translate('policy.content-85')}</li>
              <li>{translate('policy.content-86')}</li>
              <li>{translate('policy.content-87')}</li>
              <li>{translate('policy.content-88')}</li>
              <li>{translate('policy.content-89')}</li>
              <li>{translate('policy.content-90')}</li>
              <li>{translate('policy.content-91')}</li>
            </ol>
          </li>
          <li>{translate('policy.content-92')}</li>
          <li>{translate('policy.content-93')}</li>
        </ol>
      </section>
      {/* 九、您的個人信息如何在全球範圍轉移 */}
      <section class={formatClasses('flex flex-col space-y-4', style['page-privacy-policy__terms-container'])}>
        <strong
          class={formatClasses({
            'text-5_5': isPC(),
            'text-sm': !isPC(),
          })}>
          {translate('policy.content-94')}
        </strong>
        <ol
          class={formatClasses('space-y-6', {
            'text-lg': isPC(),
            'text-xs': !isPC(),
          })}>
          <li>{translate('policy.content-95')}</li>
          <li>{translate('policy.content-96')}</li>
        </ol>
      </section>
      {/* 十、直接營銷 */}
      <section class={formatClasses('flex flex-col space-y-4', style['page-privacy-policy__terms-container'])}>
        <strong
          class={formatClasses({
            'text-5_5': isPC(),
            'text-sm': !isPC(),
          })}>
          {translate('policy.content-97')}
        </strong>
        <ol
          class={formatClasses('space-y-6', {
            'text-lg': isPC(),
            'text-xs': !isPC(),
          })}>
          <li>{translate('policy.content-98')}</li>
          <li>{translate('policy.content-99')}</li>
          <li>{translate('policy.content-100')}</li>
        </ol>
      </section>
      {/* 十一、本政策的更新 */}
      <section class={formatClasses('flex flex-col space-y-4', style['page-privacy-policy__terms-container'])}>
        <strong
          class={formatClasses({
            'text-5_5': isPC(),
            'text-sm': !isPC(),
          })}>
          {translate('policy.content-101')}
        </strong>
        <ol
          class={formatClasses('space-y-6', {
            'text-lg': isPC(),
            'text-xs': !isPC(),
          })}>
          <li>{translate('policy.content-102')}</li>
          <li>{translate('policy.content-103')}</li>
        </ol>
      </section>
      {/* 十二、其他 */}
      <section class={formatClasses('flex flex-col space-y-4', style['page-privacy-policy__terms-container'])}>
        <strong
          class={formatClasses({
            'text-5_5': isPC(),
            'text-sm': !isPC(),
          })}>
          {translate('policy.content-104')}
        </strong>
        <ol
          class={formatClasses('space-y-6', {
            'text-lg': isPC(),
            'text-xs': !isPC(),
          })}>
          <li>{translate('policy.content-105')}</li>
          <li>{translate('policy.content-106')}</li>
          <li>{translate('policy.content-107')}</li>
        </ol>
      </section>
    </article>
  </ContentLayout>
);
export default PrivacyPolicyPage;
