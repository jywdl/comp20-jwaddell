var express = require('express');
var app = express();

app.post('/submit', function(request, response) {
	response.send([]);
  	res.header("Access-Control-Allow-Origin", "*");
  	res.header("Access-Control-Allow-Headers", "X-Requested-With");
}); 

app.get('/scores.json', function(request, response) {
	response.send([]);
	res.header("Access-Control-Allow-Origin", "*");
  	res.header("Access-Control-Allow-Headers", "X-Requested-With");
});


app.listen(process.env.PORT || 5000);