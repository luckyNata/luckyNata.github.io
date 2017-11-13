'use strict';

var gulp = require('gulp'),
  gulpUtil = require('gulp-util'),
  gulpSass = require('gulp-sass'),
  inputDirectory = __dirname + '/src/sass/',
  input = inputDirectory + 'styles.scss',
  output = __dirname + '/src/css/';

/**
 * Puts error lines to output
 * @param {object} error Error instance
 * @param {string} error.plugin Plugin which fires error
 * @param {string} error.file Filename which executes with error
 * @param {string} error.formatted Formatted error message
 */
function sassError(error) {
  gulpUtil.log(
    'Caught '
    + gulpUtil.colors.red('ERROR')
    + ' at plugin \''
    + gulpUtil.colors.cyan(error.plugin)
    + '\', can\'t build \''
    + gulpUtil.colors.magenta(error.file)
    + '\', details: '
  );

  console.log(error.formatted);

  // Need to correct watch task working when caught error
  this.emit('end');
}

gulp.task('sass', function () {
  return gulp.src(input)
    .pipe(gulpSass({ outputStyle: 'compressed' }).on('error', sassError))
    .pipe(gulp.dest(output));
});

gulp.task('sass:watch', function () {
  gulp.watch(inputDirectory + '**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'sass:watch']);
