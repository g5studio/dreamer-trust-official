import { ICustomEventWithHammerInput } from '@shared/interfaces';
import Hammer from 'hammerjs';
import { createEffect, onCleanup } from 'solid-js';

declare module 'solid-js' {
  namespace JSX {
    interface CustomEvents {
      pan: ICustomEventWithHammerInput;
      panstart: ICustomEventWithHammerInput;
      panmove: ICustomEventWithHammerInput;
      panend: ICustomEventWithHammerInput;
      pancancel: ICustomEventWithHammerInput;
      panleft: ICustomEventWithHammerInput;
      panright: ICustomEventWithHammerInput;
      panup: ICustomEventWithHammerInput;
      pandown: ICustomEventWithHammerInput;
    }

    interface CustomCaptureEvents {
      pan: ICustomEventWithHammerInput;
      panstart: ICustomEventWithHammerInput;
      panmove: ICustomEventWithHammerInput;
      panend: ICustomEventWithHammerInput;
      pancancel: ICustomEventWithHammerInput;
      panleft: ICustomEventWithHammerInput;
      panright: ICustomEventWithHammerInput;
      panup: ICustomEventWithHammerInput;
      pandown: ICustomEventWithHammerInput;
    }
    interface Directives {
      pan: RecognizerOptions;
    }
  }
}

const eventList = ['pan', 'panstart', 'panmove', 'panend', 'pancancel', 'panleft', 'panright', 'panup', 'pandown'];

function pan(node: HTMLElement, accessor: () => RecognizerOptions | undefined) {
  const hammer = new Hammer(node);
  createEffect(() => {
    hammer.get('pan').set(accessor());
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

export { pan };
