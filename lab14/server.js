var express = require('express');
var app = express();
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'T4KkBOJ2pq8Ripj65uDVWvM17',
  consumer_secret: 'xXEdmKwNog9nbtOsCATw9X2Nz2e3MrQQfj2PhQkjJ2V98cZkoY',
  access_token_key: '132735604-WBwSdv5qKPSkTqcutwe6gPC6NdLsQ6yLlrB9sDsH',
  access_token_secret: 'b3GbdKPrFzgq2kHh6AZqEyiUMtxWgyX1j1nYnvzQzlqDl'
});

app.use(express.static('public'))

app.get('/search', function(req, res){
  var user = req.query.user;
  var params = {screen_name: user};

  client.get('statuses/user_timeline', params, function(error, tweets, response){
    if (!error) {
      var output = "";
      for(var t=0; t<tweets.length; t++){
        output += "<div>";
        output += "<h2>" + tweets[t].user.screen_name + "</h2>";
        output += "<p>" + tweets[t].text + "</p>";
        output += "</div>";
      }
      res.send(output);
    }
  });
  //res.send("hello world by express");
});

app.listen(8080);
