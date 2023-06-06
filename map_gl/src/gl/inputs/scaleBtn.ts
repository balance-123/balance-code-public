export const SCALE = {
  PLUS: "plus",
  MINUS: "minus",
  NONE: "none",
} as const;

export type SCALE = (typeof SCALE)[keyof typeof SCALE];
export class ScaleBtn {
  private eventHandler: {
    onClick: (e: MouseEvent) => void;
  } = {
    onClick: this.onClick.bind(this),
  };

  public amount: SCALE = SCALE.NONE;

  constructor(private btns: NodeListOf<HTMLElement>) {
    this.setEvents();
  }

  onClick(e: MouseEvent) {
    if (e.currentTarget && e.currentTarget instanceof HTMLElement) {
      this.amount =
        e.currentTarget.dataset.scale === "plus" ? SCALE.PLUS : SCALE.MINUS;
    }
  }

  reset() {
    this.amount = SCALE.NONE;
  }

  setEvents() {
    this.btns.forEach((el) => {
      el.addEventListener("click", this.eventHandler.onClick);
    });
  }
}
