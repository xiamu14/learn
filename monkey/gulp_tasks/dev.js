import { css } from './css'
import { js } from './js'
import { entry } from './config.js'
import { clean } from './clean.js'
import yargs from 'yargs'

const argv = yargs.argv

let monitorPath = {
    css: './static/src/**/*.css',
    js: './static/src/**/*.js'
}

export function dev(gulp, $) {
    return function() {
        gulp.watch(monitorPath.css, function(event) {
            css(gulp, $, entry.css, argv)()
        })
        gulp.watch(monitorPath.js, function(event) {
            js(gulp, $, entry.js, argv)()
        })
        gulp.watch('static/dist/**/*.js', function(event) {
            if(event.type == 'added'){
                clean(gulp, $)()
                // $.util.log(event.path + 'added.')
            }
        })
    }
}