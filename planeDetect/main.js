import "./style.css";
const init = async () => {
  const session = await navigator.xr.requestSession("immersive-ar", {
    requiredFeatures: ["plane-detection"],
  });

  console.log(session);
};

const enter = document.getElementById("enter");
enter.addEventListener("click", init);
