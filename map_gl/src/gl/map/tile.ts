import { Color, Mesh, MeshBasicMaterial, Object3D, PlaneGeometry } from "three";
import { TexLoader } from "../common/texLoader";
import { mapTileTypes } from "./mapTilesConfig";

export class Tile extends Object3D {
  private mapMesh: Mesh = new Mesh();
  private mapmaterial: MeshBasicMaterial = new MeshBasicMaterial({
    transparent: true,
    color: 0x000000,
  });
  constructor(public mapInfo: mapTileTypes) {
    super();
    this.mapMesh.material = this.mapmaterial;
    this.add(this.mapMesh);
  }

  async load(src: string) {
    const loader = TexLoader.getInstance();
    const texture = await loader.customLoad(src);
    this.mapmaterial.map = texture;
    this.mapmaterial.needsUpdate = true;
    this.mapmaterial.color = new Color(0xffffff);
  }

  onResize(
    size: number,
    position: {
      x: number;
      y: number;
    }
  ) {
    if (this.mapMesh.geometry) {
      this.mapMesh.geometry.dispose();
    }
    const g = new PlaneGeometry(size, size);
    if (!this.mapMesh) {
      this.mapMesh = new Mesh(g, this.mapmaterial);
      this.mapmaterial.needsUpdate = true;
    } else {
      this.mapMesh.geometry = g;
    }

    this.mapMesh.position.set(position.x, position.y, 0);
  }
}
