import {
  Matrix4,
  Mesh,
  MeshBasicMaterial,
  Object3D,
  PlaneGeometry,
  Scene,
  Texture,
} from "three";
import { TexLoader } from "../common/texLoader";
import { GL_CONFIG, SCALE_AMOUNT } from "../config";
import { Inputs } from "../inputs";
import { Pin } from "./pin";
export class Map extends Object3D {
  private mapSize: {
    w: number;
    h: number;
  } = {
    w: 0,
    h: 0,
  };

  private mapMesh: Mesh = new Mesh();
  private mapTexture: Texture = new Texture();
  private mapMatrix: Matrix4 = new Matrix4();
  private mapTranslateMatrix4: Matrix4 = new Matrix4();
  private mapScaleMatrix4: Matrix4 = new Matrix4();
  private inputs: Inputs = Inputs.Instance;
  private pins: Pin = new Pin();

  constructor(private scene: Scene) {
    super();

    this.add(this.mapMesh);
    this.add(this.pins);
    this.scene.add(this);
  }

  async createMap(w: number, h: number) {
    const loader = TexLoader.getInstance();

    const texture = await loader.customLoad(GL_CONFIG.mapImg);
    //containで表示
    const aspe = Math.min(w / texture.image.width, h / texture.image.height);
    this.mapSize = {
      w: texture.image.width * aspe,
      h: texture.image.height * aspe,
    };
    const g = new PlaneGeometry(this.mapSize.w, this.mapSize.h);

    this.mapTexture = texture;

    const m = new MeshBasicMaterial({
      map: this.mapTexture,
    });

    this.mapMesh.geometry = g;
    this.mapMesh.material = m;
    this.mapMesh.applyMatrix4(this.mapMatrix);

    this.add(this.mapMesh);

    await this.pins.init();
  }

  onResize(w: number, h: number) {
    const texture = this.mapTexture;
    const aspe = Math.min(w / texture.image.width, h / texture.image.height);
    this.mapSize = {
      w: texture.image.width * aspe,
      h: texture.image.height * aspe,
    };
    this.mapMesh.geometry.dispose();
    this.mapMesh.geometry = new PlaneGeometry(this.mapSize.w, this.mapSize.h);
  }

  onUpdate() {
    this.mapTranslateMatrix4.makeTranslation(
      this.inputs.inputAmount.move.x,
      this.inputs.inputAmount.move.y,
      0
    );
    const scaleWheel = this.inputs.inputAmount.scaleWheel;
    const scale = SCALE_AMOUNT[this.inputs.inputAmount.scale] * scaleWheel;

    this.mapScaleMatrix4.makeScale(scale, scale, 1);

    this.mapMatrix
      .multiply(this.mapTranslateMatrix4)
      .multiply(this.mapScaleMatrix4);

    this.applyMatrix4(this.mapMatrix);
    this.mapMatrix.identity();
    this.mapTranslateMatrix4.identity();
    this.mapScaleMatrix4.identity();
  }

  clickedPin(name: string) {
    this.pins.onClickPins(name);
  }

  get clickObjects(): Object3D[] {
    return this.pins.children;
  }
}
