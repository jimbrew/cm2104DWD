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
          res.end(randomJoke.body);
        });
app.listen(8080);
