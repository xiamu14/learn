/**
 * gulp entry file
 */

import gulp from 'gulp'
import loadPlugins from 'gulp-load-plugins'
import { tasks } from './gulp_tasks'
import { dev } from './gulp_tasks/dev.js'
import { entry } from './gulp_tasks/config.js'
import yargs from 'yargs'

const argv = yargs.argv
console.log(argv)
let $ = loadPlugins()

// register task
gulp.task('clean', tasks['clean'](gulp, $))

gulp.task('css', ['clean'], tasks['css'](gulp, $, entry.css, argv))

gulp.task('js', ['clean'], tasks['js'](gulp, $, entry.js, argv))

gulp.task('init', tasks['init'](gulp, $))

gulp.task('rev', tasks['rev'](gulp, $, argv))

gulp.task('dev', ['css', 'js'], dev(gulp, $))