import { describe, it, expect } from 'vitest';
import { render, screen } from '@solidjs/testing-library';

import Component from '.';

describe('UI test', () => {
  it('Should render', () => {
    render(() => <Component showSkeleton testId="SkeletonContainer" />);
    expect(screen.getByTestId('SkeletonContainer')).not.toBeNull();
  });

  it('Should render content when data loaded', () => {
    render(() => (
      <Component showSkeleton={false} testId="SkeletonContainer">
        test content
      </Component>
    ));
    expect(screen.queryByTestId('SkeletonContainer')).toBeNull();
    expect(screen.getByText('test content')).not.toBeNull();
  });
});
