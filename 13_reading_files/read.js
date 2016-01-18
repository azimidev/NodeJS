var fs 		= require("fs");
var path 	= require("path");

fs.readdir("./lib", function(err, files){
	if(err) { console.log(err); }
	files.forEach(function (fileName) {
		var file = path.join(__dirname, "lib", fileName);
		var stat = fs.statSync(file);
		if (stat.isFile() && fileName !== ".DS_Store") {
			fs.readFile(file, "UTF-8", function(err, contents){
				if(err) { console.log(err); }
				console.log(contents);
			});
		};
	});
});


