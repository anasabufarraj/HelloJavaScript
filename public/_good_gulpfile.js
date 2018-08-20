// const gulp = require('gulp');
// const htmlMinify = require('gulp-htmlmin');
// const cssNano = require('gulp-cssnano');
// const minify = require('gulp-minify');
// const rev = require('gulp-rev');
// const limbo = 'limbo';
// const source = 'public';
// const destination = 'build';
//
// // minify HTML
// gulp.task('html', function () {
//   return gulp.src(source + '/*.html')
//     .pipe(htmlMinify({
//       collapseWhitespace: true,
//       removeComments: true
//     }))
//     .pipe(gulp.dest(limbo));
// });
//
// // minify CSS with cssnano
// gulp.task('css', function () {
//   return gulp.src(source + '/styles/style.css')
//     .pipe(cssNano())
//     .pipe(gulp.dest(limbo + '/styles'));
// });
//
// // minify JavaScript with terser
// gulp.task('js', function () {
//   gulp.src(source + '/scripts/**/*.js')
//     .pipe(minify({
//       ext:{
//         src: '-debug.js',
//         min: '.js'
//       },
//       noSource: true,
//       ignoreFiles: ['-min.js']
//     }))
//     .pipe(gulp.dest(limbo + '/scripts'))
// });
//
// // revision files with hash identifier based on content
// gulp.task('revision', ['html', 'css', 'js'], function () {
//   return gulp.src(limbo + '/**/*.{html,css,js}')
//     .pipe(rev())
//     .pipe(gulp.dest(destination))
//     .pipe(rev.manifest())
//     // .pipe(revDel({destination: destination}))
//     .pipe(gulp.dest(destination))
// });
//
// // font files
// gulp.task('fonts', function () {
//   return gulp.src(source + '/assets/fonts/**')
//     .pipe(gulp.dest(destination + '/assets/fonts'));
// });
//
// // .htaccess files
// gulp.task('hta', function () {
//   return gulp.src(source + '/.htaccess')
//     .pipe(gulp.dest(destination));
// });
//
// gulp.task('default', ['revision', 'fonts', 'hta']);
