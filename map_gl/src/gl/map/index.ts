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
import { MapSize, mapTiles, mapTilesNumber } from "./mapTilesConfig";
import { Pin } from "./pin";
import { Tile } from "./tile";

const secondWait = (second: number) => {
  const r = new Promise((resolve) => {
    setTimeout(resolve, second);
  });

  return r;
};
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
  private tiles: Tile[] = mapTiles.map((info) => new Tile(info));

  constructor(private scene: Scene) {
    super();

    // this.add(this.mapMesh);
    this.add(...this.tiles);
    this.add(this.pins);
    this.scene.add(this);
  }

  async createMap(w: number, h: number) {
    //containで表示
    const aspe = Math.min(w / MapSize, h / MapSize);
    this.mapSize = {
      w: MapSize * aspe,
      h: MapSize * aspe,
    };
    this.loadCustom();
    // const loader = this.tiles
    //   .filter((tile) => tile.mapInfo.src)
    //   .map((tile) => {
    //     return tile.load(tile.mapInfo.src!);
    //   });

    const size = this.mapSize.w / mapTilesNumber[0];
    this.tiles.forEach((tile) => {
      tile.onResize(size, {
        x: tile.mapInfo.position.x * size + size * 0.5 - size * 2,
        y: size * 2 + -size * 0.5 - tile.mapInfo.position.y * size,
      });
    });

    await this.pins.init();
  }

  async loadCustom() {
    const needload = this.tiles.filter((tile) => tile.mapInfo.src);
    for (let index = 0; index < needload.length; index++) {
      const tile = needload[index];
      await secondWait(index * 100);
      await tile.load(tile.mapInfo.src!);
    }

    //   .map((tile) => {
    //     return tile.load(tile.mapInfo.src!);
    //   });
  }

  onResize(w: number, h: number) {
    const aspe = Math.min(w / MapSize, h / MapSize);
    this.mapSize = {
      w: MapSize * aspe,
      h: MapSize * aspe,
    };
    const size = this.mapSize.w / mapTilesNumber[0];
    this.tiles.forEach((tile) =>
      tile.onResize(size, {
        x: tile.mapInfo.position.x * size + size * 0.5 - size * 2,
        y: size * 2 + -size * 0.5 - tile.mapInfo.position.y * size,
      })
    );
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
