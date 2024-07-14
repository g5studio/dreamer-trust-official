import { ICustomEventWithHammerInput } from '@shared/interfaces';
import Hammer from 'hammerjs';
import { createEffect, onCleanup } from 'solid-js';

declare module 'solid-js' {
  namespace JSX {
    interface CustomEvents {
      tap: ICustomEventWithHammerInput;
    }

    interface CustomCaptureEvents {
      tap: ICustomEventWithHammerInput;
    }
    interface Directives {
      tap: RecognizerOptions;
    }
  }
}

const eventList = ['tap'];

function tap(node: HTMLElement, accessor: () => RecognizerOptions | undefined) {
  const hammer = new Hammer(node);
  createEffect(() => {
    hammer.get('tap').set(accessor());
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

export { tap };
