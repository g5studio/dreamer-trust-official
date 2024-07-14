import { describe, it, expect } from 'vitest';
import { render, screen } from '@solidjs/testing-library';

import Component from '.';

describe('UI test', () => {
  it('Should render', () => {
    render(() => (
      <Component testId="PopupPicker" onClose={() => {}} onConfirm={() => {}} titleI18nKey={''} options={[]} />
    ));
    expect(screen.getByTestId('PopupPicker')).not.toBeNull();
  });
});
