import VirtualScroll from "virtual-scroll";

export default class Scroll {
  constructor(target, isVirtual, option) {
    this.target = target;
    this.isVirtual = isVirtual;

    this.events = [];

    if (this.isVirtual) {
      const virtual = new VirtualScroll({
        el: this.target,
        ...option,
      });
      virtual.on(this.onScroll.bind(this));
    } else {
      this.target.addEventListener("scroll", this.onScroll.bind(this));
    }
  }

  on(cb = (e) => {}) {
    this.events.push(cb);
  }

  onScroll(e) {
    this.events.forEach((cb) => {
      cb(e);
    });
  }
}
