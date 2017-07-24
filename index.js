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
		
    res.end('Current Time: ' + Date());
});

var port = 8080;
if (process.env.port){
	port = process.env.port;
}

app.listen(port);
console.log('server is running...');