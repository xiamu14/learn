function start(){
	console.log('request handler "start" is called');
	function sleep(milliSecond){
		var startTime = new Date().getTime();
		while(new Date().getTime() < startTime + milliSecond){

		}
	}
	sleep(10000);
	return "hello world";
}

function upload(){
	console.log('request handler "upload" is called');
	return "hello upload";

}

exports.start = start;
exports.upload = upload;