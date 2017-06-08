var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// 静态服务器
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});