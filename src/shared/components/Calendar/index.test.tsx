import { describe, it, expect } from 'vitest';
import { render, screen } from '@solidjs/testing-library';

import Component from '.';

describe('UI test', () => {
  it('Should render', () => {
    render(() => <Component defaultType="single" testId="Calendar" />);
    expect(screen.getByTestId('Calendar')).not.toBeNull();
  });
});
