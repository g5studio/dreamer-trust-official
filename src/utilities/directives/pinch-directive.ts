import { ICustomEventWithHammerInput } from '@shared/interfaces';
import Hammer from 'hammerjs';
import { createEffect, onCleanup } from 'solid-js';

declare module 'solid-js' {
  namespace JSX {
    interface CustomEvents {
      pinch: ICustomEventWithHammerInput;
      pinchstart: ICustomEventWithHammerInput;
      pinchmove: ICustomEventWithHammerInput;
      pinchend: ICustomEventWithHammerInput;
      pinchcancel: ICustomEventWithHammerInput;
      pinchleft: ICustomEventWithHammerInput;
      pinchright: ICustomEventWithHammerInput;
      pinchup: ICustomEventWithHammerInput;
      pinchdown: ICustomEventWithHammerInput;
    }

    interface CustomCaptureEvents {
      pinch: ICustomEventWithHammerInput;
      pinchstart: ICustomEventWithHammerInput;
      pinchmove: ICustomEventWithHammerInput;
      pinchend: ICustomEventWithHammerInput;
      pinchcancel: ICustomEventWithHammerInput;
      pinchleft: ICustomEventWithHammerInput;
      pinchright: ICustomEventWithHammerInput;
      pinchup: ICustomEventWithHammerInput;
      pinchdown: ICustomEventWithHammerInput;
    }
    interface Directives {
      pinch: RecognizerOptions;
    }
  }
}

const eventList = [
  'pinch',
  'pinchstart',
  'pinchmove',
  'pinchend',
  'pinchcancel',
  'pinchleft',
  'pinchright',
  'pinchup',
  'pinchdown',
];

function pinch(node: HTMLElement, accessor: () => RecognizerOptions | undefined) {
  const hammer = new Hammer(node);
  createEffect(() => {
    hammer.get('pinch').set(accessor());
  });
  eventList.forEach((eventName) => {
    hammer.on(eventName, (ev) => {
      node.dispatchEvent(new CustomEvent(eventName, { detail: ev }));
    });
  });

  onCleanup(() => {
    eventList.forEach((eventName) => {
      hammer.off(eventName);
    });
  });

  return hammer;
}

export { pinch };
