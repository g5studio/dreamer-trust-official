import { ICustomEventWithHammerInput } from '@shared/interfaces';
import Hammer from 'hammerjs';
import { createEffect, onCleanup } from 'solid-js';

declare module 'solid-js' {
  namespace JSX {
    interface CustomEvents {
      swipe: ICustomEventWithHammerInput;
      swipeleft: ICustomEventWithHammerInput;
      swiperight: ICustomEventWithHammerInput;
      swipeup: ICustomEventWithHammerInput;
      swipedown: ICustomEventWithHammerInput;
    }

    interface CustomCaptureEvents {
      swipe: ICustomEventWithHammerInput;
      swipeleft: ICustomEventWithHammerInput;
      swiperight: ICustomEventWithHammerInput;
      swipeup: ICustomEventWithHammerInput;
      swipedown: ICustomEventWithHammerInput;
    }
    interface Directives {
      swipe: RecognizerOptions;
    }
  }
}

const eventList = ['swipe', 'swipeleft', 'swiperight', 'swipeup', 'swipedown'];

function swipe(node: HTMLElement, accessor: () => RecognizerOptions | undefined) {
  const hammer = new Hammer(node);
  createEffect(() => {
    hammer.get('swipe').set(accessor());
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

export { swipe };
