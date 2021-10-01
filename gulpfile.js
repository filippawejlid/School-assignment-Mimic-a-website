var gulp = require("gulp");
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');
var sass = require("gulp-sass");

gulp.task('sass', function(){
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'))
});
gulp.task("watch-scss", function () {
gulp.watch("scss/*.scss", gulp.series("sass"));
});
    
gulp.task("default", gulp.series("sass", "watch-scss"), function () {});

gulp.task('minify', function(){
    return gulp.src('css/main.css')
        .pipe(cssnano())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('css'))
});

gulp.task('watch', function(){
    gulp.watch('scss/*.scss', ['sass']);
    gulp.watch('css/**/*.css', ['minify']);
});




// var gulp = require("gulp");
// const concatCss = require("gulp-concat-css");
// const cssNano = require("gulp-cssnano")
// var sass = require("gulp-sass");

// gulp.task("compile", function () {
//     return gulp
//     .src("scss/*.scss")
//     .pipe(sass())
//     .pipe (concatCss("main.css"))
//     .pipe(gulp.dest("css"));
// });

// gulp.task('minify', function minifyFunc() {
//     return gulp.src('./css/main.css')
//       .pipe(cssNano())
//       .pipe (concatCss("main.css"))
//       .pipe(gulp.dest('css'));
//   });

// gulp.task("watch-scss", function () {
//     gulp.watch("scss/*.scss", gulp.series("compile", "minify"));
// });

// gulp.task("default", gulp.series("compile", "watch-scss"), function () {});
