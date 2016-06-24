
var started = 0;
var myDiv;

function setup() {
  	createCanvas(640, 480);
	background(255);
	myDiv = createDiv("Memories.");
	myDiv.style('fontSize', '400%');
	myDiv.style('color', 'black');
	myDiv.style('fontFamily', 'Helvetica, Arial, sans-serif')
	myDiv.position(150, 200);
	frameRate(.30);
}

function draw() {

	if(started == 0) {
		myDiv.style('transition', 'color 3s ease');
		myDiv.style('color', 'white');
		started = 1;
		console.log('change to nothing.');
	}
	else {
		started = 0;
		myDiv.style('color', 'black');
	}

}
