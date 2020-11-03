const { src, dest, parallel } = require('gulp')
const htmlmin = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');
const minify = require("gulp-babel-minify");

function sassToCss() {
  return src('./src/css/*.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(dest('./public/css'))
}

function miniHTML() {
  return src('./src/html/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('public/'));
}

function miniJS() {
  return src('./src/js/*.js')
    .pipe(minify({
      mangle: {
        keepClassName: true
      }
    }))
    .pipe(dest('public/js'));
}

exports.default = parallel(miniJS, miniHTML, sassToCss)