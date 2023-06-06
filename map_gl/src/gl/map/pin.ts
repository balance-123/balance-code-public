import {
  Mesh,
  MeshBasicMaterial,
  Object3D,
  PlaneGeometry,
  Vector3,
} from "three";
import { TexLoader } from "../common/texLoader";
import { GL_CONFIG, PIN_DATA } from "../config";
type PIN = {
  position: Vector3;
  onClick: () => void;
  id: number;
  mesh: Mesh;
  name: string;
};
export class Pin extends Object3D {
  private pins: PIN[] = PIN_DATA.map((e) => {
    return {
      position: e.position,
      onClick: () => {
        alert(e.id);
      },
      id: e.id,
      mesh: new Mesh(),
      name: "",
    };
  });
  constructor() {
    super();
  }

  async init() {
    const tex = await TexLoader.getInstance().customLoad(GL_CONFIG.pinURL);

    const m = new MeshBasicMaterial({
      map: tex,
      transparent: true,
    });
    this.pins = this.pins.map((pin) => {
      const mesh = new Mesh(
        new PlaneGeometry(GL_CONFIG.pinSize.x, GL_CONFIG.pinSize.y),
        m
      );
      mesh.name = `pin-${pin.id}`;
      mesh.position.copy(pin.position);

      return {
        position: pin.position,
        onClick: pin.onClick,
        id: pin.id,
        mesh,
        name: `pin-${pin.id}`,
      };
    });

    this.add(...this.pins.map((p) => p.mesh));
  }

  onClickPins(name: string) {
    const pin = this.pins.find((pin) => pin.name === name);
    if (pin) pin.onClick();
  }
}
