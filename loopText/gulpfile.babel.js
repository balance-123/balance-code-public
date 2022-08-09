import gulp from "gulp";
import config from "./config";

import { scss, scssMin } from "./tasks/sass";
import { ejsBuild } from "./tasks/ejs";

import { browser } from "./tasks/browser";

import { watch } from "./tasks/watch";

gulp.task(
  "default",
  gulp.series(gulp.parallel(scss, ejsBuild), gulp.series(browser, watch))
);

gulp.task("release", gulp.series(gulp.parallel(scssMin)));
