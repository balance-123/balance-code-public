import { PerspectiveCamera } from "three";
export class Camera extends PerspectiveCamera {
  constructor(w: number, h: number) {
    super(50, w / h, 1, 5000);
  }

  onResize(w: number, h: number) {
    this.aspect = w / h;
    const fovRad = (this.fov / 2) * (Math.PI / 180);
    this.position.z = h / 2 / Math.tan(fovRad);
    this.updateProjectionMatrix();
  }
}
