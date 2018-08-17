const gulp = require('gulp');
const imgOptimization = require('gulp-imagemin');
const svgOptimization = require('gulp-svgmin');
const destination = './build';

// image optimization
gulp.task('image', function () {
  return gulp.src('./static/img/**,*.{jpg,JPG,png}')
    .pipe(imgOptimization())
    .pipe(gulp.dest(destination + '/img'));
});

// svg optimization
gulp.task('svg', function () {
  return gulp.src('./static/img/**,*.{svg}')
    .pipe(svgOptimization())
    .pipe(gulp.dest(destination + '/img'));
});

gulp.task('default', ['image', 'svg']);

