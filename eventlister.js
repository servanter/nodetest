var events = require('events');
var emitter = new events.EventEmitter();
emitter.on('event1', function(arg1, arg2) {
	console.log(arg1 + '   ' + arg2);
});

emitter.addListener('event1', function() {
	console.log('listener start');
});

emitter.once('event2', function() {console.log('once start');});

emitter.emit('event1', 'Gerry', 'eighteen');

emitter.emit('event2');
emitter.emit('event2');