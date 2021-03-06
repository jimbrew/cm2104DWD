$(function(){
  //document documentReady
  alert("document ready");

  $('#searchform').submit(function(){
    // get current value and add to list
    var searchterms = $("#searchterms").val();
    // call our search
    getResultsFromOMDB(searchterms);
    return false;
  });
});

function getResultsFromOMDB(searchterms){
  // call API
  // build url for the request
  var url = "https://www.omdbapi.com/?apikey=67c527e7&s=" + searchterms;
  // use jquery json shortcut
  $.getJSON(url, function(jsondata) {
    // handle the results
    addResultTitles(jsondata);
    console.log("hi " + url);
  });
}

function addResultTitles(jsondata){
  // create string to contain our HTML code to inject
  var htmlstring = "";
  // iterate throguh the collection
  for(var i=0; i<10; i++){
    var title = jsondata.Search[i].Title;
    var year = jsondata.Search[i].Year;
    var type = jsondata.Search[i].Type;
    var img = jsondata.Search[i].Poster;
    var imdb = "http://www.imdb.com/title/" + jsondata.Search[i].imdbID;
    htmlstring += "<li>" + title + "/" + year + "/" + type + "/" +
    "<a href=" + imdb + ">IMDB Page</a></li>";
    htmlstring += "<li>" + title + "/" + year + "/" + type + "/" + "<a href=" + imdb + ">IMDB Page</a></li>";
    htmlstring += "<img src=" + img + " />";
  }
  // inject html into the empty list
  $("#results").html(htmlstring);
}
