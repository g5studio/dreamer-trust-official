import { setOnlineStatus } from '@shared/hooks/use-online-status';
import { onCleanup } from 'solid-js';

export function OnlineStatusController() {
  const unsubscribe = window.subscribeIsOnline?.((isOnline) => {
    setOnlineStatus(isOnline);
  });

  onCleanup(() => {
    unsubscribe?.();
  });

  return <></>;
}
export default OnlineStatusController;
