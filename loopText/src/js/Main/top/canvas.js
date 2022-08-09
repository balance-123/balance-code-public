const MARGIN = 17;
const HEIGHT = 28;
import gsap from "gsap";

const pixelRatio = window.devicePixelRatio;
export default class Canvas {
  constructor() {
    this.isLoaded = false;
    this.setup();
    this.setEvents();
  }

  async setup() {
    this.canvas = document.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");

    this.imgs = [];
    this.speed = {
      value: 0.5,
    };

    this.tl = gsap.timeline();

    const path = "./assets/resource/0";
    const imgPromise = [];
    this.imgWidth = 0;
    for (let index = 1; index <= 8; index++) {
      const p = new Promise((resolve) => {
        const img = new Image();
        img.src = path + index + ".png";
        img.onload = () => {
          const w =
            (img.naturalWidth / img.naturalHeight) * 28 * pixelRatio +
            17 * pixelRatio;
          this.imgWidth += w;
          resolve(img);
        };
      });
      imgPromise.push(p);
    }

    const imgs = await Promise.all(imgPromise);
    this.imgs = imgs;

    this.v = 0;

    this.onResize();

    this.isLoaded = true;
  }

  setEvents() {
    window.addEventListener("resize", this.onResize.bind(this));
    this.canvas.addEventListener("mouseenter", this.onHover.bind(this));
    this.canvas.addEventListener("mouseleave", this.onHoverOut.bind(this));
  }

  onHover() {
    if (this.tl) this.tl.kill();

    this.tl = gsap.timeline();
    console.log("hover!");
    this.tl.to(this.speed, 2, {
      value: 3,
      ease: "expo.out",
    });
  }

  onHoverOut() {
    if (this.tl) this.tl.kill();

    this.tl = gsap.timeline();
    this.tl.to(this.speed, 2, {
      value: 0.5,
      ease: "expo.out",
    });
  }

  update(diff) {
    const frameRate = Math.min(diff / ((1 / 60) * 1000), 1);
    if (!this.isLoaded) return;
    this.ctx.clearRect(
      -300 * pixelRatio,
      0,
      this.canvas.width + 300 * pixelRatio,
      this.canvas.height
    );

    this.v -= this.speed.value * pixelRatio * frameRate;

    this.v = (Math.abs(this.v) % this.imgWidth) * -1;
    this.draw();
  }

  draw() {
    this.ctx.fillStyle = "#bababa";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.drawImg(0, this.v);
  }

  drawImg(index = 0, x = 0) {
    const img = this.imgs[index % this.imgs.length];
    if (!img) return;
    const imgWidth = (img.naturalWidth / img.naturalHeight) * HEIGHT;

    const _x = x + imgWidth * pixelRatio + MARGIN * pixelRatio;

    if (_x >= 0 || x >= window.innerWidth * pixelRatio) {
      //   this.drawImg(index + 1, _x);

      const y = (this.canvas.height - HEIGHT * pixelRatio) / 2;
      this.ctx.drawImage(
        img,
        0,
        0,
        img.naturalWidth,
        img.naturalHeight,
        x,
        y,
        imgWidth * pixelRatio,
        HEIGHT * pixelRatio
      );
    }

    if (x < window.innerWidth * pixelRatio)
      this.drawImg((index % this.imgs.length) + 1, _x);
  }

  onResize() {
    this.canvas.width = window.innerWidth * pixelRatio;
    this.canvas.height = 75 * pixelRatio;
  }
}
