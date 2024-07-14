import { For, Show } from 'solid-js';
import CrossIconWithBackground from '@utilities/svg-components/CrossIconWithBackground';
import SearchIcon from '@utilities/svg-components/SearchIcon';
import Input from '../Input';
import Button from '../Button';
import Component from './index';
import type { Meta, StoryObj } from 'storybook-solidjs';

const meta: Meta<typeof Component> = {
  component: Component,
  argTypes: {
    // TODO configure you story dashboard here
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/solid/api/csf
 * to learn how to use render functions.
 */
export const MatchSearchDemo: Story = {
  args: {
    // TODO configure your story props here
  },
  render: () => {
    let inputRef: HTMLInputElement | undefined;

    return (
      <div class="m-4">
        <Component
          handleSearchAction={() => {}}
          onSetInputRefValue={(value) => {
            if (inputRef?.value) {
              inputRef.value = value;
            }
          }}
          component={(matchSearchData) => (
            <div class="relative">
              <Input
                ref={inputRef}
                maxLength={20}
                variant="normal"
                placeholderI18nKey="search.global.placeholder"
                classes="h-7_5 w-full rounded-full border-2 bg-layer-7 px-2_5 lg:w-83_75"
                inputClasses="bg-layer-7"
                detectComposition={matchSearchData.handleComposition}
                inputHandler={(value) => matchSearchData.inputHandler(value)}
                append={() => (
                  <Button
                    classes="h-5 w-5 bg-transparent"
                    testId="btn"
                    variant="primary"
                    onClick={() => {
                      if (inputRef?.value) {
                        matchSearchData.resetSearchValue();
                      }
                    }}>
                    <CrossIconWithBackground fillClasses="fill-black" classes="h-5 w-5" />
                  </Button>
                )}
                prepend={() => <SearchIcon classes="mr-1_5 h-5 w-5" fillClasses="fill-black" />}
                keyPressHandler={matchSearchData.handleSearch}
              />
              <Show when={matchSearchData.pinYin().length !== 0}>
                <div class="absolute left-0 z-canvas max-h-125 w-full translate-y-1 overflow-scroll bg-layer-3 shadow">
                  <For each={matchSearchData.pinYin()}>
                    {(pinYinString) => (
                      <div
                        onClick={() => {}}
                        class="border-wid flex cursor-pointer items-center justify-start border-b border-gray-300 p-2_5">
                        <SearchIcon classes="mr-2_5 h-4 w-4 " fillClasses="fill-black" />
                        <span class="text-xs text-black-1">{pinYinString}</span>
                      </div>
                    )}
                  </For>
                </div>
              </Show>
            </div>
          )}
        />
      </div>
    );
  },
};
