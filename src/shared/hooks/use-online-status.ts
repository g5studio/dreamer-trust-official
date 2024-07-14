import { Accessor, createEffect, createSignal, on } from 'solid-js';

const [onlineStatus, setOnlineStatus] = createSignal(true);

type OnlineStatusChangeHandlerProps = {
  onChange?: (isOnline: boolean) => void;
  /**
   *
   * @returns
   */
  onNetworkReconnected?: () => void;
};

type OnlineStatusChangeHandler = {
  onlineStatus: Accessor<boolean>;
  isFirstChange: Accessor<boolean>;
};

const useOnlineStatusChangeHandler = ({
  onChange,
  onNetworkReconnected,
}: OnlineStatusChangeHandlerProps): OnlineStatusChangeHandler => {
  const [isFirstChange, setFirstChange] = createSignal<boolean>(true);
  createEffect(
    on(onlineStatus, (isOnline) => {
      onChange?.(isOnline);
    }),
  );

  createEffect(
    on([onlineStatus, isFirstChange], ([isOnline, isFirst]) => {
      setFirstChange(false);
      if (isOnline && !isFirst) {
        onNetworkReconnected?.();
      }
    }),
  );

  return {
    onlineStatus,
    isFirstChange,
  };
};

export { onlineStatus, setOnlineStatus, useOnlineStatusChangeHandler };
