import babel from 'rollup-plugin-babel'
import path from 'path'



export function js(gulp, $, entry, argv) {
    let v = argv.v ? true : false
    return function() {
        gulp.src(entry, { base: './static/src' })
            .pipe($.debug())
            .pipe($.eslint())
            .pipe($.eslint.format())
            .pipe($.eslint.failAfterError())
            .pipe($.sourcemaps.init())
            .pipe($.rollup({
                entry: entry,
                allowRealFiles: true,
                plugins: [
                    babel({
                        presets: [
                            [
                                "es2015", {
                                    "modules": false
                                }
                            ]
                        ],
                        babelrc: false,
                        exclude: 'node_modules/**'
                    })
                ]
            }))
            .pipe($.uglify())
            .pipe($.sourcemaps.write(path.join('./map')))
            .pipe($.filter('**/*.js'))
            .pipe($.rev())
            .pipe($.debug())
            .pipe($.revFormat({ //处理 xx.xx.js 这样文件的一个错误
                lastExt: true
            }))
            .pipe(gulp.dest('./static/dist'))
            .pipe($.rev.manifest('js-manifest.json', {
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