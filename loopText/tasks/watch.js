import gulp from "gulp";
import config from "../config";

import { ejsBuild } from "./ejs";
import { scss } from "./sass";

import { reload } from "./browser";

export function watch(cb) {
  gulp.watch(config.watch.ejs, ejsBuild);
  gulp.watch(config.watch.css, scss);
  gulp.watch(
    config.watch.reload,
    gulp.series(function (done) {
      reload(done);
    })
  );
}
