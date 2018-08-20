const gulp = require('gulp');
const htmlMinify = require('gulp-htmlmin');
const cssNano = require('gulp-cssnano');
const minify = require('gulp-minify');
const imageMin = require('gulp-imagemin');
const svgMin = require('gulp-svgmin');
const rev = require('gulp-rev');
const revReplace = require('gulp-rev-replace');
const revDel = require('rev-del');
const temp = 'temp/';
const source = 'public/';
const destination = 'build/';

// minify HTML
gulp.task('html', function () {
  return gulp.src(source + '*.html')
    .pipe(htmlMinify({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest(temp));
});

// minify CSS with cssnano
gulp.task('css', function () {
  return gulp.src(source + 'styles/style.css')
    .pipe(cssNano())
    .pipe(gulp.dest(temp + 'styles'));
});

// minify JavaScript with terser
gulp.task('js', function () {
  gulp.src(source + 'scripts/**/*.js')
    .pipe(minify({
      ext:{
        src: '-debug.js',
        min: '.js'
      },
      noSource: true,
      ignoreFiles: ['-min.js']
    }))
    .pipe(gulp.dest(temp + 'scripts'))
});

// optimize 'jpg' and 'png' images
gulp.task('image', function () {
  return gulp.src(source + '/assets/**/*.{jpg,jpeg,png}')
    .pipe(imageMin())
    .pipe(gulp.dest(temp + '/assets'));
});

// optimization 'svg' graphics
gulp.task('svg', function () {
  return gulp.src(source + '/assets/**/*.svg')
    .pipe(svgMin())
    .pipe(gulp.dest(temp + '/assets'));
});

// font files
gulp.task('fonts', function () {
  return gulp.src(source + 'assets/fonts/**')
    .pipe(gulp.dest(destination + 'assets/fonts'));
});

// .htaccess files
gulp.task('htaccess', function () {
  return gulp.src(source + '.htaccess')
    .pipe(gulp.dest(destination));
});

// favicon files
gulp.task('favicon', function () {
  return gulp.src(source + 'favicon.ico')
    .pipe(gulp.dest(destination));
});

// revision files with hash identifier based on content
gulp.task('revision', ['html', 'css', 'js', 'image', 'svg'], function () {
  return gulp.src(temp + '**/*.{css,js,jpg,jpeg,png,svg}')
    .pipe(rev())
    .pipe(gulp.dest(destination))
    .pipe(rev.manifest())
    .pipe(revDel({dest: destination}))
    .pipe(gulp.dest(destination))
});

// find and replace all occurrences of new filenames.
// based on manifest.json file
// must run immediately after 'revision'
gulp.task('revReplace', ['revision'], function () {
  let manifest = gulp.src(destination + 'rev-manifest.json');
  return gulp.src(temp + '**/*.html')
    .pipe(revReplace({manifest: manifest}))
    .pipe(gulp.dest(destination))
});


// // watch everything
gulp.task('watch', function () {
  gulp.watch(source + '**/*.{html,css,js,jpg,jpeg,png,svg}', ['revReplace']);
  gulp.watch(source + '/fonts', ['htaccess']);
  gulp.watch(source + '.htaccess', ['htaccess'])
});

gulp.task('default', ['fonts', 'htaccess', 'favicon','revReplace', 'watch']);
