const root = "./dist/";
const src = "./src/";
const path = require("path");

const config = {
  root,
  src,
  css: {
    src: path.join(src, "css", "style.scss"),
    dist: path.join(root, "assets", "css/"),
  },
  ejs: {
    src: path.join(src, "ejs", "pages", "**", "*.ejs"),
    dist: path.join(root),
  },

  js: {
    src: path.join(src, "js/"),
    dist: path.join(root, "assets", "js"),
  },

  watch: {
    ejs: path.join(src, "ejs", "**/*"),
    css: path.join(src, "css", "**/*"),
    reload: path.join(root, "**/*"),
  },
};

// console.log(config);
export default config;
