import cssnext from 'postcss-cssnext'
import cssnano from 'cssnano'

export function css(gulp, $, entry) {
    return function() {
        gulp.src(entry)
            .pipe($.debug())
            .pipe($.postcss([cssnext(), cssnano()]))
            .pipe(gulp.dest('./static/dist'))
            .on('end', () => {
                $.util.log($.util.colors.magenta('compile success!'))
            })
    }
}