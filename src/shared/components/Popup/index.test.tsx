import { describe, it, expect, vitest } from 'vitest';
import { render, screen } from '@solidjs/testing-library';

import Button from '@shared/components/Button';
import Component from '.';

const onClose = vitest.fn();
const i18nKeys = {
  title: 'test title',
  description: 'test description',
};

describe('UI test', () => {
  it('Should render error icon', () => {
    render(() => <Component type="error" onClose={onClose} testId="Popup" i18nKeys={i18nKeys} />);
    expect(screen.getByTestId('popup-error-icon')).not.toBeNull();
  });
  it('Should render information icon', () => {
    render(() => <Component type="information" onClose={onClose} testId="Popup" i18nKeys={i18nKeys} />);
    expect(screen.getByTestId('popup-information-icon')).not.toBeNull();
  });
  it('Should render success icon', () => {
    render(() => <Component type="success" onClose={onClose} testId="Popup" i18nKeys={i18nKeys} />);
    expect(screen.getByTestId('popup-success-icon')).not.toBeNull();
  });
  it('Should render content', () => {
    render(() => <Component type="success" onClose={onClose} testId="Popup" i18nKeys={i18nKeys} />);
    expect(screen.getByText('test title')).not.toBeNull();
    expect(screen.getByText('test description')).not.toBeNull();
  });
});

describe('Feature test', () => {
  it('Should trigger close event', () => {
    render(() => (
      <Component
        i18nKeys={i18nKeys}
        type="information"
        onClose={onClose}
        testId="Popup"
        render={() => (
          <Button
            testId="popup-unit-test-btn"
            variant="active-outline"
            onClick={() => {
              onClose();
            }}>
            close
          </Button>
        )}
      />
    ));
    expect(screen.getByTestId('popup-unit-test-btn')).not.toBeNull();
    screen.getByTestId('popup-unit-test-btn').click();
    expect(onClose).toBeCalled();
  });
});
