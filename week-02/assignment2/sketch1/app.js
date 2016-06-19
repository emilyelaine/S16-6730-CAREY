var h = 10;
var w = 10;

function setup() {
	createCanvas(640, 480);
	frameRate(30);
}

function draw () {
	background(0);
	h = h + 1;
	w = w +1;
	if(h < height) {
		h = h + 1;
		w = w + 1;
	}
	ellipse(width/2, height/2, w, h);
	if(h > height) {
		h = 10;
		w = 10;
	}
	ellipse(width/2, height/2, w, h);
}
