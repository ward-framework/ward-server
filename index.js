const serveStatic = require('serve-static');
const chalk = require('chalk');
const connect = require('connect');

function Server(options) {

	// Get options from params and fill defaults
	options = Object.assign({
		path : __dirname, // Ward project path
		port : 8000, // Server port
		ip : '127.0.0.1', // Server ip
		silent : false, // If false, log on success
	}, options);

	this.serve = function(callback) {

		// Serve up core folder
		const serveCore = serveStatic(options.path + '/core', { 'index': false });
		// Serve up app folder
		const serveApp = serveStatic(options.path + '/app', { 'index': false });
		// Serve up public folder
		const servePublic = serveStatic(options.path + '/public');

		// Init connect and serve files or redirect to 404 page
		const app = connect()
			.use('/core', serveCore)
			.use('/app', serveApp)
			.use('/' , servePublic)
			.use(function(req, res) {
				res.writeHead(302, {
					'Location': '/#notfound'
				});
				res.end();
			});
		
		// Listen to port and ip
		app.listen(options.port, options.ip, function(){
			if (!silent) 
				console.log(chalk.blue.bold('Ward') + ' is running at ' + chalk.green.underline(`http://${options.ip}:${options.port}`));
			callback();
		});
	}
}

module.exports = Server;


// Use case exemple
// const server = new Server({
// 	path : "./src",
// 	port : 3000
// });
// server.serve();