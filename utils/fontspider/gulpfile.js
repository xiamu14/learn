var gulp = require('gulp');
var fontmin = require('gulp-fontmin');

gulp.task('default', function () {
  return gulp.src('./font/mianhuatang.ttf')
    .pipe(fontmin({
      text: '1234567890加载中.连续答对题分享好友可获得正在为您匹配对手',
    }))
    .pipe(gulp.dest('dist/font/mianhuatang'));
});
