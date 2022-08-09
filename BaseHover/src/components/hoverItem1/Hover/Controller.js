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
    this.name = "HoverClass";
    this.setup();
    this.setEvents();
  }

  setup() {}

  update() {}

  draw() {}

  onEnter() {
    this.ele.classList.add("is-bounce");
  }

  onLeave() {
    this.ele.classList.remove("is-bounce");
  }

  toggleEnterLeave() {
    this.isLock = true;

    const tl = gsap.timeline();
    tl.add(() => {
      this.onEnter();
    }).add(() => {
      this.isLock = false;
      this.onLeave();
    }, 0.45);
  }

  setEvents() {
    $(this.ele).on("mouseenter." + this.name, this.onEnter.bind(this));
    $(this.ele).on("mouseleave." + this.name, this.onLeave.bind(this));

    $(this.ele).on("touchstart" + "." + this.name, () => {
      if (this.isLock) return;
      this.toggleEnterLeave();
    });
  }

  removeEvents() {
    $(this.ele).off("mouseenter." + this.name);
    $(this.ele).off("mouseleave." + this.name);
    $(this.ele).off("touchstart." + this.name);
    // $(this.ele).off("touchend." + this.name);
  }

  destroy() {
    this.removeEvents();
  }
}
