import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@solidjs/testing-library';

import { OverlayType } from '@shared/enums';
import { IBaseOverlay } from '@shared/interfaces';
import { OpenTask } from '@shared/hooks/use-overlay';
import Component from '.';

type CustomProps = {
  title: string;
  content: string;
};

const toggleOverlay = <Props,>(task: OpenTask<Props>) => {
  render(() => <Component task={task} />);
};

const toggleCustomOverlay = (task?: Partial<OpenTask<CustomProps>>) =>
  toggleOverlay<CustomProps>({
    ...(task ?? {}),
    action: 'open',
    type: OverlayType.Custom,
    taskId: 'unit-test',
    config: {
      props: {
        title: 'unit-test-title',
        content: 'unit-test-content',
      },
      component: ({ title, content, onClose }: CustomProps & IBaseOverlay) => (
        <section>
          <h1>{title}</h1>
          <p>{content}</p>
          <button onClick={onClose} data-testid="unit-test-close-btn">
            close
          </button>
        </section>
      ),
    },
  });

const togglePopupOverlay = () =>
  toggleOverlay({
    action: 'open',
    type: OverlayType.Popup,
    taskId: 'unit-test',
    config: {
      props: {
        type: 'success',
        i18nKeys: {
          title: 'unit-test-title',
          description: 'unit-test-description',
        },
      },
    },
  });

describe('UI test', () => {
  it('Should render custom overlay', () => {
    toggleCustomOverlay();
    expect(screen.getByTestId(`overlay-${OverlayType.Custom}-unit-test`)).not.toBeNull();
    expect(screen.getByText('unit-test-title')).not.toBeNull();
    expect(screen.getByText('unit-test-content')).not.toBeNull();
  });
  it('Should render popup', () => {
    togglePopupOverlay();
    expect(screen.getByTestId(`overlay-${OverlayType.Popup}-unit-test`)).not.toBeNull();
    expect(screen.getByText('unit-test-title')).not.toBeNull();
    expect(screen.getByText('unit-test-description')).not.toBeNull();
  });
});

describe('Feature test', () => {
  it('Should close overlay', () => {
    toggleCustomOverlay();
    const closeBtn = screen.getByTestId('unit-test-close-btn');
    expect(closeBtn).not.toBeNull();
    closeBtn.click();
    waitFor(() => expect(screen.getByTestId(`overlay-${OverlayType.Custom}-unit-test`)).toBeNull());
  });

  it('Should close when click outside', () => {
    toggleCustomOverlay({
      backgroundClose: true,
    });
    const backdrop = screen.getByTestId(`overlay-${OverlayType.Custom}-unit-test-backdrop`);
    backdrop.click();
    waitFor(() => expect(screen.getByTestId(`overlay-${OverlayType.Custom}-unit-test`)).toBeNull());
  });

  it('Should not close when click outside', () => {
    toggleCustomOverlay({
      backgroundClose: false,
    });
    const backdrop = screen.getByTestId(`overlay-${OverlayType.Custom}-unit-test-backdrop`);
    backdrop.click();
    waitFor(() => expect(screen.getByTestId(`overlay-${OverlayType.Custom}-unit-test`)).not.toBeNull());
  });

  it('Should show backdrop', () => {
    toggleCustomOverlay({
      backdrop: true,
    });
    const backdrop = screen.getByTestId(`overlay-${OverlayType.Custom}-unit-test-backdrop`);
    expect(backdrop.classList.contains('bg-black/45')).toBe(true);
  });

  it('Should not show backdrop', () => {
    toggleCustomOverlay({
      backdrop: false,
    });
    const backdrop = screen.getByTestId(`overlay-${OverlayType.Custom}-unit-test-backdrop`);
    expect(backdrop.classList.contains('bg-black/45')).toBe(false);
  });
});
