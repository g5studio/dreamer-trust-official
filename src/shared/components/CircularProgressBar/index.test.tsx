import { describe, it, expect } from 'vitest';
import { render, screen } from '@solidjs/testing-library';

import Component from '.';

describe('UI test', () => {
  it('Should render', () => {
    render(() => <Component testId="CircularProgressBar" value={10} />);
    expect(screen.getByTestId('CircularProgressBar')).not.toBeNull();
  });
});
