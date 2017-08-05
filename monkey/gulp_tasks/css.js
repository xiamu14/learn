import cssnext from 'postcss-cssnext'

export function css(gulp, $, entry) {
    return function() {
        gulp.src(entry)
            .pipe($.debug())
            .pipe($.postcss([cssnext()]))
            .pipe(gulp.dest('./static/dist'))
            .on('end', () => {
                $.util.log(' 编译完成')
            })
    }
}