var express = require('express');
var app = express();

app.get('/', function(req, res){
	var currentdate = new Date();
    
	res.render(__dirname + '/views/onload.ejs', {epoch: currentdate.getTime(), serverTime: currentdate});
});

var port = 8080;
if (process.env.port){
	port = process.env.port;
}

app.listen(port);
console.log('server is running...on port ' + port);