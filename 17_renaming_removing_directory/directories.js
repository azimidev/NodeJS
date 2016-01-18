var fs = require("fs");

// fs.renameSync("./assets/logs", "./logs");
// console.log("logs moved successfully!");

// fs.rmdir("./assets", function(err){
// 	if (err) {
// 		throw err;
// 	} else {
// 		console.log("assets directory removed");
// 	};
// });

fs.readdirSync("./logs").forEach(function (fileName) {
	fs.unlinkSync("./logs/" + fileName);
});

fs.rmdir("./logs", function(err){
	if (err) {
		throw err;
	} else {
		console.log("logs directory removed");
	};
});