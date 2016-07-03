
function setup() {

	createCanvas(640, 200);
	background(230);
}

function draw() {
	drawMonth();
	drawHour();
	drawMinute();
	drawSecond();
}

function drawMonth() {
	var m = month();
	var d = day();
	var y = year();
	fill('black');
	text('date: '+m +' - ' +d +' - ' +y, 5, 40);
}


function drawHour() {
	var h = hour();

		fill('green');
		noStroke();
		rect(5,70, (635/24)*h, 20);
}

function drawMinute() {
	var mn = minute();
	fill('purple');
	rect(5,100, (635/60)*mn, 20);
	noStroke();
}

function drawSecond() {
	var s = second();
	var r = random(255);
	var g = random(255);
	var b = random(255);
	var c = color(r, g, b);
	frameRate(1);

	if(s > 0) {
		fill(c);
		rect(5,130, (635/60)*s, 20);
		noStroke();
	}
}