import { describe, it, expect, beforeAll, vitest } from 'vitest';
import { render, screen } from '@solidjs/testing-library';
import { toggleErrorPopup } from '@utilities/api/http/error-handler';

import { OverlayType } from '@shared/enums';
import { toggleOverlay } from '@shared/hooks/use-overlay';
import Component from '.';

const onClick = vitest.fn();

describe('UI test', () => {
  beforeAll(() => {
    toggleErrorPopup({
      errorMessage: 'error message',
      render: () => (
        <button
          data-testid="unit-test-trigger-popup-btn"
          onClick={() =>
            toggleErrorPopup({
              errorMessage: 'error message 2',
            })
          }>
          trigger another modal
        </button>
      ),
    });
  });
  it('Should render popup', () => {
    render(() => <Component />);
    expect(screen.getByTestId('unit-test-trigger-popup-btn')).not.toBeNull();
  });

  it('Should render all popups after click trigger button', () => {
    render(() => <Component />);
    const btn = screen.getByTestId('unit-test-trigger-popup-btn');
    expect(btn).not.toBeNull();
    btn.click();
    expect(screen.getByText('error message 2')).not.toBeNull();
  });
});

describe('Feature test', () => {
  it('Should trigger backdrop click event', () => {
    render(() => (
      <>
        <button onClick={onClick} data-testid="unit-test-btn">
          test btn
        </button>
        <Component />
      </>
    ));
    toggleOverlay({
      action: 'open',
      type: OverlayType.Custom,
      taskId: 'unit-test',
      mainLayerEnabled: true,
      config: {
        props: {
          title: 'unit-test-title',
          content: 'unit-test-content',
        },
        component: () => <>test</>,
      },
    });
    expect(screen.getByTestId('overlay-container-unit-test')).not.toBeNull();
    expect(screen.getByTestId('unit-test-btn')).not.toBeNull();
    const container = screen.getByTestId('overlay-container-unit-test');
    const btn = screen.getByTestId('unit-test-btn');
    expect(container.classList.contains('pointer-events-none')).toBe(true);
    container.style['pointer-events'] = 'none';
    btn.click();
    expect(onClick).toBeCalled();
  });
});
