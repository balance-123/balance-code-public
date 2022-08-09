//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------
import $ from "jquery";
import Base from "@/js/_MyLibs/Util/Base";
import gsap from "gsap";

export default class Controller extends Base {
  constructor(ele) {
    super();
    this.name = "HoverItem";
    this.$ele = $(ele);
    this.setup();
    this.setEvents();
  }

  setup() {}

  update() {}

  draw() {}

  show() {
    const tl = gsap.timeline();
    const offset = 66;
    tl
      //hide
      .to(this.$ele.find("polyline"), 0.75, {
        drawSVG: 0,
        ease: "expo.out",
      })
      //show
      .to(this.$ele.find("polyline"), 0.75, {
        startAt: {
          "stroke-dashoffset": -parseFloat(offset),
        },
        drawSVG: "100%",
        ease: "expo.out",
      });

    return tl;
  }

  hide(progress) {
    const tl = gsap.timeline();

    return tl;
  }

  onEnter() {
    // console.log(this.tl);
    // this.tl.kill();
    if (this.tl) this.tl.kill();
    this.tl = gsap.timeline();

    this.tl.add(this.show());
  }

  onLeave() {
    // const progress = this.tl.progress();
    // this.tl.kill();
    // this.tl = gsap.timeline();
    // this.tl.add(this.hide(progress));
  }

  setEvents() {
    this.$ele.on("mouseenter." + this.name, this.onEnter.bind(this));
    this.$ele.on("mouseleave." + this.name, this.onLeave.bind(this));
    this.$ele.on("touchstart." + this.name, this.onEnter.bind(this));
    this.$ele.on("touchend." + this.name, this.onLeave.bind(this));
  }

  removeEvents() {
    this.$ele.off("mouseenter." + this.name);
    this.$ele.off("mouseleave." + this.name);
    this.$ele.off("touchstart." + this.name);
    this.$ele.off("touchend." + this.name);
  }

  destroy() {
    this.removeEvents();
  }
}
