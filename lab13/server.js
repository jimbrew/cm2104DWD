var express = require('express');
app.use(express.static('public')); 
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
  var calc = req.query.calc;
  if(calc == "add"){res.send("X + Y =" + (x + y));}
  if(calc == "sub"){res.send("X - Y =" + (x - y));}
  if(calc == "mul"){res.send("X * Y =" + (x * y));}
  if(calc == "div"){res.send("X / Y =" + (x / y));}
});
app.listen(8080);
