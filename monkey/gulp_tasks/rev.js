export function rev(gulp, $, argv) {
    let v = argv.v ? true : false
    return function() {
        gulp.src(['./static/dist/manifest/*.json', './template/*.html'])
            .pipe($.debug())
            .pipe($.revCollectorQuery({
                replaceReved: true,
            }))
            .pipe(gulp.dest('./template'))
    }
}