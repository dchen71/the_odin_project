//Javascript containing the code to create boxes, change color on hover, and number of boxes

//Initializes the grid numbers
var row = 3;
var col = 3;

//Notes
//$(document).ready(function() {}) = $(function(){})
/*
Makes div via plain javascript
var div = document.createElement("div");
var element = document.getElementByID("body");
element.appendChild(div);
 */

//Makes the 3x3 grid in the beginning
//Could probably just make this a function
$(function(){
	//Creates the main container div
	$('body').append("<div></div>");
	$('div').addClass("container");
	$('.container').css('width', '350px');
	$('.container').css('height', '350px');

	//Creates button
	$('.container').append("<form method=get></form>");
	$('form').append("<button type=submit value=Submit>Reset</button>");

	//Creates the initial set of 3x3 boxes via tables
	$('.container').append("<table></table>")
	for (var i = 0; i < row; i++) {
		var trid = "<tr id=tr" + i + "></tr>";
		$('table').append(trid);//figure out how to make it tr + i
		for (var j = 0; j < col; j++) {
			$('#tr' + i).append("<td></td>"); // figure out how to make it tr + i
		};
	};	

	//Styles the table into boxes
	$('table').css('padding', '20px');
	$('table').css('border-spacing', '20px');
	$('table').css('width', '300px');
	$('table').css('height', '300px');
	$('table').css('margin-right', 'auto');
	$('table').css('margin-left', 'auto');
	$('td').css('border-style', 'solid');
	$('td').css('width','5%');
	$('td').css('height','5%');
	$('td').css('margin-right', '30px');

	//Style/position button
	$('form').css('margin-left','auto');
	$('form').css('margin-right','auto');
	$('form').css('width','18%');
	$('button').css('border', '1px solid #DBDBDB');
});

//On hover, changes the color of that td
$('td').hover(function(){
	$(this).css('background-color','yellow');
	console.log("colors");
});

//Button handler to take/set new array size
$(function(){
	$('button').button().click(function(event){
		var size = prompt("Please enter new size");
		row = size;
		col = size;
		rebuild();
	});
});


function rebuild(){
	//Removes the old table
	$('.container').remove('table');

	//Creates the the boxes via tables
	$('.container').append("<table></table>")
	for (var i = 0; i < row; i++) {
		var trid = "<tr id=tr" + i + "></tr>";
		$('table').append(trid);//figure out how to make it tr + i
		for (var j = 0; j < col; j++) {
			$('#tr' + i).append("<td></td>"); // figure out how to make it tr + i
		};
	};	

	//Styles the table into boxes
	$('table').css('padding', '20px');
	$('table').css('border-spacing', '20px');
	$('table').css('width', '300px');
	$('table').css('height', '300px');
	$('td').css('border-style', 'solid');
	$('td').css('width','5%');
	$('td').css('height','5%');
	$('td').css('margin-right', '30px');
}