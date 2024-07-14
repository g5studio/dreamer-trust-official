import { describe, it, expect } from 'vitest';
import { render, screen } from '@solidjs/testing-library';

import Component from '.';

describe('UI test', () => {
  it('Should render', () => {
    render(() => <Component testId="Popper" text="Popper" />);
    expect(screen.getByTestId('Popper')).not.toBeNull();
  });
});
