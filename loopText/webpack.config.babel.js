const { Command } = require("commander");
const program = new Command();
program.option("--mode <type>", "mode");
program.option("--watch", "watch");
// program.parse();

program.parse(process.argv);

const options = program.opts();

const MODE = options.watch ? "development" : options.mode;
import config from "./config";
const path = require("path");
const enabledSourceMap = MODE == "development";

const babeloptions =
  MODE == "development"
    ? {
        presets: [["@babel/preset-env", { modules: false }]],
        plugins: [
          "@babel/plugin-transform-async-to-generator",
          "@babel/plugin-transform-runtime",
        ],
      }
    : {
        presets: [
          ["minify", { builtIns: false, evaluate: false, mangle: false }],
        ],
        plugins: [
          "transform-remove-console",
          "@babel/plugin-transform-async-to-generator",
          "@babel/plugin-transform-runtime",
        ],
      };
module.exports = {
  mode: MODE,
  entry: {
    app: [config.js.src + "app.js"],
  },
  devtool: enabledSourceMap ? "inline-source-map" : false,
  output: {
    path: path.resolve(__dirname, config.js.dist),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.(es6|js)$/,
        use: [
          {
            loader: "babel-loader",
            options: babeloptions,
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(glsl|frag|vert|vs|fs)$/,
        exclude: /node_modules/,
        use: ["glslify-import-loader", "raw-loader", "glslify-loader"],
      },
    ],
  },
  resolve: {
    modules: [
      path.resolve(__dirname, "./"),
      path.join(path.resolve(""), "node_modules"),
    ],
    alias: {
      "@": path.resolve(__dirname, config.js.src),
    },
    extensions: [".js", ".json", ".wasm", ".es6"],
  },
};
