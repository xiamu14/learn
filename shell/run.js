var ProgressBar = require('./progress-bar');

var pb = new ProgressBar("下载进度：", 50)

var num = 0,
    total = 200;

function downloading() {
    if (num <= total) {
        pb.render({ completed: num, total: total });
        num++;
        setTimeout(function() {
            downloading();
        }, 500)
    }
}

downloading();