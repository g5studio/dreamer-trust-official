import { describe, it, expect } from 'vitest';
import { render, screen } from '@solidjs/testing-library';

import Component from '.';

describe('UI test', () => {
  it('Should render', () => {
    render(() => <Component options={[]} testId="MultipleSwitchButton" />);
    expect(screen.getByTestId('MultipleSwitchButton')).not.toBeNull();
  });
});
