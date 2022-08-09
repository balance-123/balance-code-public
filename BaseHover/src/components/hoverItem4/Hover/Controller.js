//--------------------------------------------------
//
//  Controller
//
//--------------------------------------------------

import Base from "@/js/_MyLibs/Util/Base";
import gsap from "gsap";
import $ from "jquery";
import { lerp, distance, getRandomFloat } from "./utils.js";

export default class Controller extends Base {
  constructor(el) {
    super();
    this.isUEv = true; // update
    this.name = "MagnetBtn";

    // DOM
    this.btn = el;
    this.txtwrap = this.btn.querySelector(".magnetButton-txtwrap");
    this.txt = this.btn.querySelector(".magnetButton-txt");
    this.decowrap = this.btn.querySelector(".magnetButton-decowrap");
    this.deco = this.decowrap.querySelector(".magnetButton-deco");

    // amounts the button will translate/scale
    this.renderedStyles = {
      tx: { previous: 0, current: 0, amt: 0.1 },
      ty: { previous: 0, current: 0, amt: 0.1 },
      scale: { previous: 1, current: 1, amt: 0.2 },
    };

    this.mousepos = { x: 0, y: 0 };
    this.isHover = false;

    this.setup();
    this.setEvents();
  }

  setup() {}

  onMouseMove(e) {
    this.mousepos = { x: e.clientX, y: e.clientY };
  }

  update() {
    this.rect = this.btn.getBoundingClientRect();
    this.distanceToTrigger = this.rect.width * 0.8;

    // calculate the distance from the mouse to the center of the button
    const distanceMouseButton = distance(
      this.mousepos.x,
      this.mousepos.y,
      this.rect.left + this.rect.width / 2,
      this.rect.top + this.rect.height / 2
    );

    // new values for the translations and scale
    let x = 0;
    let y = 0;

    if (distanceMouseButton < this.distanceToTrigger) {
      if (!this.isHover) {
        this.enter();
      }
      x =
        (this.mousepos.x +
          window.scrollX -
          (this.rect.left + this.rect.width / 2)) *
        0.2;
      y = (this.mousepos.y - (this.rect.top + this.rect.height / 2)) * 0.2;
    } else if (this.isHover) {
      this.leave();
    }

    // console.log(
    //   this.mousepos.x,
    //   this.mousepos.y,
    //   this.rect.left + this.rect.width / 2,
    //   this.rect.top + this.rect.height / 2 - window.scrollY
    // );

    this.renderedStyles["tx"].current = x;
    this.renderedStyles["ty"].current = y;

    for (const key in this.renderedStyles) {
      this.renderedStyles[key].previous = lerp(
        this.renderedStyles[key].previous,
        this.renderedStyles[key].current,
        this.renderedStyles[key].amt
      );
    }

    this.btn.style.transform = `translate3d(${this.renderedStyles["tx"].previous}px, ${this.renderedStyles["ty"].previous}px, 0)`;
    this.txtwrap.style.transform = `translate3d(${
      -this.renderedStyles["tx"].previous * 0.2
    }px, ${-this.renderedStyles["ty"].previous * 0.2}px, 0)`;
    this.decowrap.style.transform = `scale(${this.renderedStyles["scale"].previous})`;
  }

  kill() {
    gsap.killTweensOf(this.deco);
    gsap.killTweensOf(this.txt);
  }

  enter() {
    this.isHover = true;
    this.renderedStyles["scale"].current = 0.85;

    this.kill();

    const tl = gsap.timeline();
    tl.to(
      this.deco,
      0.5,
      {
        ease: "Power3.easeOut",
        startAt: { y: "75%" },
        y: "0%",
      },
      0
    ).to(
      this.txt,
      0.4,
      {
        ease: "Expo.easeOut",
        color: "#fff",
      },
      0
    );
  }

  leave() {
    this.isHover = false;
    this.renderedStyles["scale"].current = 1;

    this.kill();

    const tl = gsap.timeline();
    tl.to(
      this.deco,
      0.4,
      {
        ease: "Power3.easeOut",
        y: "-75%",
      },
      0
    ).to(
      this.txt,
      0.4,
      {
        ease: "Expo.easeOut",
        color: "#393939",
      },
      0
    );
  }

  setEvents() {
    super.setEvents();

    $(window).on("mousemove" + "." + this.name, (e) => {
      this.onMouseMove(e);
    });
  }

  removeEvents() {
    $(window).off("mousemove" + "." + this.name);
  }

  destroy() {
    this.removeEvents();
  }
}
