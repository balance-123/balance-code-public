import { WebGLRenderer } from "three";
import { GL_CONFIG } from "./config";
export class Renderer extends WebGLRenderer {
  constructor(canvas: HTMLCanvasElement) {
    super({
      antialias: true,
      canvas,
      alpha: true,
    });

    this.setPixelRatio(GL_CONFIG.pixelRatio);
    // this.setSize(wrap.clientWidth, wrap.clientHeight);
  }

  onResize(w: number, h: number) {
    this.setSize(w, h);
  }
}
