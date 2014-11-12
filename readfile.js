var fs = require('fs');

fs.readFileSync('aaa', function(err, data) {
	throws err;
	console.log(data.toString());
})