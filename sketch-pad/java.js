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


//$(document).ready(function() {}) = $(function(){})
/*
Makes div via plain javascript
var div = document.createElement("div");
var element = document.getElementByID("body");
element.appendChild(div);
 */
//Makes the 3x3 grid in the beginning
$(function(){
	//Creates the main container div
	$('body').append("<div></div>");
	$('div').addClass("container");
	console.log("phase1");

	//Creates the initial set of 3x3 boxes via tables
	$('.container').append("<table></table>")
	for (var i = 0; i < row; i++) {
		console.log("i" + i);
		$('table').append("<tr id='tri'></tr>");//figure out how to make it tr + i
		for (var j = 0; j < col; j++) {
			$('#tri').append("<td></td>"); // figure out how to make it tr + i
			console.log(j);
		};
	};	

	//Styles the table into boxes
	$('table').css('padding', '20px');
	$('table').css('border-spacing', '20px');
	$('tr td').css('border-style', 'solid');
	$('tr td').css('width', '30px');
	$('tr td').css('height', '30px');
	$('tr td').css('margin-right', '30px');
});





console.log('css');
