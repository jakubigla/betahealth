const gulp = require('gulp');
const paths = require('../paths');
const imagemin = require('gulp-imagemin');

gulp.task('images', () => {
  return gulp.src(`${paths.sourceImages}/**/*`)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.outputImages));
});