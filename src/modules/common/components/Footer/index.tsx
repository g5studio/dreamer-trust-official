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
        'shadow-footer bg-black-8 px-26 py-18_5',
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
            class={formatClasses('space-y-2 border-y-0_25 border-black-1', {
              'border-t-0 pb-4': !isPC(),
              'py-6': isPC(),
            })}>
            <h1 class="text-xxs">Disclaimer</h1>
            <div class="space-y-4">
              <p class="text-xxs">
                The information provided on this website is for general information purposes only and does not
                constitute an offer, and the Website and all information provided to you via the website are provided
                “as is” and “as available”, the content described herein is subject to change without notice from
                Dreamer Trust Limited and/or any of its members, affiliated entities (Dreamer Trust Limited and all its
                members and affiliated entities collectively referred to as the “Dreamer Trust” herein after). We will
                strive to ensure the integrity and accuracy of the website's functionality and content, while, to the
                maximum extent permitted by applicable law, we disclaim all express, implied, and statutory warranties
                with respect to the same, including without limitation any implied warranties of merchantability,
                satisfactory quality, fitness for a particular purpose, accuracy, completeness, non-infringement,
                non-interference, error-free service, and uninterrupted service.
                <br />
                By making available the websites, Dreamer Trust is not making an offer of any financial, tax,
                accounting, legal or other professional services or goods, and none of the information presented on the
                websites should be construed as finance, tax, accounting, legal or any other professional advice or
                service. You should always seek the advice of a suitably qualified professional before taking or
                refraining from taking any action. Dreamer Trust will not be liable in any way to any person for any
                action taken or omitted to be taken as a result of the use of any content posted by us, which results
                in, causes or gives rise to any loss. The laws of some jurisdictions may impose restrictions on the
                distribution of materials described on this Site. This Site is not directed to persons in jurisdictions
                where such restrictions apply. If you belong to such areas or you are in such areas, please exit this
                website immediately and you will be responsible for any losses, controversies, disputes and other
                negative consequences arising from your continued browsing.
              </p>
              <p class="text-xxs">
                All information, text and images on this website are copyrighted or registered by DREAMER TRUST.
              </p>
              <p class="text-xxs">
                We urge all persons contacting Dreamer Trust to check the website and service number carefully and to
                remain vigilant to avoid being deceived or misled by unscrupulous persons.
              </p>
              <p class="text-xxs">
                This disclaimer is written in Chinese and the English version is provided for information purposes only.
              </p>
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
