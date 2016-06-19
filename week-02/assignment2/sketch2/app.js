var x;
var y;
var num = 75;

function setup() {
	createCanvas(640, 480);
	background(200);
	noStroke();

	fill(255);
	x = 30;
	for(var i = 0; i < num/3; i++) {
		rect(x, 40, 10, 450);
		x +=20;
	}

	fill(0);
	y = 150;
	for(var i = 0; i < num; i++) {
		rect(100, y, 640, 1);
		y += 40;
	}

	fill(60);
	x = 10;
	y = 15;
	for(var i = 0; i < num/2; i++) {
		ellipse(x, y, 20, 20);
		y += 20;
		x += 25;
	}

}