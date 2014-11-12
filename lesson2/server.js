var http = require('http');
http.createServer(function (req, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});

 
	
	response.end('<table class="table1">');
	response.end('<tr>');
	response.end('<td>1</td>');
	response.end('<td>2</td>');
	response.end('</tr>');

	response.end('<tr>');
	response.end('<td>3</td>');
	response.end('<td>4</td>');
	response.end('</tr>');

	response.end('<tr>');
	response.end('<td>5</td>');
	response.end('<td>6</td>');
	response.end('</tr>');

	response.end('<tr>');
	response.end('<td>7</td>');
	response.end('<td>8</td>');
	response.end('</tr>');

	response.end('<tr>');
	response.end('<td>9</td>');
	response.end('<td>10</td>');
	response.end('</tr>');
	response.end('</table>');
  response.end('Hello World\n');
}).listen(4000);
console.log('Server running at http://127.0.0.1:1337/');