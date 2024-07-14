import { describe, it, expect, vitest } from 'vitest';
import { render, screen } from '@solidjs/testing-library';

import Component from '.';

const onMobileMenuOpen = vitest.fn();
const onMobileMenuClose = vitest.fn();

describe('UI test', () => {
  it('Should render', () => {
    render(() => (
      <Component testId="Selector" onMobileMenuClose={onMobileMenuClose} onMobileMenuOpen={onMobileMenuOpen} />
    ));
    expect(screen.getByTestId('Selector')).not.toBeNull();
  });
});
