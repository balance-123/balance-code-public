import config from "../config";
import browserSync from "browser-sync";
export function browser(cb) {
  browserSync.init({
    port: 3000,
    server: {
      baseDir: config.root,
      index: "index.html",
    },
  });

  cb();
}

export function reload(cb) {
  browserSync.reload();
  cb();
}
