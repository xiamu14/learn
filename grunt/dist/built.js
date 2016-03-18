var server = require("./server");
var route = require("./route");
var requestHandlers = require("./requestHandlers");

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(route.route, handle);
;function route(handle, pathname){
	console.log("About to route a request for " + pathname);
	if (typeof(handle[pathname]) === 'function') {
		handle[pathname]();
	}else{
		console.log("no request handle found for" + pathname);
	}
}

exports.route = route;