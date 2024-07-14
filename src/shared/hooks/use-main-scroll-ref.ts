import { createSignal } from 'solid-js';

const [mainScrollRef, setMainScrollRef] = createSignal<HTMLElement | Window | undefined>();

export { mainScrollRef, setMainScrollRef };
