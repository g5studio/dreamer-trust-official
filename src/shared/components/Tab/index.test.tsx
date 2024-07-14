import { describe, it, expect } from 'vitest';
import { render, screen } from '@solidjs/testing-library';

import Component from '.';

describe('UI test', () => {
  it('Should render', () => {
    render(() => (
      <Component
        testId="Tab"
        tabList={[
          {
            labelI18nKey: 'sport.common.ah',
            value: 'ah',
          },
          {
            labelI18nKey: 'sport.common.ou',
            value: 'ou',
          },
          {
            labelI18nKey: 'sport.common.1x2',
            value: '1x2',
          },
          {
            labelI18nKey: 'sport.football.cr',
            value: 'cr',
          },
          {
            labelI18nKey: 'sport.common.oe',
            value: 'oe',
          },
          {
            labelI18nKey: 'sport.common.cs',
            value: 'cd',
          },
          {
            labelI18nKey: 'sport.common.or',
            value: 'or',
          },
        ]}
        selectedValue="ah"
      />
    ));
    expect(screen.getByTestId('Tab')).not.toBeNull();
  });
});
