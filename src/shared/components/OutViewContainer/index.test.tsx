import { describe, it, expect } from 'vitest';
import { render, screen } from '@solidjs/testing-library';

import Component from '.';

describe('UI test', () => {
  it('Should render', () => {
    render(() => <Component testId="OutViewContainer" />);
    expect(screen.getByTestId('OutViewContainer')).not.toBeNull();
  });
});

describe('Feature test', () => {
  it('Should destroy content when component out of current viewer', () => {
    render(() => (
      <section
        data-testid="container"
        style={{
          height: '100px',
          'overflow-y': 'scroll',
        }}>
        <p style={{ height: '400px' }}>inside area</p>
        <Component testId="OutViewContainer" destroyOnLeave>
          <p data-testId="outside-area">outside area</p>
        </Component>
      </section>
    ));
    expect(screen.queryByTestId('outside-area')).toBeNull();
  });
});
