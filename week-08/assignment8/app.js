var bee, pSlider;

function setup() {
	createCanvas(640, 240);

	bee = createVideo(['bee.mp4', 'bee.webm'])

	bee.loop();
	bee.hide();
	noStroke();
	frameRate(60);
}

function draw() {

	image(bee, 0, 0, 320, 240)
	filter('INVERT')
	image(bee, 321, 0, 320, 240)

}

