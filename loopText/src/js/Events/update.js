// import Stats from "stats.js";
import Perfomance from "../Perfomance";
export default class Update {
  constructor(isStats = true) {
    this.events = [];

    if (isStats) {
      // this.stats = new Stats();
      import("stats.js").then((e) => {
        this.stats = new e.default();
        this.stats.showPanel(0);
        document.body.appendChild(this.stats.dom);
      });
    }
    this.isStop = false;
    this.frame;
    this._amountTime = 0;

    // this.perfomance = new Perfomance();
    this.update();
  }

  on(cb = (e) => {}) {
    this.events.push(cb);
  }

  update(d = 0) {
    const diff = d - this._amountTime;
    if (this.isStop) {
      window.cancelAnimationFrame(this.frame);
      this._amountTime = 0;
      return;
    }
    if (this.stats) this.stats.begin();
    const l = this.events.length;
    for (let index = 0; index < l; index++) {
      this.events[index](diff);
    }
    if (this.stats) this.stats.end();
    this._amountTime = d;
    // this.perfomance.update(diff);
    this.frame = window.requestAnimationFrame(this.update.bind(this));
  }
}
