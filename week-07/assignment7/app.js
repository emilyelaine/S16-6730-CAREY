
	function setup(){
		tree = loadImage('tree.png');
 		createCanvas(500, 500);
 		
	  	var seasonSpring = createButton('Spring Leaves');
	  	seasonSpring.mousePressed(resetSketch);

	  	var seasonFall = createButton('Fall Leaves')
	  	seasonFall.mousePressed(leavesFall);

	  	seasonFall.position(20, 40);
	  	seasonSpring.position(20, 20);

	}

	function draw() {
  		image(tree, 0, 0);
  		drawSprites();
	}

		function leavesFall(){

	  	    spr.velocity.y = random(0.2,4);
			spr.shapeColor = color('orange');
			spr1.velocity.y = random(0.2,4);
			spr1.shapeColor = color('orange');
			spr2.velocity.y = random(0.2,4);
			spr2.shapeColor = color('orange');
			spr3.velocity.y = random(0.2,4);
			spr3.shapeColor = color('orange');
			spr4.velocity.y = random(0.2,4);
			spr4.shapeColor = color('orange');
			spr5.velocity.y = random(0.2,4);
			spr5.shapeColor = color('orange');
			spr6.velocity.y = random(0.5,2);
			spr6.shapeColor = color('red');
			spr7.velocity.y = random(0.5,2);
			spr7.shapeColor = color('red');
			spr8.velocity.y = random(0.5,2);
			spr8.shapeColor = color('red');
			spr9.velocity.y = random(0.5,2);
			spr9.shapeColor = color('red');
			spr10.velocity.y = random(0.5,2);
			spr10.shapeColor = color('red');
 		}

 	function resetSketch() {
 		var r = random(120, 150);
  		var g = random(200, 255);
  		var b = random(100,150);
  		var c = color(r, g, b);


 		spr = createSprite(random(100,400), random(100,200), 10, 10);
  		spr1 = createSprite(random(100,400), random(100,200), 10, 10);
  		spr2 = createSprite(random(100,400), random(100,200), 10, 10);
  		spr3 = createSprite(random(100,400), random(100,200), 10, 10);
  		spr4 = createSprite(random(100,400), random(100,200), 10, 10);
  		spr5 = createSprite(random(100,400), random(100,200), 10, 10);
  		spr6 = createSprite(random(100,400), random(100,200), 10, 10);
  		spr7 = createSprite(random(100,400), random(100,200), 10, 10);
  		spr8 = createSprite(random(100,400), random(100,200), 10, 10);
  		spr9 = createSprite(random(100,400), random(100,200), 10, 10);
  		spr10 = createSprite(random(100,400), random(100,200), 10, 10);

	  	spr.shapeColor = color(c);
	  	spr1.shapeColor = color(c);
	  	spr2.shapeColor = color(c);
	  	spr3.shapeColor = color(c);
	  	spr4.shapeColor = color(c);
	  	spr5.shapeColor = color(c);
	  	spr6.shapeColor = color(c);
	  	spr7.shapeColor = color(c);
	  	spr8.shapeColor = color(c);
	  	spr9.shapeColor = color(c);
	  	spr10.shapeColor = color(c);

 	}
