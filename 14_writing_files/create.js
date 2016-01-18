var fs = require("fs");
var md = `
	Sample Title
	============

	Samle Subtitle
	--------------

	* Point
	* Point
	* Point
`;

fs.writeFile("sample.md", md.trim(), function(err){
	console.log("file created!");
});