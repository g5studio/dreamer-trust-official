import { describe, it, expect, beforeEach, vitest } from 'vitest';
import { render, screen } from '@solidjs/testing-library';

import Component from '.';

const onChange = vitest.fn();

const props = {
  testId: 'TabContainer',
  tabs: [
    { labelI18nKey: '測試頁籤1', value: 1 },
    { labelI18nKey: '測試頁籤2', value: 2 },
  ],
  tabSlot: ({ labelI18nKey }) => <>{labelI18nKey}</>,
  emptySlot: () => <div data-testid="TabContainer-empty">no data</div>,
  onTabChange: onChange,
};

describe('UI test', () => {
  beforeEach(() => {
    render(() => (
      <Component<number> {...props}>
        {({ labelI18nKey }) => <p data-testid="TabContainer-content">當前顯示： {labelI18nKey.toString()}</p>}
      </Component>
    ));
  });
  it('Should render', () => {
    expect(screen.getByTestId('TabContainer')).not.toBeNull();
  });

  it('Should render tabs', () => {
    expect(screen.getByTestId('TabContainer-1')).not.toBeNull();
    expect(screen.getByTestId('TabContainer-2')).not.toBeNull();
  });

  it('Should render content with active tab when default value exist', () => {
    render(() => (
      <Component<number> {...props} defaultValue={2}>
        {({ labelI18nKey }) => <p data-testid="TabContainer-content">當前顯示： {labelI18nKey.toString()}</p>}
      </Component>
    ));
    expect(screen.getByTestId('TabContainer-content')).not.toBeNull();
    expect(screen.getAllByText('測試頁籤2')).not.toBeNull();
  });

  it('Should render empty slot when no active tab', () => {
    expect(screen.queryByTestId('TabContainer-empty')).not.toBeNull();
  });
});

describe('Feature test', () => {
  beforeEach(() => {
    render(() => (
      <Component<number> {...props} defaultValue={2}>
        {({ labelI18nKey }) => <p data-testid="TabContainer-content">當前顯示： {labelI18nKey.toString()}</p>}
      </Component>
    ));
  });

  it('Should toggle onChange callback after tab changed', () => {
    expect(screen.getByTestId('TabContainer-1')).not.toBeNull();
    screen.getByTestId('TabContainer-1').click();
    expect(onChange).toBeCalledTimes(1);
    expect(screen.getByTestId('TabContainer-content')).not.toBeNull();
    expect(screen.getAllByText('測試頁籤1')).not.toBeNull();
  });
});
