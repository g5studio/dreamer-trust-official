import { describe, it, expect } from 'vitest';
import { render, screen } from '@solidjs/testing-library';

import Component from '.';

describe('UI test', () => {
  it('Should render', () => {
    render(() => <Component testId="ToastNotification" messageI18nKey="mineInfo.setPhoneNumberSuccess" show={true} />);
    expect(screen.getByTestId('ToastNotification')).not.toBeNull();
  });
});
