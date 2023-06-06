import { Renderer } from "./renderer";
import { Camera } from "./camera";
import { Raycaster, Scene, Vector2 } from "three";
import { Map } from "./map";
import { Inputs } from "./inputs";
const raycasterV2 = new Vector2();
export class GL {
  private renderer: Renderer;
  private camera: Camera;
  private scene: Scene;
  private map: Map;
  private inputs: Inputs = Inputs.Instance;
  private isLoaded: boolean = false;
  private raycaster: Raycaster = new Raycaster();
  constructor(private canvas: HTMLCanvasElement, private wrap: HTMLElement) {
    this.renderer = new Renderer(canvas);
    this.camera = new Camera(wrap.clientWidth, wrap.clientHeight);
    this.scene = new Scene();

    this.map = new Map(this.scene);
  }

  async init() {
    await this.map.createMap(this.wrap.clientWidth, this.wrap.clientHeight);
    this.isLoaded = true;
  }

  onResize() {
    this.renderer.onResize(this.wrap.clientWidth, this.wrap.clientHeight);
    this.camera.onResize(this.wrap.clientWidth, this.wrap.clientHeight);
    if (this.isLoaded)
      this.map.onResize(this.wrap.clientWidth, this.wrap.clientHeight);
  }

  onUpdate(t: number) {
    if (this.isLoaded) {
      this.inputs.update();
      if (this.inputs.inputAmount.clicked.isClicked) {
        raycasterV2.set(
          this.inputs.inputAmount.clicked.x,
          this.inputs.inputAmount.clicked.y
        );
        this.raycaster.setFromCamera(raycasterV2, this.camera);
        const intersect = this.raycaster.intersectObjects(
          this.map.clickObjects
        );
        if (intersect && intersect.length) {
          this.map.clickedPin(intersect[0].object.name);
        }
      }
      this.map.onUpdate();
      this.inputs.resetFrame();
    }
    this.renderer.render(this.scene, this.camera);
  }
}
