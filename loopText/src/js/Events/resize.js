export default class Resize {
  constructor() {
    this.events = [];
    this.timer;
    this.handler = this.onResize.bind(this);
    window.addEventListener("resize", this.handler);
  }

  on(cb = (e) => {}) {
    this.events.push(cb);
  }

  onResize(e) {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.events.forEach((cb) => {
        cb(e);
      });
    }, 100);
  }
}
