var http = require('http');
http.createServer(function(request, response) {
	
	request.on('data', function(chunk) {
		response.write(chunk);
	});

	request.on('end', function() {
		response.end();
	});
}).listen(8888);