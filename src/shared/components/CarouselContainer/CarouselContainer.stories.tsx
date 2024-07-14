import { Accessor, For } from 'solid-js';
import { Direction } from '@shared/enums';
import { formatClasses } from '@utilities/helpers/format.helper';
import Component from './index';
import type { Meta, StoryObj } from 'storybook-solidjs';

const meta: Meta<typeof Component> = {
  component: Component,
  argTypes: {
    playTime: {
      defaultValue: 3000,
      options: [Infinity, 3000, 5000],
      control: { type: 'radio' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Component>;

const images = Array.from({ length: 20 }).map((_, index) => index);

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/solid/api/csf
 * to learn how to use render functions.
 */
export const Horizontal: Story = {
  args: {
    classes: 'flex gap-4 flex-col',
    maxLength: images.length,
    direction: Direction.Horizontal,
    sliderSlot: (current: Accessor<number>, setCurrent: (index: number) => void) => (
      <ul class="flex flex-row justify-center items-center gap-2 w-full">
        <For each={images}>
          {(index: number) => (
            <li>
              <button
                onClick={() => setCurrent(index)}
                class={formatClasses('rounded w-10 h-10 border text-center', {
                  'border-primary': current() === index,
                })}>
                {index}
              </button>
            </li>
          )}
        </For>
      </ul>
    ),
    children: () => (
      <div class="flex flex-row w-screen">
        <For each={images}>
          {(image: number) => (
            <div class="h-20 min-w-full border border-primary flex justify-center items-center">
              當前顯示圖片：{image.toString()}
            </div>
          )}
        </For>
      </div>
    ),
  },
};

export const HorizontalAbsoluteSlider: Story = {
  args: {
    classes: 'flex gap-4 flex-col relative',
    maxLength: images.length,
    direction: Direction.Horizontal,
    sliderSlot: (current: Accessor<number>, setCurrent: (index: number) => void) => (
      <ul
        class="absolute z-cover flex flex-row justify-center items-center gap-2 w-full"
        style={{
          left: '50%',
          bottom: '5px',
          transform: 'translateX(-50%)',
        }}>
        <For each={images}>
          {(index: number) => (
            <li>
              <button
                onClick={() => setCurrent(index)}
                class={formatClasses('rounded w-10 h-10 border text-center', {
                  'border-primary': current() === index,
                })}>
                {index}
              </button>
            </li>
          )}
        </For>
      </ul>
    ),
    children: () => (
      <div class="flex flex-row w-screen">
        <For each={images}>
          {(image: number) => (
            <div class="h-screen min-w-full border border-primary flex justify-center items-center">
              當前顯示圖片：{image.toString()}
            </div>
          )}
        </For>
      </div>
    ),
  },
};

export const Vertical: Story = {
  args: {
    classes: 'flex gap-4 flex-col justify-center items-center',
    maxLength: images.length,
    direction: Direction.Vertical,
    containerClasses: 'h-40 w-20',
    offset: '160px',
    sliderSlot: (current: Accessor<number>, setCurrent: (index: number) => void) => (
      <ul class="flex flex-row justify-center items-center gap-2 w-full">
        <For each={images}>
          {(index: number) => (
            <li>
              <button
                onClick={() => setCurrent(index)}
                class={formatClasses('rounded w-10 h-10 border text-center', {
                  'border-primary': current() === index,
                })}>
                {index}
              </button>
            </li>
          )}
        </For>
      </ul>
    ),
    children: () => (
      <div class="flex flex-col w-full h-full">
        <For each={images}>
          {(image: number) => (
            <div class="w-20 min-h-full border border-primary flex justify-center items-center">
              當前顯示圖片：{image.toString()}
            </div>
          )}
        </For>
      </div>
    ),
  },
};

export const InfinityLoop: Story = {
  args: {
    classes: 'flex gap-4 flex-col',
    maxLength: images.length,
    replayMode: 'loop',
    direction: Direction.Horizontal,
    containerClasses: 'w-full',
    sliderSlot: (current: Accessor<number>, setCurrent: (index: number) => void) => (
      <ul class="flex flex-row justify-center items-center gap-2 w-full">
        <For each={images}>
          {(index: number) => (
            <li>
              <button
                onClick={() => setCurrent(index)}
                class={formatClasses('rounded w-10 h-10 border text-center', {
                  'border-primary': current() === index,
                })}>
                {index}
              </button>
            </li>
          )}
        </For>
      </ul>
    ),
    children: () => (
      <For each={images}>
        {(image: number) => (
          <div class="h-20 min-w-full border border-primary flex justify-center items-center w-screen">
            當前顯示圖片：{image.toString()}
          </div>
        )}
      </For>
    ),
  },
};

export const FadeIn: Story = {
  args: {
    classes: 'flex gap-4 flex-col',
    maxLength: images.length,
    transition: 500,
    animation: 'fade',
    containerClasses: 'w-full',
    sliderSlot: (current: Accessor<number>, setCurrent: (index: number) => void) => (
      <ul class="flex flex-row justify-center items-center gap-2 w-full">
        <For each={images}>
          {(index: number) => (
            <li>
              <button
                onClick={() => setCurrent(index)}
                class={formatClasses('rounded w-10 h-10 border text-center', {
                  'border-primary': current() === index,
                })}>
                {index}
              </button>
            </li>
          )}
        </For>
      </ul>
    ),
    children: () => (
      <For each={images}>
        {(image: number) => (
          <div class="h-20 min-w-full bg-black-3 border border-primary flex justify-center items-center w-screen">
            當前顯示圖片：{image.toString()}
          </div>
        )}
      </For>
    ),
  },
};
