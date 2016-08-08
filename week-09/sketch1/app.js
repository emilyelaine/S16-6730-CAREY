var x = 0;
var r;


function setup(){
	createCanvas(640, 480);
	frameRate(60);
}

function draw(){
	x = x + 1;
	r = random(4);

	background(0)

	ellipse(x, height/2, 50, 50);
	fill(255);
	noStroke();

	if(x < height/2 +50){
		for(var p = 0; p < 300; p = p + 1){
			ellipse(random(640), random(480), r, r);
		}
	}

	if(x > height/2 + 50){
		fill('orange')
	}

	if(x > width){
		x = 0;
	}
}