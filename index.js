var express = require('express');
var app = express();

var MongoClient = require('mongodb').MongoClient
var collection;
  
MongoClient.connect("mongodb://derek:derek@localhost:27017/anchors", function(err, db){
	if (err)	{
		console.log("error");
	}else{
	console.log('connected');
	collection = db.collection('profiles');
		
	}
});

app.get('/', function(req, res){
	getNameList(function(namelist){
		var currentdate = new Date(); 
	var datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
		
    res.end(datetime + namelist);
	});	
	
});

app.listen(8080);
console.log('server is running...');

function getNameList(callback){
	collection.find().toArray(function(err, results){
		namelist = [];
		for (i=0; i<results.length; i++){
			namelist.push(results[i].name);
		}
		callback(namelist);
	});
}