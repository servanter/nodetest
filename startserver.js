var http = require('http');
http.createServer(function(request, response) {
	response.end('Hello world');
}).listen(8888);