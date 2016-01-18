var EventEmitter = require('events').EventEmitter;
var util         = require('util');

var Person = function (name) {
	this.name = name;
};

util.inherits(Person, EventEmitter);

// to use this cutom module you nedd to use the code below:
module.exports = Person;