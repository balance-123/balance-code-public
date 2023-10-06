// src/index.ts
import chokidar from "chokidar";
import colors from "picocolors";
import path from "path";
function getShortName(file, root) {
  return file.startsWith(root + "/") ? path.posix.relative(root, file) : file;
}
var liveReload = (paths, config = {}) => ({
  name: "vite-plugin-live-reload",
  configureServer({ ws, config: { root: viteRoot, logger } }) {
    const root = config.root || viteRoot;
    const reload = (path2) => {
      ws.send({ type: "full-reload", path: config.alwaysReload ? "*" : path2 });
      if (config.log ?? true) {
        logger.info(
          colors.green(`page reload `) + colors.dim(getShortName(path2, root)),
          { clear: true, timestamp: true }
        );
      }
    };
    chokidar.watch(paths, { cwd: root, ignoreInitial: true, ...config }).on("add", reload).on("change", reload);
  }
});
var src_default = liveReload;
export {
  src_default as default,
  liveReload
};
