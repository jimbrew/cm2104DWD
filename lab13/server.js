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
              var x = req.query.x;
              var y = req.query.y;
              res.send("X + Y ="+(x+y));
            });
app.listen(8080);
