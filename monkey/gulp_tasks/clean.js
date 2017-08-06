import rimraf from 'rimraf'
import path from 'path'
import through from 'through2'

export function clean(gulp, $) {
    return function() {
        gulp.src(['./dist/**/*.*'], { read: false })
            .pipe($.revOutdated(1))
            .pipe($.debug())
            .pipe(cleaner())
    }
}

function cleaner() {
    return through.obj(function(file, enc, cb) {
        rimraf(path.resolve((file.cwd || process.cwd()), file.path), function(err) {
            if (err) {
                this.emit('error', new Error('Cleanup old files', err))
            }
            this.push(file)
            cb()
        }.bind(this))
    });
}