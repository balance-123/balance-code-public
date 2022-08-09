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

    // this.$ele = $(ele);
    this.ele = ele;
    this.txt = this.ele.querySelector(".hoverItem-txt");
    this.iconbg = this.ele.querySelector(".hoverItem-icon");
    this.plus = this.ele.querySelector(".hoverItem-iconimg");

    this.name = "HoverClass";

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
      // ボタン文字
      .to(
        this.txt,
        1.0,
        {
          opacity: 0.5,
          ease: "expo.out",
        },
        0
      )
      // ボタン背景
      .to(
        this.iconbg,
        1.0,
        {
          scale: 1.18,
          backgroundColor: "#fdd955",
          ease: "expo.out",
        },
        0
      )
      // ボタンplusマーク
      .to(
        this.plus,
        1.0,
        {
          rotation: 90,
          ease: "expo.out",
        },
        0
      );
  }

  onLeave() {
    if (this.tl) this.tl.kill();

    this.tl = gsap.timeline();

    this.tl
      // ボタン文字
      .to(
        this.txt,
        1.0,
        {
          opacity: 1,
          ease: "expo.out",
        },
        0
      )
      // ボタン背景
      .to(
        this.iconbg,
        1.0,
        {
          scale: 1,
          backgroundColor: "#efefef",
          ease: "expo.out",
        },
        0
      )
      // ボタンplusマーク
      .to(
        this.plus,
        1.0,
        {
          rotation: 0,
          ease: "expo.out",
        },
        0
      );
  }

  setEvents() {
    $(this.ele).on("mouseenter." + this.name, this.onEnter.bind(this));
    $(this.ele).on("mouseleave." + this.name, this.onLeave.bind(this));
    $(this.ele).on("touchstart." + this.name, this.onEnter.bind(this));
    $(this.ele).on("touchend." + this.name, this.onLeave.bind(this));
  }

  removeEvents() {
    $(this.ele).off("mouseenter." + this.name);
    $(this.ele).off("mouseleave." + this.name);
    $(this.ele).off("touchstart." + this.name);
    $(this.ele).off("touchend." + this.name);
  }

  destroy() {
    this.removeEvents();
  }
}
