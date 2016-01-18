var http 		= require("http");
var server 	= http.createServer(function (req, res) {
	res.writeHead(200, {"Content-Type": "text/html"});
	res.end(`
	       	<!DOCTYPE html>
					<html>
					<head>
						<title>HTML Response</title>
					</head>
					<body>
						<h1>Serving HTML Text</h1>
						<h2>${req.url}</h2>
						<h2>${req.method}</h2>
					</body>
					</html>
	`);
});

server.listen(2000);
console.log("Server is running on http://localhost:2000");