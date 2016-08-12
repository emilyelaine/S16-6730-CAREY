var slider, ellipsePosition, val;
var c, r, x;
var colorFill;

function setup() {
  	slider = createSlider(0, 255, 0);
  	slider.position(10, 20);
  	slider.style('width', '100px');

  	createCanvas(640, 480);
}

function stars() {
  r = random(4);
  ellipsePosition = map(val, 0, 255, 0, width-50);

  if(ellipsePosition < width){
    for(var p = 0; p < 300; p = p + 1){
      colorFill = 255;
      fill(colorFill);
      ellipse(random(640), random(480), 2, 2);

      ellipse(ellipsePosition, height/2, 100, 100);
    }
  }

}

function moonSun() {
    var ellipsePosition = map(val, 0, 255, 0, width-50);
    var ellipseOpacity = map(val, 0, 255, 0, 1);
    var colorFill = color('hsla(53, 89%, 55%, ' + ellipseOpacity + ')');
    
    background(val);
    ellipse(ellipsePosition, height/2, 100, 100);
    noStroke();
    fill(colorFill);

}

function draw() {
  val = slider.value();
  background(val);

  if(val < 128){
    stars();
  }

  if(val > 128){
    moonSun();
  }
  	
}



