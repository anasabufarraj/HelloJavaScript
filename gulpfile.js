const gulp = require('gulp');
const htmlMinify = require('gulp-htmlmin');
const cssNano = require('gulp-cssnano');
const minify = require('gulp-minify');
const imageOptimize = require('gulp-imagemin');
const svgOptimize = require('gulp-svgmin');
const destination = 'build';

// minify html
gulp.task('html', function() {
  return gulp.src('*.html')
    .pipe(htmlMinify({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest(destination));
});

// minify css
gulp.task('css', function() {
  return gulp.src('static/css/*.css')
    .pipe(cssNano())
    .pipe(gulp.dest(destination + '/static/css'));
});

// minify js
gulp.task('js', function() {
  gulp.src('js/script.js')
    .pipe(minify({
      ext:{
        src: '-debug.js',
        min: '-min.js'
      },
      noSource: true,
      ignoreFiles: ['-min.js']
    }))
    .pipe(gulp.dest(destination + '/js'))
});

// optimization 'jpg' and 'png'
gulp.task('image', function () {
  return gulp.src('static/img/*.{jpg,JPG,png}')
    .pipe(imageOptimize())
    .pipe(gulp.dest(destination + '/static/img'));
});

// optimization 'svg'
gulp.task('svg', function () {
  return gulp.src('static/img/*.svg')
    .pipe(svgOptimize())
    .pipe(gulp.dest(destination + '/static/img'));
});

// watch everything
gulp.task('watch', function() {
  gulp.watch('*.html', ['html']);
  gulp.watch('css/*.css', ['css']);
  gulp.watch('js/script.js', ['js']);
  gulp.watch('img/*.{jpg,JPG,png}', ['image']);
  gulp.watch('img/*.svg', ['svg']);
});

gulp.task('default', ['html', 'css', 'js', 'image', 'svg', 'watch']);