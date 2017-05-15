var gulp = require("gulp");
var coffee = require("gulp-coffee");

gulp.task('coffee', function() {
  gulp.src('./src/*.coffee')
    .pipe(coffee({bare: true}))
    .pipe(gulp.dest('./dest/'));
});