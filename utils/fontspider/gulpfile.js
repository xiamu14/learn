var gulp = require('gulp');
var fontmin = require('gulp-fontmin');

gulp.task('default', function () {
  return gulp.src('./font/DFPHaiBaoW12-GB.ttf')
    .pipe(fontmin({
      text: '1234567890彩蛋俄罗斯方块冒险岛功夫双截龙圣斗士星矢坦克大战大力水手松鼠大战沙罗曼蛇炸弹人猪小弟赤色要塞超级玛丽马戏团魂斗罗中途岛开始游',
    }))
    .pipe(gulp.dest('dist/font'));
});
