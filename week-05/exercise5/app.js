var mySound;

function preload() {
	mySound = loadSound('sound.wav');
}

function setup() {
	createCanvas(200, 200);
	amplitude = new p5.Amplitude();
	mySound.stop();
}

function mouseClicked() {
	mySound.play();
}

function draw() {
	background(0);
  	fill(255);
  	var level = amplitude.getLevel();
 	var size = map(level, 0, 1, 0, 400);
 	ellipse(width/2, height/2, size, size);
}