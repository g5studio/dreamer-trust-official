import Picture from '@shared/components/Picture';
import { LocaleDash } from '@shared/enums';
import { useMenu } from '@shared/hooks/use-menu';
import { translate } from '@shared/hooks/use-translation';
import { IBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { formatClasses } from '@utilities/helpers/format.helper';
import { getRouteConfigByKey } from '@utilities/helpers/routes.helper';
import { For } from 'solid-js';

interface IFooterProps extends IBaseComponentProps {}

/**
 * @external https://www.figma.com/design/Yu8CUgYbtdP8V5GyEvdYSR/01_Website-Exploration?node-id=10-163&t=07yOjK1cv3rWFOE6-4
 */
const Footer = (props: IFooterProps) => {
  const { menuItems } = useMenu();
  return (
    <footer data-testid="app-footer" class={formatClasses('shadow-footer px-26 py-18_5', props.classes)}>
      <section class={formatClasses('main-container box-border flex h-full w-full flex-col space-y-12')}>
        <div class={formatClasses('flex flex-row items-center justify-between')}>
          <Picture classes="h-19_25" src={`common/logo_${LocaleDash.en_US}.png`} />
          <ul class="flex flex-row items-center space-x-15 text-lg font-bold  text-primary-2">
            <For each={menuItems()}>
              {({ key, handleOnClick }) => (
                <li class="text-nowrap">
                  <button type="button" data-testid={`header-item-${key}`} onClick={() => handleOnClick()}>
                    {translate(getRouteConfigByKey(key)?.i18n)}
                  </button>
                </li>
              )}
            </For>
          </ul>
        </div>
        <div class={formatClasses('flex flex-col space-y-6')}>
          <article class="border-y-0_25 border-black-1 py-6">test</article>
          <div class="flex flex-row items-center justify-between">
            <span>Copyright © 2024 DREAMER GROUP. All Rights Reserved</span>
            <ul class="flex flex-row items-center">
              <li class="border-r-0_25 border-black-1 pr-12">
                <button type="button">Privacy Policy</button>
              </li>
              <li class="pl-12">
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
