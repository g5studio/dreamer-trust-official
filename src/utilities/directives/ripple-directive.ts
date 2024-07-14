import { createEffect, onCleanup } from 'solid-js';

const createCircle = (
  diameter: number,
  { clientX, clientY }: MouseEvent,
  { left, top }: DOMRect,
  radius: number,
  rippleColor: string,
  opacity: string,
): HTMLSpanElement => {
  const circle = document.createElement('span');
  circle.style.width = `${diameter}px`;
  circle.style.height = `${diameter}px`;
  circle.style.left = `${clientX - left - radius}px`;
  circle.style.top = `${clientY - top - radius}px`;
  circle.style.position = 'absolute';
  circle.style.borderRadius = '50%';
  circle.style.animationDuration = '600ms';
  circle.style.animationTimingFunction = 'linear';
  circle.style.opacity = opacity?.toString() ?? '0.7';
  circle.classList.add('animation-ripple', 'directive-ripple-effect', rippleColor);

  return circle;
};

const createRipple = (event: MouseEvent, rippleColor: string, opacity: string) => {
  const rippleElement = event.currentTarget as HTMLButtonElement;
  rippleElement.style.setProperty('position', 'relative');
  rippleElement.style.setProperty('overflow', 'hidden');
  const diameter = Math.max(rippleElement.clientWidth, rippleElement.clientHeight);
  const radius = diameter / 2;
  const clientRect = rippleElement.getBoundingClientRect();
  const circle = createCircle(diameter, event, clientRect, radius, rippleColor, opacity);
  circle.style.pointerEvents = 'none';
  const rippleDOM = rippleElement.getElementsByClassName('directive-ripple-effect')[0];

  if (rippleDOM) {
    rippleDOM.remove();
  }

  rippleElement.appendChild(circle);
  return setTimeout(() => {
    // when another ripple is created, the previous one is removed
    // we need to check the existence of the rippleElement contains the ripple
    if (rippleElement.contains(circle)) {
      rippleElement.style.removeProperty('position');
      rippleElement.style.removeProperty('overflow');
      rippleElement.removeChild(circle);
    }
  }, 500);
};

export interface IRippleEffectOptions {
  /**
   * 自定義 ripple 動畫的顏色，預設是 bg-black-1(#333)，可傳入的形式為 bg-xxxx-x 。
   * 但為了後續維護上的考量，請統一傳入 tailwind background color class
   */
  rippleTailwindColorClass?: string;
  /**
   * 針對 rippleColor 需要透明度時傳入，預設為 1，範圍為 0 ~ 1
   * (只有 css color 支援透明度設定)
   */
  opacity?: number;
  /**
   * 是否關閉 Ripple 效果，預設為 false
   */
  disabled?: boolean;
}

declare module 'solid-js' {
  namespace JSX {
    interface Directives {
      rippleEffect: IRippleEffectOptions;
    }
  }
}

/**
 * ripple effect directive
 * 會針對 apply 的元素做一個波紋的動畫
 */
function rippleEffect(node: HTMLElement, accessor: () => IRippleEffectOptions) {
  const options = () =>
    accessor() ?? {
      rippleTailwindColorClass: 'bg-black-1',
      opacity: 1,
      disabled: true,
    };
  const rippleColor = (): string => options().rippleTailwindColorClass ?? 'bg-black-1';
  const opacity = () => options().opacity?.toString() ?? '1';
  const disabled = () => options().disabled ?? false;
  let timer: NodeJS.Timeout;

  const directiveHandler = (event: MouseEvent) => {
    if (!disabled()) {
      timer = createRipple(event, rippleColor(), opacity());
    }
  };

  createEffect(() => {
    node.addEventListener('click', directiveHandler);
  });

  onCleanup(() => {
    node.removeEventListener('click', directiveHandler);

    if (timer) {
      clearInterval(timer);
    }
  });
}

export { rippleEffect };
