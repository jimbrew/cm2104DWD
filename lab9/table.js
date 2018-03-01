// JavaScript Document

$(function(){

  $("tr:odd").css({"background-color": "lightgrey"});

  $("tr").hover(function(){
		$(this).css({"background-color": "lightpink"});
	});

	$("tr:odd").mouseleave(function(){
		$(this).css({"background-color": "lightgrey"});
	});

  $("tr:even").mouseleave(function(){
    $(this).css({"background-color": "white"});
  });

});
