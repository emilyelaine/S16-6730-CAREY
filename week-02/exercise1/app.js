var row = 20;

function setup() {
  	createCanvas(640,480);
  	background('#32DDD5');

	for(x = 0; x <= width; x += row) {
		for(y = 0; y <= height; y += row){
			//if the position of x is divisible by 40 then the triangle will be smaller
			if(x % 40 === 0) {
				triangle(x + 3, y + 15, x + 8, y + 3, x + 13, y + 15);
			}
			//if the position of x is not divisible by 40 then the triangle will be larger
			else {
				triangle(x + 1, y + 18, x + 10, y + 1, x + 19, y + 18);
			}
		}
	}
}


