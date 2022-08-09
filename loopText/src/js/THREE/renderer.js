import { WebGLRenderer, sRGBEncoding } from "three";

export default class Renderer extends WebGLRenderer {
  constructor(props) {
    super(props);
    this.outputEncoding = sRGBEncoding;
    this.physicallyCorrectLights = true;
    this.autoClear = true;
  }

  onResize(width, height) {
    this.setSize(width, height);
    this.setPixelRatio(window.devicePixelRatio);
  }
}
