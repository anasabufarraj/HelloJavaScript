const gulp = require('gulp');
const minifyHTML = require('gulp-htmlmin');
const postCSS = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const minifyJS = require('gulp-minify');
const minifyImages = require('gulp-imagemin');
const minifySVG = require('gulp-svgmin');
const rev = require('gulp-rev');
const revReplace = require('gulp-rev-replace');
const revDel = require('rev-del');
const del = require('del');

const paths = {
  base: {
    src: 'source/',
    tmp: 'temp/',
    dest: 'public/'
  },
  styles: {
    src: 'source/styles/style.css',
    dest: 'temp/styles/'
  },
  scripts: {
    src: 'source/scripts/*.js',
    dest: 'temp/scripts/'
  },
  images: {
    src: 'source/images/',
    dest: 'temp/images/'
  },
  fonts: {
    src: 'source/fonts/',
    dest: 'public/fonts/'
  },
  rootFiles: {
    src: ['source/*.*', 'source/.htaccess'],
    dest: 'public/'
  }
};

// minify HTML
gulp.task('html', function () {
  return gulp.src(paths.base.src + '**/*.html')
    .pipe(minifyHTML({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest(paths.base.tmp))
});

// minify and prefix CSS
gulp.task('postCSS', function () {
  return gulp.src(paths.styles.src)
    .pipe(postCSS([
      autoprefixer({browsers: ['last 2 version']}),
      cssnano()
    ]))
    .pipe(gulp.dest(paths.styles.dest))
});

// minify JavaScript
gulp.task('js', function () {
  gulp.src(paths.scripts.src)
    .pipe(minifyJS({
      ext:{
        src: '-debug.js',
        min: '.js'
      },
      noSource: true,
      ignoreFiles: ['.min.js']
    }))
    .pipe(gulp.dest(paths.scripts.dest))
});

// optimize 'jpg' and 'png' images
gulp.task('image', function () {
  return gulp.src(paths.images.src + '*.{jpg,jpeg,png}')
    .pipe(minifyImages())
    .pipe(gulp.dest(paths.images.dest))
});

// optimization 'svg' graphics
gulp.task('svg', function () {
  return gulp.src(paths.images.src + '*.svg')
    .pipe(minifySVG())
    .pipe(gulp.dest(paths.images.dest))
});

// clone fonts
gulp.task('fonts', function () {
  return gulp.src(paths.fonts.src + '*.*')
    .pipe(gulp.dest(paths.fonts.dest))
});

// clone root files
gulp.task('rootFiles', function () {
  return gulp.src(paths.rootFiles.src)
    .pipe(gulp.dest(paths.rootFiles.dest))
});

// revision files with hash identifier based on content
gulp.task('revision', ['html', 'postCSS', 'js', 'image', 'svg'], function () {
  return gulp.src(paths.base.tmp + '**/*.{css,js,jpg,jpeg,png,svg}')
    .pipe(rev())
    .pipe(gulp.dest(paths.base.dest))
    .pipe(rev.manifest())
    .pipe(revDel({dest: paths.base.dest}))
    .pipe(gulp.dest(paths.base.dest))
});

/*
find and replace all occurrences with new hashed
filenames based on manifest.json (must run immediately
after 'rev')
*/
gulp.task('revReplace', ['revision'], function () {
  let manifest = gulp.src(paths.base.dest + 'rev-manifest.json');
  return gulp.src(paths.base.tmp + '**/*.html')
    .pipe(revReplace({manifest: manifest}))
    .pipe(gulp.dest(paths.base.dest))
});

// watch everything
gulp.task('watch', function () {
  gulp.watch(paths.base.src + '**/*.{html,css,js,jpg,jpeg,png,svg}', ['revReplace']);
  gulp.watch(paths.fonts.src, ['fonts']);
  gulp.watch(paths.rootFiles.src, ['rootFiles'])
});

// executing tasks by a sequence
gulp.task('default', ['fonts', 'rootFiles', 'revReplace', 'watch'],
  function () {
    del(paths.base.tmp); // delete temp folder on build
    console.log('Watching...')
  }
);
