import CarouselContainer from '@shared/components/CarouselContainer';
import ContentLayout from '@shared/components/ContentLayout';
import Picture from '@shared/components/Picture';
import { Direction } from '@shared/enums';
import { translate } from '@shared/hooks/use-translation';
import { isPC } from '@shared/hooks/use-window-size';
import { formatClasses } from '@utilities/helpers/format.helper';
import AdvantageOneIcon from '@utilities/svg-components/common/AdvantageOneIcon';
import AdvantageTwoIcon from '@utilities/svg-components/common/AdvantageTwoIcon';
import DoubleArrowDownIcon from '@utilities/svg-components/shared/DoubleArrowDownIcon';
import { For, Match, Show, Switch } from 'solid-js';

const HomePage = () => (
  <ContentLayout
    testId="HomePage"
    classes={formatClasses('space-y-30 pb-30', {
      'space-y-16 pb-16': !isPC(),
    })}>
    <CarouselContainer
      classes={formatClasses({
        'px-10 pb-13 pt-6': !isPC(),
      })}
      replayMode="forward"
      testId="home-page-top-carousel"
      maxLength={3}
      direction={Direction.Horizontal}
      sliderSlot={(currentIndex, changeIndex) => (
        <ul class="mt-4 flex flex-row items-center justify-center space-x-6">
          <For each={Array.from({ length: 3 })}>
            {(_, id) => (
              <li
                class={formatClasses('h-4 w-4 rounded-circle bg-black-5', {
                  'bg-black-2': currentIndex() === id(),
                })}>
                <button onClick={() => changeIndex(id())} class="h-full w-full" type="button" />
              </li>
            )}
          </For>
        </ul>
      )}>
      {() => (
        <div class="flex w-full flex-row flex-nowrap">
          <section
            class={formatClasses('flex min-w-full ', {
              'flex-row justify-center space-x-25 py-30_5': isPC(),
              'flex-col justify-start space-y-12': !isPC(),
            })}>
            <article
              class={formatClasses('w-full space-y-4', {
                'w-145': isPC(),
              })}>
              <h1 class="text-16 leading-20 font-normal">{translate('home.top-1.title')}</h1>
              <p class="text-lg leading-7">{translate('home.top-1.content')}</p>
            </article>
            <Picture classes="h-75" fallbackSrc="home/home_top" src="home/home_top.png" />
          </section>
          <section
            class={formatClasses('flex min-w-full ', {
              'flex-row justify-center space-x-25 py-30_5': isPC(),
              'flex-col justify-start space-y-12': !isPC(),
            })}>
            <article
              class={formatClasses('w-full space-y-4', {
                'w-145': isPC(),
              })}>
              <h1 class="text-16 leading-20 font-normal">{translate('home.top-1.title')}</h1>
              <p class="text-lg leading-7">{translate('home.top-1.content')}</p>
            </article>
            <Picture classes="h-75" fallbackSrc="home/home_top" src="home/home_top.png" />
          </section>
          <section
            class={formatClasses('flex min-w-full ', {
              'flex-row justify-center space-x-25 py-30_5': isPC(),
              'flex-col justify-start space-y-12': !isPC(),
            })}>
            <article
              class={formatClasses('w-full space-y-4', {
                'w-145': isPC(),
              })}>
              <h1 class="text-16 leading-20 font-normal">{translate('home.top-1.title')}</h1>
              <p class="text-lg leading-7">{translate('home.top-1.content')}</p>
            </article>
            <Picture classes="h-75" fallbackSrc="home/home_top" src="home/home_top.png" />
          </section>
        </div>
      )}
    </CarouselContainer>
    {/* 我們的解決方案 */}
    <article class={formatClasses('relative flex flex-col items-center text-center', { 'px-6': !isPC() })}>
      <Show when={isPC()}>
        <DoubleArrowDownIcon classes="absolute left-1/2 top-[-75px] translate-x-[-50%]" />
      </Show>
      <h5 class="text-5_5 text-primary-3">{translate('home.solutions.title')}</h5>
      <h1 class="text-7 text-primary-3">{translate('home.solutions.subTitle')}</h1>
      <span class="mt-2 h-4 w-16 rounded-[99px] bg-primary-3" />
      <section
        class={formatClasses('mt-10 flex', {
          'flex-row space-x-6': isPC(),
          'flex-col space-y-6': !isPC(),
        })}>
        <For each={Array.from({ length: 4 }).map((_, i) => i + 1)}>
          {(index) => (
            <article class={formatClasses('shrink grow basis-1/4 rounded-8 bg-black-7 pb-3')}>
              <Picture src={`home/solution-${index}.png`} classes="w-full" />
              <section class="px-6_5 pt-3">
                <h5 class={formatClasses('text-5_5', { 'text-lg': !isPC() })}>
                  {translate(`home.solutions.solution-${index}.title`)}
                </h5>
                <p class="text-grey-7 mt-2_5 text-start text-lg">
                  {translate(`home.solutions.solution-${index}.content`)}
                </p>
              </section>
            </article>
          )}
        </For>
      </section>
    </article>
    {/* 我們的優勢 */}
    <article class={formatClasses('relative flex flex-col items-center text-center text-center', { 'px-6': !isPC() })}>
      <h5 class="text-5_5 text-primary-3">{translate('home.advantages.title')}</h5>
      <h1 class="text-7 text-primary-3">{translate('home.advantages.subTitle')}</h1>
      <span class="mt-2 h-4 w-16 rounded-[99px] bg-primary-3" />
      <section
        class={formatClasses('mt-10 flex', {
          'flex-row space-x-40': isPC(),
          'flex-col space-y-10': !isPC(),
        })}>
        <For each={Array.from({ length: 2 }).map((_, i) => i + 1)}>
          {(index) => (
            <article class="flex w-55 flex-col items-center space-y-10">
              <Switch>
                <Match when={index === 1}>
                  <AdvantageOneIcon />
                </Match>
                <Match when={index === 2}>
                  <AdvantageTwoIcon />
                </Match>
              </Switch>
              <p class="text-lg text-black-1">{translate(`home.advantages.advantage-${index}.content`)}</p>
            </article>
          )}
        </For>
      </section>
    </article>
  </ContentLayout>
);
export default HomePage;
