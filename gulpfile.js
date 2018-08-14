const gulp = require('gulp');
const image = require('gulp-image');
const destination = 'build/';

// optimizing images
gulp.task('image', function () {
  gulp.src('static/img/**,*.{jpg,JPG,png}')
    .pipe(image())
    .pipe(gulp.dest(destination + 'img/'));
});

gulp.task('default', ['image']);