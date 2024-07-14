import { describe, it, expect, beforeEach, vitest } from 'vitest';
import { render, screen } from '@solidjs/testing-library';

import { Accessor, For } from 'solid-js';
import { Direction } from '@shared/enums';
import { formatClasses } from '@utilities/helpers/format.helper';
import Component from '.';

describe('UI test', () => {
  const renderComponent = (direction: Direction, defaultIndex = 0) => {
    const images = Array.from({ length: 20 }).map((_, index) => index);
    render(() => (
      <Component
        replayMode="forward"
        testId="CarouselContainer"
        classes="flex gap-4 flex-col"
        maxLength={images.length}
        direction={direction}
        defaultIndex={defaultIndex}
        sliderSlot={(current: Accessor<number>, setCurrent: (index: number) => void) => (
          <ul data-testid="CarouselContainer-slider" class="flex flex-row justify-center items-center gap-2 w-full">
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
        )}>
        {() => (
          <div data-testid="CarouselContainer-content" class="flex flex-row w-screen">
            <For each={images}>
              {(image: number) => (
                <div class="h-20 min-w-full border border-primary flex justify-center items-center">
                  當前顯示圖片：{image.toString()}
                </div>
              )}
            </For>
          </div>
        )}
      </Component>
    ));
  };
  it('Should render', () => {
    renderComponent(Direction.Horizontal);
    expect(screen.getByTestId('CarouselContainer')).not.toBeNull();
    expect(screen.getByTestId('CarouselContainer-slider')).not.toBeNull();
    expect(screen.getByTestId('CarouselContainer-content')).not.toBeNull();
  });

  it('Should render default image', () => {
    renderComponent(Direction.Horizontal, 2);
    expect(screen.findByText('2')).not.toBeNull();
  });

  it('Should slide with vertical direction', () => {
    renderComponent(Direction.Vertical);
    expect(screen.getByTestId('CarouselContainer-contents').style.transform).toBe('translateY(calc(-100%*0))');
  });
});

describe('Feature test', () => {
  beforeEach(() => {
    vitest.useFakeTimers();
    const images = Array.from({ length: 4 }).map((_, index) => index);
    render(() => (
      <Component
        testId="CarouselContainer"
        classes="flex gap-4 flex-col"
        maxLength={images.length}
        direction={Direction.Horizontal}
        replayMode="forward"
        sliderSlot={(current: Accessor<number>, setCurrent: (index: number) => void) => (
          <ul data-testid="CarouselContainer-slider" class="flex flex-row justify-center items-center gap-2 w-full">
            <For each={images}>
              {(index: number) => (
                <li>
                  <button
                    data-testid={`CarouselContainer-slider-${index}`}
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
        )}>
        {() => (
          <div data-testid="CarouselContainer-content" class="flex flex-row w-screen">
            <For each={images}>
              {(image: number) => (
                <div class="h-20 min-w-full border border-primary flex justify-center items-center">
                  當前顯示圖片：{image.toString()}
                </div>
              )}
            </For>
          </div>
        )}
      </Component>
    ));
  });

  it('Should auto to slide to next one', () => {
    expect(screen.findByText('0')).not.toBeNull();
    vitest.advanceTimersByTime(4000);
    expect(screen.getByTestId('CarouselContainer-contents').style.transform).toBe('translateX(calc(-100%*1))');
  });

  it('Should auto to slide to first one when current display is last one', () => {
    expect(screen.findByText('0')).not.toBeNull();
    vitest.advanceTimersByTime(3000 * 4);
    expect(screen.getByTestId('CarouselContainer-contents').style.transform).toBe('translateX(calc(-100%*0))');
  });

  it('Should slide to target after click slider', () => {
    screen.getByTestId('CarouselContainer-slider-3').click();
    expect(screen.findByText('3')).not.toBeNull();
  });
});
