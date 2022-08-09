// ------------------------------------------------------------
//
//  Base
//
// ------------------------------------------------------------

export default class Base {
  constructor() {
    this.name = "Base";

    this.isUEv = false; // update
    this.isREv = false; // resize
    this.isSEv = false; // scroll
    this.isMEv = false; // mouse
    this.prevent = true;

    this.isloop = true;
  }

  setup() {}

  update() {}

  draw() {}

  loop() {
    // if (this.isloop) {
    //   if (gb.up.frame % 2 == 0) {
    //     this.update();
    //     this.draw();
    //   }

    //   this.Timer = requestAnimationFrame(this.loop.bind(this));
    // }
    if (this.isloop) {
      // console.log('base loop');

      // if (gb.up.frame%2==0) {
      this.update();
      this.draw();
      // }

      this.Timer = requestAnimationFrame(this.loop.bind(this));
    }
  }

  onResize() {}

  onScroll() {}

  onMouseMove() {}

  setEvents() {
    var self = this;

    if (this.isUEv) this.loop();
    if (this.isREv)
      $(window).on("resize" + "." + this.name, this.onResize.bind(this));
    if (this.isSEv)
      $(window).on("scroll" + "." + this.name, this.onScroll.bind(this));
    if (this.isMEv)
      $(window).on("touchmove" + "." + this.name, function (e) {
        self.onMouseMove.call(self, e);
        if (self.prevent) e.preventDefault();
      });
  }

  removeEvents() {
    if (this.isUEv) {
      this.isloop = false;
      cancelAnimationFrame(this.Timer);
    }
    if (this.isREv) $(window).off("resize" + "." + this.name);
    if (this.isSEv) $(window).off("scroll" + "." + this.name);
    if (this.isMEv) $(window).off("touchmove" + "." + this.name);
  }

  onU() {
    this.isUEv = true;
    this.isloop = true;
    this.loop();
  }
  offU() {
    this.isloop = false;
    if (this.isUEv) cancelAnimationFrame(this.Timer);
  }
  offR() {
    if (this.isREv) $(window).off("resize" + "." + this.name);
  }
  offS() {
    if (this.isSEv) $(window).off("scroll" + "." + this.name);
  }
  offM() {
    if (this.isMEv) $(window).off("touchmove" + "." + this.name);
  }
}
