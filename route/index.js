var server = require('./createser');
var router = require('./route');

server.start(router.route);