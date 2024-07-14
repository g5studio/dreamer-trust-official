import { describe, it, expect } from 'vitest';
import { render, screen } from '@solidjs/testing-library';

import { ButtonVariants } from '../Button';
import Component from '.';

describe('UI test', () => {
  it('Should render', () => {
    render(() => (
      <Component
        testId="FloatingButton"
        buttonProps={{
          variant: ButtonVariants.primary,
          testId: 'FloatingButtonButton',
          onClick: () => {},
        }}
      />
    ));
    expect(screen.getByTestId('FloatingButton')).not.toBeNull();
  });
});
