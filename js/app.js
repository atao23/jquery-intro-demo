/* app.js
* main script file for our little application
* */

"use strict";

var tile = 'img/sec1.jpg'; //any kind of data can be here
var info = 'some other data';

var gameBoard = $('#game-board');

//create and configure a new <img> element...
var newTile = $(document.createElement('img'));

newTile.attr('src', 'img/background.jpg');
newTile.attr('alt', 'photo of nature');
newTile.attr('width', '250px');

//use the .data() method to associate extra data with HTML elements
newTile.data('assocTile', tile); //first param is a key
newTile.data('tileInfo', info); //second param is a value

//add to the board
gameBoard.append(newTile);

//when an image in game-board is clicked
$('#game-board img').click(function() {
	//rememeber that 'this' refers to the DOM element that is raised the event
	//wrapped in jQuery $() to get more fuctionality 
	var clickedImage = $(this);
	var tileData1 = clickedImage.data('assocTile');
	var tileData2 = clickedImage.data('tileInfo');

	clickedImage.attr('src', tileData1);
	clickedImage.attr('alt', tileData2);

	console.log(tileData1);
	console.log(tileData2);
});

//iterate over array, calling passed function for each element
//also works with objects

var array = ['a', 'b', 'c', 'd'];

_.forEach(array, function(element, index) {
	console.log(element);
	console.log(index);

});

//set operations
_.difference(array, ['c', 'd']);
var unionArray = _.union(array, ['e','f']);
_.intersection(array, ['b', 'c']);

//filtering
//new array of numbers
var numArray = [1,2,3,4,5,6,7];
//show me the even values of the array
var evens = _.filter(numArray, function(num) {return 0 == num % 2;});
console.log(evens);

//shuffle() returns a new shuffled array,
//leaving the original array intact
var shuffledArray = _.shuffle(numArray);
console.log(shuffledArray);
console.log(numArray);
console.log(array);
console.log(unionArray);

/*
 _________  _                      _  
|  _   _  |(_)                    | | 
|_/ | | \_|__   _ .--..--.  .---. | | 
    | |   [  | [ `.-. .-. |/ /__\\| | 
   _| |_   | |  | | | | | || \__.,|_| 
  |_____| [___][___||__||__]'.__.'(_) 
                                                                       
*/


var startTime = _.now();
console.log(startTime);

var timer; //hold our timer value

//use window.setInterval to create a timer that runs a function every second 
timer = window.setInterval(onTimer, 100);

function onTimer() {
	//compare _.now() to start time to get elapsed time
	//Math.floor() rounds down to the nearest integer 
	var elapsedSeconds = Math.floor((_.now() - startTime) / 100); 
	console.log(elapsedSeconds);
	$('#game-board h2').css("font-size", elapsedSeconds + 'px');
}

function stopTimer() {
	window.clearInterval(timer);
	$('#game-board').empty();
}

$('.jumbotron').click(stopTimer);


/* NOTES FROM TUESDAY: INTRO TO JQUERY 

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

*/
