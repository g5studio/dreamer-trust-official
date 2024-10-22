import { translate } from '@shared/hooks/use-translation';
import { isLargePC } from '@shared/hooks/use-window-size';
import { formatClasses } from '@utilities/helpers/format.helper';
import { getRouteConfigByKey } from '@utilities/helpers/routes.helper';
import { For, Show } from 'solid-js';
import { IBaseComponentProps } from '@shared/interfaces';
import { useMenu } from '@shared/hooks/use-menu';
import { useLayoutContext } from '@utilities/context/layout-context';
import { domProperty, DomPropertyCbParams } from '@utilities/directives/dom-property-directive';
import { registerDirective } from '@utilities/helpers/directive.helper';
import LanguageDropdown from '../LanguageDropdown';
import PrimaryLogo from '../PrimaryLogo';
import MobileMenuButton from '../MobileMenuButton';

registerDirective(domProperty);

const Header = (props: IBaseComponentProps) => {
  const { menuItems } = useMenu();
  const [, { setHeaderAreaHeight }] = useLayoutContext();
  return (
    <header
      use:domProperty={{
        keyList: ['domRectHeight'],
        cb: ([height]: DomPropertyCbParams<['domRectHeight']>) => {
          setHeaderAreaHeight(height);
        },
      }}
      data-testid="app-header"
      class={formatClasses(
        'h-20 bg-black-6 px-12 py-4 text-lg shadow-header',
        {
          'h-15 px-6': !isLargePC(),
        },
        props.classes,
      )}>
      <section
        class={formatClasses('flex h-full w-full flex-row justify-between space-x-18', {
          'main-container': isLargePC(),
        })}>
        <div class="flex h-full flex-row space-x-12">
          <PrimaryLogo
            classes={formatClasses('h-12_5', {
              'h-8': !isLargePC(),
            })}
          />
          <Show when={isLargePC()}>
            <ul class="flex flex-row items-center space-x-8">
              <For each={menuItems()}>
                {({ key, handleOnClick, isActive }) => (
                  <li class="text-nowrap">
                    <button
                      class={formatClasses('text-black-3', {
                        'font-bold text-black-1': isActive(),
                      })}
                      type="button"
                      data-testid={`header-item-${key}`}
                      onClick={() => handleOnClick()}>
                      {translate(getRouteConfigByKey(key)?.i18n)}
                    </button>
                  </li>
                )}
              </For>
            </ul>
          </Show>
        </div>
        <div
          class={formatClasses('flex h-full flex-row', {
            'items-center': !isLargePC(),
          })}>
          <Show when={isLargePC()} fallback={<MobileMenuButton />}>
            <LanguageDropdown />
          </Show>
        </div>
      </section>
    </header>
  );
};
export default Header;
