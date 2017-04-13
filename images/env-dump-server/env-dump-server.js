const http = require('http');
const os = require('os');
const url = require('url');

var handleRequest = function(request, response) {
	response.writeHead(200, { "Content-Type": "application/json" });
	response.end('"I changed!"');
}
var www = http.createServer(handleRequest);
www.listen(8080);