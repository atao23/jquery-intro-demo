/* app.js
* main script file for our little application
* */

"use strict";

//selects all navigation links
var allNavLinks = $('nav a');

//selects all imgs
var allImgs = $('img');

var allSections = $('section');

function onReady() {

	//animations!!
	$('nav').slideUp(3000);
	$('nav').slideDown(3000);
	allSections.hide();

	//add attribute of target with value blank to each nav link
	//allNavLinks.attr('target', '_blank');
	//allNavLinks.addClass('awesomesauce');
}

$('#exit-button').click(function() {
	$('#confirm-exit-modal').modal();
});

$('#confirm-exit-button').click(function() {
	window.location.href = 'http://courses.washington.edu/info343/morris';
});

allImgs.dblclick(function() {
	//console.log($(this));
	$(this).addClass('awesomesauce');

});

allImgs.mouseout(function() {
	$(this).removeClass('awesomesauce');

});

allNavLinks.click(function() {
	//the plain versin of this...its okay.
	console.log(this);

	//the coolor jQuery this - it's totally money. 
	console.log($(this).attr('href')); //give me this back as a jQuery object

	//$(this).addClass('awesomesauce'); 

	//fades in each specific section depending on what you press in nav bar
	$($(this).attr('href')).fadeToggle(6000).addClass('awesomesauce'); //fadeIn
});

$(onReady);
