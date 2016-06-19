
function setup() {
	createCanvas(640, 480);
	frameRate(30);
	background(255);
}

function mouseMoved() {
	var x = random(640);
	var y = random(100,400);
	var x2 = random(640);
	var y2 = random(200,300);

	for(var i = 0; i < 100; i++) {
		line(x, y, x2, y2);		
	}
}