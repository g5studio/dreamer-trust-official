import { createEffect, createSignal, onCleanup } from 'solid-js';

type VisibilityChangeHandlerProps = {
  handleOnVisible: () => void;
};

/**
 * @description 背景閒置喚醒處理
 */
export const useVisibilityChangeHandler = ({ handleOnVisible }: VisibilityChangeHandlerProps) => {
  const [visible, setIsVisible] = createSignal<boolean>(false);

  const handleVisibilityChange = () => {
    setIsVisible(document.visibilityState === 'visible');
    if (document.visibilityState === 'visible') {
      handleOnVisible();
    }
  };

  createEffect(() => {
    window.addEventListener('visibilitychange', handleVisibilityChange);
    onCleanup(() => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    });
  });

  return {
    visible,
  };
};
