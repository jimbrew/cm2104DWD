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
    printJSON(jsondata);
  });
}

function printJSON(jsondata){
  // prints the JSON to the screen
  var normal = JSON.stringify(jsondata);
  $('#resultsbox').append("<p>" + normal + "</p>");
}
