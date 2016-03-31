var http = require("http");
var url = require("url");


function start(route, handle){
	function onRequest(req, res){
		var pathname = url.parse(req.url).pathname;
		// console.log("Request for" + pathname + "received");
		route(handle, pathname, res);
		// res.writeHead(200, {"Content-Type": "text/plain","Trailer":"Content-MD5"});
		// res.write(content);
		// res.end();
	}
	http.createServer(onRequest).listen("2001");
	console.log("server is start");
}

exports.start = start;