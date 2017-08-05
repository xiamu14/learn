/**
 * gulp entry file
 */

import gulp from 'gulp'
import loadPlugins from 'gulp-load-plugins'
import { tasks } from './gulp_tasks'
import { dev } from './gulp_tasks/dev.js'
import { entry } from './gulp_tasks/config.js'

let $ = loadPlugins()

// register task
gulp.task('css', tasks['css'](gulp, $, entry.css))

gulp.task('js', tasks['js'](gulp, $, entry.js))

gulp.task('dev', ['css', 'js'], dev(gulp, $))