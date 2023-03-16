import "./style.css";
import GUI from "lil-gui";
import gsap from "gsap";
//svgを取得
const svg = document.querySelector<SVGElement>("#svgAnimation")!;
const maskline = document.querySelector<SVGGeometryElement>(
  "#svgAnimationMaskLine"
)!;
const line = document.querySelector<SVGGeometryElement>("#svgAnimationLine")!;
let lineLength = 0;
const onResize = () => {
  svg.setAttribute("width", `${document.body.clientWidth}`);
  svg.setAttribute("height", `${document.body.clientHeight}`);

  svg.setAttribute(
    "viewBox",
    `0 0 ${document.body.clientWidth} ${document.body.clientHeight}`
  );

  drawLine();
};

//線を引く
const drawLine = () => {
  const d = `M100 100L${document.body.clientWidth - 100} 100L${
    document.body.clientWidth - 100
  } ${document.body.clientHeight * 0.5}L${100} ${
    document.body.clientHeight * 0.5
  }L100 ${document.body.clientHeight - 100}`;
  maskline.setAttribute("d", d);
  line.setAttribute("d", d);

  lineLength = maskline.getTotalLength();
  maskline.style.strokeDasharray = lineLength + "px";
  maskline.style.strokeDashoffset = lineLength + "px";
};

const resizeObserver = new ResizeObserver(onResize);
resizeObserver.observe(document.body);
const showAnimation = () => {
  gsap.to(maskline, 7, {
    strokeDashoffset: 0,
    ease: "expo.out",
  });
};

const hideAnimation = () => {
  gsap.to(maskline, 7, {
    strokeDashoffset: lineLength,
    ease: "expo.out",
  });
};

//debug
const gui = new GUI();
const target = {
  show: showAnimation,
  hide: hideAnimation,
};
gui.add(target, "show");
gui.add(target, "hide");
