var mongo = require('mongodb').MongoClient;
var prompt = require("prompt-sync")();
let url = 'mongodb://localhost:27017/restaurants';

// mongo.connect(url, function(err, db) {
// 	console.log(err)
// 	let collection = db.collection('restaurants');
// 	collection.find().toArray(function(err, docs){
// 		console.log(docs);
// 	});

// });

// mongo.connect(url, function(err, db){
//   var collection = db.collection('restaurants');
//   var allChoice = prompt("Type 'all' and press enter to display all restaurants' names: ");
//   if(allChoice == "all"){
//     collection.find().toArray(function(err, doc){
//       console.log(doc);
//     });
//   } else {
//     console.log("Aw, you don't want to see the restaurants?");
//   }
// });
/////////////////////////// TASK 1 DONE////////////////////////////////////
// mongo.connect(url, function(err, db) {
// 	if (err) throw err;
// 	db.collection('restaurants').find({'name' : 'Captain Cookie and the Milk Man'}).toArray(function(err, docs) {
// 		if (err) throw err;
// 		console.log(docs);
// 	});
// 		console.log('found!');
// });
/////////////////////////// TASK 1 DONE////////////////////////////////////

/////////////////////////// TASK 2 DONE////////////////////////////////////
	mongo.connect(url, function(err, db) {
	if (err) throw err;
	var collection = db.collection('restaurants');
	var restName = prompt("Type a restaurant name to add it to the restaurant database: ");
	var restAddress = prompt("Type a restaurant address to add it to the restaurant database: ");
	collection.insert({name: restName}, {address: restAddress});
	});
/////////////////////////// TASK 2 DONE////////////////////////////////////

