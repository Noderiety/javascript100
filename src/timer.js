var util = require('util'),
		EventEmitter = require('events').EventEmitter;

function Timer(period, options) {
	EventEmitter.call(this)
}

util.inherits(Timer, EventEmitter)
Timer.prototype.__proto__ = EventEmitter.prototype
Timer.prototype.period = 10000;
