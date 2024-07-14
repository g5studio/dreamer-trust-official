import { describe, it, expect } from 'vitest';
import { render, screen } from '@solidjs/testing-library';

import Component from '.';

describe('UI test', () => {
  it('Should render', () => {
    render(() => (
      <Component
        testId="Dropdown"
        itemList={[
          {
            label: 'label',
            value: 'value',
          },
        ]}
        selectedValue={() => 'value'}
        onChange={() => {}}
      />
    ));
    expect(screen.getByTestId('Dropdown')).not.toBeNull();
  });
});
