var img;
var redness;

function preload() {
	img = loadImage('flower.jpg')
}

function setup() {
	createCanvas(500,500)
	img.loadPixels();
}

function draw() {

	var change = map(mouseX, 0, width, 0, 255)
	change = Math.abs(change)
	change = Math.floor(change)


	for(i = 0; i <= img.pixels.length; i = i + 4) {

		redness = img.pixels[i];

		if(redness >= 100) {
			img.pixels[i+2] = img.pixels[i - change * 30]
		}
	}

	img.updatePixels();

	image(img, 0, 0, 500, 500)
}
