var pattern = 0;

function setup() {
	createCanvas(500,500);
	frameRate(1);
}

function draw(){
	var r = random(100, 255);
	var g = random(100, 255);
	var b = random(100,255);
	var c = color(r, g, b);

	//reset the drawing after each rotation
	clear();

	//draw 40 lines stemming from the center of the sketch when mouse is clicked
	for(pattern = 0; pattern < 40; pattern++){
		if(pattern < 40) {
			stroke(c);
			line(width/2, height/2, random(50,450), random(50,450))

		}
	}
}
