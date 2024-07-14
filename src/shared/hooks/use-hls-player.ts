import { LocalStorageItem } from '@shared/enums';
import { HTMLVideoElementIOS } from '@shared/interfaces';
import { createSource } from '@utilities/helpers/dom.helper';
import { setLocalStorage, getLocalStorage } from '@utilities/helpers/storage.helper';
import { onCleanup, onMount } from 'solid-js';

export const useHlsPlayer = (
  accessor: () => {
    urlM3u8?: string;
    videoDom?: HTMLVideoElementIOS;
    videoMuted: () => boolean;
    setVideoMuted: (muted: boolean) => void;
    onMuted?: (muted: boolean) => void;
    videoPlaying: () => boolean;
    setVideoPlaying: (playing: boolean) => void;
    onPlaying?: (playing: boolean) => void;
    onError: () => void;
    onReady: () => void;
    createVideo: () => void;
    isHlsUse: boolean;
    videoPortalDom?: HTMLDivElement;
    isPlaying: boolean;
  },
) => {
  let timer: NodeJS.Timeout;
  const timeUpdateHandler = () => {
    if (timer) {
      clearTimeout(timer);
    }
    const { onError } = accessor();
    timer = setTimeout(() => {
      onError();
    }, 10000);
  };

  const onCanplay = () => {
    const { onReady } = accessor();
    clearTimeout(timer);
    onReady();
  };

  const removeSource = () => {
    const { videoDom, onError, videoPortalDom } = accessor();
    if (videoDom) {
      [...videoDom.childNodes].forEach((c) => {
        if (c.nodeName === 'SOURCE') {
          videoDom?.removeChild(c);
        }
      });
      videoDom.removeEventListener('canplay', onCanplay);
      videoDom.removeEventListener('error', onError);
      videoDom.removeEventListener('timeupdate', timeUpdateHandler);

      if (videoPortalDom?.childNodes.length) {
        videoPortalDom?.removeChild(videoDom);
      }
    }
  };

  const muteHandler = (needSetLocalStorage: boolean = true) => {
    const { videoMuted, videoDom, setVideoMuted, onMuted } = accessor();
    const muted = !videoMuted();

    if (videoDom) {
      videoDom.muted = muted;
    }

    if (needSetLocalStorage) {
      setLocalStorage(LocalStorageItem.VideoMuted, String(muted));
    }

    setVideoMuted(muted);
    onMuted?.(muted);
  };

  const handleInitMuted = () => {
    const { onMuted, videoMuted, isPlaying } = accessor();

    const localVideoIsMuted = getLocalStorage(LocalStorageItem.VideoMuted);
    const isMuted = localVideoIsMuted ? localVideoIsMuted === 'true' : true;
    if (isMuted || !isPlaying) {
      muteHandler(false);
    }
    onMuted?.(videoMuted());
  };

  const playHlsVideo = (url?: string) => {
    const { videoDom, onError, videoPortalDom } = accessor();
    if (url && videoDom) {
      if (removeSource) {
        removeSource?.();
      }
      createSource(videoDom, url);
      handleInitMuted();
      videoPortalDom?.appendChild(videoDom);

      // if "canplay" event not triggered, call error by 15 secs after.
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        onError();
      }, 15 * 1000);

      videoDom.addEventListener('canplay', onCanplay);
      videoDom.addEventListener('error', onError);
      videoDom.addEventListener('timeupdate', timeUpdateHandler);
    }
  };

  const togglePauseHandler = (isLive: boolean) => {
    const { urlM3u8, videoDom, videoPlaying, setVideoPlaying, onPlaying } = accessor();
    if (urlM3u8 && videoDom) {
      if (videoPlaying()) {
        videoDom.pause();
        setVideoPlaying(false);
      } else {
        if (isLive) {
          videoDom.load();
        } else {
          void videoDom.play();
        }
        setVideoPlaying(true);
      }
    }
    onPlaying?.(videoPlaying());
  };

  const fullScreenHandler = () => {
    const { videoDom } = accessor();
    if (videoDom) {
      if (videoDom.requestFullscreen) {
        void videoDom.requestFullscreen();
      } else if (videoDom.mozRequestFullScreen) {
        videoDom.mozRequestFullScreen();
      } else if (videoDom.webkitEnterFullScreen) {
        videoDom.webkitEnterFullScreen();
      }
    }
  };

  onMount(() => {
    const { videoDom, isHlsUse } = accessor();
    if (isHlsUse) {
      const sourceDom = videoDom?.lastChild as HTMLSourceElement;
      if (sourceDom) {
        sourceDom.setAttribute('type', 'application/x-mpegURL');
      }
    }
  });

  onCleanup(() => {
    const { createVideo } = accessor();

    removeSource();
    createVideo();
    clearTimeout(timer);
  });

  return {
    playHlsVideo,
    togglePauseHandler,
    muteHandler,
    fullScreenHandler,
  };
};
