
function addContent () {
	// add a list of items to the content div
	var items = ["hewey", "dewey", "louie"];

	// build the html string for a <ul> list
	var items_html = "<div>";
	for (var i=0; i < items.length; i++) {
		item = items[i];
		items_html += "<p>" + item + "</p>";
	};
	items_html += "</div>";

	// using javascript
	// 1. find the content div
	// 2. modify its html attribute by adding items_html
	var list = document.getElementById("content");
	list.innerHTML = items_html;

	}
