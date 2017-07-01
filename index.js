var express = require('express');
var app = express();

var MongoClient = require('mongodb').MongoClient
var collection;
  
var url = "mongodb://" + process.env.MONGODB_USER + ":" + process.env.MONGODB_PASSWORD
	+ "@10.130.52.196:27017/anchors";
  
MongoClient.connect(url, function(err, db){
	if (err)	{
		console.log("fail to open");
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
	if (collection == null){
		callback(["no collection"]);
	}
	
	collection.find().toArray(function(err, results){
		if (err){
			console.log('collection fails');
			return;
		}
		namelist = [];
		for (i=0; i<results.length; i++){
			namelist.push(results[i].name);
		}
		callback(namelist);
	});
}