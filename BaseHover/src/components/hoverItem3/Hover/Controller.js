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
    this.name = "HoverClass";

    // this.$ele = $(ele);
    this.ele = ele;
    this.txtwrap = this.ele.querySelector(".hoverItem-txtwrap");
    this.txt01 = this.ele.querySelector(".hoverItem-txt_01");
    this.txt02 = this.ele.querySelector(".hoverItem-txt_02");

    this.isLock = false;
    this.isOpen = false;

    this.setup();
    this.setEvents();
  }

  setup() {}

  update() {}

  draw() {}

  reset() {
    gsap.set(this.txt01, {
      clearProps: "all",
    });
    gsap.set(this.txt02, {
      clearProps: "all",
    });
  }

  open() {
    this.isLock = true;
    this.isOpen = true;

    gsap.killTweensOf(this.txt01);
    if (this.tl) this.tl.kill();
    if (this.tl2) this.tl2.kill();
    this.reset();

    gsap.to(this.txtwrap, 0.5, {
      ease: "power3.out",
      y: -28,
    });

    setTimeout(() => {
      this.isLock = false;
    }, 1000);
  }

  close() {
    this.isLock = true;
    this.isOpen = false;

    gsap.killTweensOf(this.txt02);
    if (this.tl) this.tl.kill();
    if (this.tl2) this.tl2.kill();
    this.reset();

    gsap.to(this.txtwrap, 0.5, {
      ease: "power3.out",
      y: 0,
    });

    setTimeout(() => {
      this.isLock = false;
    }, 1000);
  }

  onEnterClose() {
    if (this.tl) this.tl.kill();
    gsap.killTweensOf(this.txt01);

    this.tl = gsap.timeline();
    this.tl
      .to(this.txt01, 0.3, {
        ease: "power3.out",
        y: -20,
      })
      .set(this.txt01, {
        y: 20,
      })
      .to(this.txt01, 0.3, {
        ease: "power3.out",
        y: 0,
      });
  }

  onLeaveClose() {
    if (this.tl) this.tl.kill();
    gsap.killTweensOf(this.txt01);

    this.tl = gsap.timeline();
    this.tl
      .to(this.txt01, 0.3, {
        ease: "power3.out",
        y: -20,
      })
      .set(this.txt01, {
        y: 20,
      })
      .to(this.txt01, 0.3, {
        ease: "power3.out",
        y: 0,
      });
  }

  onEnterOpen() {
    if (this.tl2) this.tl2.kill();
    gsap.killTweensOf(this.txt02);

    this.tl2 = gsap.timeline();
    this.tl2
      .to(this.txt02, 0.3, {
        ease: "power3.out",
        y: -20,
      })
      .set(this.txt02, {
        y: 20,
      })
      .to(this.txt02, 0.3, {
        ease: "power3.out",
        y: 0,
      });
  }

  onLeaveOpen() {
    if (this.tl2) this.tl2.kill();
    gsap.killTweensOf(this.txt02);

    this.tl2 = gsap.timeline();
    this.tl2
      .to(this.txt02, 0.3, {
        ease: "power3.out",
        y: -20,
      })
      .set(this.txt02, {
        y: 20,
      })
      .to(this.txt02, 0.3, {
        ease: "power3.out",
        y: 0,
      });
  }

  setEvents() {
    $(this.ele).on("mouseenter" + "." + this.name, () => {
      if (this.isLock) return;
      if (!this.isOpen) {
        this.onEnterClose();
      } else {
        this.onEnterOpen();
      }
    });
    $(this.ele).on("mouseleave" + "." + this.name, () => {
      if (this.isLock) return;
      if (!this.isOpen) {
        this.onLeaveClose();
      } else {
        this.onLeaveOpen();
      }
    });
    // $(this.ele).on("touchstart" + "." + this.name, () => {
    //   if (this.isLock) return;
    //   if (!this.isOpen) {
    //     this.onEnterClose();
    //   } else {
    //     this.onEnterOpen();
    //   }
    // });
    // $(this.ele).on("touchend" + "." + this.name, () => {
    //   if (this.isLock) return;
    //   if (!this.isOpen) {
    //     this.onLeaveClose();
    //   } else {
    //     this.onLeaveOpen();
    //   }
    // });
    $(this.ele).on("click" + "." + this.name, () => {
      if (this.isLock) return;
      if (!this.isOpen) {
        this.open();
      } else {
        this.close();
      }
    });
  }

  removeEvents() {
    $(this.ele).off("mouseenter." + this.name);
    $(this.ele).off("mouseleave." + this.name);
    // $(this.ele).off("touchstart." + this.name);
    // $(this.ele).off("touchend." + this.name);
    $(this.ele).off("click." + this.name);
  }

  destroy() {
    this.removeEvents();
  }
}
