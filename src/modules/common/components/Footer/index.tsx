import { useMenu } from '@shared/hooks/use-menu';
import { translate } from '@shared/hooks/use-translation';
import { IBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { formatClasses } from '@utilities/helpers/format.helper';
import { getRouteConfigByKey } from '@utilities/helpers/routes.helper';
import { For, Show } from 'solid-js';
import { isPC } from '@shared/hooks/use-window-size';
import PrimaryLogo from '../PrimaryLogo';

interface IFooterProps extends IBaseComponentProps {}

/**
 * @external https://www.figma.com/design/Yu8CUgYbtdP8V5GyEvdYSR/01_Website-Exploration?node-id=10-163&t=07yOjK1cv3rWFOE6-4
 */
const Footer = (props: IFooterProps) => {
  const { menuItems } = useMenu();
  return (
    <footer
      data-testid="app-footer"
      class={formatClasses(
        'shadow-footer px-26 py-18_5',
        {
          'p-6 pt-2': !isPC(),
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
            <PrimaryLogo classes="h-19_25" />
          </Show>
          <ul
            class={formatClasses('flex flex-col text-sm font-bold  text-primary-2', {
              'flex-row items-center space-x-15 text-lg': isPC(),
            })}>
            <For each={menuItems()}>
              {({ key, handleOnClick }) => (
                <li
                  class={formatClasses('text-nowrap', {
                    'border-grey-7 border-b-0_25 py-4': !isPC(),
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
            class={formatClasses('border-y-0_25 border-black-1', {
              'border-t-0 pb-4': !isPC(),
              'py-6': isPC(),
            })}>
            test
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
                <button type="button">Privacy Policy</button>
              </li>
              <li
                class={formatClasses('pl-12', {
                  'pl-6': !isPC(),
                })}>
                <button type="button">Terms of Use</button>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </footer>
  );
};
export default Footer;
