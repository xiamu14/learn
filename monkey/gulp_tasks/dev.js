import { css } from './css'
import { js } from './js'
import { entry } from './config.js'

let monitorPath = {
    css: './static/src/**/*.css',
    js: './static/src/**/*.js'
}

export function dev(gulp, $) {
    return function() {
        gulp.watch(monitorPath.css, function(event) {
            console.log(entry)
            console.log(event)
            css(gulp, $, entry.css)()
        })
        gulp.watch(monitorPath.js, function(event) {
            js(gulp, $, entry.js)()
        })
    }
}