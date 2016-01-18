var waitTime      = 3000;
var currentTime   = 0;
var waitInterval  = 10;
var percentWaited = 0;

function writeWaitingPercent (p) {
	process.stdout.clearLine();
	process.stdout.cursorTo(0);
	process.stdout.write(`Waiting ... ${p}%`);
};

var interval = setInterval(function () {
	currentTime += waitInterval;
	// console.log(`Waiting ${currentTime/1000} seconds...`);
	percentWaited = Math.floor((currentTime/waitTime) * 100);
	writeWaitingPercent(percentWaited);
}, waitInterval);

setTimeout(function () {
	clearInterval(interval);
	writeWaitingPercent(100);
	console.log("\n Done! \n");
}, waitTime);

process.stdout.write("\n\n");
writeWaitingPercent(percentWaited);





