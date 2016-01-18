var Person = require('./lib/Person');

var amir = new Person("Amir Azimi");
var sara = new Person("Sara Felani");

amir.on('speak', function (said) {
	console.log(`${this.name} : ${said}`);
});

sara.on('speak', function (said) {
	console.log(`${this.name} -> ${said}`);
});

amir.emit('speak', "Think before you speak.");
sara.emit('speak', "Cheating isn't a problem if you found someone better!");