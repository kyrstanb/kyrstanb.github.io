
var myImages = ["images/sun.jpg", "images/6.jpg", 
"images/11.jpg", "images/red.jpg"]
var counter = 0;

// //this is for continuous loops of the array
// function rolloverContinuous(element){
// 	if(counter > myImages.length) {
// 		counter = 0;
// 	}

// 	element.src = myImages[counter];
// 	counter = counter + 1;
// }

//this is for ~random~ images
function rolloverRandom(element){
	var randInt = Math.floor(Math.random() * myImages.length)
	element.src = myImages[counter];
}


function rolloverFirst(my_bridge)
{
	my_bridge.src = 'images/sun.jpg';
	// element.setAttribute('width', 40%)
	// element.setAttribute('height', 300px);
}

function mouseawayFirst(my_bridge)
{
	my_bridge.src ="images/bridge.jpg";
	// element.setAttribute('width', 40%)
	// element.setAttribute('height', 300px);
}

function rolloverSecond(my_water)
{
	my_water.src='images/6.jpg';
}

function mouseawaySecond(my_water)
{
	my_water.src='images/water.jpg';
}

function rolloverThird(my_hill)
{
	my_hill.src='images/11.jpg';
}

function mouseawayThird(my_hill)
{
	my_hill.src='images/taco.JPG';
}

function rolloverFourth(my_hill2)
{
	my_hill2.src='images/1.jpg';
}

function mouseawayFourth(my_hill2)
{
	my_hill2.src='images/hill.jpg';
}

function rolloverFifth(my_beach)
{
	my_beach.src='images/red.jpg';
}

function mouseawayFifth(my_beach)
{
	my_beach.src='images/k1.jpg';
}
function rolloverSixth(my_a)
{
	my_a.src='images/nycfilmbad1.jpg';
}

function mouseawaySixth(my_a)
{
	my_a.src='images/nycfilm21.jpeg';
}
function rolloverSeventh(my_b)
{
	my_b.src='images/12.jpg';
}

function mouseawaySeventh(my_b)
{
	my_b.src='images/road.jpg';
}
function rolloverEighth(my_c)
{
	my_c.src='images/nycfilmbad1.jpg';
	
}

function mouseawayEighth(my_c)
{
	my_c.src='images/nycfilm23.jpg';
}

function rolloverNinth(my_d)
{
	my_d.src='images/nycfilmbad3.jpg';
	
}

function mouseawayNinth(my_d)
{
	my_d.src='images/nycfilm18.jpg';
}

window.onload = function(){

	var slidee = document.getElementById ("slide");

	window.addEventListener("click", function(){
		slidee.style.opacity = 1;
	})
}