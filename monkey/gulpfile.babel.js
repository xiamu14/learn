/**
 * gulp entry file
 */

import gulp from 'gulp'
import loadPlugins from 'gulp-load-plugins'
import { tasks } from './gulp_tasks'
import { dev } from './gulp_tasks/dev.js'
import { entry } from './gulp_tasks/config.js'

let $ = loadPlugins()

function getTask(taskName) {
    return tasks[taskName]
}

// register task
gulp.task('css', getTask('css')(gulp, $, entry.css))

gulp.task('js', getTask('js')(gulp, $, entry.js))

gulp.task('dev', ['css', 'js'], dev(gulp, $))