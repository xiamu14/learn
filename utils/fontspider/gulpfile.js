var gulp = require('gulp');
var fontmin = require('gulp-fontmin');

gulp.task('default', function () {
  return gulp.src('./font/custom.ttf')
    .pipe(fontmin({
      text: '猜歌段位赛好友对战音符银行排行榜道具中心抢答赛+0123456789',
    }))
    .pipe(gulp.dest('dist/fonts'));
});
