var exec = require("child_process").exec;
var querystring = require("querystring");

function start(res, postData){
	console.log('Request handler "start" is called');

	var body = '<html>' +
	'<head>'+
	'<mata http-equiv="Content-Type" content="text/html";'+
	'charset=UTF-8 />'+
	'</head>'+
	'<body>'+
	'<form action="/upload" method="post">'+
	'<textarea name="text" rows="20" cols="6"></textarea>'+
	'<input type="submit" value="Submit text" />'+
	'</form>'+
	'</body>'+
	'</html>';

	res.writeHead(200, {"Content-Type": "text/html"});
	res.write(body);
	res.end();
	
}

function upload(res, postData){
	console.log('request handler "upload" was called');
	res.writeHead(200, {"Content-Type": "text/plain"});
	res.write("You've send:" + querystring.parse(postData).text);
	res.end();

}

exports.start = start;
exports.upload = upload;