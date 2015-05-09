//Javascript containing the code to create boxes, change color on hover, and number of boxes
//Version upgrades:
//random color on hohver/10% opacity change on hover

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
	$('.container').append("<button>Reset</button>");


	//Creates the initial set of 3x3 boxes via tables
	$('.container').append("<table></table>")
	for (var i = 0; i < row; i++) {
		var trid = "<tr id=tr" + i + "></tr>";
		$('table').append(trid);
		for (var j = 0; j < col; j++) {
			$('#tr' + i).append("<td></td>"); i
		};
	};	

	//Styles the table into boxes
	$('table').css('padding', '40px');
	$('table').css('width', '300px');
	$('table').css('height', '300px');
	$('table').css('margin-top', '30px');
	$('table').css('margin-right', 'auto');
	$('table').css('margin-left', 'auto');
	$('table').css('border-collapse', 'collapse');
	$('td').css('border-style', 'solid');
	$('td').css('width','20px');
	$('td').css('height','20px');

	//Style/position button
	$('button').css('position','relative');
	$('button').css('left','50%');
	$('button').css('border', '1px solid #DBDBDB');

	//On hover, changes the color of that td
	$('td').hover(function(){
		$(this).css('background-color','yellow');
	});
});

//Button handler to take/set new array size
$(function(){
	$('button').click(function(event){
		var size = prompt("Please enter new size");
		row = size;
		col = size;
		rebuild();
	});
});

function rebuild(){
	//Removes the old table
	$('table').remove();
	
	//Creates the the boxes via tables
	$('.container').append("<table></table>")
	for (var i = 0; i < row; i++) {
		var trid = "<tr id=tr" + i + "></tr>";
		$('table').append(trid);
		for (var j = 0; j < col; j++) {
			$('#tr' + i).append("<td></td>"); 
		};
	};	

	//Styles the table into boxes
	$('table').css('padding', '40px');
	$('table').css('width', '300px');
	$('table').css('height', '300px');
	$('table').css('margin-top', '30px');
	$('table').css('margin-right', 'auto');
	$('table').css('margin-left', 'auto');
	$('table').css('border-collapse', 'collapse');
	$('td').css('border-style', 'solid');
	$('td').css('width','20px');
	$('td').css('height','20px');
	$('td').css('margin-right', '30px');

	$('td').hover(function(){
		$(this).css('background-color','yellow');
	});
}