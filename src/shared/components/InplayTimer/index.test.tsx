import { describe, it, expect } from 'vitest';
import { render, screen } from '@solidjs/testing-library';

import Component from '.';

describe('UI test', () => {
  it('Should render', () => {
    render(() => (
      <Component testId="InplayTimer" displayTime="00:00" receiveTime={Date.now()} serverTime={Date.now()} />
    ));
    expect(screen.getByTestId('InplayTimer')).not.toBeNull();
  });
});
