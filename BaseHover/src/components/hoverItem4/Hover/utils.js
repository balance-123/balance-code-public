// Map number x from range [a, b] to [c, d]
const map = (x, a, b, c, d) => ((x - a) * (d - c)) / (b - a) + c;

// Linear interpolation
const lerp = (a, b, n) => (1 - n) * a + n * b;

const distance = (x1, y1, x2, y2) => {
  var a = x1 - x2;
  var b = y1 - y2;

  return Math.hypot(a, b);
};

// Generate a random float.
const getRandomFloat = (min, max) =>
  (Math.random() * (max - min) + min).toFixed(2);

export { map, lerp, calcWinsize, getMousePos, distance, getRandomFloat };
