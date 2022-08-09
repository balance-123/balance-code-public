self.addEventListener("message", (e) => {
  const posArray = e.data.posArray;
  const velArray = e.data.velArray;
  const num = Math.pow(posArray.length / 4, 1 / 2);
  console.log(num);
  for (let k = 0, kl = posArray.length; k < kl; k += 4) {
    // Position

    let x, y, z;
    x = 0;
    y = 0;
    z = 0;
    // console.log(x);
    posArray[k + 0] = x;
    posArray[k + 1] = y;
    posArray[k + 2] = z;
    posArray[k + 3] = k;
    // velArray[k + 2] = pai *;
    // velArray[k + 1] = Math.random() * 2 - 1;
    // velArray[k + 2] = Math.random() * 2 - 1;
    // velArray[k + 3] = Math.random() * 2 - 1;
  }
  postMessage([posArray, velArray]);
});
