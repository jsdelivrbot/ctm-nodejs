var express = require('express');
var https = require('https');
var app = express();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
	
	//response.send(Buffer('eraj.saliev@comparethemarket.com.au:PFs2rNZlQtq0QIyBpt1gwE4UmZjON5A8', 'binary').toString('base64'))
	console.log('this prints to server log not browser');
	
	
	var postData = 'new github app';
	
	var options = {
		'hostname': 'requestb.in',
		'path': '/15rgaaq1',
		'method': 'POST',
		'headers': {
			'Content-Type': 'text/plain'
		},
	};
	
	var api = https.request(options, function(response) {
		console.log(response);
	});
	
	api.on('error', function(e) {
		console.error(e);
	});
	
	api.write(postData);
	api.end();
	
	response.send('CTM Node Application');
	response.end();
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
