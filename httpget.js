var http = require('http');
http.get('http://www.baidu.com', function(response) {
	var body = new Array();
	console.log(response.statusCode);
	console.log(response.header);
	response.on('data', function(d) {
		body.push(d);
	});

	response.on('end', function() {
		var text = body.toString();
		console.log(text);
	});
});