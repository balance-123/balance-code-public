import gulp from "gulp";
import ejs from "gulp-ejs";
import rename from "gulp-rename";
import htmlmin from "gulp-htmlmin";

import config from "../config";

export function ejsBuild(cb) {
  return gulp
    .src(config.ejs.src)
    .pipe(ejs())
    .pipe(rename({ extname: ".html" }))
    .pipe(gulp.dest(config.ejs.dist));
}
