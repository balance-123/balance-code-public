import "./style.scss";

import { GL } from "./gl";

const canvas = document.querySelector("canvas")!;
const wrap = document.querySelector("div.canvas")!;
const gl = new GL(canvas, wrap);

gl.init();

//resizer
const onResize = () => {
  gl.onResize();
};
const resizer = new ResizeObserver(onResize);

resizer.observe(wrap);

//updater
let _t = 0;
const onUpdate = (t: number) => {
  gl.onUpdate(t - _t);
  _t = t;
  requestAnimationFrame(onUpdate);
};

requestAnimationFrame(onUpdate);

// gl.init().then(() => {
//   gl.ticker.start();
// });
