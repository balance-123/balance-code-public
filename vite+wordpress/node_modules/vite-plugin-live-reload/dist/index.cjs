"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => src_default,
  liveReload: () => liveReload
});
module.exports = __toCommonJS(src_exports);
var import_chokidar = __toESM(require("chokidar"), 1);
var import_picocolors = __toESM(require("picocolors"), 1);
var import_path = __toESM(require("path"), 1);
function getShortName(file, root) {
  return file.startsWith(root + "/") ? import_path.default.posix.relative(root, file) : file;
}
var liveReload = (paths, config = {}) => ({
  name: "vite-plugin-live-reload",
  configureServer({ ws, config: { root: viteRoot, logger } }) {
    const root = config.root || viteRoot;
    const reload = (path2) => {
      ws.send({ type: "full-reload", path: config.alwaysReload ? "*" : path2 });
      if (config.log ?? true) {
        logger.info(
          import_picocolors.default.green(`page reload `) + import_picocolors.default.dim(getShortName(path2, root)),
          { clear: true, timestamp: true }
        );
      }
    };
    import_chokidar.default.watch(paths, { cwd: root, ignoreInitial: true, ...config }).on("add", reload).on("change", reload);
  }
});
var src_default = liveReload;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  liveReload
});
