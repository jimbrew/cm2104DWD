var express = require('express');
var app = express();
app.get('/', function(req, res) {
  res.send("Hello world! by express");
});
app.get('/test', function(req, res) {
  res.send("Route 2");
});
app.get('/joke', function(req, res) {
  var oneLinerJoke = require('one-liner-joke');
  var randomJoke = oneLinerJoke.getRandomJoke();
  res.send(randomJoke.body);
});
app.get('/add', function(req, res) {
  var x = parseInt(req.query.x);
  var y = parseInt(req.query.y);
  res.send("X + Y =" + (x + y));
});
app.get('/calc', function(req, res) {
  var x = parseInt(req.query.x);
  var y = parseInt(req.query.y);
  var add = "add";
  var sub = "sub";
  var mul = "mul";
  var div = "div";
  if(add){res.send("X + Y =" + (x + y));}
  if(sub){res.send("X - Y =" + (x - y));}
  if(mul){res.send("X * Y =" + (x * y));}
  if(div){res.send("X / Y =" + (x / y));}
});
app.listen(8080);
