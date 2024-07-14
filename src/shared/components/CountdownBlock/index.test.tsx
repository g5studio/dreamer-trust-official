import { describe, it, expect } from 'vitest';
import { render, screen } from '@solidjs/testing-library';

import Component from '.';

describe('UI test', () => {
  it('Should render', () => {
    render(() => <Component testId="CountdownBlock" startTime={Date.now()} endTime={Date.now() + 1} />);
    expect(screen.getByTestId('CountdownBlock')).not.toBeNull();
  });
});
