import { SessionStorageItem } from '@shared/enums';
import { onCleanup } from 'solid-js';
import { getSessionStorage, removeSessionStorage, setSessionStorage } from '@utilities/helpers/storage.helper';
import { scrollMainTo } from '@utilities/helpers/window.helper';
import { mainScrollRef } from './use-main-scroll-ref';
import { isMobile } from './use-window-size';

function scrollMainContentToPosition(position: number) {
  if (isMobile()) {
    scrollMainTo({ top: position });
  } else {
    mainScrollRef()?.scrollTo({ top: position });
  }
}

function getScrollTop() {
  const mainRef = mainScrollRef();
  let scrollTop = 0;
  if (mainRef === window) {
    // https://stackoverflow.com/a/14384091
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  } else {
    scrollTop = (mainRef as HTMLDivElement)?.scrollTop ?? 0;
  }
  return scrollTop;
}

function scrollRetry(position: number, retryCount: number) {
  if (retryCount < 5) {
    setTimeout(() => {
      // even the scroll position is correct, need to wait until other content is loaded to prevent content shift
      if (getScrollTop() < position) {
        scrollMainContentToPosition(position);
      }
      scrollRetry(position, retryCount + 1);
    }, 200);
  }
}

const scrollToSavedPosition = (scrolledPosition: string | undefined | null) => {
  const position = Number(scrolledPosition || '0') || 0;
  setTimeout(() => {
    scrollMainContentToPosition(position);
    scrollRetry(position, 0);
  }, 0);
};

const savePosition = (key: SessionStorageItem) => {
  setSessionStorage(key, String(getScrollTop()));
};

export const useScrollResume = (key: SessionStorageItem) => {
  setTimeout(() => {
    const viewingPosition = getSessionStorage(key);

    scrollToSavedPosition(viewingPosition);
    removeSessionStorage(key);
  }, 10);

  onCleanup(() => {
    savePosition(key);
  });
};
