import CarouselContainer from '@shared/components/CarouselContainer';
import ContentLayout from '@shared/components/ContentLayout';
import Picture from '@shared/components/Picture';
import { Direction } from '@shared/enums';
import { translate } from '@shared/hooks/use-translation';
import { isPC } from '@shared/hooks/use-window-size';
import { formatClasses } from '@utilities/helpers/format.helper';
import { For } from 'solid-js';

const HomePage = () => (
  <ContentLayout testId="HomePage">
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
  </ContentLayout>
);
export default HomePage;
