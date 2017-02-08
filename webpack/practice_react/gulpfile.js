var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('server', function(){
    browserSync.init({
        server: {
            baseDir: './src'
        }
    });
    gulp.watch('./src/*.html', function(file){
        console.log(file.path + 'is changed __');
        browserSync.reload();
    })
});
