import { Vector2, Vector3 } from "three";
import { SCALE } from "./inputs/scaleBtn";

export const GL_CONFIG = {
  pixelRatio: window.devicePixelRatio,
  mapImg: "./map.jpg",
  pinURL: "./pin.png",
  pinSize: new Vector2(20, 20),
} as const;

export const PIN_DATA = [
  {
    position: new Vector3(200, 10, 0),
    id: 1,
  },
  {
    position: new Vector3(100, 100, 0),
    id: 2,
  },
] as const;

export const SCALE_AMOUNT = {
  [SCALE.NONE]: 1,
  [SCALE.PLUS]: 2,
  [SCALE.MINUS]: 0.5,
};
