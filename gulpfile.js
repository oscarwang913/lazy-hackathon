const { src, dest, } = require('gulp')
const sass = require('gulp-sass');

function sassToCss() {
  return src('./css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./public'))
}

exports.default = sassToCss