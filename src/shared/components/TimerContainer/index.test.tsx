import { describe, it, expect, beforeEach, vitest } from 'vitest';
import { render, screen } from '@solidjs/testing-library';

import { createSignal } from 'solid-js';
import Component, { ITimerContainer } from '.';

const onTimeout = vitest.fn();

describe('UI test', () => {
  it('Should render children', () => {
    render(() => (
      <Component countMode="up" min={0}>
        {() => <div data-testid="TimerContainer" />}
      </Component>
    ));
    expect(screen.getByTestId('TimerContainer')).not.toBeNull();
  });
});

describe('Feature test', () => {
  beforeEach(() => {
    vitest.useFakeTimers();
  });
  it('Should count up and loop when count to max number', () => {
    render(() => (
      <Component countMode="up" min={0} max={3} loop>
        {({ current }) => <div data-testid="TimerContainer">{current()}</div>}
      </Component>
    ));
    expect(screen.getByTestId('TimerContainer')).not.toBeNull();
    vitest.advanceTimersByTime(4000);
    expect(screen.getByTestId('TimerContainer').innerHTML).equal('0');
  });

  it('Should count up and should not loop when count to max number', () => {
    render(() => (
      <Component countMode="up" min={0} max={3}>
        {({ current }) => <div data-testid="TimerContainer">{current()}</div>}
      </Component>
    ));
    expect(screen.getByTestId('TimerContainer')).not.toBeNull();
    vitest.advanceTimersByTime(4000);
    expect(screen.getByTestId('TimerContainer').innerHTML).equal('3');
  });

  it('Should count down and loop when count to min number', () => {
    render(() => (
      <Component countMode="down" max={3} min={0} loop>
        {({ current }) => <div data-testid="TimerContainer">{current()}</div>}
      </Component>
    ));
    expect(screen.getByTestId('TimerContainer')).not.toBeNull();
    vitest.advanceTimersByTime(4000);
    expect(screen.getByTestId('TimerContainer').innerHTML).equal('3');
  });

  it('Should count down and should not loop when count to min number', () => {
    render(() => (
      <Component countMode="down" max={3} min={0}>
        {({ current }) => <div data-testid="TimerContainer">{current()}</div>}
      </Component>
    ));
    expect(screen.getByTestId('TimerContainer')).not.toBeNull();
    vitest.advanceTimersByTime(4000);
    expect(screen.getByTestId('TimerContainer').innerHTML).equal('0');
  });

  it('Should execute timeout callback when count to limit', () => {
    render(() => (
      <Component countMode="down" max={3} min={0} onTimeout={onTimeout}>
        {({ current }) => <div data-testid="TimerContainer">{current()}</div>}
      </Component>
    ));
    expect(screen.getByTestId('TimerContainer')).not.toBeNull();
    vitest.advanceTimersByTime(4000);
    expect(onTimeout).toBeCalledTimes(1);
  });

  it('Should count with specific unit', () => {
    render(() => (
      <Component countMode="up" max={3} min={0} loop countUnit="minute" onTimeout={onTimeout}>
        {({ current }) => <div data-testid="TimerContainer">{current()}</div>}
      </Component>
    ));
    expect(screen.getByTestId('TimerContainer')).not.toBeNull();
    vitest.advanceTimersByTime(1000 * 60);
    expect(screen.getByTestId('TimerContainer').innerHTML).equal('1');
  });

  it('Should execute timeout callback multiple in loop mode', () => {
    render(() => (
      <Component countMode="down" max={3} min={0} loop onTimeout={onTimeout}>
        {({ current }) => <div data-testid="TimerContainer">{current()}</div>}
      </Component>
    ));
    expect(screen.getByTestId('TimerContainer')).not.toBeNull();
    vitest.advanceTimersByTime(6000);
    expect(onTimeout).toBeCalledTimes(2);
  });

  it('Should allow binding ref from outside and call api', () => {
    const [timer, ref] = createSignal<ITimerContainer>();
    render(() => (
      <Component countMode="up" max={3} min={0} loop ref={ref} onTimeout={onTimeout}>
        {({ current }) => <div data-testid="TimerContainer">{current()}</div>}
      </Component>
    ));
    expect(screen.getByTestId('TimerContainer')).not.toBeNull();
    expect(timer()).not.toBeUndefined();
    vitest.advanceTimersByTime(2000);
    expect(screen.getByTestId('TimerContainer').innerHTML).equal('2');
    timer()?.pause();
    vitest.advanceTimersByTime(2000);
    expect(screen.getByTestId('TimerContainer').innerHTML).equal('2');
    timer()?.start();
    vitest.advanceTimersByTime(2000);
    expect(screen.getByTestId('TimerContainer').innerHTML).equal('0');
    timer()?.correctTime(3, 'minute');
    expect(screen.getByTestId('TimerContainer').innerHTML).equal('180');
    timer()?.reset();
    expect(screen.getByTestId('TimerContainer').innerHTML).equal('0');
  });
});
