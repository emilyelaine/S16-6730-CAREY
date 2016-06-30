function setup() {

	createCanvas(640, 480);
}

var drawSquare = function draw() {
		var x = random(590)
		var y = random(430)

		rect(x, y, 50, 50);
}

setInterval(function() {
	
	drawSquare();

}, 1000);
