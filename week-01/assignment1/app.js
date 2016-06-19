function setup() {
	createCanvas(640, 480);
}

//create a randomly colored circle when the mouse is moved
function mouseMoved() {
	var r = random(5);
	var g = random(100,255);
	var b = random(100,255);
	var c = color(r, g, b);

	ellipse(mouseX, mouseY, 40, 40);
	fill(c); 
	return false;
}