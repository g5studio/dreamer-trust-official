import { onCleanup } from 'solid-js';
import html2canvas from 'html2canvas';
import { Log } from '@utilities/helpers/log.helper';

declare module 'solid-js' {
  namespace JSX {
    interface Directives {
      screenShotToDownload: {
        el: HTMLDivElement | undefined;
        fileName?: string;
      };
    }
  }
}

export function screenShotToDownload(
  el: HTMLElement,
  accessor: () => {
    el: HTMLDivElement | undefined;
    fileName: string;
  },
): void {
  const onClick: EventListener = () => {
    try {
      html2canvas(accessor().el as HTMLElement, { allowTaint: false, useCORS: true })
        .then((canvas: HTMLCanvasElement) => {
          const dataImg = new Image();
          dataImg.src = canvas.toDataURL('image/png');
          const alink = document.createElement('a');
          alink.href = dataImg.src;
          alink.download = accessor()?.fileName || 'testImg';
          alink.click();
        })
        .catch((error: string) => {
          Log.error({ msg: error });
        });
    } catch (e) {
      // do nothing
    }
  };

  el.addEventListener('click', onClick);

  onCleanup(() => {
    el.removeEventListener('click', onClick);
  });
}
