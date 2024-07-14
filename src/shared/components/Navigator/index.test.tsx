import { describe, it, expect } from 'vitest';
import { render, screen } from '@solidjs/testing-library';

import { Router } from '@solidjs/router';
import Component from '.';

describe('UI test', () => {
  it('Should render', () => {
    render(() => (
      <Router>
        <Component testId="Navigator" />
      </Router>
    ));
    expect(screen.getByTestId('Navigator')).not.toBeNull();
  });
});
