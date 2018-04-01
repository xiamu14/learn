const gulp = require('gulp');
const spritesmith = require('gulp.spritesmith');

gulp.task('default', function () {
    const spriteData = gulp.src('src/input/*/*.{png,jpg}').pipe(spritesmith({
        imgName: 'sprite.png',
        cssName: 'sprite.css',
        padding: 10
    }));
    // console.log(spriteData);
    return spriteData.pipe(gulp.dest('dist/output/'));
});