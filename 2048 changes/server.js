var express = require('express');
var bodyParser = require('body-parser'); 
var validator = require('validator'); 
const path = require('path')
app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

var mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017';
var MongoClient = require('mongodb').MongoClient, format = require('util').format;
var db = MongoClient.connect(mongoUri, function(error, databaseConnection) {
	db = databaseConnection;
    });

app.use(express.static(path.join(__dirname, 'public')));

app.post('/submit', function(request, response) {
	response.header("Access-Control-Allow-Origin", "*");
	response.header("Access-Control-Allow-Headers", "X-Requested-With");
	var username = request.body.username;
	var score = request.body.score;
	var grid = request.body.grid;
	var time = new Date();

	console.log(request.body);
	var toInsert = {
		"username": username,
	    "score": score,
	    "grid": grid,
	    "time": time,
	};
	db.collection('scores', function(error, coll) {
		coll.insert(toInsert, function(error, saved) {
			if (error) {
			    response.send(500);
			}
			else {
			    response.send('<html><head><title>Thanks!</title></head><body><h2>Thanks for your submission!</h2></body></html>');
			}
		    });
	    });
    });

app.get('/scores.json', function(request, response) {
	var username = request.query.username;

	response.header("Access-Control-Allow-Origin", "*");
	response.header("Access-Control-Allow-Headers", "X-Requested-With");
	response.set('Content-Type', 'text/html');

	db.collection('scores', function(er, collection) {
		collection.find({"username" : username}).sort({score: -1}).limit(10).toArray(function(err, results) {
			response.send(results);
		});
	});	
});

app.get('/', function(request, response) {
	response.header("Access-Control-Allow-Origin", "*");
	response.header("Access-Control-Allow-Headers", "X-Requested-With");
	response.set('Content-Type', 'text/html');

	var indexPage = '';

	db.collection('scores', function(er, collection) {

		collection.find().toArray(function(err, results) {
			if (!err) {
				indexPage += "<!DOCTYPE HTML><html><head><title>High Scores</title></head><body><h1>High Scores</h1>";
				
				var array = [];

				for (var i = 0; i < results.length; i++) {
					array[i] = {"value": results[i].score, "index": i,};
				}

				array.sort(function(a, b) {
					return b.value - a.value;
				})

				for (var i = 0; i < results.length; i++) {
					indexPage += "<p> Player '" + results[array[i].index].username + "' achieved a score of <b>" + results[array[i].index].score + "</b> at " + results[array[i].index].time + "\n<p>";
				}

				indexPage += "</body></html>";
				response.send(indexPage);
			} else {
				response.send('<!DOCTYPE HTML><html><head><title>High Scores</title></head><body><h1>Whoops, something went terribly wrong!</h1></body></html>');
			}
		});
	});
});
app.listen(process.env.PORT || 5000);