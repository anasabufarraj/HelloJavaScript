const gulp = require('gulp');
// const htmlMinify = require('gulp-htmlmin');
const cssNano = require('gulp-cssnano');
// const minify = require('gulp-minify');
const imageOptimize = require('gulp-imagemin');
const svgOptimize = require('gulp-svgmin');
const rev = require('gulp-rev');
// const revReplace = require('gulp-rev-replace');
// const revDel = require('rev-del');
const destination = 'build';
// const limbo = 'limbo';

// minify html
// gulp.task('html', function () {
//   return gulp.src('*.html')
//     .pipe(htmlMinify({
//       collapseWhitespace: true,
//       removeComments: true
//     }))
//     .pipe(gulp.dest(destination));
// });

// minify css
// gulp.task('css', function () {
//   return gulp.src('css/style.css')
//     .pipe(cssNano())
//     .pipe(gulp.dest(destination + '/css'));
// });

// minify js
gulp.task('js', function () {
  gulp.src('js/script.js')
    .pipe(minify({
      ext:{
        src: '-debug.js',
        min: '.js'
      },
      noSource: true,
      ignoreFiles: ['-min.js']
    }))
    .pipe(gulp.dest(destination + '/script'))
});

// optimization 'jpg' and 'png'
gulp.task('image', function () {
  return gulp.src('img/*.{jpg,JPG,png}')
    .pipe(imageOptimize())
    .pipe(gulp.dest(destination + '/img'));
});

// optimization 'svg'
gulp.task('svg', function () {
  return gulp.src('img/*.svg')
    .pipe(svgOptimize())
    .pipe(gulp.dest(destination + '/img'));
});

// hashing filenames based on content
// gulp.task('revision', ['html', 'css', 'js'], function () {
//   return gulp.src('*.html, css/*.css, js/*.js}')
//     .pipe(rev())
//     .pipe(gulp.dest(destination))
    // .pipe(rev.manifest())
    // .pipe(revDel({destination: destination}))
    // .pipe(gulp.dest(limbo))
// });

// replace URLs with hashed ones based on rev manifest.
// must run immediately after 'revision'
// gulp.task('revReplace', ['revision'], function () {
//   let manifest = gulp.src(destination + 'rev-manifest.json');
//   return gulp.src(limbo + '*.html')
//     .pipe(revReplace({manifest: manifest}))
//     .pipe(gulp.dest(destination))
// });

// watch everything
gulp.task('watch', function () {
  gulp.watch('*.html, css/*.css, js/*.js');
  gulp.watch('img/*.{jpg,JPG,png}', ['image']);
  gulp.watch('img/*.svg', ['svg']);
});

// gulp.task('default', ['revision', 'watch']);
// gulp.task('default', ['revReplace', 'image', 'svg', 'watch']);