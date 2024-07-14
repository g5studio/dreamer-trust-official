import { IBaseComponentProps } from '@shared/interfaces/base-component.interface';
import { formatClasses } from '@utilities/helpers/format.helper';
import { createEffect, createSignal, mergeProps } from 'solid-js';

interface IProgressBarProps extends IBaseComponentProps {
  /**
   * total progress, from 0 to 1, include main bar + buffer bar
   */
  progress: number;
  /**
   * bufferProgress, from 0 to 1, represent ratio between main bar and buffer bar, 1 = buffer bar is full
   */
  bufferProgress?: number;
  overallBufferProgress?: number;
  barClasses?: string;
  bufferClasses?: string;
  barGradient?: string;
  disabled?: boolean;
}

const ProgressBar = (props: IProgressBarProps) => {
  const mergedProps = mergeProps(
    {
      barGradient: 'linear-gradient(90deg, blue-15 0%, blue-23 100%)',
      bufferProgress: 0,
    },
    props,
  );

  const [mainProgressBeforeBufferEnd, setMainProgressBeforeBufferEnd] = createSignal(0);

  // prevent main progress bar changing when the buffer progress is not ended
  createEffect(() => {
    if (mergedProps.overallBufferProgress) {
      setMainProgressBeforeBufferEnd(1 - mergedProps.overallBufferProgress);
    }
  });

  const mainBarProgress = () => {
    if (mergedProps.bufferProgress === 0) {
      return mergedProps.progress;
    }
    return mainProgressBeforeBufferEnd();
  };

  const bufferBarProgress = () => mergedProps.progress * mergedProps.bufferProgress;
  return (
    <div
      data-testid={mergedProps.testId}
      class={formatClasses('relative w-full h-1 bg-black-15 flex overflow-hidden rounded-r-sm', mergedProps.classes)}>
      <div
        class={formatClasses(`${props.disabled ? 'bg-black-5' : 'bg-blue-36'} shrink-0`, mergedProps.barClasses)}
        style={{
          'flex-basis': `${Math.max(Math.min(mainBarProgress() * 100, 100), 0)}%`,
          'background-image': props.disabled ? 'var(--color-bg-black-5)' : mergedProps.barGradient,
        }}
      />
      <div
        class={formatClasses('bg-orange-8 shrink-0', mergedProps.bufferClasses)}
        style={{
          'flex-basis': `${Math.max(Math.min(bufferBarProgress() * 100, 100), 0)}%`,
        }}
      />
    </div>
  );
};
export default ProgressBar;
