'use strict';
//application setup
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var port = 3000;

app.use(bodyParser.json());

//static services
app.use(express.static(path.join(__dirname, 'public')));

//index get request
app.get('/', function(req, res){
	res.respond('index');
});

app.get('/users', function(req, res) {
	var users = ['Bob', 'Larry', 'Joe'];
});

app.post('/users', function(req, res) {
	console.log(req.body);
});

//app listener
app.listen(port, function(){
	console.log('Server Running on ' + port);
});
