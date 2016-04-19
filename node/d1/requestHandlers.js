function start(){
	console.log('request handler "start" is called');
}

function upload(){
	console.log('request handler "upload" is called');
}

exports.start = start;
exports.upload = upload;