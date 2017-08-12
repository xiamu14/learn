import { config } from './config'

let entry = config.web.html.concat(config.touch.html)

export function init(gulp, $) {
    return function() {
        for (let name of entry) {
            gulp.src('./template/init/*.init.html')
                .pipe($.rename({ basename: name }))
                .pipe(gulp.dest('./template'))
        }
    }
}