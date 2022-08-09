//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------
import $ from "jquery";
import Base from "@/js/_MyLibs/Util/Base";
import gsap from "gsap";

export default class Controller extends Base {
  constructor() {
    super();

    this.name = "Hover";
    this.$target = $(".box02");
    this.$arrow = this.$target.find(".arrow");
    this.$bgWrap = this.$target.find(".bgWrap");
    this.$bg = this.$target.find(".bg");

    this.setup();
    this.setEvents();
  }

  setup() {}

  update() {}

  draw() {}

  onEnter() {
    if (this.tl) this.tl.kill();
    this.tl = gsap.timeline();

    this.tl
      // 枠
      .to(
        this.$bgWrap,
        1.2,
        {
          // width: "98%",
          // height: "98%",
          scale: 0.98,
          ease: "expo.out",
        },
        0.0
      )
      // bg
      .to(
        this.$bg,
        2.0,
        {
          scale: 1.08,
          ease: "expo.out",
        },
        0.0
      )
      // arrow
      .to(
        this.$arrow,
        1.2,
        {
          x: 15,
          ease: "power4.inOut",
        },
        0.0
      );
  }

  onLeave() {
    if (this.tl) this.tl.kill();
    this.tl = gsap.timeline();

    this.tl
      // 枠
      .to(
        this.$bgWrap,
        1.2,
        {
          // width: "100%",
          // height: "100%",
          scale: 1.0,
          ease: "expo.out",
        },
        0.0
      )
      // bg
      .to(
        this.$bg,
        1.2,
        {
          scale: 1.0,
          ease: "expo.out",
        },
        0.0
      )
      // arrow
      .to(
        this.$arrow,
        1.2,
        {
          x: 0,
          ease: "expo.out",
        },
        0.0
      );
  }

  setEvents() {
    this.$target.on("mouseenter." + this.name, this.onEnter.bind(this));
    this.$target.on("mouseleave." + this.name, this.onLeave.bind(this));
    this.$target.on("touchstart." + this.name, this.onEnter.bind(this));
    this.$target.on("touchend." + this.name, this.onLeave.bind(this));
  }

  removeEvents() {
    this.$target.off("mouseenter." + this.name);
    this.$target.off("mouseleave." + this.name);
    this.$target.off("touchstart." + this.name);
    this.$target.off("touchend." + this.name);
  }

  destroy() {
    this.removeEvents();
  }
}
