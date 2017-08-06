import del from 'del'

export function rev(gulp, $, argv) {
    let v = argv.v ? true : false
    return function() {
        gulp.src(['./static/dist/manifest/*.json', './template/*.html'])
            .pipe($.debug())
            .pipe($.if(!v, $.revCollector({
                replaceReved: true,
            })))
            .pipe($.if(v, $.revCollectorQuery({
                replaceReved: true,
            })))
            .pipe(gulp.dest('./template'))
            .on('end', () => {
                // delete manifest.json
                del(['./static/dist/manifest/*.json'])
            })
    }
}