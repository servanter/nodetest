var http = require('http');
var option = {hostname:'localhost', port:8888,  method:'post', headers:{'Content-Type':'application/x-www-form-urlencoded'}};
var request = http.request(option, function(response){});
request.write('hello world');
request.end();