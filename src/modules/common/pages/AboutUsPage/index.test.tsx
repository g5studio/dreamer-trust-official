import { describe, it, expect } from 'vitest';
import { Router } from '@solidjs/router';
import { render, screen } from '@solidjs/testing-library';

import Page from '.';

describe('UI test', () => {
  it('Should render', () => {
    render(() => (
      <Router>
        <Page />
      </Router>
    ));
    expect(screen.getByTestId('AboutUsPage')).not.toBeNull();
  });
});
