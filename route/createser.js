var http = require("http");
var url = require("url");
var querystring = require('querystring');

function start(route) {
	function onRequest(request, response) {
		var u = url.parse(request.url);
		console.log('row query string ' + u.query);
		var query = querystring.parse(u.query);
		console.log('query string json' + query);

		var pathname = u.pathname;
		console.log("Request for " + pathname + " received.");

		route(pathname);

		response.writeHead(200, {"Content-type":"text.plain"});
		response.write("Hello world");
		response.end();
	}

	http.createServer(onRequest).listen(8888);
	console.log("server start");
}

exports.start = start;