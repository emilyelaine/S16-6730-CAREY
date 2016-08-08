var circle;
var currentImg;
var direction = 90;


function setup() {
	createCanvas(640, 480);
	currentImg = loadImage('sun.png')

	circle = createSprite(450, 250, 300, 300);
	circle.addAnimation('floating', currentImg)
 }

function draw() {
	background(255);

	direction += 0.8;
	circle.setSpeed(2, direction);

	drawSprites();

	if(circle.position.y > height/2){
		currentImg = loadImage('moon.png')
		circle.addAnimation('floating', currentImg)
		console.log('moon')
	}

	if(circle.position.y < height/2){
		currentImg = loadImage('sun.png')
		circle.addAnimation('floating', currentImg)
		console.log('sun')
	}
}