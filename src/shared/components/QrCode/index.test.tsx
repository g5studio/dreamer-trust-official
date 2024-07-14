import { describe, it, expect } from 'vitest';
import { render, screen } from '@solidjs/testing-library';

import Component from '.';

describe('UI test', () => {
  it('Should render', () => {
    render(() => <Component testId="QrCode" value="123test" size={168} />);
    expect(screen.getByTestId('QrCode')).not.toBeNull();
  });
});
