var freestyle, volSlider, speedSlider;


function preload() {
	song = loadSound('song.wav');
}

function setup() {

  	createCanvas(720, 400);
  	textSize(20);
  	song.loop();

  	amplitude = new p5.Amplitude();

  	volSlider = createSlider(0, 1, 1, 0.01);
  	volSlider.position(20, 20);

  	speedSlider = createSlider(0.1, 3, 1, 0.01);
  	speedSlider.position(20, 50);
}  

 function draw() {
 	background(255);
 	
 	var v = volSlider.value();
 	var s = speedSlider.value();
 	song.setVolume(v);
 	song.rate(s);
 	text('Volume', 160, 30);
 	text('Speed', 160, 60);

 	var level = amplitude.getLevel();

	ellipse(140, 350, 500, level*550);
	ellipse(230, 150, 800, level*975);
 	ellipse(20, 300, level*600, 600);
 	ellipse(460, 210, 800, level*900);
 	ellipse(570, 275, level*1000, 1050);
 	fill('rgba(110, 64, 115, 0.4)');
 
}

