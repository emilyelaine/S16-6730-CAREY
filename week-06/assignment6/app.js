var spr, spr1, sp2, spr3, spr4, spr5;


function setup() {
	tree = loadImage('tree.png');
 	createCanvas(500, 500);

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

  	spr.shapeColor = color('green');
  	spr1.shapeColor = color('green');
  	spr2.shapeColor = color('green');
  	spr3.shapeColor = color('green');
  	spr4.shapeColor = color('green');
  	spr5.shapeColor = color('green');
  	spr6.shapeColor = color('green');
  	spr7.shapeColor = color('green');
  	spr8.shapeColor = color('green');
  	spr9.shapeColor = color('green');
  	spr10.shapeColor = color('green');
}

function draw() {
  image(tree, 0, 0);

  drawSprites();
}

function mousePressed() {

  spr.velocity.y = random(0.5, 2);
  spr.shapeColor = color('orange');
  spr1.velocity.y = random(0.5, 2);
  spr1.shapeColor = color('orange');
  spr2.velocity.y = random(0.5, 2);
  spr2.shapeColor = color('orange');
  spr3.velocity.y = random(0.5, 2);
  spr3.shapeColor = color('orange');
  spr4.velocity.y = random(0.5, 2);
  spr4.shapeColor = color('orange');
  spr5.velocity.y = random(0.5, 2);
  spr5.shapeColor = color('orange');
  spr6.velocity.y = random(0.5, 2);
  spr6.shapeColor = color('red');
  spr7.velocity.y = random(0.5, 2);
  spr7.shapeColor = color('red');
  spr8.velocity.y = random(0.5, 2);
  spr8.shapeColor = color('red');
  spr9.velocity.y = random(0.5, 2);
  spr9.shapeColor = color('red');
  spr10.velocity.y = random(0.5, 2);
  spr10.shapeColor = color('red');
}