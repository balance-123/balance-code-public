import gsap from "gsap";
export default class Original {
  constructor() {
    this.setup();
    this.setEvents();
  }

  setup() {
    this.currentPosX = 0;
    this.speed = { value: 0.5 };
    this.v = 0;
    this.wrap = document.querySelector(".original");
    this.inner = this.wrap.querySelector(".original .loop_inner");
    this.resetPoint = this.inner.clientWidth * 0.5;
  }

  update(diff) {
    const frameRate = Math.min(diff / ((1 / 60) * 1000), 1);
    this.currentPosX += this.speed.value * frameRate;
    // this.v += (this.currentPosX - this.v) * 0.05;
    this.v = this.currentPosX;
    this.inner.style.transform = `translate3d(${-this.v}px, 0px, 1px)`;
    if (this.v > this.resetPoint) {
      this.v = 0;
      this.currentPosX = this.currentPosX - this.resetPoint;
    }
  }

  onEnter() {
    // this.speed.value = 3;

    if (this.tl) this.tl.kill();

    this.tl = gsap.timeline();

    this.tl.to(this.speed, 2, {
      value: 3,
      ease: "expo.out",
    });
  }

  onLeave() {
    // this.speed.value = 0.5;

    if (this.tl) this.tl.kill();

    this.tl = gsap.timeline();

    this.tl.to(this.speed, 2, {
      value: 0.5,
      ease: "expo.out",
    });
  }

  setEvents() {
    this.wrap.addEventListener("mouseenter", this.onEnter.bind(this));
    this.wrap.addEventListener("mouseleave", this.onLeave.bind(this));
  }
}
