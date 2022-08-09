const width = 100;
const height = 80;

export default class Perfomance {
  constructor() {
    this.setup();
  }

  setup() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = width * window.devicePixelRatio;
    this.canvas.height = height * window.devicePixelRatio;

    this.canvas.style.width = width + "px";
    this.canvas.style.height = height + "px";
    this.canvas.style.position = "fixed";
    this.canvas.style.bottom = "0px";
    this.canvas.style.right = "0px";
    this.canvas.style.backgroundColor = "rgba(0,0,0,0.8)";

    document.body.appendChild(this.canvas);

    this.frame = 0;
    this._frame = -1;
  }

  update(d) {
    this.frame = d;

    if (d == 0) return;
    ++this._frame;
    const frame = this._frame % this.canvas.width;
    const frameRate = 1 / (d / ((1 / 60) * 1000));
    //
    if (this._frame % this.canvas.width == 0)
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = "rgba(2,247,38,0.5)";
    this.ctx.fillRect(
      frame,
      this.canvas.height,
      1,
      -this.canvas.height * 0.5 * frameRate
    );

    // this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
