var events = require('events');
var emitter = new events.EventEmitter();
emitter.on('somevent', function(arg1, arg2) {
	console.log(arg1 + '     ' + arg2);
});

emitter.on('somevent', function(arg1, arg2) {
	console.log(arg1 + '     ' + arg2);
});

emitter.emit('somevent', 'Tom', 'age 18');