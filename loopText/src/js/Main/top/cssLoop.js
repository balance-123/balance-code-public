import gsap from "gsap";
export const cssLoop = () => {
  const wrap = document.querySelector(".css-loop");

  const items = wrap.querySelectorAll(".loop_item");

  let w = 0;

  items.forEach((item, i) => {
    if (i >= 8) return;
    w += item.clientWidth + 17;
  });
  const v = {
    t: w / (0.5 * 60),
  };
  wrap.style.setProperty("--width", w * -1 + "px");

  wrap.style.setProperty("--duration", v.t + "s");
  wrap.style.setProperty("--duration-hoverd", v.t / 3 + "s");
  const [animation] = document
    .getAnimations()
    .filter(({ animationName }) => animationName == "animation");
  wrap.addEventListener("mouseenter", (e) => {
    gsap.to(animation, 2, {
      playbackRate: 6,
      ease: "expo.out",
    });
  });

  wrap.addEventListener("mouseleave", (e) => {
    gsap.to(animation, 2, {
      playbackRate: 1,
      ease: "expo.out",
    });
  });

  document.addEventListener("animationend", () => {
    console.log("end");
  });
};
