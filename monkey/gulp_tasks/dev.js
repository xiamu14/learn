import { css } from './css'
import { js } from './js'
import config from './config.json'

let monitorPath = {
    css: './static/src/**/*.css',
    js: './static/src/**/*.js'
}

let entry = {
    css: combinePath(config.web.css, 'web').concat(combinePath(config.touch.css, 'touch')),
    js: combinePath(config.web.js, 'web').concat(combinePath(config.touch.js, 'touch'))
}

function combinePath(pathArr, platform) {
    let entry = []
    for (let path of pathArr) {
        entry.push('./static/src/' + platform + '/' + path.split('.')[1] + '/' + path)
    }
    return entry
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