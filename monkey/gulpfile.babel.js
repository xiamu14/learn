/**
 * gulp entry file
 */

import gulp from 'gulp'
import loadPlugins from 'gulp-load-plugins'
import path from 'path'
import { tasks } from './gulp_tasks'
import { dev } from './gulp_tasks/dev.js'
let $ = loadPlugins()

function getTask(taskName) {
    return tasks[taskName]
}

// register task
gulp.task('css', getTask('css')(gulp, $, path.join(__dirname, './static/src/css/test.css')))

gulp.task('js', getTask('js')(gulp, $, path.join(__dirname, './static/src/js/app.js')))

gulp.task('dev', dev(gulp, $))