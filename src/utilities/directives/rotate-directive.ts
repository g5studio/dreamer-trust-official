import { ICustomEventWithHammerInput } from '@shared/interfaces';
import Hammer from 'hammerjs';
import { createEffect, onCleanup } from 'solid-js';

declare module 'solid-js' {
  namespace JSX {
    interface CustomEvents {
      rotate: ICustomEventWithHammerInput;
      rotatestart: ICustomEventWithHammerInput;
      rotatemove: ICustomEventWithHammerInput;
      rotateend: ICustomEventWithHammerInput;
      rotatecancel: ICustomEventWithHammerInput;
    }

    interface CustomCaptureEvents {
      rotate: ICustomEventWithHammerInput;
      rotatestart: ICustomEventWithHammerInput;
      rotatemove: ICustomEventWithHammerInput;
      rotateend: ICustomEventWithHammerInput;
      rotatecancel: ICustomEventWithHammerInput;
    }
    interface Directives {
      rotate: RecognizerOptions;
    }
  }
}

const eventList = ['rotate', 'rotatestart', 'rotatemove', 'rotateend', 'rotatecancel'];

function rotate(node: HTMLElement, accessor: () => RecognizerOptions | undefined) {
  const hammer = new Hammer(node);
  createEffect(() => {
    hammer.get('rotate').set(accessor());
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

export { rotate };
