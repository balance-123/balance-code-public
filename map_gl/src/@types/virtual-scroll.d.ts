declare module "virtual-scroll" {
  export default class VirtualScroll {
    constructor(options: VirtualScrollOptions);
    public on(callback: (event: VirtualScrollEvent) => void): void;
    public off(callback: (event: VirtualScrollEvent) => void): void;
  }

  interface VirtualScrollOptions {
    el: HTMLElement;
    mouseMultiplier?: number;
    touchMultiplier?: number;
    firefoxMultiplier?: number;
    keyStep?: number;
    preventTouch?: boolean;
    unpreventTouchClass?: string;
    passive?: boolean;
    useKeyboard?: boolean;
    useTouch?: boolean;
  }

  interface VirtualScrollEvent {
    x: number;
    y: number;
    deltaX: number;
    deltaY: number;
    originalEvent: KeyboardEvent | WheelEvent;
  }
}
