

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
	my_hill2.src='images/3.jpg';
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
	my_a.src='images/nycfilmbad4.jpg';
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

var counter = 0;

window.onload = function(){

	


	// window.addEventListener("click", function(){
	// 	if(counter == 0) {
	// 		slidee.style.opacity = 1;
	// 	} else if( counter == 1) {
	// 		//do another thing here
	// 	} else if (counter == 2) {
	// 		//another event
	// 	} else if (counter > 2) {
	// 		counter = 0;
	// 	}

	// 	counter = counter + 1;
	// });

	

    // This is the fade 
	setTimeout(function(){
		document.getElementById("first").style.opacity = 1;
	}, 7000);//time in milliseconds (this is one second)

	setTimeout(function(){
		document.getElementById("second").style.opacity = 1;
	}, 7100);//time in milliseconds (this is two second)

	setTimeout(function(){
		document.getElementById("third").style.opacity=1;
	}, 7200);//time in milliseconds (this is three second)

	setTimeout(function(){
		document.getElementById("fourth").style.opacity=1;
	}, 7000);//time in milliseconds (this is three second)

	setTimeout(function(){
		document.getElementById("fifth").style.opacity=1;
	}, 7100);//time in milliseconds (this is three second)

	setTimeout(function(){
		document.getElementById("sixth").style.opacity=1;
	}, 7200);//time in milliseconds (this is three second)

	setTimeout(function(){
		document.getElementById("seventh").style.opacity=1;
	}, 7000);//time in milliseconds (this is three second)

	setTimeout(function(){
		document.getElementById("eighth").style.opacity=1;
	}, 7100);//time in milliseconds (this is three second)

	setTimeout(function(){
		document.getElementById("ninth").style.opacity=1;
	}, 7200);//time in milliseconds 



// Film signs going in

setTimeout(function(){
		document.getElementById("filmsign1").style.opacity=1;
	}, 20000);//time in milliseconds (this is three second)
setTimeout(function(){
		document.getElementById("filmsign2").style.opacity=1;
	}, 20100);//time in milliseconds (this is three second)
setTimeout(function(){
		document.getElementById("filmsign3").style.opacity=1;
	}, 20200);//time in milliseconds (this is three second)
setTimeout(function(){
		document.getElementById("filmsign4").style.opacity=1;
	}, 20300);//time in milliseconds (this is three second)
setTimeout(function(){
		document.getElementById("filmsign5").style.opacity=1;
	}, 20000);//time in milliseconds (this is three second)
setTimeout(function(){
		document.getElementById("filmsign6").style.opacity=1;
	}, 20100);//time in milliseconds (this is three second)
setTimeout(function(){
		document.getElementById("filmsign7").style.opacity=1;
	}, 20200);//time in milliseconds (this is three second)
setTimeout(function(){
		document.getElementById("filmsign8").style.opacity=1;
	}, 20300);//time in milliseconds (this is three second)

// Film signs going out

setTimeout(function(){
		document.getElementById("filmsign1").style.opacity=0;
	}, 30000);//time in milliseconds (this is three second)
setTimeout(function(){
		document.getElementById("filmsign2").style.opacity=0;
	}, 30025);//time in milliseconds (this is three second)
setTimeout(function(){
		document.getElementById("filmsign3").style.opacity=0;
	}, 30050);//time in milliseconds (this is three second)
setTimeout(function(){
		document.getElementById("filmsign4").style.opacity=0;
	}, 30075);//time in milliseconds (this is three second)
setTimeout(function(){
		document.getElementById("filmsign5").style.opacity=0;
	}, 30100);//time in milliseconds (this is three second)
setTimeout(function(){
		document.getElementById("filmsign6").style.opacity=0;
	}, 30125);//time in milliseconds (this is three second)
setTimeout(function(){
		document.getElementById("filmsign7").style.opacity=0;
	}, 30150);//time in milliseconds (this is three second)
setTimeout(function(){
		document.getElementById("filmsign8").style.opacity=0;
	}, 30175);//time in milliseconds (this is three second)
}


// Fire pictures going in
setTimeout(function(){
		document.getElementById("smoke1").style.opacity=1;}, 40000);
setTimeout(function(){
		document.getElementById("smoke2").style.opacity=1;}, 40100);
setTimeout(function(){
		document.getElementById("smoke3").style.opacity=1;}, 40200);
setTimeout(function(){
		document.getElementById("smoke4").style.opacity=1;}, 40300);		
setTimeout(function(){
	    document.getElementById("smoke6").style.opacity=1;}, 40100);
setTimeout(function(){
		document.getElementById("smoke7").style.opacity=1;}, 40200);
setTimeout(function(){
		document.getElementById("smoke8").style.opacity=1;}, 40300);

// Fire pictures going out

setTimeout(function(){
		document.getElementById("smoke1").style.opacity=0;}, 50000);
setTimeout(function(){
		document.getElementById("smoke2").style.opacity=0;}, 50025);
setTimeout(function(){
		document.getElementById("smoke3").style.opacity=0;}, 50050);
setTimeout(function(){
		document.getElementById("smoke4").style.opacity=0;}, 50075);
setTimeout(function(){
		document.getElementById("smoke6").style.opacity=0;}, 50125);
setTimeout(function(){
		document.getElementById("smoke7").style.opacity=0;}, 50150);
setTimeout(function(){
		document.getElementById("smoke8").style.opacity=0;}, 50175); 



