const http = require('http');
const os = require('os');
const url = require('url');

var handleRequest = function(request, response) {
	response.writeHead(200, { "Content-Type": "application/json" })
	let parsedUrl = url.parse(request.url);
	if (parsedUrl.pathname == '/full') {
		response.end(JSON.stringify({
				"HOST"   : {
					"pid"              : process.pid,
					"name"             : os.hostname(),
					"proc_uptime"      : process.uptime(),
					"os_uptime"        : os.uptime(),
					"cpus"             : os.cpus(),
					"homedir"          : os.homedir(),
					"loadavg"          : os.loadavg(),
					"networkInterfaces": os.networkInterfaces(),
					"platform"         : os.platform(),
					"tmpdir"           : os.tmpdir(),
					"freemem"          : os.freemem(),
					"memuse"           : process.memoryUsage(),
					"totalmem"         : os.totalmem(),
					"userInfo"         : os.userInfo(),
				},
				"request": {
					"headers"    : request.headers,
					"url"        : parsedUrl,
					"httpVersion": request.httpVersion,
					// "k"      : Object.keys(request)
				},
				"ENV"    : process.env,
				"ARGV"   : process.argv,

			}
		));
	} else {
		response.end(JSON.stringify({
				"HOST": {
					"name"       : os.hostname(),
					"pid"        : process.pid,
					"proc_uptime": process.uptime(),
					"os_uptime"  : os.uptime(),
				},
				"ENV" : process.env,
				"ARGV": process.argv,

			}
		));
	}
}
var www = http.createServer(handleRequest);
www.listen(8080);