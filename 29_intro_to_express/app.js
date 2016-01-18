var express = require('express');
var app 		= express();

app.use(function (req, res, next) {
	console.log(`${req.method} request for '${req.url}'`);
	// next() is important to go to the next middleware
	next();
});

app.use(express.static('./public'));

app.listen(3000);

console.log('Express app running at http://localhost:3000');

module.exports = app;

