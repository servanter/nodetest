var E = require('events').EventEmitter;
var emitter = new E();
emitter.once('e1', function () {
	console.log('event occured');	
});

emitter.emit('e1');
emitter.emit('e1');