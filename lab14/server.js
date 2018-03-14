var express = require('express');
var app = express();
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'T4KkBOJ2pq8Ripj65uDVWvM17',
  consumer_secret: 'xXEdmKwNog9nbtOsCATw9X2Nz2e3MrQQfj2PhQkjJ2V98cZkoY',
  access_token_key: '132735604-WBwSdv5qKPSkTqcutwe6gPC6NdLsQ6yLlrB9sDsH',
  access_token_secret: 'b3GbdKPrFzgq2kHh6AZqEyiUMtxWgyX1j1nYnvzQzlqDl'
});

var params = {screen_name: 'node.js'};

client.get('statuses/user_timeline', params, function(error, tweets, response){
  if (!error) {
    console.log(tweets);
  }
});

app.use(express.static('public'))

app.get('/', function(req, res){
  res.send("hello world by express");
});

app.listen(8080);
