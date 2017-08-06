import cssnext from 'postcss-cssnext'
import cssnano from 'cssnano'

export function css(gulp, $, entry, argv) {
    let v = argv.v ? true : false
    return function() {
        gulp.src(entry, { base: './static/src' })
            .pipe($.debug())
            .pipe($.postcss([cssnext(), cssnano()]))
            .pipe($.rev())
            .pipe($.debug())
            .pipe($.revFormat({ //处理 xx.xx.js 这样文件的一个错误
                lastExt: true
            }))
            .pipe(gulp.dest('./static/dist'))
            .pipe($.rev.manifest('css-manifest.json', {
                base: './',
                merge: true
            }))
            .pipe($.if(v, $.revQuery('v'))) // md5 写入 manifest.json
            .pipe(gulp.dest('./static/dist/manifest'))
            .on('end', () => {
                $.util.log($.util.colors.magenta('compile success!'))
            })
    }
}