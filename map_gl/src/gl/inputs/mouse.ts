export class Mouse {
  private eventHandler: {
    onPointerDown: (e: PointerEvent) => void;
    onPointerMove: (e: PointerEvent) => void;
    onPointerEnd: (e: PointerEvent) => void;
    onClick: (e: MouseEvent) => void;
  } = {
    onPointerDown: this.onPointerDown.bind(this),
    onPointerMove: this.onPointerMove.bind(this),
    onPointerEnd: this.onPointerEnd.bind(this),
    onClick: this.onClicked.bind(this),
  };

  private prevPostion: {
    x: number;
    y: number;
  } = {
    x: 0,
    y: 0,
  };
  public amount: {
    x: number;
    y: number;
  } = { x: 0, y: 0 };
  public clicked: {
    x: number;
    y: number;
    isClicked: boolean;
  } = { x: 0, y: 0, isClicked: false };
  private isDraged = false;

  constructor(private target: HTMLElement) {
    this.setEvetns();
  }

  onPointerDown(e: PointerEvent) {
    this.isDraged = true;
    this.prevPostion = {
      x: e.clientX,
      y: e.clientY,
    };
  }
  onPointerMove(e: PointerEvent) {
    if (!this.isDraged) return;
    this.amount = {
      x: e.clientX - this.prevPostion.x,
      y: this.prevPostion.y - e.clientY,
    };

    this.prevPostion = {
      x: e.clientX,
      y: e.clientY,
    };
  }
  onPointerEnd(e: PointerEvent) {
    console.log("end?");

    this.isDraged = false;
    this.amount = {
      x: 0,
      y: 0,
    };
  }

  onClicked(e: MouseEvent) {
    console.log(e);

    this.clicked = {
      x: (e.clientX / window.innerWidth) * 2 - 1,
      y: (e.clientY / window.innerHeight) * -2 + 1,
      isClicked: true,
    };
  }

  reset() {
    this.clicked.isClicked = false;
  }

  setEvetns() {
    this.target.addEventListener(
      "pointerdown",
      this.eventHandler.onPointerDown
    );

    this.target.addEventListener(
      "pointermove",
      this.eventHandler.onPointerMove
    );
    this.target.addEventListener("pointerup", this.eventHandler.onPointerEnd);
    this.target.addEventListener("pointerout", this.eventHandler.onPointerEnd);
    this.target.addEventListener("click", this.eventHandler.onClick);
  }
}
