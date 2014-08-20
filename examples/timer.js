var EventEmitter = require('events').EventEmitter;

function Timer(period, options) {
	var that = this;
	EventEmitter.call(this)

	this.period = period || this.period;
	options = options || {}
	this.startTimer = startTimer

	function startTimer() {
		if (options.isInterval) {
			setInterval(onTimer, this.period);
		} else {
			setTimeout(onTimer, this.period);
		}
	}
	function onTimer() {
		that.emit('timer', 'success!')
	}
}

Timer.prototype = Object.create(EventEmitter.prototype)
Timer.prototype.period = 10000;

// typically, in another file
var timer = new Timer(null, {isInterval: true});
timer.startTimer();
timer.on('timer', console.log)