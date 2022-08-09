import gulp from "gulp";
import config from "../config";
const sass = require("gulp-sass")(require("sass"));
import glob from "gulp-sass-glob";
import cssmin from "gulp-cssmin";
export function scss(cb) {
  return gulp
    .src([config.css.src], { sourcemaps: true })
    .pipe(glob())
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(gulp.dest(config.css.dist, { sourcemaps: "./maps/" }));
}

export function scssMin(cb) {
  return gulp
    .src([config.css.src], { sourcemaps: false })
    .pipe(glob())
    .pipe(sass({ outputStyle: "expanded" }))
    .pipe(cssmin())
    .pipe(gulp.dest(config.css.dist));
}
