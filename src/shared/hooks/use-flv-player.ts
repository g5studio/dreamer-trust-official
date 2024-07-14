import { LocalStorageItem } from '@shared/enums';
import { getLocalStorage, setLocalStorage } from '@utilities/helpers/storage.helper';
import flvJs from 'flv.js';
import { onCleanup, onMount } from 'solid-js';

export const useFlvPlayer = (
  accessor: () => {
    urlFlv?: string;
    videoPlaying: () => boolean;
    setVideoPlaying: (playing: boolean) => void;
    onPlaying?: (playing: boolean) => void;
    videoMuted: () => boolean;
    setVideoMuted: (muted: boolean) => void;
    onMuted?: (muted: boolean) => void;
    videoFlv: () => HTMLVideoElement | undefined;
    onError: () => void;
    onReady: () => void;
    showVideoControls?: boolean;
    setControls: (controls: boolean) => void;
    isPlaying: boolean;
  },
) => {
  let noFrameCount: number = 0;
  let noSpeedCount: number = 0;
  let flvPlayer: ReturnType<typeof flvJs.createPlayer> | undefined;

  const handleInitMuted = () => {
    const { videoFlv, onMuted, isPlaying, setVideoMuted } = accessor();
    const videoFlvDom = videoFlv();

    const localVideoIsMuted = getLocalStorage(LocalStorageItem.VideoMuted);
    const notMuted = localVideoIsMuted === 'false';

    if (videoFlvDom) {
      if (notMuted && isPlaying) {
        videoFlvDom.muted = false;
      }
      onMuted?.(videoFlvDom.muted);
      setVideoMuted(videoFlvDom.muted);
    }
  };

  const cleanupFlvPlayer = () => {
    if (flvPlayer) {
      flvPlayer.destroy();
    }
    noFrameCount = 0;
    noSpeedCount = 0;
  };

  const playFlvVideo = (url?: string) => {
    const { videoFlv, onError, onReady } = accessor();
    const videoFlvDom = videoFlv();
    if (url && videoFlvDom && flvJs.isSupported()) {
      cleanupFlvPlayer();

      const tempFlvPlayer = flvJs.createPlayer({
        type: 'flv',
        isLive: true,
        url,
      });

      tempFlvPlayer.attachMediaElement(videoFlvDom);
      tempFlvPlayer.load();

      tempFlvPlayer.on(flvJs.Events.MEDIA_INFO, onReady);

      tempFlvPlayer.on(flvJs.Events.STATISTICS_INFO, (e: { decodedFrames: number; speed: number }) => {
        if (e.decodedFrames === 0) {
          noFrameCount += 1;
        } else {
          noFrameCount = 0;
        }

        if (e.speed === 0) {
          noSpeedCount += 1;
        } else {
          noSpeedCount = 0;
        }

        if (noFrameCount >= 5) {
          onError();
          noFrameCount = 0;
        }

        if (noSpeedCount >= 30) {
          onError();
          noSpeedCount = 0;
        }
      });

      tempFlvPlayer.on(flvJs.Events.ERROR, onError);
      flvPlayer = tempFlvPlayer;

      handleInitMuted();
    }
  };

  const togglePauseHandler = (isLive: boolean) => {
    const { urlFlv, videoPlaying, setVideoPlaying, onPlaying } = accessor();
    if (urlFlv && flvPlayer) {
      if (videoPlaying()) {
        flvPlayer.pause();
        if (isLive) {
          flvPlayer.unload();
        }
        setVideoPlaying(false);
      } else {
        if (isLive) {
          playFlvVideo(urlFlv);
        } else {
          void flvPlayer.play();
        }
        setVideoPlaying(true);
      }
    }

    onPlaying?.(videoPlaying());
  };

  const muteHandler = (needSetLocalStorage: boolean = true) => {
    const { videoMuted, setVideoMuted, onMuted } = accessor();
    const muted = !videoMuted();

    if (flvPlayer) {
      flvPlayer.muted = muted;
    }

    if (needSetLocalStorage) {
      setLocalStorage(LocalStorageItem.VideoMuted, String(muted));
    }

    setVideoMuted(muted);
    onMuted?.(muted);
  };

  const fullScreenHandler = () => {
    const { videoFlv } = accessor();
    const videoFlvDom = videoFlv();
    if (videoFlvDom && 'requestFullscreen' in videoFlvDom) {
      void videoFlvDom.requestFullscreen();
    }
  };

  const resizeListener = () => {
    const { videoFlv, showVideoControls, setControls } = accessor();
    const videoFlvDom = videoFlv();
    const controls =
      (window.outerWidth === videoFlvDom?.offsetWidth || document.fullscreenElement === videoFlvDom) &&
      showVideoControls;
    setControls(!!controls);
  };

  onMount(() => {
    const { videoFlv } = accessor();
    const videoFlvDom = videoFlv();
    videoFlvDom?.addEventListener('fullscreenchange', resizeListener);
  });

  onCleanup(() => {
    const { videoFlv } = accessor();
    const videoFlvDom = videoFlv();
    videoFlvDom?.removeEventListener('fullscreenchange', resizeListener);
    flvPlayer?.destroy();
  });

  return {
    playFlvVideo,
    togglePauseHandler,
    muteHandler,
    fullScreenHandler,
  };
};
