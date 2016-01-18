var EventEmitter = require('events').EventEmitter;
var util         = require('util');

var Person = function (name) {
	this.name = name;
};

util.inherits(Person, EventEmitter);

var amir = new Person("Amir Azimi");

amir.on('speak', function (said) {
	console.log(`${this.name}: ${said}`);
});

amir.emit('speak', "Think before you speak.");