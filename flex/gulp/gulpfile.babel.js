/**
 * Touch 资讯频道开发构建工具
 * author ： Ben
 * time: 2017-03-20
 */

let gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    browserSync = require('browser-sync').create(),
    webpack = require('webpack'),
    fn = {},
    toolkits = {},
    config = {
        src: '../static/src/',
        dest: '../static/dest/',
        tasks: {
            uglify: {
                path: [{
                    src: '../static/src/js',
                    dest: '../static/dest'
                }],
                extensions: ['js']
            },
            cssnano: {
                path: [{
                    src: '../static/src/less',
                    dest: '../static/dest'
                }],
                extensions: ['less']
            },
            html: {
                path: [{
                    src: '../'
                }],
                extensions: ['html']
            }
        }
    };

let watchTask = function() {
    // 定义 task
    let watchableTasks = ['cssnano', 'uglify', 'html'];

    // 启动一个本地测试服务器
    browserSync.init({
        server: '../',
        browser: 'chrome',
        host: '172.16.0.112',
        open: false
    });

    watchableTasks.forEach((taskname) => {

        // 定义输入输出文件路径
        let task = config.tasks[taskname],
            glob = [],
            paths = {srcPath: '', root: '', destPath: ''};

        if(task.path) {
            for(let i = 0; i < task.path.length; i++){
                glob.push(task.path[i].src + '/**/*.' + task.extensions.join(','));
            }
        }
        // console.log(glob);
        let watcher = gulp.watch(glob, (event) => {
            paths.srcPath = event.path;
            paths.destPath = event.path.replace('src', 'dest');

        // 执行任务处理函数
        fn[taskname](paths);
        // 打印文件变动信息
        $.util.log($.util.colors.green(event.path) + ' was ' + event.type + ', running task[' + taskname +'].');
        });
    });
}

gulp.task('watch', watchTask);

// 定义任务处理函数
fn = {
    cssnano: (paths) => {
        let dest = '../static/dest/css/';
        let target = '../static/src/less/main.less';
        gulp.src(target)
            .pipe($.plumber())
            .pipe($.less().on('error', toolkits.errorHandler))
            .pipe($.cleanCss())
            .pipe(gulp.dest(dest))
            .on('end', function() {
                $.util.log('cssnano task is finished.');
                browserSync.reload();
            });
    },
    uglify: (paths) => {
        let dest = '../static/dest/js/';
        gulp.src(paths.srcPath)
            .pipe($.plumber())
            .pipe(
                $.webpack(require('./webpack.config.js') , webpack)
            )
            .pipe(gulp.dest(dest))
            .on('end', function() {
                $.util.log('uglify task is finished.');
                browserSync.reload();
            });
    },
    html: (paths) => {
        browserSync.reload();
    }
}

// 定义工具类
toolkits = {
    errorHandler: (error) => {
        $.util.colors.red(error.toString());
        // this.end();
        console.log(this);
    }
}

/**
 * 单一任务
 */

// 图片压缩（.png，.jpg，.jpeg）
gulp.task('tinypng', () => {
    gulp.src('../static/src/images/*.png')
        .pipe($.tinypng('L9gkbnWCu5zGYIm5lcGja0Z3KHUW96YU'))
        .pipe(gulp.dest('../static/dest/'));
});
