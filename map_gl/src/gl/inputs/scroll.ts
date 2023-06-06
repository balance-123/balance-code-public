import VirtualScroll, { VirtualScrollEvent } from "virtual-scroll";
let timer: number = 0;
export class Scroller {
  private scroller: VirtualScroll;
  public amount: number = 1;
  constructor(target: HTMLElement) {
    this.scroller = new VirtualScroll({
      el: target,
    });

    this.scroller.on(this.on.bind(this));
  }

  on(e: VirtualScrollEvent) {
    const per = Math.min(Math.max(1 + e.deltaY * 0.001, 0.1), 2);
    this.amount = per;
    clearTimeout(timer);
    timer = setTimeout(() => {
      this.amount = 1;
    }, 100);
  }
}
