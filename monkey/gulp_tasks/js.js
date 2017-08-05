import babel from 'rollup-plugin-babel'
import path from 'path'

export function js(gulp, $, entry) {
    return function() {
        gulp.src(entry)
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
            .pipe(gulp.dest('./static/dist/'))
            .on('end', () => {
                $.util.log($.util.colors.magenta('compile success'))
            })
    }
}