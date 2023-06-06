import { Vector3 } from "three";
import { Mouse } from "./mouse";
import { SCALE, ScaleBtn } from "./scaleBtn";
import { Scroller } from "./scroll";

export class Inputs {
  private position: Vector3 = new Vector3();
  private rotation: Vector3 = new Vector3();
  private scale: Vector3 = new Vector3();

  private static _Instance: Inputs;

  private inputer: {
    mouse: Mouse;
    scaleBtn: ScaleBtn;
    scroller: Scroller;
  };

  public inputAmount: {
    move: {
      x: number;
      y: number;
    };
    scale: SCALE;
    clicked: {
      x: number;
      y: number;
      isClicked: boolean;
    };
    scaleWheel: number;
  } = {
    move: {
      x: 0,
      y: 0,
    },
    scale: SCALE.NONE,
    clicked: {
      x: 0,
      y: 0,
      isClicked: false,
    },
    scaleWheel: 1,
  };
  private constructor(
    private target: HTMLElement,
    private scaleBtns: NodeListOf<HTMLElement>
  ) {
    this.inputer = {
      mouse: new Mouse(target),
      scaleBtn: new ScaleBtn(scaleBtns),
      scroller: new Scroller(target),
    };
  }

  static get Instance(): Inputs {
    if (!Inputs._Instance) {
      const target = document.querySelector("canvas")!;
      const scalebtns = document.querySelectorAll("div.scaleBtn")!;
      Inputs._Instance = new Inputs(target, scalebtns);
    }

    return Inputs._Instance;
  }

  update() {
    this.inputAmount = {
      move: {
        x: this.inputer.mouse.amount.x,
        y: this.inputer.mouse.amount.y,
      },
      scale: this.inputer.scaleBtn.amount,
      clicked: this.inputer.mouse.clicked,
      scaleWheel: this.inputer.scroller.amount,
    };
  }

  //frameごとにリセットする
  resetFrame() {
    this.inputer.scaleBtn.reset();
    this.inputer.mouse.reset();
  }
}
