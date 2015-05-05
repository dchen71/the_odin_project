//Javascript containing the code to create divs, change color on hover, and number of div boxes

/*
on ready - create container div
start off with 3x3 grid
on hover - change background color
button - has prompt/resets and creates divs
 */

//Initializes the grid numbers
var row = 3;
var col = 3;

//Creates the container div
//May have to create div and then do create class for container
$(document).ready(function(){
	$(body).append("<div class='container'></div>");
});

//Creates the initial set of 3x3 boxes
$(document).ready(function(){
	for (var i = 0; i <= row; i++) {
		for (var i = 0; i <= col; i++) {
			$(.container).append("<div></div>");
		};
	};
});

