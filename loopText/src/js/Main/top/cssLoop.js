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
  // wrap.style.setProperty("--width-hoverd", w * -1 + "px");
  wrap.style.setProperty("--duration", v.t + "s");
  wrap.style.setProperty("--duration-hoverd", v.t / 3 + "s");
  const [animation] = document
    .getAnimations()
    .filter(({ animationName }) => animationName == "animation");
  wrap.addEventListener("mouseenter", (e) => {
    // animation.currentTime = 0;
    // const per =
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
    // animation.currentTime = 0;
    // const per = animation.currentTime % (v.t * 1000);
    // animation.currentTime = per;
    // gsap.to(wrap, 2, {
    //   "--duration": w / (0.5 * 60) + "s",
    //   ease: "expo.out",
    // });
    // // gsap.to(v, 2, {
    // //   t: w / (0.5 * 60),
    // //   ease: "expo.out",
    // //   onUpdate() {
    // //     wrap.style.setProperty("--duration", v.t + "s");
    // //   },
    // // });
  });

  document.addEventListener("animationend", () => {
    console.log("end");
  });
};
