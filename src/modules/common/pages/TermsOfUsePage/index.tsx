import ContentLayout from '@shared/components/ContentLayout';
import { DateFormatType } from '@shared/enums';
import { translate, translation } from '@shared/hooks/use-translation';
import { isLargePC, isPC } from '@shared/hooks/use-window-size';
import { formatClasses } from '@utilities/helpers/format.helper';
import { getTimeStamp, transform } from '@utilities/helpers/time.helper';
import { registerDirective } from '@utilities/helpers/directive.helper';
import { insertHtml } from '@utilities/directives/insert-html-directive';

import style from './index.module.scss';

registerDirective(insertHtml);

const TermsOfUsePage = () => (
  <ContentLayout
    isSimplePage
    classes={formatClasses('px-6', {
      'space-y-12 px-35 py-20': isPC(),
      'px-26': isLargePC(),
      'space-y-12 py-16': !isPC(),
    })}
    testId="TermsOfUsePage">
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
        {translate('terms.title')}
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
      <section class="flex flex-col space-y-4">
        <span>{translate('terms.content-1')}</span>
        <span>{translate('terms.content-2')}</span>
        <strong>{translate('terms.content-3')}</strong>
        <strong>{translate('terms.content-4')}</strong>
      </section>
      {/* 定義及解釋 */}
      <section class={formatClasses('flex flex-col space-y-4', style['page-terms-of-use__terms-container'])}>
        <strong
          class={formatClasses({
            'text-5_5': isPC(),
            'text-sm': !isPC(),
          })}>
          {translate('terms.content-5')}
        </strong>
        <ol
          class={formatClasses('space-y-6', {
            'text-lg': isPC(),
            'text-xs': !isPC(),
          })}>
          <li>
            {translate('terms.content-6')}
            <ul>
              <li
                use:insertHtml={{
                  testId: 'terms.content-7',
                  html: translate('terms.content-7'),
                }}
              />
              <li
                use:insertHtml={{
                  testId: 'terms.content-8',
                  html: translate('terms.content-8'),
                }}
              />
              <li
                use:insertHtml={{
                  testId: 'terms.content-9',
                  html: translate('terms.content-9'),
                }}
              />
              <li
                use:insertHtml={{
                  testId: 'terms.content-10',
                  html: translate('terms.content-10'),
                }}
              />
            </ul>
          </li>
          <li>
            {translate('terms.content-11')}
            <ul>
              <li>{translate('terms.content-12')}</li>
              <li>{translate('terms.content-13')}</li>
            </ul>
          </li>
        </ol>
      </section>
      {/* 關於網站 */}
      <section class={formatClasses('flex flex-col space-y-4', style['page-terms-of-use__terms-container'])}>
        <strong
          class={formatClasses({
            'text-5_5': isPC(),
            'text-sm': !isPC(),
          })}>
          {translate('terms.content-14')}
        </strong>
        <ol
          class={formatClasses('space-y-6', {
            'text-lg': isPC(),
            'text-xs': !isPC(),
          })}>
          <li>{translate('terms.content-15')}</li>
          <li>{translate('terms.content-16')}</li>
        </ol>
      </section>
      {/* 網站的變更和可用性 */}
      <section class={formatClasses('flex flex-col space-y-4', style['page-terms-of-use__terms-container'])}>
        <strong
          class={formatClasses({
            'text-5_5': isPC(),
            'text-sm': !isPC(),
          })}>
          {translate('terms.content-17')}
        </strong>
        <ol
          class={formatClasses('space-y-6', {
            'text-lg': isPC(),
            'text-xs': !isPC(),
          })}>
          <li>{translate('terms.content-18')}</li>
        </ol>
      </section>
      {/* 您的責任 */}
      <section class={formatClasses('flex flex-col space-y-4', style['page-terms-of-use__terms-container'])}>
        <strong
          class={formatClasses({
            'text-5_5': isPC(),
            'text-sm': !isPC(),
          })}>
          {translate('terms.content-19')}
        </strong>
        <ol
          class={formatClasses('space-y-6', {
            'text-lg': isPC(),
            'text-xs': !isPC(),
          })}>
          <li>{translate('terms.content-20')}</li>
          <li>
            {translate('terms.content-21')}
            <ul>
              <li>
                {translate('terms.content-22')}
                <ul>
                  <li> {translate('terms.content-23')}</li>
                  <li> {translate('terms.content-24')}</li>
                  <li> {translate('terms.content-25')}</li>
                  <li> {translate('terms.content-26')}</li>
                </ul>
              </li>
              <li>{translate('terms.content-27')}</li>
              <li>{translate('terms.content-28')}</li>
              <li>{translate('terms.content-29')}</li>
              <li>{translate('terms.content-30')}</li>
              <li>{translate('terms.content-31')}</li>
              <li>{translate('terms.content-32')}</li>
              <li>{translate('terms.content-33')}</li>
              <li>
                {translate('terms.content-34')}
                <ul>
                  <li>{translate('terms.content-35')}</li>
                  <li>{translate('terms.content-36')}</li>
                  <li>{translate('terms.content-37')}</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>{translate('terms.content-38')}</li>
        </ol>
      </section>
      {/* 終止服務 */}
      <section class={formatClasses('flex flex-col space-y-4', style['page-terms-of-use__terms-container'])}>
        <strong
          class={formatClasses({
            'text-5_5': isPC(),
            'text-sm': !isPC(),
          })}>
          {translate('terms.content-39')}
        </strong>
        <ol
          class={formatClasses('space-y-6', {
            'text-lg': isPC(),
            'text-xs': !isPC(),
          })}>
          <li>
            {translate('terms.content-40')}
            <ul>
              <li>{translate('terms.content-41')}</li>
              <li>{translate('terms.content-42')}</li>
              <li>{translate('terms.content-43')}</li>
            </ul>
          </li>
          <li>{translate('terms.content-44')}</li>
        </ol>
      </section>
      {/* 知識產權 */}
      <section class={formatClasses('flex flex-col space-y-4', style['page-terms-of-use__terms-container'])}>
        <strong
          class={formatClasses({
            'text-5_5': isPC(),
            'text-sm': !isPC(),
          })}>
          {translate('terms.content-45')}
        </strong>
        <strong
          class={formatClasses({
            'text-5_5': isPC(),
            'text-sm': !isPC(),
          })}>
          {translate('terms.content-46')}
        </strong>
        <ol
          class={formatClasses('space-y-6', {
            'text-lg': isPC(),
            'text-xs': !isPC(),
          })}>
          <li>
            {translate('terms.content-47')}
            <ul>
              <li>{translate('terms.content-48')}</li>
              <li>{translate('terms.content-49')}</li>
            </ul>
          </li>
          <li>{translate('terms.content-50')}</li>
          <li>
            {translate('terms.content-51')}
            <ul>
              <li>{translate('terms.content-52')}</li>
              <li>{translate('terms.content-53')}</li>
              <li>{translate('terms.content-54')}</li>
            </ul>
          </li>
        </ol>
        <strong
          class={formatClasses({
            'text-5_5': isPC(),
            'text-sm': !isPC(),
          })}>
          {translate('terms.content-55')}
        </strong>
        <ol
          class={formatClasses('space-y-6', {
            'text-lg': isPC(),
            'text-xs': !isPC(),
          })}>
          <li>{translate('terms.content-56')}</li>
          <li>{translate('terms.content-57')}</li>
          <li>{translate('terms.content-58')}</li>
        </ol>
        <strong
          class={formatClasses({
            'text-5_5': isPC(),
            'text-sm': !isPC(),
          })}>
          {translate('terms.content-59')}
        </strong>
        <ol
          class={formatClasses('space-y-6', {
            'text-lg': isPC(),
            'text-xs': !isPC(),
          })}>
          <li>{translate('terms.content-60')}</li>
        </ol>
      </section>
      {/* 賠償責任的限制 */}
      <section class={formatClasses('flex flex-col space-y-4', style['page-terms-of-use__terms-container'])}>
        <strong
          class={formatClasses({
            'text-5_5': isPC(),
            'text-sm': !isPC(),
          })}>
          {translate('terms.content-61')}
        </strong>
        <ol
          class={formatClasses('space-y-6', {
            'text-lg': isPC(),
            'text-xs': !isPC(),
          })}>
          <li>{translate('terms.content-62')}</li>
          <li>{translate('terms.content-63')}</li>
          <li>{translate('terms.content-64')}</li>
          <li>{translate('terms.content-65')}</li>
        </ol>
      </section>
      {/* 其他法律條款 */}
      <section class={formatClasses('flex flex-col space-y-4', style['page-terms-of-use__terms-container'])}>
        <strong
          class={formatClasses({
            'text-5_5': isPC(),
            'text-sm': !isPC(),
          })}>
          {translate('terms.content-66')}
        </strong>
        <ol
          class={formatClasses('space-y-6', {
            'text-lg': isPC(),
            'text-xs': !isPC(),
          })}>
          <li>{translate('terms.content-67')}</li>
          <li>{translate('terms.content-68')}</li>
          <li>
            {translate('terms.content-69')}
            <ul>
              <li>{translate('terms.content-70')}</li>
              <li>{translate('terms.content-71')}</li>
              <li>{translate('terms.content-72')}</li>
              <li>{translate('terms.content-73')}</li>
              <li>{translate('terms.content-74')}</li>
            </ul>
          </li>
          <li>{translate('terms.content-75')}</li>
          <li>{translate('terms.content-76')}</li>
          <li
            use:insertHtml={{
              testId: 'terms.content-77',
              html: translate('terms.content-77'),
            }}
          />
          <li>{translate('terms.content-78')}</li>
          <li>{translate('terms.content-79')}</li>
          <li>{translate('terms.content-80')}</li>
          <li>{translate('terms.content-81')}</li>
          <li>{translate('terms.content-82')}</li>
          <li>{translate('terms.content-83')}</li>
          <li>{translate('terms.content-84')}</li>
          <li>{translate('terms.content-85')}</li>
        </ol>
      </section>
    </article>
  </ContentLayout>
);
export default TermsOfUsePage;
