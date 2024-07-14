import { describe, it, expect } from 'vitest';
import { render, screen } from '@solidjs/testing-library';

import Component from '.';

describe('UI test', () => {
  it('Should render', () => {
    render(() => (
      <Component
        testId="DatePickerModal"
        onConfirm={() => {}}
        onClose={() => {}}
        dateRange={['2023-10-24', '2024-08-08']}
      />
    ));
    expect(screen.getByTestId('DatePickerModal')).not.toBeNull();
  });
});
