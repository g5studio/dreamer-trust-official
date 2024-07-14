import { describe, it, expect } from 'vitest';
import { render, screen } from '@solidjs/testing-library';

import Component from '.';

describe('UI test', () => {
  it('Should render', () => {
    render(() => <Component testId="ProgressBar" progress={0.2} />);
    expect(screen.getByTestId('ProgressBar')).not.toBeNull();
  });
});
