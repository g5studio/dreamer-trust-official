import { useMenu } from '@shared/hooks/use-menu';
import { translate } from '@shared/hooks/use-translation';
import { IBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { formatClasses } from '@utilities/helpers/format.helper';
import { getRouteConfigByKey } from '@utilities/helpers/routes.helper';
import { For, Show } from 'solid-js';
import { isMobile, isPC, isTablet } from '@shared/hooks/use-window-size';
import { useNavigate } from '@shared/hooks/use-navigate';
import { Page } from '@shared/enums';
import { useLayoutContext } from '@utilities/context/layout-context';
import { registerDirective } from '@utilities/helpers/directive.helper';
import { domProperty, DomPropertyCbParams } from '@utilities/directives/dom-property-directive';
import PrimaryLogo from '../PrimaryLogo';

registerDirective(domProperty);

interface IFooterProps extends IBaseComponentProps {}

/**
 * @external https://www.figma.com/design/Yu8CUgYbtdP8V5GyEvdYSR/01_Website-Exploration?node-id=10-163&t=07yOjK1cv3rWFOE6-4
 */
const Footer = (props: IFooterProps) => {
  const { menuItems } = useMenu();
  const navigate = useNavigate();
  const [, { setFooterAreaHeight }] = useLayoutContext();
  return (
    <footer
      use:domProperty={{
        keyList: ['domRectHeight'],
        cb: ([height]: DomPropertyCbParams<['domRectHeight']>) => {
          setFooterAreaHeight(height);
        },
      }}
      data-testid="app-footer"
      class={formatClasses(
        'bg-black-6',
        {
          'p-6 pt-2': isMobile(),
          'px-10 py-6 pt-2': isTablet(),
          'px-26 py-18_5 shadow-footer': isPC(),
        },
        props.classes,
      )}>
      <section
        class={formatClasses('main-container box-border flex h-full w-full flex-col space-y-12', {
          'space-y-4': !isPC(),
        })}>
        <div
          class={formatClasses('flex flex-col', {
            'flex-row items-center justify-between': isPC(),
          })}>
          <Show when={isPC()}>
            <PrimaryLogo
              classes={formatClasses('h-19_25', {
                'min-w-[178px]': isPC(),
              })}
            />
          </Show>
          <ul
            class={formatClasses('flex flex-col text-sm font-bold  text-primary-2', {
              'no-scrollbar flex-row items-center space-x-15 overflow-x-auto text-lg': isPC(),
            })}>
            <For each={menuItems()}>
              {({ key, handleOnClick }) => (
                <li
                  class={formatClasses('text-nowrap', {
                    'border-b-0_25 border-black-2 py-4': !isPC(),
                  })}>
                  <button type="button" data-testid={`header-item-${key}`} onClick={() => handleOnClick()}>
                    {translate(getRouteConfigByKey(key)?.i18n)}
                  </button>
                </li>
              )}
            </For>
          </ul>
        </div>
        <div class={formatClasses('flex flex-col space-y-6')}>
          <article
            class={formatClasses('space-y-2 border-y-0_25 border-black-1', {
              'border-t-0 pb-4': !isPC(),
              'py-6': isPC(),
            })}>
            <h1 class="text-xxs">{translate('disclaimer.title')}</h1>
            <div class="space-y-4">
              <For each={Array.from({ length: 6 })}>
                {(_, index) => <p class="text-xxs">{translate(`disclaimer.content-${index() + 1}`)}</p>}
              </For>
            </div>
          </article>
          <div
            class={formatClasses('flex', {
              'flex-row items-center justify-between': isPC(),
              'flex-col-reverse items-center text-xs': !isPC(),
            })}>
            <span class={formatClasses({ 'mt-2_5': !isPC() })}>
              Copyright © 2024 DREAMER GROUP. All Rights Reserved
            </span>
            <ul class="flex flex-row items-center">
              <li
                class={formatClasses('border-r-0_25 border-black-1 pr-12', {
                  'pr-6': !isPC(),
                })}>
                <button onClick={() => navigate()[Page.Policy]()} type="button">
                  {translate('policy.title')}
                </button>
              </li>
              <li
                class={formatClasses('pl-12', {
                  'pl-6': !isPC(),
                })}>
                <button onClick={() => navigate()[Page.Terms]()} type="button">
                  {translate('terms.title')}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </footer>
  );
};
export default Footer;
