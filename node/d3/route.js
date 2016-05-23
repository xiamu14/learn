function route(handle, pathname, res){
	// console.log("About to route a request for " + pathname);
	if (typeof(handle[pathname]) === 'function') {
		handle[pathname](res);
	}else{
		// console.log("no request handle found for" + pathname);
		res.writeHead(404, {"Content-Type":"text/plain"});
		res.write("404 Not Found");
		res.end();
	}
}

exports.route = route;