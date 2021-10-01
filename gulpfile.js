const gulp = require("gulp");
const concatCss = require("gulp-concat-css");
const cssNano = require("gulp-cssnano")
const sass = require("gulp-sass");

gulp.task("compile", function () {
    return gulp
    .src("scss/*.scss")
    .pipe(sass())
    .pipe (concatCss("main.css"))
    .pipe(gulp.dest("css"));
});

gulp.task('minify', function minifyFunc() {
    return gulp.src('css/main.css')
      .pipe(cssnano())
      .pipe(gulp.dest('./css'));
  });

gulp.task("watch-scss", function () {
    gulp.watch("scss/*.scss", gulp.series("compile", "minify"));
});

gulp.task("default", gulp.series("compile", "watch-scss"), function () {});