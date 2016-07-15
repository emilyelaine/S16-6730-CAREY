var pos;

function setup(){
	createCanvas(500,500)
	angleMode(DEGREES)
	pos = 0.0
	inc = 2.0

}

function draw(){

	clear()

	translate(width/2, height/2);

	var mySinVal = sin(pos)
	amplified = mySinVal * 150
	amplified2 = mySinVal * 40

	for (x = 0; x <= 360; x = x + 5) {
		//curve(20, amplified, 40, amplified, 0, 20, 10, 50)
		//line(amplified, 60, 80, amplified2)
		//point(50, amplified)
		//point(amplified2, 30)
		quad(0, 40, 0, amplified, 35, amplified2, 10, 65)
		rotate(x)
	}

	pos = pos + inc
	
}