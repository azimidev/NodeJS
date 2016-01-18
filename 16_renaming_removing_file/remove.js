var fs = require("fs");

try {
	fs.unlinkSync("./lib/config.json");
	console.log("config.json was removed successfully");
} catch(err) {
	console.log(err);
}

fs.unlink("notes.md", function(err){
	if (err) {
		console.log(err);
	} else{
		console.log("notes.md was removed successfully");
	};
});