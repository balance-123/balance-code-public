import Original from "./original";
import Update from "../../Events/update";
import { cssLoop } from "./cssLoop";

import Canvas from "./canvas";

import GUI from "lil-gui";

let min = 10000;
let max = 0;

const config = {
  originalUpdate: true,
  canvasUpdate: true,
  reset() {
    min = 10000;
    max = 0;
  },
};

const performanceDom = document.getElementById("js-perfomance");

const gui = new GUI();

gui.add(config, "originalUpdate").onChange((value) => {
  document.querySelector(".original").style.pointerEvents = value
    ? "auto"
    : "none";
});
gui.add(config, "canvasUpdate").onChange((value) => {
  document.querySelector(".canvas-loop").style.pointerEvents = value
    ? "auto"
    : "none";
});
gui.add(config, "reset");
const updater = new Update();
cssLoop();
const original = new Original();
const canvas = new Canvas();

updater.on((diff) => {
  if (config.originalUpdate) original.update(diff);
  if (config.canvasUpdate) canvas.update(diff);

  // performanceDom.textContent = `${diff}`;
});
