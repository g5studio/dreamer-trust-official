import { describe, it, expect } from 'vitest';
import { render, screen } from '@solidjs/testing-library';

import Component from '.';

describe('UI test', () => {
  it('Should render', () => {
    render(() => <Component testId="DatePicker" dateRange={['2023-10-01', '2023-11-03']} onChange={() => {}} />);
    expect(screen.getByTestId('DatePicker')).not.toBeNull();
  });
});
