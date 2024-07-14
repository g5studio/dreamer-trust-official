import { ICustomEventWithHammerInput } from '@shared/interfaces';
import Hammer from 'hammerjs';
import { createEffect, onCleanup } from 'solid-js';

declare module 'solid-js' {
  namespace JSX {
    interface CustomEvents {
      press: ICustomEventWithHammerInput;
      pressup: ICustomEventWithHammerInput;
    }

    interface CustomCaptureEvents {
      press: ICustomEventWithHammerInput;
      pressup: ICustomEventWithHammerInput;
    }
    interface Directives {
      press: RecognizerOptions;
    }
  }
}

const eventList = ['press', 'pressup'];

function press(node: HTMLElement, accessor: () => RecognizerOptions | undefined) {
  const hammer = new Hammer(node);
  createEffect(() => {
    hammer.get('press').set(accessor());
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

export { press };
