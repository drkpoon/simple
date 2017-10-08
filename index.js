var express = require('express');
var app = express();

app.get('/', function(req, res){
	var currentdate = new Date(); 
	var datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
	var output = 'Current Time: ' + Date();
	output = output + '\n' + currentdate.getTimezoneOffset();
	output = output + '\n' + currentdate.getTime();
    res.end(output);
});

var port = 8080;
if (process.env.port){
	port = process.env.port;
}

app.listen(port);
console.log('server is running...');