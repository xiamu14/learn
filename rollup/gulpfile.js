var gulp = require('gulp'),
    rollup = require('rollup'),
    rollupTypescript = require('rollup-plugin-typescript')

gulp.task('build', function() {
    return rollup.rollup({
        entry: 'main.ts',
        plugins: [
            rollupTypescript()
        ],
    }).then(function(bundle) {
        bundle.write({
            format: 'umd',
            moduleName: 'library',
            dest: './dest/library.js',
            sourceMap: true
        })
    })
})